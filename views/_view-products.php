<!-- Product Page -->
<main class="products-container">
  <div class="product">
    <aside class="product-pic">
      <img src="assets/uploads/<?php echo $product['image'] ?>" class="img"></img>
    </aside>
    <article class="product-details">
      <!-- Breadcrumbs -->
      <ul class="breadcrumbs">
        <li>
          <a href="index.php">
            <span class="name">Home</span>
            <i class="fa-solid fa-angle-right seperator"></i>
          </a>
        </li>
        <li>
          <a href="shop.php">
            <span class="name">Shop</span>
            <i class="fa-solid fa-angle-right seperator"></i>
          </a>
        </li>
        <li>
          <a href="view-products.php?product=<?php echo $product['name'] ?>" class="active">
            <span class="name"><?php echo $product['name'] ?></span>
          </a>
        </li>
      </ul>
      <!-- Product Details -->
      <div class="details">
        <?php 
          $product_id = $product['id'];
          $products = getProdById("bill", $product_id);
          $item_sold = 0;
          foreach($products as $item) {
            $item_sold += 1;
          }
          ?>
        <h2 class="product-title">
          <?php echo $product['name'] ?>
        </h2>
        <div class="group">
          <?php
          $product_id = $product['id'];
          $reviews = getProdById("review", $product_id);
          if (mysqli_num_rows($reviews) > 0) {
            $total_reviews = 0;
            $total = 0;
            foreach ($reviews as $item) {
              $total_reviews += 1;
              $total += intval($item['rating']);
            }
            $average = $total / $total_reviews;
          ?>
            <div class="rating">
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <h4 class="value"><?php echo round($average, 2) ?></h4>
            </div>
            <h4 class="reviews"><?php echo $total_reviews ?> Reviews</h4>
            <h4 class="sold"><?php echo $item_sold ?> Sold</h4>
          <?php
          } else {
          ?>
            <div class="rating">
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <h4 class="value">5.0</h4>
            </div>
            <h4 class="reviews">No Reviews</h4>
            <h4 class="sold"><?php echo $item_sold ?> Sold</h4>
          <?php
          }
          ?>
        </div>
        <div class="price">
          <?php
          $res = checkDiscountProduct('discount_product', $product['id']);
          if (isset($res)) {
            $product_discount = mysqli_fetch_assoc($res);
            if ($product_discount != null) {
              $discount = intval($product_discount['discount']);
              $price = $product['price'] * ($discount / 100);
              if (mysqli_num_rows($res) > 0) {
          ?>
                <div class="discount"><?php echo $discount . "% off" ?></div>
                <span class="original-price" style="text-decoration:line-through;">$<?php echo $product['price'] ?></span>
                <span>$<?php echo $price ?></span>
              <?php
              } else {
              ?>
                <div class="discount">no discount</div>
                <span>$<?php echo $product['price'] ?></span>
              <?php
              }
            } else {
              ?>
              <div class="discount">no discount</div>
              <span>$<?php echo $product['price'] ?></span>
            <?php
            }
          } else {
            ?>
            <div class="discount">no discount</div>
            <span>$<?php echo $product['price'] ?></span>
          <?php
          }
          ?>
        </div>
        <hr>
      </div>
      <div class="bottom-details">
        <!-- Product Options -->
        <div class="product-options">
          <div class="row-col">
            <span class="title">Sizes Available</span>
            <div class="group">
              <?php
              $product_result = getProdByName('product', $product_name);
              $product = mysqli_fetch_assoc($product_result);
              $product_sizes = explode(',', $product['sizes']);
              foreach ($product_sizes as $item) {
              ?>
                <span class="icon"><?php echo $item; ?></span>
              <?php
              }
              ?>
            </div>
          </div>
          <div class="row-col color">
            <span class="title">Colors Available</span>
            <div class="group">
              <?php
              $product_result = getProdByName('product', $product_name);
              $product = mysqli_fetch_assoc($product_result);
              $product_colors = explode(',', $product['colors']);
              foreach ($product_colors as $item) {
                $lower_case_item = strtolower($item);
              ?>
                <span class="icon <?php echo $lower_case_item ?>"></span>
              <?php
              }
              ?>
            </div>
          </div>
        </div>

        <!-- Product Description -->
        <div class="description">
          <h3>Description</h3>
          <p><?php echo $product['description'] ?></p>
        </div>

        <!-- Product Extra Details -->
        <div class="extra-details">
          <div class="content-col">
            <div class="icon">
              <i class="fa-regular fa-credit-card"></i>
            </div>
            <h3>Secure Payment</h3>
          </div>
          <div class="content-col">
            <div class="icon">
              <i class="fa-solid fa-truck"></i>
            </div>
            <h3>Free Shipping</h3>
          </div>
          <div class="content-col">
            <div class="icon">
              <i class="fa-solid fa-tags"></i>
            </div>
            <h3>Size & Fit</h3>
          </div>
        </div>

        <!-- Product Actions -->
        <div class="actions">
          <button id="buy-btn">Buy Now</button>
        </div>
      </div>
    </article>
  </div>
</main>

<!-- Rating System -->
<div class="product-rating">
  <div class="title-group">
    <div class="title">Product Reviews</div>
    <div class="horizontal-line"></div>
  </div>
  <div class="rating-header">
    <?php
      if(isset($_SESSION['member_id'])) {
        $res = getBillByMemberAndId('bill', $product['id'], $_SESSION['member_id']);
        $bill = mysqli_fetch_array($res);
        if (isset($bill)) {
    ?>
      <button class="sub-header" id="rating-btn">Write a Review</button>
    <?php
      } else {
    ?>
      <span class="error-stmt"> Purchase product before rating. </span>
    <?php
      }
    } else {
    ?>
      <span class="error-stmt"> Login first as member to rate. </span>
    <?php
    }
    ?>
    <?php
    $product_id = $product['id'];
    $reviews = getProdById("review", $product_id);
    if (mysqli_num_rows($reviews) > 0) {
      $total_reviews = 0;
      $total = 0;
      foreach ($reviews as $item) {
        $total_reviews += 1;
        $total += intval($item['rating']);
      }
      $average = $total / $total_reviews;
    ?>
      <div class="rating-total">
        <span class="total"><?php echo round($average, 2) ?></span>
        <div class="group">
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p class="review-total"><?php echo $total_reviews ?> Reviews</p>
        </div>
      </div>
    <?php
    } else {
    ?>
      <div class="rating-total">
        <span class="total">5.0</span>
        <div class="group">
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p class="review-total"> No Reviews</p>
        </div>
      </div>
    <?php
    }
    ?>
  </div>
  <!-- Review Rating Grid -->
  <div class="rating-grid">
    <?php
    $product_id = $product['id'];
    $reviews = getProdById("review", $product_id);

    if (mysqli_num_rows($reviews) > 0) {
      foreach ($reviews as $item) {
    ?>
        <div class="user-rating">
          <div class="heading-details">
            <div class="left">
              <div class="user-icon"></div>
              <div class="group">
                <span class="name"><?php echo $item['member_name'] ?></span>
                <p class="timestamp"><?php echo $item['last_modified'] ?></p>
              </div>
            </div>
            <div class="right">
              <div class="rate-group">
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <span class="num"><?php echo $item['rating'] . '.0' ?></span>
              </div>
            </div>
          </div>
          <div class="rating-details">
            <span class="title"><?php echo $item['review_title'] ?><span>
                <p class="description"><?php echo $item['review_message'] ?></p>
          </div>
        </div>

    <?php
      }
    } else {
      echo "There are no product ratings. Be the first!";
    }
    ?>
  </div>
  <button class="sub-header" id="rating-btn" style="display:none;">Write a Review</button>
</div>
<script src="assets/javascript/products.js"></script>
<script src="selector.js"></script>
