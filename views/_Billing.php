<main class="cart-container" id="stepper">
    <!-- Stepper -->
    <nav class="stepper" aria-label="Checkout Steps">
        <ul class="steps">
            <li class="step" accept>
                <div class="step-progress">
                    <div class="progress-circle" aria-hidden="true">
                        <span class="step-number">01</span>
                    </div>
                    <div class="horizontal-line" aria-hidden="true"></div>
                </div>
                <section class="step-content">
                    <div class="group">
                        <span class="step-label">Step 01</span>
                        <h1 class="title">Shopping Cart</h1>
                    </div>
                    <p class="description">Review the items you've added to your shopping cart. Here, you can update quantities, remove items, and see the total cost, including any applicable taxes and discounts. Ensure everything looks correct before proceeding to the next step.</p>
                </section>
            </li>
            <li class="step" aria-current="step" active>
                <div class="step-progress">
                    <div class="progress-circle" aria-hidden="true">
                        <span class="step-number">02</span>
                    </div>
                    <div class="horizontal-line" aria-hidden="true"></div>
                </div>
                <section class="step-content">
                    <div class="group">
                        <span class="step-label">Step 02</span>
                        <h1 class="title">Billing & Payment</h>
                    </div>
                    <p class="description">Enter your billing information and choose your preferred payment method. We accept various payment options, including credit/debit cards, PayPal, and other secure payment gateways. Make sure your billing details match the information on your payment method to avoid any issues.</p>
                </section>
            </li>
            <li class="step">
                <div class="step-progress">
                    <div class="progress-circle" aria-hidden="true">
                        <span class="step-number">03</span>
                    </div>
                    <div class="horizontal-line" aria-hidden="true"></div>
                </div>
                <section class="step-content">
                    <div class="group">
                        <span class="step-label">Step 03</span>
                        <h1 class="title">Checkout</h1>
                    </div>
                    <p class="description">Complete your purchase by providing your shipping information and reviewing your order details. Confirm your delivery address, shipping method, and order summary. Once everything is confirmed, submit your order to finalize your purchase. You will receive an order confirmation email shortly after.</p>
                </section>
            </li>
        </ul>
    </nav>

    <!-- Content -->
    <form class="content billing-content" id="billing-form" method="post">

        <section class="form">

            <div class="billing-information">
                <header>
                    <h2 class="title">Billing Information</h2>
                </header>
                <div class="fields">
                    <div class="group full_name">
                        <div class="field" id="billing_first_name">
                            <label for="billing_first_name">First Name</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="billing_first_name" placeholder="First Name"> 
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>
                                </div>
                            </div>
                        </div>
                        <div class="field" id="billing_last_name">
                            <label for="billing_last_name">Last Name</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="billing_last_name" placeholder="Last Name">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                        <div class="field" id="billing_middle_initial">
                            <label for="billing_middle_initial">M.I.</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="billing_middle_initial" placeholder="M.I."> 
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <div class="field" id="billing_email">
                            <label for="billing_email">Email Address</label>
                            <div class="input-wrapper">
                                <input class="input" type="email" name="billing_email" placeholder="Email Address">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                        <div class="field" id="billing_phone_number">
                            <label for="billing_phone">Phone Number</label>
                            <div class="input-wrapper">
                                <input class="input" type="tel" name="billing_phone_number" placeholder="Phone Number">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <div class="field" id="billing_street_address">
                            <label for="billing_street_address">Street Address</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="billing_street_address" placeholder="Street Address">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                        <div class="field" id="billing_city">
                            <label for="billing_city">City</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="billing_city" placeholder="City">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <div class="field" id="billing_state">
                            <label for="billing_state">State</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="billing_state" placeholder="State">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                        <div class="field" id="billing_province">
                            <label for="billing_province">Province</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="billing_province" placeholder="Province">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                        <div class="field" id="billing_region">
                            <label for="billing_region">Region</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="billing_region" placeholder="Region">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <div class="field" id="billing_zip_code">
                            <label for="billing_zip_code">Zip Code</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="billing_zip_code" placeholder="Zip Code">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                        <div class="field country" id="billing_country">
                            <label for="billing_country">Country</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="billing_country" placeholder="Country">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Shipping Information -->
            <div class="shipping-information">
                <header>
                    <h2 class="title">Shipping Information</h2>
                </header>
                <div class="fields">
                    <div class="group full_name">
                        <div class="field" id="shipping_first_name">
                            <label for="shipping_first_name">First Name</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="shipping_first_name" placeholder="First Name">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>
                                </div>
                            </div>
                        </div>
                        <div class="field" id="shipping_last_name">
                            <label for="shipping_last_name">Last Name</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="shipping_last_name" placeholder="Last Name">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                        <div class="field" id="shipping_middle_initial">
                            <label for="shipping_middle_initial">M.I.</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="shipping_middle_initial" placeholder="M.I.">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <div class="field" id="shipping_email">
                            <label for="shipping_email">Email Address</label>
                            <div class="input-wrapper">
                                <input class="input" type="email" name="shipping_email" placeholder="Email Address">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                        <div class="field" id="shipping_phone_number">
                            <label for="shipping_phone">Phone Number</label>
                            <div class="input-wrapper">
                                <input class="input" type="tel" name="shipping_phone_number" placeholder="Phone Number">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <div class="field" id="shipping_street_address">
                            <label for="shipping_street_address">Street Address</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="shipping_street_address" placeholder="Street Address">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                        <div class="field" id="shipping_city">
                            <label for="shipping_city">City</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="shipping_city" placeholder="City">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <div class="field" id="shipping_state">
                            <label for="shipping_state">State</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="shipping_state" placeholder="State">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                        <div class="field" id="shipping_province">
                            <label for="shipping_province">Province</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="shipping_province" placeholder="Province">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                        <div class="field" id="shipping_region">
                            <label for="shipping_region">Region</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="shipping_region" placeholder="Region">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <div class="field" id="shipping_zip_code">
                            <label for="shipping_zip_code">Zip Code</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="shipping_zip_code" placeholder="Zip Code">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                        <div class="field country" id="shipping_country">
                            <label for="shipping_country">Country</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="shipping_country" placeholder="Country">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field checkbox" id="shipping_same_address">
                        <input class="input" name="shipping_same_address" type="checkbox">
                        <label for="shipping_same_address">Billing address is the same as the shipping address.</label>
                    </div>
                </div>
            </div>

            <!-- Payment Method -->
            <div class="payment-method">
                <header>
                    <h2 class="title">Payment Method</h2>
                </header>
                
                <div class="fields">
                    <div class="group" id="payment_method_card">
                        <div class="field radio" id="cod">
                            <input class="input" type="radio" name="payment_method" value="cod" checked>
                            <label for="cod">Cash on Delivery</label>
                        </div>
                        <div class="field radio" id="digital_wallet">
                            <input class="input" type="radio" name="payment_method" value="digital_wallet">
                            <label for="digital_wallet">Digital Wallet</label>
                        </div>
                        <div class="field radio" id="paypal">
                            <input class="input" type="radio" name="payment_method" value="paypal">
                            <label for="paypal">PayPal</label>
                        </div>
                    </div>
                    <div class="group">
                        <div class="field" id="payment_method_card_number">
                            <label for="card_number">Card Number</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="payment_method_card_number" placeholder="Card Number"> 
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>
                                </div>
                            </div>
                        </div>
                        <div class="field" id="payment_method_expiration_date">
                            <label for="expiration_date">Expiration Date</label>
                            <div class="input-wrapper">
                                <input class="input" type="date" name="payment_method_expiration_date"> 
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <div class="field" id="payment_method_name_card">
                            <label for="name_card">Name on the Card</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="payment_method_name_card" placeholder="Name on the Card">
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>

                                </div>
                            </div>
                        </div>
                        <div class="field" id="payment_method_cv_code">
                            <label for="cv_code">Card Verification Code</label>
                            <div class="input-wrapper">
                                <input class="input" type="text" name="payment_method_cv_code" placeholder="Card Verification Code"> 
                                <div class="tooltip">
                                    <span class="tooltip-message">This is a tool tip.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Summary -->
        <section class="summary" id="cart-summary">
            <!-- Header -->
            <header>
                <h2 class="title">Order Summary</h2>
            </header>
            
            <!-- Delivery -->
            <div class="delivery" id="delivery-summary">
                <div class="group">
                    <h3 id="deliveryOptions" class="section-title">Delivery Info</h3>
                    <span id="or-number" class="order-number">#OR-3421</span>
                </div>
                <ul id="delivery-tabs" class="delivery-tabs" role="tablist" aria-labelledby="deliveryOptions">
                    <li class="tab" role="tab" aria-selected="true" selected>Standard</li>
                    <li class="tab" role="tab" aria-selected="false">Express</li>
                    <li class="tab" role="tab" aria-selected="false">Overnight</li>
                </ul>
                <!-- Data Column -->
                <ul class="data-column delivery-details">
                    <li class="row">
                        <h4 class="detail-title">Est. Date</h4>
                        <span id="est-date" class="detail-data">01/01/2028</span>
                    </li>
                    <li class="row">
                        <h4 class="detail-title">Est. Time</h4>
                        <span id="est-time" class="detail-data">7:00 PM</span>
                    </li>
                </ul>
            </div>
            
            <!-- Products -->
            <div class="products-summary" id="products-summary">
                <div class="group">
                    <h3 class="section-title">Products</h3>
                    <span id="product-total" class="product-total">PHP 1,769.25</span>
                </div>
                <!-- Data Column -->
                <ul class="data-column product-list" id="products-summary-list">
                    <li class="row">
                        <h4 class="product-name">T-Shirt</h4>
                        <span class="product-quantity">2</span>
                    </li>
                    <li class="row">
                        <h4 class="product-name">Long-sleeves</h4>
                        <span class="product-quantity">1</span>
                    </li>
                    <li class="row">
                        <h4 class="product-name">Polo Shirt</h4>
                        <span class="product-quantity">2</span>
                    </li>
                </ul>
            </div>
            
            <!-- Subtotal -->
            <div class="subtotal-summary" id="subtotal-summary">
                <div class="group">
                    <h3 class="section-title">Subtotal</h3>
                    <span id="subtotal-price" class="subtotal-price">PHP 1,769.25</span>
                </div>
                <!-- Data Column -->
                <ul class="data-column subtotal-list" id="subtotal-list-summary">
                    <li class="row">
                        <h4 class="name">Discount</h4>
                        <span class="price">PHP 0.00</span>
                    </li>
                    <li class="row">
                        <h4 class="name">Delivery</h4>
                        <span class="price">PHP 0.00</span>
                    </li>
                    <li class="row">
                        <h4 class="name">Tax</h4>
                        <span class="price">PHP 123.90</span>
                    </li>
                </ul>
            </div>
            
            <!-- Total -->
            <div class="total-summary" id="total-summary">
                <div class="group">
                    <h3 class="section-title">Total</h3>
                    <span class="total-price" id="total-price">PHP 1,646.05</span>
                </div>
            </div>

            <!-- Actions -->
            <div class="actions">
                <button type="submit" class="primary">Proceed to Checkout</button>
                <button type="button"  class="outline">Continue Later</button>
            </div>
        </section>

    </form>
</main>
