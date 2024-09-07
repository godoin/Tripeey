<main class="shop-container">

    <aside>
        <div id="shop">
            <!-- Categories -->
            <div class="filter-group">
                <h3 id="categoriesFilter">Categories</h3> 
                <ul role="radiogroup" aria-labelledby="categoriesFilter" class="group" id="categories">
                    <li class="category-option active">
                        <label for="all">All</label>
                        <input type="radio" name="category" value="All" aria-checked="true" checked="true">
                    </li>
                    <li class="category-option">
                        <label for="t-shirts">T-shirt</label>
                        <input type="radio" name="category" value="T-Shirts" aria-checked="false">
                    </li>
                    <li class="category-option">
                        <label for="hoodies">Hoodies</label>
                        <input type="radio" name="category" value="Hoodies" aria-checked="false">
                    </li>
                    <li class="category-option">
                        <label for="sweatshirts">Sweatshirts</label>
                        <input type="radio" name="category" value="Sweatshirts" aria-checked="false">
                    </li>
                    <li class="category-option">
                        <label for="polo-shirts">Polo Shirts</label>
                        <input type="radio" name="category" value="Polo Shirts" aria-checked="false">
                    </li>
                    <li class="category-option">
                        <label for="long-sleeves">Long-Sleeves</label>
                        <input type="radio" name="category" value="Long Sleeves" aria-checked="false">
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
                            <input 
                                type="checkbox" 
                                name="style" 
                                value="Casual" 
                                aria-checked="false"
                            /> 
                            <label for="Casual">Casual</label>
                        </li>
                        <li class="filter-option">
                            <input type="checkbox" name="style" value="Business" aria-checked="false">
                            <label for="business">Business</label>
                        </li>
                        <li class="filter-option">
                            <input type="checkbox" name="style" value="Formal" aria-checked="false"> 
                            <label for="formal">Formal</label>
                        </li>
                        <li class="filter-option">
                            <input type="checkbox" name="style" value="Athletic" aria-checked="false">
                            <label for="athletic">Athletic</label>
                        </li>
                        <li class="filter-option">
                            <input type="checkbox" name="style" value="Vintage" aria-checked="false"> 
                            <label for="vintage">Vintage</label>
                        </li>
                    </ul>
                </div>
    
                <!-- Colors -->
                <div class="filter-group">
                    <h3 id="colorsFilter">Color</h3>
                        <ul class="group color" id="colors">
                            <li class="color-option" style="background-color: #ffffff;">
                                <label for="color-white"></label>
                                <input type="checkbox" id="color-white" name="color" value="White" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #000000;">
                                <label for="color-black"></label>
                                <input type="checkbox" id="color-black" name="color" value="Black" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #ff0000;">
                                <label for="color-red"></label>
                                <input type="checkbox" id="color-red" name="color" value="Red" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #00ff00;">
                                <label for="color-green"></label>
                                <input type="checkbox" id="color-green" name="color" value="Green" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #0000ff;">
                                <label for="color-blue"></label>
                                <input type="checkbox" id="color-blue" name="color" value="Blue" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #ffff00;">
                                <label for="color-yellow"></label>
                                <input type="checkbox" id="color-yellow" name="color" value="Yellow" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #ff00ff;">
                                <label for="color-magenta"></label>
                                <input type="checkbox" id="color-magenta" name="color" value="
                                Magenta" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #00ffff;">
                                <label for="color-cyan"></label>
                                <input type="checkbox" id="color-cyan" name="color" value="
                                Cyan" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #800080;">
                                <label for="color-purple"></label>
                                <input type="checkbox" id="color-purple" name="color" value="
                                Purple" aria-checked="false">
                            </li>

                            <li class="color-option" style="background-color: #ffa500;">
                                <label for="color-orange"></label>
                                <input type="checkbox" id="color-orange" name="color" value="
                                Orange" aria-checked="false">
                            </li>
                        </ul>
                </div>
                
                    <!-- Sizes -->
                    <div class="filter-group">
                        <h2 id="sizesFilter">Sizes</h2>
                        <ul role="group" aria-labelledby="sizesFilter" class="group size" id="sizes">
                            <li class="size-option">
                                <label for="xxs">XXS</label>
                                <input type="checkbox" name="size" value="XXS" aria-checked="false">
                            </li>
                            <li class="size-option">
                                <label for="xs">XS</label>
                                <input type="checkbox" name="size" value="XS" aria-checked="false">
                            </li>
                            <li class="size-option">
                                <label for="s">S</label>
                                <input type="checkbox" name="size" value="S" aria-checked="false">
                            </li>
                            <li class="size-option">
                                <label for="m">M</label>
                                <input type="checkbox" name="size" value="M" aria-checked="false">
                            </li>
                            <li class="size-option">
                                <label for="l">L</label>
                                <input type="checkbox" name="size" value="L" aria-checked="false">
                            </li>
                            <li class="size-option">
                                <label for="xl">XL</label>
                                <input type="checkbox" name="size" value="XL" aria-checked="false">
                            </li>
                            <li class="size-option">
                                <label for="xxl">XXL</label>
                                <input type="checkbox" name="size" value="XXL" aria-checked="false">
                            </li>
                        </ul>
                    </div>
    
                <!-- Prices -->
                <div class="filter-group">
                    <h3 id="pricesFilter">Price Range</h3>
                    <ul role="group" aria-labelledby="pricesFilter" class="group" id="price-range">
                        <li class="filter-option">
                            <input type="checkbox" name="price" value="Below 500" aria-checked="false">
                            <label for="below-500">Below ₱500</label>
                        </li>
                        <li class="filter-option">
                            <input type="checkbox" name="price" value="500 to 1000" aria-checked="false">
                            <label for="500-1000">₱500 - ₱1000</label>
                        </li>
                        <li class="filter-option">
                            <input type="checkbox" name="price" value="1000 to 2000" aria-checked="false">
                            <label for="1000-2000">₱1000 - ₱2000</label>
                        </li>
                        <li class="filter-option">
                            <input type="checkbox" name="price" value="2000 above" aria-checked="false">
                            <label for="2000-plus">₱2000+</label>
                        </li>
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

                <ul class="filters" id="filter-list">
                    <!-- <li id="filter-btn" class="button tertiary" role="button" aria-label="All filter" aria-pressed="false">
                        <span class="filter-text">All</span>
                        <span class="filter-remove">&times;</span>
                    </li> -->
                    <!-- <li class="button tertiary" role="button" aria-label="Business filter" aria-pressed="false">
                        <span class="filter-text">Business</span>
                        <span class="filter-remove">&times;</span>
                    </li>
                    <li class="button tertiary" role="button" aria-label="Formal filter" aria-pressed="false">
                        <span class="filter-text">Formal</span>
                        <span class="filter-remove">&times;</span>
                    </li> -->
                </ul>

                <div class="sort-form">
                    <div class="select-wrapper">
                        <select id="sort-by" name="sort-by">
                            <option name="sort" value="most-popular" aria-selected="true" selected>Sort by: Most Popular</option>
                            <option name="sort" value="newest" aria-selected="false">Sort by: Newest</option>
                            <option name="sort" value="rating" aria-selected="false">Sort by: Rating</option>
                        </select>
                    </div>
                </div>
    
            </div>
        </header>

        <!-- Main Shopping Cards -->
        <div class="content-items">
            <ul class="cards" id="shop-cards">
                <div class="message products" id="empty-shop">
                    <span class="text info">No products found. Start Shopping!</span>
                </div>
            </ul>
        </div>

    </div>
    
</main>