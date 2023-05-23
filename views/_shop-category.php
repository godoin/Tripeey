  <!-- Shop -->
  <main class="shop-container">
    <!-- Shop Filter -->
    <section class="filter">
      <form id="filter-form" method="GET" action="shop.php">
        <div class="header-filter" id="filter-btn">
          <h4 class="header-filter-name">Filters</h4>
          <i class="fa-solid fa-filter"></i>
        </div>
        <div class="bottom-filter" id="filters">
          <!-- <label for="category_id">
            <h1>Categories</h1>
          </label> -->

          <select class="category-select" name="category_id">
            <?php
            $categories = getCategories();
            while ($category = mysqli_fetch_assoc($categories)) {
            ?>
              <option value="<?php echo $category['id']; ?>">
                <?php echo ($category['name']); ?>
              </option>
            <?php
            }
            ?>
          </select>
          <div class="filter">
            <button type="button" id="price-btn">
              <h3>Price</h3>
              <i class="fa-solid fa-angle-down" id="price-toggle"></i>
            </button>

            <div class="price-filter">
              <input type="number" name="min_price" placeholder="Min" class="price-input">
              <span class="price-sep">-</span>
              <input type="number" name="max_price" placeholder="Max" class="price-input">
            </div>
          </div>
          <div class="filter">
            <button id="color-btn">
              <h3>Colors</h3>
              <i class="fa-solid fa-angle-down" id="color-toggle"></i>
            </button>
            <div class="colors color-filter">
              <div class="group">
                <input class="checkbox-input" type="checkbox" name="colors[]" value="red" id="color-red">
                <label class="checkbox-label red" for="color-red"></label>
              </div>
              <div class="group">
                <input class="checkbox-input" type="checkbox" name="colors[]" value="blue" id="color-blue">
                <label class="checkbox-label blue" for="color-blue"></label>
              </div>
              <div class="group">
                <input class="checkbox-input" type="checkbox" name="colors[]" value="yellow" id="color-yellow">
                <label class="checkbox-label yellow" for="color-yellow"></label>
              </div>
              <div class="group">
                <input class="checkbox-input" type="checkbox" name="colors[]" value="green" id="color-green">
                <label class="checkbox-label green" for="color-green"></label>
              </div>
              <div class="group">
                <input class="checkbox-input" type="checkbox" name="colors[]" value="white" id="color-white">
                <label class="checkbox-label white" for="color-white"></label>
              </div>
            </div>
          </div>
          <div class="filter">
            <button type="button" id="size-btn">
              <h3>Size</h3>
              <i class="fa-solid fa-angle-down" id="size-toggle"></i>
            </button>
            <div class="sizes size-filter">
              <div class="group">
                <input class="checkbox-input" type="checkbox" name="sizes[]" value="XS" id="size-xs">
                <label class="checkbox-label" for="size-xs">XS</label>
              </div>
              <div class="group">
                <input class="checkbox-input" type="checkbox" name="sizes[]" value="S" id="size-s">
                <label class="checkbox-label" for="size-s">S</label>
              </div>
              <div class="group">
                <input class="checkbox-input" type="checkbox" name="sizes[]" value="M" id="size-m">
                <label class="checkbox-label" for="size-m">M</label>
              </div>
              <div class="group">
                <input class="checkbox-input" type="checkbox" name="sizes[]" value="L" id="size-l">
                <label class="checkbox-label" for="size-l">L</label>
              </div>
              <div class="group">
                <input class="checkbox-input" type="checkbox" name="sizes[]" value="XL" id="size-xl">
                <label class="checkbox-label" for="size-xl">XL</label>
              </div>
            </div>
          </div>
          <button class="filter-submit" type="submit">Apply Filters</button>
        </div>
      </form>

    </section>
    <!-- Shop Products -->
    <section class="products">
      <div class="header-details">
        <h2 class="title">Shop Products</h2>
        <div class="sort">
          <form class="sort-form" class="search" method="get" action="shop.php">
            <button name="sorting" value="new">New</button>
            <button name="sorting" value="popular">Popular</button>
          </form>
        </div>
      </div>
      <!-- Product Grid -->
      <div class="product-grid grid-main">
        <?php
        if (isset($_SESSION['member_id'])) {
          $products_data = getProdByCategory($category_id);

          if (mysqli_num_rows($products_data) > 0) {
            foreach ($products_data as $item) {
              $member_id = $_SESSION['member_id'];
              $res = getLikedProduct('liked_product', $member_id, $item['id']);
              $check = mysqli_fetch_assoc($res);
              $discountRes = checkDiscountProduct('discount_product', $item['id']);
              $product_discount = mysqli_fetch_assoc($discountRes);
              $discount = 0;
              if ($product_discount !== null) {
                $discount = intval($product_discount['discount']);
                $price = $item['price'] * ($discount / 100);
              }
        ?>
              <div class="content">
                <a href="view-products.php?product=<?php echo $item['name'] ?>">
                  <form action="" method="POST" class="product-col">
                    <input type="hidden" name="product_id" value="<?php echo $item['id'] ?>">
                    <?php
                    if (mysqli_num_rows($res) > 0) {
                    ?>
                      <button name="unlike-product" type="submit" class="fa-solid fa-heart like active"></button>
                    <?php
                    } else {
                    ?>
                      <button name="like-product" type="submit" class="fa-solid fa-heart like"></button>
                    <?php
                    }
                    ?>
                    <div class="top">
                      <img src="assets/uploads/<?php echo $item["image"]; ?>" alt="<?php echo $item["name"]; ?>" class="img">
                    </div>
                    <div class="bottom">
                      <div class="product-details">
                        <div class="title">
                          <h4><?php echo $item["name"]; ?></h4>
                        </div>
                        <div class="rating-group" style="display:flex; gap:7em;">
                        <?php
                        $product_id = $item['id'];
                        $reviews = getProdById("review", $product_id);
                        if (mysqli_num_rows($reviews) > 0) {
                          $total_reviews = 0;
                          $total = 0;
                          foreach ($reviews as $item_review) {
                            $total_reviews += 1;
                            $total += intval($item_review['rating']);
                          }
                          $average = $total / $total_reviews;
                        ?>
                          <div class="rating">
                            <i class="fa-solid fa-star"></i>
                            <h5><?php echo round($average, 2) ?> (<?php echo $total_reviews ?>)</h5>
                          </div>
                        <?php
                        } else {
                        ?>
                          <div class="rating">
                            <i class="fa-solid fa-star"></i>
                            <h5>5.0 (0)</h5>
                          </div>
                        <?php
                        }
                        ?>
                        <?php
                        if ($product_discount !== null) {
                        ?>
                          <h2 class="price"><?php echo "$" . $price; ?></h2>
                        <?php
                        } else {
                        ?>
                          <h2 class="price"><?php echo "$" . $item["price"]; ?></h2>
                        <?php
                        }
                        ?>
                        </div>
                      </div>
                    </div>
                  </form>
                </a>
              </div>
            <?php
            }
          } else {
            echo '<span class="error-stmt"> There are no products found.  </span>';
          }
        } else {
          $products_data = getProdByCategory($category_id);

          // $length = sizeof(mysqli_fetch_assoc(($products)));
          if (mysqli_num_rows($products_data) > 0) {
            foreach ($products_data as $item) {
            ?>
              <div class="content">
                <a href="view-products.php?product=<?php echo $item['name'] ?>">
                  <form action="" method="POST" class="product-col">
                    <input type="hidden" name="product_id" value="<?php echo $item['id'] ?>">
                    <div class="top">
                      <img src="assets/uploads/<?php echo $item["image"]; ?>" alt="<?php echo $item["name"]; ?>" class="img">
                    </div>
                    <div class="bottom">
                      <div class="product-details">
                        <div class="title">
                          <h4><?php echo $item["name"]; ?></h4>
                        </div>
                        <div class="rating-group" style="display:flex; gap:7em;">
                          <div class="rating">
                            <i class="fa-solid fa-star"></i>
                            <h5>5.0 (#)</h5>
                          </div>
                          <h2 class="price"><?php echo "$" . $item["price"]; ?></h2>
                        </div>
                      </div>
                    </div>
                  </form>
                </a>
              </div>
        <?php
            }
          } else {
            echo '<span class="error-stmt"> There are no products found.  </span>';
          }
        }

        ?>
      </div>
      <div class="pagination">
        <ul class="page-select">
          <li class="select">1</li>
          <li class="select">2</li>
          <li class="select">3</li>
          <li class="select">4</li>
        </ul>
      </div>
    </section>
  </main>