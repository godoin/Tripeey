<main class="login-container">
    
    <!-- Login Form -->
    <form action="" class="login" method="post" id="login-form">
        <header>
            <img src="assets/images/logo-solo.png" alt="Tripeey" class="logo">
            <h1 class="title">Welcome Back</h1>
        </header>
        <div class="fields">
            <div class="message main error" id="error-main">
                <div class="group">
                    <img src="assets/images/icons/error.svg" alt="Error">
                    <p class="text error"></p>
                </div>
            </div>
            <div class="field">
                <label for="email" class="">Email*</label>
                <input type="email" name="email" id="email" placeholder="e.g., test@test.com">
                <div class="message" id="error-email">
                    <span class="text error"></span>
                </div>
            </div>
            <div class="field">
                <label for="password" class="">Password*</label>
                <div class="input_wrapper">
                    <input type="password" name="password" id="password-input" placeholder="e.g., tester123">
                    <span class="ghost" id="password-btn">
                        <img src="assets/images/icons/eye.svg" id="password-icon" alt="Show Password">
                    </span>
                </div>
                <div class="message" id="error-pass">
                    <span class="text error"></span>
                </div>
            </div>
        </div>
        <div class="actions">
            <button type="submit" class="primary">Sign in</button>
        </div>
        <div class="description">
            By continuing, you agree to Tripeey's <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>.
        </div>
    </form>

    <!-- Image Container -->
    <section class="image-container">
        <img src="assets/images/Tripeey.jpg" alt="Tripeey Templates" class="img-show">
    </section>
</main>