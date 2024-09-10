<main class="product-container">

    <section class="product-item">
        <!-- Image Display -->
        <div class="image-display">
            <ul class="sub-images">
                <li class="image-container">
                    <img src="assets/images/items/product-02.png" alt="">
                </li>
                <li class="image-container">
                    <img src="assets/images/items/product-03.png" alt="">
                </li>
                <li class="image-container">
                    <img src="assets/images/items/product-04.png" alt="">
                </li>
            </ul>
            <div class="main-image image-container">
                <img src="assets/images/items/product-01.png" alt="">
            </div>
        </div>
        <!-- Product -->
        <div class="product">
            <a href="#" class="redirect">
                <i class="fa-solid fa-arrow-left-long"></i>
                <span>Back to Shop</span>
            </a>

            <!-- Header -->
            <header>
                <div class="header-group">
                    <div class="details">
                        <h1>Sunset Polo Shirt</h1>
                        <span class="created-by">By XYZ Company</span>
                    </div>
    
                    <div class="review-rating">
                        <div class="rating">
                            <span class="number">5.0</span>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <span class="review-num">187 Reviews</span>
                    </div>
                </div>

                <div class="product-descriptions">
                    <!-- Profiles -->
                    <ul class="profiles">
                        <h2>Merchandise Profile</h2>
                        <li class="profile">
                            <img src="assets/images/icons/truck-01.svg" alt="Delivery" class="icon">
                            <p>Free and Fast Shipping at No Cost</p>
                        </li>
                        <li class="profile">
                            <img src="assets/images/icons/check-circle-broken.svg" alt="Delivery" class="icon">
                            <p>Quick-Dry Material, Ideal for Travel</p>
                        </li>
                        <li class="profile">
                            <img src="assets/images/icons/check-circle-broken.svg" alt="Delivery" class="icon">
                            <p>Wrinkle-Resistant for Fresh Look</p>
                        </li>
                        <li class="profile">
                            <img src="assets/images/icons/check-circle-broken.svg" alt="Delivery" class="icon">
                            <p>Soft Cotton for All-Day Comfort</p>
                        </li>
                    </ul>

                    <!-- Price -->
                    <div class="price-group">
                        <div class="left">
                            <span class="original-price" id="original-price">PHP 399.99</span>
                            <span class="discount">Discount available at 15%</span>
                        </div>
                        <div class="right">
                            <span class="new-price" id="discount-price">PHP 339.99</span>
                            <span class="discount">Applied Discount</span>
                        </div>
                    </div>

                    <!-- Colors -->
                    <div class="filter-group">
                        <h2>Color</h2>
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

                    <!-- Actions -->
                    <div class="actions">
                        <div class="actions-top">

                            <!-- Quantity Selector -->
                            <div class="qty-container">
                                <label for="qty-input" class="qty-title">QTY</label>
                                <div class="qty-counter">
                                    <input type="number" id="qty-input" class="qty-field" value="1" min="1" aria-label="Quantity input" readonly>
                                    <div class="qty-buttons">
                                        <button type="ghost" id="qty-add" class="qty-btn" aria-label="Increase quantity">▲</button>
                                        <button type="ghost" id="qty-subtract" class="qty-btn" aria-label="Decrease quantity">▼</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Add to Cart Button -->
                            <button class="primary cart" aria-label="Add to Cart">Add to Cart</button>

                            <!-- Share Button -->
                            <button class="ghost share" aria-label="Share this product">
                                <img src="assets/images/icons/link-04.svg" alt="Share Icon">
                            </button>
                        </div>

                        <!-- Add to Favorites Button -->
                        <button class="ghost favorites" aria-label="Add to Favorites">
                            <i class="fa-regular fa-heart" aria-hidden="true"></i>
                            <span>Add to Favorites</span>
                        </button>
                    </div>

                </div>
            </header>
        </div>

    </section>

    <!-- Product Details -->
    <section class="product-details">
        <ul role="tablist" aria-label="ProductInfo" id="product-tabs" class="tabs">
            <li class="tab" aria-selected="true" role="tab" aria-controls="panel1">Description</li>
            <li class="tab" aria-selected="false" role="tab" aria-controls="panel2">Seller</li>
            <li class="tab" aria-selected="false" role="tab" aria-controls="panel3">Reviews</li>
        </ul>
        <div class="tab-content">
            <div id="panel1" role="tabpanel" aria-hidden="false" class="tab-content-item">
                <h2>Product Description</h2>
                <p>
                    The Slate Sunset Polo Shirt combines style and functionality for the modern adventurer. This versatile polo features a sophisticated slate gray color with subtle sunset-inspired accents, perfect for both casual outings and semi-formal occasions.
                    Key Features:
                    Quick-Dry Material, Ideal for Travel
                    Wrinkle-Resistant for Fresh Look
                    Soft Cotton for All-Day Comfort
                    Whether you're jet-setting across continents or heading to a weekend brunch, this polo keeps you looking crisp and feeling relaxed. Its quick-dry fabric ensures you stay comfortable in various climates, while the wrinkle-resistant properties maintain a polished appearance throughout the day. Crafted from soft cotton, it provides unparalleled comfort for extended wear.
                    The Slate Sunset Polo Shirt is your go-to choice for effortless style and practicality.
                </p>
            </div>
            <div id="panel2" role="tabpanel" aria-hidden="true" class="tab-content-item" >
                <h2>Seller Information</h2>
                <p>Information about the seller goes here.</p>
            </div>
            <div id="panel3" role="tabpanel" aria-hidden="true" class="tab-content-item">
                <h2>Customer Reviews</h2>
                <p>Here are some reviews from customers.</p>
            </div>
        </div>
    </section>

    <!-- Related Products -->
    <section class="related-products">
        <ul class="cards">

            <article class="card item">
                <div class="image-container">
                    <img src="assets/images/items/product-07.png" class="model_img" alt="Midnight Wanderer 705">
                    <div class="top-position">
                        <span class="button badge-02">New</span>
                        <!-- <button class="icon like" aria-label="Add to Favorites" data-id="#">
                            <i class="fa-regular fa-heart"></i>
                        </button> -->
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
                    <img src="assets/images/items/product-10.png" class="model_img" alt="Midnight Wanderer 705">
                    <div class="top-position">
                        <span class="button badge-02">New</span>
                        <!-- <button class="icon like" aria-label="Add to Favorites" data-id="#">
                            <i class="fa-regular fa-heart"></i>
                        </button> -->
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
                    <img src="assets/images/items/product-11.png" class="model_img" alt="Seamless Stussy Shirt">
                    <div class="top-position">
                        <span class="button badge-02">New</span>
                        <!-- <button class="icon like" aria-label="Add to Favorites" data-id="#">
                            <i class="fa-regular fa-heart"></i>
                        </button> -->
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
    </section>

</main>