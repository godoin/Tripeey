<!-- Seller Profile -->
<main class="seller-profile">
  <!-- Seller Sidebar -->
  <aside class="side-bar">
    <span class="title">
      <i class="fa-solid fa-store"></i>
      <h3 class="name">Order</h3>
    </span>
    <ul class="options">
      <li>
        <a href="seller-products.php" class="active">My Products</a>
      </li>
      <li>
        <a href="add-product.php">Add New Product</a>
      </li>
    </ul>
  </aside>
  <!-- Seller Products -->
  <div class="sell-container list">
    <!-- Shop Products -->
    <section class="products">
      <div class="header-details">
        <h2 class="title">Your List of Products</h2>
        <div class="actions">
          <button id="discount-btn">Discount Products</button>
          <a href="add-product.php">Add New Products</a>
        </div>
      </div>
      <!-- Product Table -->
      <div class="seller-table">
        <table>
          <thead>
            <tr>
              <th class="col1">Image</th>
              <th class="col2">Product Name</th>
              <th class="col4">Description</th>
              <th class="col5">Quantity</th>
              <th class="col6">Price</th>
              <th class="col7">Discount</th>
              <th class="col8">Actions</th>
            </tr>
          </thead>
          <tbody>
          <?php
            $products = getProdBySeller($seller_id);

            if (mysqli_num_rows($products) > 0) {
              $row_counter = 0;
              foreach ($products as $item) {
                $row_counter++;
                $row_class = ($row_counter % 2 == 0) ? 'even-row' : '';
                $res = checkDiscountProduct('discount_product', $item['id']);
                $product_discount = mysqli_fetch_assoc($res);
                $discount = 0;
                if ($product_discount !== null) {
                  $discount = intval($product_discount['discount']);
                }
                $price = $item['price'] * ($discount / 100);
                ?>
                <a href="view-products.php?product=<?php echo $item['name'] ?>">
                  <form action="" method="post">
                    <tr class="<?php echo $row_class ?>">
                      <td data-title="Image" class="col1"><img src="assets/uploads/<?php echo $item['image'] ?>" alt="<?php echo $item['name'] ?>"></td>
                      <td data-title="Product Name" class="col2"><?php echo $item['name'] ?></td>
                      <td data-title="Description" class="col4"><?php echo limitWords($item['description'], 20) ?></td>
                      <td data-title="Quantity" class="col5"><?php echo $item['quantity'] ?></td>
                      <?php 
                        if ($product_discount !== null) { 
                      ?>
                        <td data-title="Price" class="col6"><?php echo "$" . $price ?></td>
                        <td data-title="Discount" class="col7"><?php echo $product_discount['discount'] . '%' ?></td>
                      <?php 
                        } else { 
                      ?>
                        <td data-title="Price" class="col6"><?php echo "$" . $item['price'] ?></td>
                        <td data-title="Discount" class="col7">No discount set</td>
                      <?php 
                        } 
                      ?>
                      <td data-title="Actions" class="col8">
                        <input type="hidden" name="product_id" value="<?php echo $item['id'] ?>">
                        <div class="actions">
                        <?php 
                          if ($product_discount !== null) { 
                        ?>
                          <button type="submit" name="remove-discount">Cancel Discount</button>
                          <button type="submit" name="delete-product">
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        <?php 
                          } else { 
                        ?>
                          <button class="trash" type="submit" name="delete-product">
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        <?php 
                          } 
                        ?>
                        </div>
                      </td>
                    </tr>
                  </form>
                </a>
                <?php
             }
            } else {
              echo '<span class="error-stmt"> There are no products found. </span>';
            }
            ?>

          </tbody>
        </table>
      </div>
      <!-- <div class="pagination">
          <ul class="page-select">
            <li class="select">
              <i class="fa-solid fa-angle-left"></i>
            </li>
            <li class="select">1</li>
            <li class="select">2</li>
            <li class="select">3</li>
            <li class="select">4</li>
            <li class="select">
              <i class="fa-solid fa-angle-right"></i>
            </li>
          </ul>
        </div> -->
    </section>
  </div>
</main>
