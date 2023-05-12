  <!-- Guest Hamburger -->
  <div class="guest user-pop">
    <div class="user-header">
      <button class="exit" id="guest-exit-btn">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    <div class="user-content">
      <img src="assets/images/cart.svg" alt="">
      <p>It looks you haven't started yet. Start shopping with us!</p>
      <div class="actions">
        <a href="member-register.php">Become a Member</a>
        <a href="seller-register.php">Become a Seller</a>
      </div>
    </div>
  </div>

  <!-- Logged Hamburger -->
  <div class="logged user-pop">
    <div class="user-header">
      <button class="exit" id="logged-exit-btn">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    <div class="user-content">
      <div class="actions">
        <a href="member-profile.php">Member Profile</a>
        <a href="core/member-logout.php">Logout</a>
      </div>
    </div>
  </div>

  <!-- Seller Hamburger -->
  <div class="seller user-pop">
    <div class="user-header">
      <button class="exit" id="seller-exit-btn">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    <div class="user-content">
      <div class="actions">
        <a href="seller-products.php">Seller Profile</a>
        <a href="core/seller-logout.php">Logout</a>
      </div>
    </div>
  </div>

  <!-- Categories Hamburger -->
  <div class="categories">
    <div class="left">
      <div class="cate-item">
        <h3>Category 1</h3>
        <i class="fa-solid fa-arrow-right-long"></i>
      </div>
      <div class="cate-item">
        <h3>Category 2</h3>
        <i class="fa-solid fa-arrow-right-long"></i>
      </div>
      <div class="cate-item">
        <h3>Category 3</h3>
        <i class="fa-solid fa-arrow-right-long"></i>
      </div>
      <div class="cate-item">
        <h3>Category 4</h3>
        <i class="fa-solid fa-arrow-right-long"></i>
      </div>
      <div class="cate-item">
        <h3>Category 5</h3>
        <i class="fa-solid fa-arrow-right-long"></i>
      </div>
    </div>
    <div class="vertical-line"></div>
    <div class="right">
      <?php
      $category = getTable("category");

      if (mysqli_num_rows($category) > 0) {
        foreach ($category as $item) {
      ?>
          <a href="shop-category.php?category=<?= $item['id']; ?>">
            <?php echo $item['name']; ?>
          </a>
      <?php
        }
      } else {
        echo "There are no categories found.";
      }
      ?>
    </div>
  </div>

  <!-- Shopping Cart Hamburger -->
  <div class="shopping-cart">
    <div class="shopping-cart-header">
      <span class="title">Buy Orders</span>
      <div class="total">
        <h5>Total:</h5>
        <h5>$575.00</h5>
      </div>
    </div>
    <div class="shopping-cart-items">
      <div class="item-row">
        <span class="img"></span>
        <div class="item-details">
          <span class="item-name">Lorem ipsum dolor sit amet.</span>
          <div class="group">
            <div class="details-group">
              <span class="detail-name">Size:</span>
              <span class="value">XL</span>
            </div>
            <span class="details-group">
              <span class="detail-name">Color:</span>
              <span class="value">Black</span>
            </span>
          </div>
          <div class="cancel-group">
            <span class="price">$115.00</span>
            <button class="cancel">Cancel Order</button>
          </div>
        </div>
      </div>
      <div class="item-row">
        <span class="img"></span>
        <div class="item-details">
          <span class="item-name">Lorem ipsum dolor sit amet.</span>
          <div class="group">
            <div class="details-group">
              <span class="detail-name">Size:</span>
              <span class="value">XL</span>
            </div>
            <span class="details-group">
              <span class="detail-name">Color:</span>
              <span class="value">Black</span>
            </span>
          </div>
          <div class="cancel-group">
            <span class="price">$115.00</span>
            <button class="cancel">Cancel Order</button>
          </div>
        </div>
      </div>
      <div class="item-row">
        <span class="img"></span>
        <div class="item-details">
          <span class="item-name">Lorem ipsum dolor sit amet.</span>
          <div class="group">
            <div class="details-group">
              <span class="detail-name">Size:</span>
              <span class="value">XL</span>
            </div>
            <span class="details-group">
              <span class="detail-name">Color:</span>
              <span class="value">Black</span>
            </span>
          </div>
          <div class="cancel-group">
            <span class="price">$115.00</span>
            <button class="cancel">Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
    <div class="actions">
      <button id="order-exit">Back</button>
      <!-- <button>Place Order</button> -->
    </div>
  </div>


          <!-- Modal Pop Up -->
          <div class="modal-pop">
            <div class="wrapper">
              <form action="#" method="post">
                <div class="modal-header">
                  <div class="left">
                    <span class="title">Confirm Product Order</span>
                    <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae illum nisi itaque cupiditate dignissimos.</span>
                  </div>
                  <div class="right">
                    <img src="assets/images/shopping_bags.svg" alt="Buy Order Picture">
                  </div>
                </div>
                <!-- Product Buy Details -->
                <div class="product-content">
                  <div class="selected">
                    <div class="sub-header">
                      <span class="sub-title">Product Selected</span>
                      <div class="horizontal-line"></div>
                    </div>
                    <div class="product-buy-details">
                      <div class="left">
                        <img src="assets/uploads/<?php echo $product['image'] ?>" class="img"></img>
                      </div>
                      <div class="right">
                        <span class="price"><?php echo '$'. $product['price'] ?></span>
                        <div class="product-group" style="display: flex;">
                          <span class="product-name"><?php echo $product['name']?></span>
                          <span class="quantity">x</span>
                          <span class="quantity">01</span>
                        </div>
                        <div class="buy-details">
                          <div class="content-col">
                            <span class="title">Color Selected</span>
                            <select name="colors" id="colors" required autocomplete="colors" autofocus>
                              <option value="red">red</option>
                              <option value="blue">blue</option>
                              <option value="green">green</option>
                              <option value="yellow">yellow</option>
                              <option value="white">white</option>
                            </select>
                          </div>
                          <div class="content-col">
                            <span class="title">Size Selected</span>
                            <select name="sizes" id="sizes" required autocomplete="sizes" autofocus>
                              <option value="XS">xtra-small</option>
                              <option value="S">small</option>
                              <option value="M">medium</option>
                              <option value="L">large</option>
                              <option value="XL">xtra-large</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Buy Product Delivery Information -->
                <div class="delivery-information">
                  <div class="sub-header">
                    <span class="sub-title">Delivery Information</span>
                    <div class="horizontal-line"></div>
                  </div>
                  <div class="fields">
                    <div class="field input">
                      <label for="address">Address*</label>
                      <input id="address" type="address" class="form-control" name="address" required autocomplete="address" placeholder="Enter Address" autofocus>
                    </div>
                    <div class="group">
                      <div class="field input">
                        <label for="city">City/Town*</label>
                        <input id="city" type="city" class="form-control" name="city" required autocomplete="city" placeholder="Enter City/Town" autofocus>
                      </div>
                      <div class="field input">
                        <label for="pnum">Phone Number*</label>
                        <input id="pnum" type="fname" class="form-copnum" name="fname" required autocomplete="pnum" placeholder="Enter Phone Number" autofocus>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Buy Product Payment Method -->
                <div class="delivery-information">
                  <div class="sub-header">
                    <span class="sub-title">Payment Method</span>
                    <div class="horizontal-line"></div>
                  </div>
                  <div class="fields">
                    <div class="group">
                      <div class="field input">
                        <label for="city">Select Payment Type*</label>
                        <input id="city" type="city" class="form-control" name="city" required autocomplete="city" placeholder="Select Payment Type" autofocus>
                      </div>
                      <div class="field input">
                        <label for="zip">Input Payment Type</label>
                        <input id="zip" type="zip" class="form-control" name="zip" autocomplete="zip" placeholder="Enter Zip Code" autofocus>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Buy Product Actions -->
                <div class="buy-actions">
                  <button name="buy-product" type="submit">Confirm Order</button>
                  <button id="buy-exit">Discard Changes</button>
                </div>
              </form>
            </div>
          </div>