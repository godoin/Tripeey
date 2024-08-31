<main class="cart-container">
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
    <div class="content">

        <form class="billing" method="post">

            <!-- Billing Information -->
            <div class="billing-information">
                <header>
                    <h2 class="title">Billing Information</h2>
                </header>
                <div class="fields">
                    <div class="group full_name">
                        <div class="field">
                            <label for="billing_first_name">First Name</label>
                            <input type="text" name="billing_first_name" id="billing_first_name" required placeholder="First Name">
                        </div>
                        <div class="field">
                            <label for="billing_last_name">Last Name</label>
                            <input type="text" name="billing_last_name" id="billing_last_name" required placeholder="Last Name">
                        </div>
                        <div class="field">
                            <label for="billing_middle_initial">M.I.</label>
                            <input type="text" name="billing_middle_initial" id="billing_middle_initial" required placeholder="M.I.">
                        </div>
                    </div>
                    <div class="group">
                        <div class="field">
                            <label for="billing_email">Email Address</label>
                            <input type="email" name="billing_email" id="billing_email" required placeholder="Email Address">
                        </div>
                        <div class="field">
                            <label for="billing_phone">Phone Number</label>
                            <input type="tel" name="billing_phone" id="billing_phone" required placeholder="Phone Number">
                        </div>
                    </div>
                    <div class="group">
                        <div class="field">
                            <label for="billing_street_address">Street Address</label>
                            <input type="text" name="billing_street_address" id="billing_street_address" required placeholder="Street Address">
                        </div>
                        <div class="field">
                            <label for="billing_city">City</label>
                            <input type="text" name="billing_city" id="billing_city" required placeholder="City">
                        </div>
                    </div>
                    <div class="group">
                        <div class="field">
                            <label for="billing_state">State</label>
                            <input type="text" name="billing_state" id="billing_state" required placeholder="State">
                        </div>
                        <div class="field">
                            <label for="billing_province">Province</label>
                            <input type="text" name="billing_province" id="billing_province" required placeholder="Province">
                        </div>
                        <div class="field">
                            <label for="billing_region">Region</label>
                            <input type="text" name="billing_region" id="billing_region" required placeholder="Region">
                        </div>
                    </div>
                    <div class="group">
                        <div class="field">
                            <label for="billing_zip_code">Zip Code</label>
                            <input type="text" name="billing_zip_code" id="billing_zip_code" required placeholder="Zip Code">
                        </div>
                        <div class="field country">
                            <label for="billing_country">Country</label>
                            <input type="text" name="billing_country" id="billing_country" required placeholder="Country">
                        </div>
                    </div>
                    <div class="field checkbox">
                        <input type="checkbox" id="same_address">
                        <label for="same_address">Billing address is the same as the shipping address.</label>
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
                        <div class="field">
                            <label for="shipping_first_name">First Name</label>
                            <input type="text" name="shipping_first_name" id="shipping_first_name" required placeholder="First Name">
                        </div>
                        <div class="field">
                            <label for="shipping_last_name">Last Name</label>
                            <input type="text" name="shipping_last_name" id="shipping_last_name" required placeholder="Last Name">
                        </div>
                        <div class="field">
                            <label for="shipping_middle_initial">M.I.</label>
                            <input type="text" name="shipping_middle_initial" id="shipping_middle_initial" required placeholder="M.I.">
                        </div>
                    </div>
                    <div class="group">
                        <div class="field">
                            <label for="shipping_email">Email Address</label>
                            <input type="email" name="shipping_email" id="shipping_email" required placeholder="Email Address">
                        </div>
                        <div class="field">
                            <label for="shipping_phone">Phone Number</label>
                            <input type="tel" name="shipping_phone" id="shipping_phone" required placeholder="Phone Number">
                        </div>
                    </div>
                    <div class="group">
                        <div class="field">
                            <label for="shipping_street_address">Street Address</label>
                            <input type="text" name="shipping_street_address" id="shipping_street_address" required placeholder="Street Address">
                        </div>
                        <div class="field">
                            <label for="shipping_city">City</label>
                            <input type="text" name="shipping_city" id="shipping_city" required placeholder="City">
                        </div>
                    </div>
                    <div class="group">
                        <div class="field">
                            <label for="shipping_state">State</label>
                            <input type="text" name="shipping_state" id="shipping_state" required placeholder="State">
                        </div>
                        <div class="field">
                            <label for="shipping_province">Province</label>
                            <input type="text" name="shipping_province" id="shipping_province" required placeholder="Province">
                        </div>
                        <div class="field">
                            <label for="shipping_region">Region</label>
                            <input type="text" name="shipping_region" id="shipping_region" required placeholder="Region">
                        </div>
                    </div>
                    <div class="group">
                        <div class="field">
                            <label for="shipping_zip_code">Zip Code</label>
                            <input type="text" name="shipping_zip_code" id="shipping_zip_code" required placeholder="Zip Code">
                        </div>
                        <div class="field country">
                            <label for="shipping_country">Country</label>
                            <input type="text" name="shipping_country" id="shipping_country" required placeholder="Country">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Payment Method -->
            <div class="payment-method">
                <header>
                    <h2 class="title">Payment Method</h2>
                </header>

                <div class="fields">
                    <div class="group">
                        <div class="field radio">
                            <input type="radio" id="cod" name="payment_method" value="cod" required>
                            <label for="cod">Card on Delivery</label>
                        </div>
                        <div class="field radio">
                            <input type="radio" id="digital_wallet" name="payment_method" value="digital_wallet">
                            <label for="digital_wallet">Digital Wallet</label>
                        </div>
                        <div class="field radio">
                            <input type="radio" id="paypal" name="payment_method" value="paypal">
                            <label for="paypal">PayPal</label>
                        </div>
                    </div>
                    <div class="group">
                        <div class="field">
                            <label for="card_number">Card Number</label>
                            <input type="text" name="card_number" id="card_number" required placeholder="Card Number">
                        </div>
                        <div class="field">
                            <label for="expiration_date">Expiration Date</label>
                            <input type="date" name="expiration_date" id="expiration_date" required>
                        </div>
                    </div>
                    <div class="group">
                        <div class="field">
                            <label for="name_card">Name on the Card</label>
                            <input type="text" name="name_card" id="name_card" required placeholder="Name on the Card">
                        </div>
                        <div class="field">
                            <label for="cv_code">Card Verification Code</label>
                            <input type="text" name="cv_code" id="cv_code" required placeholder="Card Verification Code">
                        </div>
                    </div>
                </div>
            </div>
        </form>

        <!-- Summary -->
        <section class="summary">
            <!-- Header -->
            <header>
                <h2 class="title">Order Summary</h2>
            </header>
            
            <!-- Delivery -->
            <div class="delivery">
                <div class="group">
                    <h3 class="section-title">Delivery Info</h3>
                    <span class="order-number">#OR-3421</span>
                </div>
                <ul class="delivery-tabs" role="tablist">
                    <li class="tab" role="tab" aria-selected="true">Standard</li>
                    <li class="tab" role="tab" aria-selected="false">Express</li>
                    <li class="tab" role="tab" aria-selected="false">Overnight</li>
                </ul>
                <!-- Data Column -->
                <ul class="data-column delivery-details">
                    <li class="row">
                        <h4 class="detail-title">Est. Date</h4>
                        <span class="detail-data">01/01/2028</span>
                    </li>
                    <li class="row">
                        <h4 class="detail-title">Est. Time</h4>
                        <span class="detail-data">7:00 PM</span>
                    </li>
                </ul>
            </div>
            
            <!-- Products -->
            <div class="products-summary">
                <div class="group">
                    <h3 class="section-title">Products</h3>
                    <span class="product-total">PHP 1,769.25</span>
                </div>
                <!-- Data Column -->
                <ul class="data-column product-list">
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
            <div class="subtotal-summary">
                <div class="group">
                    <h3 class="section-title">Subtotal</h3>
                    <span class="subtotal-price">PHP 1,769.25</span>
                </div>
                <!-- Data Column -->
                <ul class="data-column subtotal-list">
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
            <div class="total-summary">
                <div class="group">
                    <h3 class="section-title">Total</h3>
                    <span class="total-price">PHP 1,646.05</span>
                </div>
            </div>

            <!-- Actions -->
            <div class="actions">
                <button class="primary">Proceed to Billing</button>
                <button class="outline">Continue Later</button>
            </div>
        </section>

    </div>
</main>
