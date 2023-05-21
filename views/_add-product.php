  <main class="seller-profile">
    <!-- Seller Sidebar -->
    <aside class="side-bar">
      <span class="title">
        <i class="fa-solid fa-store"></i>
        <h3 class="name">Order</h3>
      </span>
      <ul class="options">
        <li>
          <a href="seller-products.php">My Products</a>
        </li>
        <li>
          <a href="add-product.php" class="active">Add New Product</a>
        </li>
      </ul>
    </aside>
    <!-- Add Product -->
    <div class="sell-container">
      <div class="header-details">
        <span class="title">Add New Product</span>
        <a href="seller-products.php">Go Back</a>
      </div>
      <div class="product-details">
        <form action="#" method="post" enctype="multipart/form-data">
          <?php
          if (isset($error)) {
            echo '<span class="error-msg"> Error: ' . $error . '</span>';
          }
          ?>
          <div class="field input">
            <label for="image">Image Pic*</label>
            <input id="image" type="file" class="custom-file-input no-padding" name="image" required autocomplete="image" placeholder="Select A Image" autofocus>
          </div>
          <div class="field input">
            <label for="name">Product Name*</label>
            <input id="name" type="name" class="form-control" name="name" required autocomplete="name" placeholder="Enter Product Name" autofocus>
          </div>
          <div class="group">
            <div class="field input">
              <label for="quantity">Product Quantity*</label>
              <input id="quantity" type="quantity" class="form-control" name="quantity" required autocomplete="quantity" placeholder="Enter Product Quantity" autofocus>
            </div>
            <div class="field input">
              <label for="price">Product Price*</label>
              <input id="price" type="price" class="form-control" name="price" required autocomplete="price" placeholder="Enter Product Price" autofocus>
            </div>
            <div class="field input">
              <label for="category">Category Name*</label>
              <select name="category" id="category" required autocomplete="category" autofocus>
                <?php
                $category = getTableData("category");

                if (mysqli_num_rows($category) > 0) {
                  foreach ($category as $item) {
                ?>
                    <option value="<?php echo $item["id"] ?>"><?php echo $item["name"] ?></option>
                <?php
                  }
                } else {
                  echo '<span class="error-stmt"> There are no categories found. </span>';
                }
                ?>
              </select>
            </div>
          </div>
          <div class="group">
            <div class="field input">
              <label for="color">Color*</label>
              <div class="colors">
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
            <div class="field input">
              <label for="size">Sizes*</label>
              <div class="sizes">
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
          </div>
          <!-- <div class="group">
            <div class="field input">
              <label for="name">Color*</label>
              <select name="category" id="category" required autocomplete="category" autofocus>
                <option value="1">Red</option>
                <option value="2">Blue</option>
                <option value="3">Yellow</option>
                <option value="4">Green</option>
                <option value="5">White</option>
              </select>
            </div>
            <div class="field input">
              <label for="name">Size*</label>
              <select name="category" id="category" required autocomplete="category" autofocus>
                <option value="1">XS</option>
                <option value="2">S</option>
                <option value="3">M</option>
                <option value="4">L</option>
                <option value="5">XL</option>
              </select>
            </div>
          </div> -->
          <div class="field input">
            <label for="description">Product Description*</label>
            <textarea required autocomplete name="description" id="description" cols="30" rows="10"></textarea>
          </div>
          <div class="actions">
            <button name="submit" type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  </main>