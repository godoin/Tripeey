<main class="shop-container">

    <aside>
        <div id="shop">
            <!-- Categories -->
            <div class="filter-group">
                <h3 id="categoriesFilter">Categories</h3> 
                <ul role="radiogroup" aria-labelledby="categoriesFilter" class="group" id="categories">
                    <li class="category-option">
                        <label for="t-shirts">T-shirt</label>
                        <input type="radio" name="category" value="t-shirts" aria-checked="false"666>
                    </li>
                    <li class="category-option">
                        <label for="hoodies">Hoodies</label>
                        <input type="radio" name="category" value="hoodies" aria-checked="false">
                    </li>
                    <li class="category-option">
                        <label for="sweatshirts">Sweatshirts</label>
                        <input type="radio" name="category" value="sweatshirts" aria-checked="false">
                    </li>
                    <li class="category-option">
                        <label for="polo-shirts">Polo Shirts</label>
                        <input type="radio" name="category" value="polo-shirts" aria-checked="false">
                    </li>
                    <li class="category-option">
                        <label for="long-sleeves">Long-Sleeves</label>
                        <input type="radio" name="category" value="long-sleeves" aria-checked="false">
                    </li>
                </ul>
            </div>

            <div class="filter-by">
                <h2>Filter by:</h2>

                <!-- Styles -->
                <div class="filter-group">
                    <h3 id="stylesFilter">Styles</h3>
                    <ul role="group" aria-labelledby="stylesFilter" class="group" id="styles">
                        <li class="filter-option">
                            <input type="checkbox" name="style" value="casual" aria-checked="false"> 
                            <label for="casual">Casual</label>
                        </li>
                        <li class="filter-option">
                            <input type="checkbox" name="style" value="business" aria-checked="false">
                            <label for="business">Business</label>
                        </li>
                        <li class="filter-option">
                            <input type="checkbox" name="style" value="formal" aria-checked="false"> 
                            <label for="formal">Formal</label>
                        </li>
                        <li class="filter-option">
                            <input type="checkbox" name="style" value="athletic" aria-checked="false">
                            <label for="business">Athletic</label>
                        </li>
                        <li class="filter-option">
                            <input type="checkbox" name="style" value="vintage" aria-checked="false"> 
                            <label for="formal">Vintage</label>
                        </li>
                    </ul>
                </div>
    
                <!-- Colors -->
                <div class="filter-group">
                    <h3 id="colorsFilter">Color</h3>
                        <ul class="group color" id="colors">
                            <li class="color-option" style="background-color: #ffffff;">
                                <label for="color-white"></label>
                                <input type="checkbox" id="color-white" name="color" value="white" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #000000;">
                                <label for="color-black"></label>
                                <input type="checkbox" id="color-black" name="color" value="black" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #ff0000;">
                                <label for="color-red"></label>
                                <input type="checkbox" id="color-red" name="color" value="red" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #00ff00;">
                                <label for="color-green"></label>
                                <input type="checkbox" id="color-green" name="color" value="green" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #0000ff;">
                                <label for="color-blue"></label>
                                <input type="checkbox" id="color-blue" name="color" value="blue" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #ffff00;">
                                <label for="color-yellow"></label>
                                <input type="checkbox" id="color-yellow" name="color" value="yellow" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #ff00ff;">
                                <label for="color-magenta"></label>
                                <input type="checkbox" id="color-magenta" name="color" value="magenta" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #00ffff;">
                                <label for="color-cyan"></label>
                                <input type="checkbox" id="color-cyan" name="color" value="cyan" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #800080;">
                                <label for="color-purple"></label>
                                <input type="checkbox" id="color-purple" name="color" value="purple" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #ffa500;">
                                <label for="color-orange"></label>
                                <input type="checkbox" id="color-orange" name="color" value="orange" aria-checked="false">
                            </li>
                        </ul>
                </div>
                
                    <!-- Sizes -->
                    <div class="filter-group">
                        <h2 id="sizesFilter">Sizes</h2>
                        <ul role="group" aria-labelledby="sizesFilter" class="group size" id="sizes">
                            <li class="size-option">
                                <label for="xxs">XXS</label>
                                <input type="checkbox" name="size" value="xxs" aria-checked="false">
                            </li>
                            <li class="size-option">
                                <label for="xs">XS</label>
                                <input type="checkbox" name="size" value="xs" aria-checked="false">
                            </li>
                            <li class="size-option">
                                <label for="s">S</label>
                                <input type="checkbox" name="size" value="s" aria-checked="false">
                            </li>
                            <li class="size-option">
                                <label for="m">M</label>
                                <input type="checkbox" name="size" value="m" aria-checked="false">
                            </li>
                            <li class="size-option">
                                <label for="l">L</label>
                                <input type="checkbox" name="size" value="l" aria-checked="false">
                            </li>
                            <li class="size-option">
                                <label for="xl">XL</label>
                                <input type="checkbox" name="size" value="xl" aria-checked="false">
                            </li>
                            <li class="size-option">
                                <label for="xxl">XXL</label>
                                <input type="checkbox" name="size" value="xxl" aria-checked="false">
                            </li>
                        </ul>
                    </div>
    
                <!-- Prices -->
                <div class="filter-group">
                    <h3 id="pricesFilter">Price Range</h3>
                    <ul role="group" aria-labelledby="pricesFilter" class="group" id="price-range">
                        <div class="filter-option">
                            <label for="below-50">Below $50</label>
                            <input type="checkbox" name="price" value="below-50" aria-checked="false">
                        </div>
                        <label class="filter-option">
                            <label for="50-100">$50 - $100</label>
                            <input type="checkbox" name="price" value="50-100" aria-checked="false">
                        </label>
                        <label class="filter-option">
                            <label for="100-200">$100 - $200</label>
                            <input type="checkbox" name="price" value="100-200" aria-checked="false">
                        </label>
                        <label class="filter-option">
                            <label for="200-plus">$200+</label>
                            <input type="checkbox" name="price" value="200-plus" aria-checked="false">
                        </label>
                    </ul>
                </div>
            </div>


            <!-- Submit Button -->
            <div class="actions">
                <button class="primary" type="submit" id="test-btn">Apply Filters</button>
            </div>

        </div>
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