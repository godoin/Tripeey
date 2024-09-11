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
            <li class="step">
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
            <li class="step" aria-current="step" active>
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
    <form class="content cart" id="checkout-form" method="post">

        <section class="form">
            <!-- Cart -->
            <section class="cart">
                <details class="accordion-item">
                    <summary>
                        <h2>Shopping Cart</h2>
                    </summary>
                    <div class="accordion-content">
                        <div class="cart-items" id="cart-container">
                            
                        </div>
                    </div>
                </details>
            </section>
            <!-- Shipping Information -->
            <section class="shipping-information">
                <details class="accordion-item">
                    <summary>
                        <h2>Shipping Information</h2>
                    </summary>
                    <div class="accordion-content">
                        <div class="fields">
                            <div class="group full_name">
                                <div class="field">
                                    <label for="shipping_first_name">First Name</label>
                                    <input type="text" name="shipping_first_name" id="shipping_first_name" required placeholder="First Name" readonly disabled>
                                </div>
                                <div class="field">
                                    <label for="shipping_last_name">Last Name</label>
                                    <input type="text" name="shipping_last_name" id="shipping_last_name" required placeholder="Last Name" readonly disabled>
                                </div>
                                <div class="field">
                                    <label for="shipping_middle_initial">M.I.</label>
                                    <input type="text" name="shipping_middle_initial" id="shipping_middle_initial" required placeholder="M.I." readonly disabled>
                                </div>
                            </div>
                            <div class="group">
                                <div class="field">
                                    <label for="shipping_email">Email Address</label>
                                    <input type="email" name="shipping_email" id="shipping_email" required placeholder="Email Address" readonly disabled>
                                </div>
                                <div class="field">
                                    <label for="shipping_phone">Phone Number</label>
                                    <input type="tel" name="shipping_phone" id="shipping_phone" required placeholder="Phone Number" readonly disabled>
                                </div>
                            </div>
                            <div class="group">
                                <div class="field">
                                    <label for="shipping_street_address">Street Address</label>
                                    <input type="text" name="shipping_street_address" id="shipping_street_address" required placeholder="Street Address" readonly disabled>
                                </div>
                                <div class="field">
                                    <label for="shipping_city">City</label>
                                    <input type="text" name="shipping_city" id="shipping_city" required placeholder="City" readonly disabled>
                                </div>
                            </div>
                            <div class="group">
                                <div class="field">
                                    <label for="shipping_state">State</label>
                                    <input type="text" name="shipping_state" id="shipping_state" required placeholder="State" readonly disabled>
                                </div>
                                <div class="field">
                                    <label for="shipping_province">Province</label>
                                    <input type="text" name="shipping_province" id="shipping_province" required placeholder="Province" readonly disabled>
                                </div>
                                <div class="field">
                                    <label for="shipping_region">Region</label>
                                    <input type="text" name="shipping_region" id="shipping_region" required placeholder="Region" readonly disabled>
                                </div>
                            </div>
                            <div class="group">
                                <div class="field">
                                    <label for="shipping_zip_code">Zip Code</label>
                                    <input type="text" name="shipping_zip_code" id="shipping_zip_code" required placeholder="Zip Code" readonly disabled>
                                </div>
                                <div class="field country">
                                    <label for="shipping_country">Country</label>
                                    <input type="text" name="shipping_country" id="shipping_country" required placeholder="Country" readonly disabled>
                                </div>
                            </div>
                        </div>
                    </div>
                </details>
            </section>

            <!-- Payment Method -->
            <section class="payment-method">
                <details class="accordion-item" open>
                    <summary>
                        <h2 class="title">Payment Method</h2>
                    </summary>
                    <div class="accordion-content">
                        <div class="fields">
                            <div class="group" id="payment_method">
                                <div class="field radio">
                                    <input type="radio" id="cod" name="payment_method" value="cod" checked disabled>
                                    <label for="cod">Card on Delivery</label>
                                </div>
                                <div class="field radio">
                                    <input type="radio" id="digital_wallet" name="payment_method" value="digital_wallet" disabled>
                                    <label for="digital_wallet">Digital Wallet</label>
                                </div>
                                <div class="field radio">
                                    <input type="radio" id="paypal" name="payment_method" value="paypal" disabled>
                                    <label for="paypal">PayPal</label>
                                </div>
                            </div>
                            <div class="group">
                                <div class="field">
                                    <label for="card_number">Card Number</label>
                                    <input type="text" name="shipping_card_number" id="shipping_card_number" required placeholder="Card Number" readonly disabled>
                                </div>
                                <div class="field">
                                    <label for="expiration_date">Expiration Date</label>
                                    <input type="date" name="shipping_expiration_date" id="shipping_expiration_date" required readonly disabled>
                                </div>
                            </div>
                            <div class="group">
                                <div class="field">
                                    <label for="name_card">Name on the Card</label>
                                    <input type="text" name="shipping_name_card" id="shipping_name_card" required placeholder="Name on the Card" readonly disabled>
                                </div>
                                <div class="field">
                                    <label for="cv_code">Card Verification Code</label>
                                    <input type="text" name="shipping_cv_code" id="shipping_cv_code" required placeholder="Card Verification Code" readonly disabled>
                                </div>
                            </div>
                        </div>
                    </div>
                </details>
            </section>
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
                <button type="submit" class="primary">Proceed to Billing</button>
                <button type="button"  class="outline">Continue Later</button>
            </div>
        </section>

    </form>
</main>
