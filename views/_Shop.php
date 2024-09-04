<main class="shop-container">

    <aside>
        <form action="" method="get">

            <!-- Categories -->
            <div class="filter-group">
                <h3>Categories</h3> 
                <div class="group">
                    <label class="filter-option">
                        <input type="radio" name="category" value="t-shirts"> T-Shirts
                    </label>
                    <label class="filter-option">
                        <input type="radio" name="category" value="hoodies"> Hoodies
                    </label>
                    <label class="filter-option">
                        <input type="radio" name="category" value="sweatshirts"> Sweatshirts
                    </label>
                    <label class="filter-option">
                        <input type="radio" name="category" value="polo-shirts"> Polo Shirts
                    </label>
                    <label class="filter-option">
                        <input type="radio" name="category" value="long-sleeves"> Long-Sleeves
                    </label>
                </div>
            </div>

            <div class="filter-by">
                <h2>Filter by:</h2>

                <!-- Styles -->
                <div class="filter-group">
                    <h3>Styles</h3>
                    <div class="group">
                        <label class="filter-option">
                            <input type="checkbox" name="style" value="casual"> Casual
                        </label>
                        <label class="filter-option">
                            <input type="checkbox" name="style" value="business"> Business
                        </label>
                        <label class="filter-option">
                            <input type="checkbox" name="style" value="formal"> Formal
                        </label>
                    </div>
                </div>
    
                <!-- Colors -->
                <div class="filter-group">
                    <h3>Color</h3>
                        <ul class="group color">
                            <li class="color-option" style="background-color: #ffffff;">
                                <label for="color-white"></label>
                                <input type="checkbox" id="color-white" name="color" value="white">
                            </li>

                            <li class="color-option" style="background-color: #000000;">
                                <label for="color-black"></label>
                                <input type="checkbox" id="color-black" name="color" value="black">
                            </li>

                            <li class="color-option" style="background-color: #ff0000;">
                                <label for="color-red"></label>
                                <input type="checkbox" id="color-red" name="color" value="red">
                            </li>

                            <li class="color-option" style="background-color: #00ff00;">
                                <label for="color-green"></label>
                                <input type="checkbox" id="color-green" name="color" value="green">
                            </li>

                            <li class="color-option" style="background-color: #0000ff;">
                                <label for="color-blue"></label>
                                <input type="checkbox" id="color-blue" name="color" value="blue">
                            </li>

                            <li class="color-option" style="background-color: #ffff00;">
                                <label for="color-yellow"></label>
                                <input type="checkbox" id="color-yellow" name="color" value="yellow">
                            </li>

                            <li class="color-option" style="background-color: #ff00ff;">
                                <label for="color-magenta"></label>
                                <input type="checkbox" id="color-magenta" name="color" value="magenta">
                            </li>

                            <li class="color-option" style="background-color: #00ffff;">
                                <label for="color-cyan"></label>
                                <input type="checkbox" id="color-cyan" name="color" value="cyan">
                            </li>

                            <li class="color-option" style="background-color: #800080;">
                                <label for="color-purple"></label>
                                <input type="checkbox" id="color-purple" name="color" value="purple">
                            </li>

                            <li class="color-option" style="background-color: #ffa500;">
                                <label for="color-orange"></label>
                                <input type="checkbox" id="color-orange" name="color" value="orange">
                            </li>
                        </ul>
                </div>
                
                    <!-- Sizes -->
                    <div class="filter-group">
                        <h2>Sizes</h2>
                        <ul class="group size">
                            <li class="size-option">
                                <label for="xxs"></label>
                                <input type="checkbox" name="size" value="xxs"> XXS
                            </li>
                            <li class="size-option">
                                <label for="xs"></label>
                                <input type="checkbox" name="size" value="xs"> XS
                            </li>
                            <li class="size-option">
                                <label for="s"></label>
                                <input type="checkbox" name="size" value="s"> S
                            </li>
                            <li class="size-option">
                                <label for="m"></label>
                                <input type="checkbox" name="size" value="m"> M
                            </li>
                            <li class="size-option">
                                <label for="l"></label>
                                <input type="checkbox" name="size" value="l"> L
                            </li>
                            <li class="size-option">
                                <label for="xl"></label>
                                <input type="checkbox" name="size" value="xl"> XL
                            </li>
                            <li class="size-option">
                                <label for="xxl"></label>
                                <input type="checkbox" name="size" value="xxl"> XXL
                            </li>
                        </ul>
                    </div>
    
                <!-- Prices -->
                <div class="filter-group">
                    <h3>Price Range</h3>
                    <div class="group">
                        <label class="filter-option">
                            <input type="checkbox" name="price" value="below-50"> Below $50
                        </label>
                        <label class="filter-option">
                            <input type="checkbox" name="price" value="50-100"> $50 - $100
                        </label>
                        <label class="filter-option">
                            <input type="checkbox" name="price" value="100-200"> $100 - $200
                        </label>
                        <label class="filter-option">
                            <input type="checkbox" name="price" value="200-plus"> $200+
                        </label>
                    </div>
                </div>
            </div>


            <!-- Submit Button -->
            <div class="actions">
                <button class="primary" type="submit">Apply Filters</button>
            </div>

        </form>
    </aside>

    <div class="content">
        <header>
            <!-- Breadcrumbs -->
            <ul class="breadcrumbs">
                <a href="#home" class="breadcrumb-item">
                    <img src="assets/images/icons/home.svg" alt="">
                    <span>Home</span>
                </a>
                <li class="divider">
                    <img src="assets/images/icons/chevron-right.svg" alt="">
                </li>
                <a href="#shop" class="breadcrumb-item">
                    <span>Shop</span>
                </a>
            </ul>
            <!-- Title Group -->
            <div class="title-group">
                <h1>Tripeey Shop</h1>
                
                <div class="details">
                    <span>Tripeey's Entire Collection</span>
                    <span>~8192 Products</span>
                </div>
            </div>
            <!-- Applied Filters -->
            <div class="applied-filters">

                <ul class="filters">
                    <li class="button tertiary">
                        <span class="filter-text">Casual</span>
                        <span class="filter-remove">&times;</span>
                    </li>
                    <li class="button tertiary">
                        <span class="filter-text">Business</span>
                        <span class="filter-remove">&times;</span>
                    </li>
                    <li class="button tertiary">
                        <span class="filter-text">Red</span>
                        <span class="filter-remove">&times;</span>
                    </li>
                </ul>

                <form class="sort-form">
                    <div class="select-wrapper">
                        <select id="sort-by" name="sort-by">
                            <option value="most-popular" selected>Sort by: Most Popular</option>
                            <option value="newest">Sort by: Newest</option>
                            <option value="rating">Sort by: Rating</option>
                        </select>
                    </div>
                </form>
    
            </div>
        </header>

        <!-- Main Shopping Cards -->
        <div class="content-items">
            <ul class="cards">

                <article class="card item">
                    <div class="image-container">
                        <img src="assets/images/items/shirt_one.png" class="model_img" alt="Midnight Wanderer 705">
                        <div class="top-position">
                            <span class="button badge-02">New</span>
                            <button class="icon like" aria-label="Add to Favorites" data-id="#">
                                <i class="fa-regular fa-heart"></i>
                            </button>
                        </div>
                    </div>
                    <div class="description">
                        <h3>Midnight Wanderer 705</h3>
                        <div class="details">
                            <div class="price-group">
                                <span class="title">Price</span>
                                <span class="price">PHP 1199.99</span>
                            </div>
                            <a href="product-page.html" class="button primary" aria-label="Buy Midnight Wanderer 705">
                                <img src="assets/images/icons/shopping-cart-02.svg" class="cart" alt="Buy">
                            </a>
                        </div>
                    </div>
                </article>

                <article class="card item">
                    <div class="image-container">
                        <img src="assets/images/items/shirt_two.png" class="model_img" alt="Midnight Wanderer 705">
                        <div class="top-position">
                            <span class="button badge-02">New</span>
                            <button class="icon like" aria-label="Add to Favorites" data-id="#">
                                <i class="fa-regular fa-heart"></i>
                            </button>
                        </div>
                    </div>
                    <div class="description">
                        <h3>Los Angeles CA 705</h3>
                        <div class="details">
                            <div class="price-group">
                                <span class="title">Price</span>
                                <span class="price">PHP 1199.99</span>
                            </div>
                            <a href="product-page.html" class="button primary" aria-label="Buy Los Angeles CA 705">
                                <img src="assets/images/icons/shopping-cart-02.svg" class="cart" alt="Buy">
                            </a>
                        </div>
                    </div>
                </article>

                <article class="card item">
                    <div class="image-container">
                        <img src="assets/images/items/shirt_three.png" class="model_img" alt="Seamless Stussy Shirt">
                        <div class="top-position">
                            <span class="button badge-02">New</span>
                            <button class="icon like" aria-label="Add to Favorites" data-id="#">
                                <i class="fa-regular fa-heart"></i>
                            </button>
                        </div>
                    </div>
                    <div class="description">
                        <h3>Seamless Stussy Shirt</h3>
                        <div class="details">
                            <div class="price-group">
                                <span class="title">Price</span>
                                <span class="price">PHP 1199.99</span>
                            </div>
                            <a href="product-page.html" class="button primary" aria-label="Buy Seamless Stussy Shirt">
                                <img src="assets/images/icons/shopping-cart-02.svg" class="cart" alt="Buy">
                            </a>
                        </div>
                    </div>
                </article>


            </ul>
        </div>

    </div>
    
</main>