  <!-- Landing Page -->
  <main class="landing-container">
    <!-- Intro -->
    <section class="intro">
      <div class="intro-content">
        <article>
          <div class="top">
            <h1>LOREM IPSUM <br> DOLOR SIT AMET <br> CONSECTETUR</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, <br> beatae alias at optio atque pariatur
              officia corporis officiis!</p>
          </div>
          <div class="redirects">
            <?php
            $category = getTableData('category');
            $counter = 0;
            if (mysqli_num_rows($category) > 0) {
              foreach ($category as $item) {
                if ($counter == 2) {
                  break;
                }
            ?>
                <a href="shop-category.php?category=<?php echo $item['id']; ?>" class="links">
                  <img src="assets/images/category/<?php echo $item['image'] ?>" alt="<?php echo $item['name'] ?>">
                  <h1 class="name"><?php echo $item['name'] ?></h1>
                </a>
            <?php
                $counter++;
              }
            } else {
              echo '<span class="error-stmt"> There are no categories found. </span>';
            }
            ?>
          </div>
        </article>
        <aside>
          <div class="links">
            <a href="#">
              <h4>Learn More</h4>
              <div class="icon">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </a>
            <a href="#">
              <h4>Explore</h4>
              <div class="icon">
                <i class="fa-solid fa-location-arrow"></i>
              </div>
            </a>
          </div>
        </aside>
      </div>
    </section>
    <!-- About -->
    <section class="about">
      <p><b>TRIP</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dicta, nobis molestiae nesciunt totam
        recusandae ea dolores fugit atque eos placeat inventore libero illum explicabo repudiandae, a enim alias.
        Assumenda quos unde debitis pariatur provident quas repudiandae quibusdam, perferendis fugit.</p>
    </section>

    <!-- Homepage Categories -->
    <section class="home-categories">
      <p>Lorem ipsum dolor, sit amet consectetur <br> adipisicing elit. Quisquam?</p>
      <a href="#">Click Here</a>
    </section>

    <!-- Shop By Categories -->
    <section class="shop-categories">
      <div class="header-details">
        <h2>Shop By Categories</h2>
        <a href="#" class="">
          <h3>See More</h3>
        </a>
      </div>
      <div class="gallery">
        <?php
        $category = getTableData('category');

        if (mysqli_num_rows($category) > 0) {
          foreach ($category as $item) {
        ?>
            <a href="shop-category.php?category=<?= $item['id']; ?>">
              <div class="content-col">
                <img src="assets/images/category/<?php echo $item['image'] ?>" alt="<?php echo $item['name'] ?>">
                <span class="name"><?php echo $item['name'] ?></span>
              </div>
            </a>
          <?php
          }
          ?>
        <?php
        } else {
          echo '<span class="error-stmt"> There are no categories found. </span>';
        }
        ?>
      </div>
    </section>
  </main>