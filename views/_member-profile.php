<!-- Profile Page -->
<main class="profile-container">
  <div class="profile-details">
    <div class="profile-pic"></div>
    <div class="name">
      <span class=""><?php echo $_SESSION['member_name'] ?></span>
    </div>
    <span class="email"><?php echo $_SESSION['member_email'] ?></span>
  </div>
  <div class="profile-actions">
    <ul class="selectors">
      <?php
      $member_id = $_SESSION['member_id'];
      $bill = getProdByMemberId('bill', $member_id);
      $total_bought = 0;
      if (mysqli_num_rows($bill) > 0) {
        foreach ($bill as $item) {
          $total_bought += 1;
          ?>
          <?php
        }
      }
      ?>
      <li>
        <span class="buy-selector title">Buy Orders</span>
        <span class="count"><?php echo $total_bought ?></span>
      </li>
    </ul>
    <!-- Member Table -->
    <div class="member-table">
      <table>
        <thead>
          <tr>
            <th class="col1">Image</th>
            <th class="col2">Product Name</th>
            <th class="col3">Qty</th>
            <th class="col4">Size</th>
            <th class="col5">Color</th>
            <th class="col6">Total</th>
            <th class="col7">City</th>
            <th class="col8">Address</th>
            <th class="col9">Payment Type</th>
            <th class="col10">Actions</th>
          </tr>
        </thead>
        <tbody>
        <?php
          if (isset($_SESSION['member_id'])) {
            $member_id = $_SESSION['member_id'];
            $bill = getProdByMemberId('bill', $member_id);
            ?>
              
            <?php
            if (mysqli_num_rows($bill) > 0) {
              $row_counter = 0;
              foreach ($bill as $item) {
                $row_counter++;
                $row_class = ($row_counter % 2 == 0) ? 'even-row' : '';
            ?>
            <form action="" method="post">
              <tr class="<?php echo $row_class ?>">
                <td data-title="Image" class="col1"><img src="assets/uploads/<?php echo $item['image'] ?>" alt="<?php echo $item['product_name'] ?>"></td>
                <td data-title="Product Name" class="col2"><?php echo $item['product_name'] ?></td>
                <td data-title="Quantity" class="col3"><?php echo $item['quantity_bought'] ?></td>
                <td data-title="Size" class="col4"><?php echo $item['size'] ?></td>
                <td data-title="Color" class="col5"><?php echo $item['color'] ?></td>
                <td data-title="Total" class="col6"><?php echo '$'. $item['total'] ?></td>
                <td data-title="City" class="col7"><?php echo $item['city'] ?></td>
                <td data-title="Address" class="col8"><?php echo $item['address'] ?></td>
                <td data-title="Payment Type" class="col9"><?php echo $item['payment_type'] ?></td>
                <td data-title="Actions" class="col10">
                  <input type="hidden" name="product_id" value="<?php echo $item['product_id'] ?>">
                  <input type="hidden" name="quantity" value="<?php echo $item['quantity_bought'] ?>">
                  <button name="cancel-order" class="cancel">Cancel Order</button>
                </td>
              </tr>
            </form>
            <?php
              }
            } else {
              echo '<span class="error-stmt"> You have not bought any products yet. </span>';
            ?>
            <?php
            }
            ?>
          <?php
          } else {
            echo '<span class="error-stmt"> You are not logged in. </span>';
          }
          ?>
        </tbody>
      </table>
    </div>
  </div>
  <div class="profile-actions">
    <ul class="selectors">
      <?php
      $member_id = $_SESSION['member_id'];
      $liked_products = getProdByMemberId('liked_product', $member_id);
      $total_liked = 0;
      if (mysqli_num_rows($liked_products) > 0) {
        foreach ($liked_products as $item_check) {
          $total_liked += 1;
      ?>
      <?php
        }
      }
      ?>
      <li>
        <span class="liked-selector title">Liked Products</span>
        <span class="count"><?php echo $total_liked ?></span>
      </li>
    </ul>
    <!-- Liked Table -->
    <div class="member-table liked">
      <table>
        <thead>
          <tr>
            <th class="col1">Image</th>
            <th class="col2">Product Name</th>
            <th class="col3">Description</th>
            <th class="col4">Price</th>
            <th class="col5">Sizes</th>
            <th class="col6">Colors</th>
            <th class="col7">Actions</th>
          </tr>
        </thead>
        <tbody>
        <?php
          $member_id = $_SESSION['member_id'];
          $liked_products = getProdByMemberId('liked_product', $member_id);
          if (mysqli_num_rows($liked_products) > 0) {
            $row_counter = 0;
            foreach ($liked_products as $item_check) {
              $row_counter++;
              $row_class = ($row_counter % 2 == 0) ? 'even-row' : '';
              $res = getProductById('product', $item_check['product_id']);
              $product = mysqli_fetch_array($res);
        ?>
            <form action="" method="post">
              <tr class="<?php echo $row_class ?>">
                <td data-title="Image" class="col1"><img src="assets/uploads/<?php echo $product['image'] ?>" alt="<?php echo $product['name'] ?>"></td>
                <td data-title="Product Name" class="col2"><?php echo $product['name']?></td>
                <td data-title="Description" class="col3"><?php echo limitWords($product['description'], 20) ?></td>
                <td data-title="Price" class="col4"><?php echo '$'. $product['price']?></td>
                <td data-title="Sizes" class="col5"><?php echo $product['sizes']?></td>
                <td data-title="Colors" class="col6"><?php echo $product['colors']?></td>
                <td data-title="Actions" class="col7">
                  <input type="hidden" name="member_id" value="<?php echo $member_id ?>">
                  <input type="hidden" name="product_id" value="<?php echo $product['id'] ?>">
                  <button name="unlike-product" class="cancel">Unlike Product</button>
                </td>
              </tr>
            </form>
            <?php
              }
            } else {
              echo '<span class="error-stmt"> You have not liked any products. </span>';
            ?>
            <?php
            }
            ?>
        </tbody>
      </table>
    </div>
</main>
  <!-- <script src="assets/javascript/selector.js" type="text/javascript"></script> -->