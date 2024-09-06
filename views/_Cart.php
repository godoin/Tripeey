<main class="cart-container">
    <!-- Stepper -->
    <nav class="stepper" aria-label="Checkout Steps">
        <ul class="steps">
            <li class="step" aria-current="step" active>
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

        <section class="cart-items" id="cart-container">
            <div class="message" id="empty-cart">
                <span class="text info">No products found. Start Shopping!</span>
            </div>
        </section>

        <!-- Summary -->
        <section class="summary" id="cart-summary">
            <!-- Header -->
            <header>
                <h2 class="title">Order Summary</h2>
            </header>
            
            <!-- Delivery -->
            <div class="delivery">
                <div class="group">
                    <h3 id="deliveryOptions" class="section-title">Delivery Info</h3>
                    <span class="order-number">#OR-3421</span>
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
