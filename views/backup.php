        <form class="billing" method="post" id="billing-form">

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
                            <input type="text" name="shipping_first_name" id="shipping_first_name" required placeholder="First Name" value="John">
                        </div>
                        <div class="field">
                            <label for="shipping_last_name">Last Name</label>
                            <input type="text" name="shipping_last_name" id="shipping_last_name" required placeholder="Last Name" value="Doe">
                        </div>
                        <div class="field">
                            <label for="shipping_middle_initial">M.I.</label>
                            <input type="text" name="shipping_middle_initial" id="shipping_middle_initial" required placeholder="M.I." value="A">
                        </div>
                    </div>
                    <div class="group">
                        <div class="field">
                            <label for="shipping_email">Email Address</label>
                            <input type="email" name="shipping_email" id="shipping_email" required placeholder="Email Address" value="johndoe@example.com">
                        </div>
                        <div class="field">
                            <label for="shipping_phone">Phone Number</label>
                            <input type="tel" name="shipping_phone" id="shipping_phone" required placeholder="Phone Number" value="+1234567890">
                        </div>
                    </div>
                    <div class="group">
                        <div class="field">
                            <label for="shipping_street_address">Street Address</label>
                            <input type="text" name="shipping_street_address" id="shipping_street_address" required placeholder="Street Address" value="123 Main St">
                        </div>
                        <div class="field">
                            <label for="shipping_city">City</label>
                            <input type="text" name="shipping_city" id="shipping_city" required placeholder="City" value="New York">
                        </div>
                    </div>
                    <div class="group">
                        <div class="field">
                            <label for="shipping_state">State</label>
                            <input type="text" name="shipping_state" id="shipping_state" required placeholder="State" value="NY">
                        </div>
                        <div class="field">
                            <label for="shipping_province">Province</label>
                            <input type="text" name="shipping_province" id="shipping_province" required placeholder="Province" value="Manhattan">
                        </div>
                        <div class="field">
                            <label for="shipping_region">Region</label>
                            <input type="text" name="shipping_region" id="shipping_region" required placeholder="Region" value="Northeast">
                        </div>
                    </div>
                    <div class="group">
                        <div class="field">
                            <label for="shipping_zip_code">Zip Code</label>
                            <input type="text" name="shipping_zip_code" id="shipping_zip_code" required placeholder="Zip Code" value="10001">
                        </div>
                        <div class="field country">
                            <label for="shipping_country">Country</label>
                            <input type="text" name="shipping_country" id="shipping_country" required placeholder="Country" value="USA">
                        </div>
                    </div>
                    <div class="field checkbox">
                        <input type="checkbox" id="same_address">
                        <label for="same_address">Billing address is the same as the shipping address.</label>
                    </div>
                </div>
            </div>


            <!-- Payment Method -->
            <div class="payment-method">
                <header>
                    <h2 class="title">Payment Method</h2>
                </header>

                <div class="fields">
                    <div class="group" id="payment-method">
                        <div class="field radio">
                            <input type="radio" id="cod" name="payment_method" value="cod" required checked>
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
                            <input type="text" name="card_number" id="card_number" required placeholder="Card Number" value="4567 1234 8901 2345"> 
                        </div>
                        <div class="field">
                            <label for="expiration_date">Expiration Date</label>
                            <input type="date" name="expiration_date" id="expiration_date" required value="2025-06-30"> 
                        </div>
                    </div>
                    <div class="group">
                        <div class="field">
                            <label for="name_card">Name on the Card</label>
                            <input type="text" name="name_card" id="name_card" required placeholder="Name on the Card" value="JANE SMITH">
                        </div>
                        <div class="field">
                            <label for="cv_code">Card Verification Code</label>
                            <input type="text" name="cv_code" id="cv_code" required placeholder="Card Verification Code" value="321"> 
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" class="primary">Save</button>
        </form>