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
        <div class="category-group">
          <ul class="navbar">
            <span class="title-group">Site</span>
            <li>
              <a href="">
                <div class="icon-nav">
                  <i class="fa-solid fa-angle-right"></i>
                </div>
                <span class="title">Home</span>
              </a>
            </li>
            <li>
              <a href="">
                <div class="icon-nav">
                  <i class="fa-solid fa-angle-right"></i>
                </div>
                <span class="title">Categories</span>
              </a>
            </li>
            <li>
              <a href="">
                <div class="icon-nav">
                  <i class="fa-solid fa-angle-right"></i>
                </div>
                <span class="title">Shop</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="member-buy">

        </div>
        <div class="member">
          <span class="title-group">Member</span>
          <div class="group-actions">
            <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, adipisci?</p>
            <div class="actions">
              <a href="member-profile.php">Member Profile</a>
              <a href="core/member-logout.php">Logout</a>
            </div>
          </div>
        </div>
      </div>
      <div class="icon" id="menu-btn">
        <i class="fa-solid fa-bars"></i>
      </div>
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