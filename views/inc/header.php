  <!-- Header -->
  <header>
    <div class="container">
      <div class="left">
        <a href="index.php" class="logo">TRIP</a>
        <ul class="nav">
          <li>
            <a href="index.php">Home</a>
          </li>
          <div class="sep">/</div>
          <li id="cate-btn" class="toggle-color">
            <span class="name">Categories</span>
            <i class="fa-solid fa-angle-up" id="cate-toggle"></i>
          </li>
          <div class="sep">/</div>
          <li>
            <a href="shop.php">Shop</a>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="group">
          <form class="search" method="get" action="shop.php">
            <input type="search" name="search" placeholder="Search Product">
            <button type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <?php
          if (isset($_SESSION['member_name'])) {
          ?>
            <div class="icons">
              <?php
              if (isset($_SESSION['member_name'])) {
              ?>
                <div class="icon" id="logged-btn">
                  <i class="fa-regular fa-user"></i>
                </div>
                <div class="icon" id="shop-btn">
                  <?php
                  if (isset($_SESSION['member_id'])) {
                    $member_id = $_SESSION['member_id'];
                    $bill = getProdByMemberId('bill', $member_id);
                    $buy_count = 0;
                    if (mysqli_num_rows($bill) > 0) {
                      foreach ($bill as $item) {
                        $buy_count += 1;
                  ?>
                  <?php
                      }
                    }
                  }
                  ?>
                  <i class="fa-solid fa-scroll"></i>
                  <div class="item-count">
                    <h4><?php echo $buy_count ?></h4>
                  </div>
                </div>
            </div>
          <?php
              } else {
          ?>
            <div class="icon" id="guest-btn">
              <i class="fa-regular fa-user"></i>
            </div>
          <?php
              }
          ?>
        <?php
          } elseif (isset($_SESSION['seller_name'])) {
        ?>
          <div class="icons">
            <?php
            if (isset($_SESSION['seller_name'])) {
            ?>
              <div class="icon" id="seller-btn">
                <i class="fa-regular fa-user"></i>
              </div>
            <?php
            } else {
            ?>
              <div class="icon" id="guest-btn">
                <i class="fa-regular fa-user"></i>
              </div>
            <?php
            }
            ?>
          </div>
        <?php
          } else {
        ?>
          <div class="icons">
            <div class="icon" id="guest-btn">
              <i class="fa-regular fa-user"></i>
            </div>
          </div>
        <?php
          }
        ?>
        </div>
        <div class="nav-group">
          <ul class="navbar">
            <span class="title-group">Site</span>
            <li>
              <a href="index.php">
                <div class="icon-nav">
                  <i class="fa-solid fa-angle-right"></i>
                </div>
                <span class="title">Home</span>
              </a>
            </li>
            <li>
              <a href="shop.php">
                <div class="icon-nav">
                  <i class="fa-solid fa-angle-right"></i>
                </div>
                <span class="title">Categories</span>
              </a>
            </li>
            <ul class="category-group">
              <?php
              $category = getTableData("category");

              if (mysqli_num_rows($category) > 0) {
                foreach ($category as $item) {
              ?>
                  <li>
                    <a href="shop-category.php?category=<?= $item['id'] ?>">
                      <div class="icon-nav">
                        <i class="fa-solid fa-minus"></i>
                      </div>
                      <span class="title"><?php echo $item['name'] ?></span>
                    </a>
                  </li>
              <?php
                }
              } else {
                echo '<span class="error-stmt"> There are no categories found.. </span>';
              }
              ?>
            </ul>
            <li>
              <a href="shop.php">
                <div class=" icon-nav">
                  <i class="fa-solid fa-angle-right"></i>
                </div>
                <span class="title">Shop</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="member-buy">
          <div class="shopping-cart-items">
            <span class="title-group">Buy Orders</span>
            <?php
            if (isset($_SESSION['member_id'])) {
              $member_id = $_SESSION['member_id'];
              $bill = getProdByMemberId('bill', $member_id);
              if (mysqli_num_rows($bill) > 0) {
                foreach ($bill as $item) {
            ?>
                  <div class="item-row">
                    <img src="assets/uploads/<?php echo $item['image'] ?>" class="img"></img>
                    <div class="item-details">
                      <div class="item-name">
                        <?php echo $item['product_name'] ?> *
                        <span class="qty"><?php echo $item['quantity_bought'] ?></span>
                      </div>
                      <div class="group">
                        <div class="details-group">
                          <span class="detail-name">Size:</span>
                          <span class="value"><?php echo $item['size'] ?></span>
                        </div>
                        <span class="details-group">
                          <span class="detail-name">Color:</span>
                          <span class="value"><?php echo $item['color'] ?></span>
                        </span>
                      </div>
                      <div class="cancel-group">
                        <input type="hidden" name="product_id" value="<?php echo $item['product_id'] ?>">
                        <input type="hidden" name="quantity" value="<?php echo $item['quantity_bought'] ?>">
                        <span class="price"><?php echo '$' . $item['total'] . '.00' ?></span>
                        <button name="cancel-order" class="cancel">Cancel Order</button>
                      </div>
                    </div>
                  </div>
                <?php
                }
                ?>
              <?php
              } else {
                echo '<span class="error-stmt"> You have not bought any products yet. </span>';
              }
              ?>
            <?php
            } else {
              echo '<span class="error-stmt"> You are not logged in. </span>';
            }
            ?>
          </div>
        </div>
        <?php
        if (isset($_SESSION['member_id'])) {
        ?>
          <div class="user">
            <span class="title-group">Member</span>
            <div class="group-actions">
              <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, adipisci?</p>
              <div class="actions">
                <a href="member-profile.php">Member Profile</a>
                <a href="core/member-logout.php">Logout</a>
              </div>
            </div>
          </div>
        <?php
        } elseif (isset($_SESSION['seller_id'])) {
        ?>
          <div class="user">
            <span class="title-group">Seller</span>
            <div class="group-actions">
              <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, adipisci?</p>
              <div class="actions">
                <a href="seller-products.php">Seller Profile</a>
                <a href="core/seller-logout.php">Logout</a>
              </div>
            </div>
          </div>
        <?php
        } else {
        ?>
          <div class="user">
            <span class="title-group">Register/Login</span>
            <img src="assets/images/cart.svg" alt="">
            <div class="group-actions">
              <p class="description">It looks you haven't started yet. Start shopping with us!</p>
              <div class="actions">
                <a href="member-register.php">Become a Member</a>
                <a href="seller-register.php">Become a Seller</a>
              </div>
            </div>
          </div>
        <?php
        }
        ?>
      </div>
      <div class="icon fa-solid fa-bars" id="menu-btn"></div>
    </div>
  </header>














  <div class="icon" id="logged-btn" style="display:none;">
    <i class="fa-regular fa-user"></i>
  </div>
  <div class="icon" id="seller-btn" style="display:none;">
    <i class="fa-regular fa-user"></i>
  </div>
  <div class="icon" id="shop-btn" style="display:none;">
    <i class="fa-solid fa-cart-shopping"></i>
    <div class="item-count">
      <h4>0</h4>
    </div>
  </div>
  <div style="display:none;" class="icon" id="guest-btn">
    <i class="fa-regular fa-user"></i>
  </div>