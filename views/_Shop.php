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
                    <div class="group color">
                        <label class="color-option" style="background-color: #ffffff;">
                            <input type="radio" name="color" value="white">
                        </label>
                        <label class="color-option" style="background-color: #000000;">
                            <input type="radio" name="color" value="black">
                        </label>
                        <label class="color-option" style="background-color: #ff0000;">
                            <input type="radio" name="color" value="red">
                        </label>
                        <label class="color-option" style="background-color: #00ff00;">
                            <input type="radio" name="color" value="green">
                        </label>
                        <label class="color-option" style="background-color: #0000ff;">
                            <input type="radio" name="color" value="blue">
                        </label>
                        <label class="color-option" style="background-color: #ffff00;">
                            <input type="radio" name="color" value="yellow">
                        </label>
                        <label class="color-option" style="background-color: #ff00ff;">
                            <input type="radio" name="color" value="magenta">
                        </label>
                        <label class="color-option" style="background-color: #00ffff;">
                            <input type="radio" name="color" value="cyan">
                        </label>
                        <label class="color-option" style="background-color: #800080;">
                            <input type="radio" name="color" value="purple">
                        </label>
                        <label class="color-option" style="background-color: #ffa500;">
                            <input type="radio" name="color" value="orange">
                        </label>
                    </div>
                </div>
                
                <!-- Sizes -->
                <div class="filter-group">
                    <h3>Sizes</h3>
                    <div class="group size">
                        <label class="size-option">
                            <input type="radio" name="size" value="xxs"> XXS
                        </label>
                        <label class="size-option">
                            <input type="radio" name="size" value="xs"> XS
                        </label>
                        <label class="size-option">
                            <input type="radio" name="size" value="s"> S
                        </label>
                        <label class="size-option">
                            <input type="radio" name="size" value="m"> M
                        </label>
                        <label class="size-option">
                            <input type="radio" name="size" value="l"> L
                        </label>
                        <label class="size-option">
                            <input type="radio" name="size" value="xl"> XL
                        </label>
                        <label class="size-option">
                            <input type="radio" name="size" value="xxl"> XXL
                        </label>
                    </div>
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
                    <li class="button tertiary" onclick="removeFilter()">
                        <span class="filter-text">Casual</span>
                        <span class="filter-remove">&times;</span>
                    </li>
                    <li class="button tertiary" onclick="removeFilter()">
                        <span class="filter-text">Business</span>
                        <span class="filter-remove">&times;</span>
                    </li>
                    <li class="button tertiary" onclick="removeFilter()">
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