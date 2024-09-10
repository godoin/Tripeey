<?php
include_once 'core/functions.php';

?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title><?php echo $title; ?></title>
  <link rel="stylesheet" href="assets/css/global.css" type="text/css">
  <link rel="stylesheet" href="assets/css/common.css" type="text/css">
  <link rel="stylesheet" href="assets/css/layout.css" type="text/css">
  <link rel="stylesheet" href="assets/css/index.css" type="text/css">
  <link rel="stylesheet" href="assets/css/auth.css" type="text/css">
  <link rel="stylesheet" href="assets/css/support.css" type="text/css">
  <link rel="stylesheet" href="assets/css/profile.css" type="text/css">
  <link rel="stylesheet" href="assets/css/shop.css" type="text/css">
  <link rel="stylesheet" href="assets/css/product.css" type="text/css">
  <link rel="stylesheet" href="assets/css/cart.css" type="text/css">
  <link rel="stylesheet" href="assets/css/billing.css" type="text/css">
  <script src="https://kit.fontawesome.com/84e2199ce0.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="assets/fontawesome-web/css/all.css">
</head>

<body>
  <div class="loader-container" id="loader">
    <div id="spinner"></div>
  </div>
  <div class="container" id="content">
    <?php include('views/inc/Navbar.php') ?>
    
    <?php include($contentView) ?>
  </div>

  <!-- JS Link -->
  <script src="js/index.js" type="module"></script>
  <script src="js/utils.js" type="module"></script>
  
  <!-- Product Scripts -->
  <script src="js/product/favorite.js" type="module"></script>
  <script src="js/product/productQuantityManager.js" type="module"></script>
  <script src="js/product/radioCheckboxToggle.js" type="module"></script>
  
  <!-- Auth Scripts -->
  <script src="js/auth/auth.js" type="module"></script>
  <script src="js/auth/formValidation.js" type="module"></script>
  <script src="js/auth/passwordToggle.js" type="module"></script>

  <!-- Shop Scripts -->
  <script src="js/shop/shop.js" type="module"></script>
  <script src="js/shop/filters.js" type="module"></script>
  <script src="js/shop/shopUtils.js" type="module"></script>
  
  <!-- Shared Scripts -->
  <script src="js/shared/apiUtils.js" type="module"></script>
  <script src="js/shared/domUtils.js" type="module"></script>
  <script src="js/shared/eventHandlers.js" type="module"></script>
  <script src="js/shared/formUtils.js" type="module"></script>
  <script src="js/shared/tabToggle.js" type="module"></script>
  <script src="js/shared/menuToggle.js" type="module"></script>

  <!-- Stepper Scripts -->
  <script src="js/stepper/stepper.js" type="module"></script>
  <script src="js/stepper/formValidation.js" type="module"></script>
  <script src="js/stepper/stepperUtils.js" type="module"></script>

  <!-- Cart Scripts -->
  <script src="js/stepper/cart/cart.js" type="module"></script>
  <script src="js/stepper/cart/cartQuantityManager.js" type="module"></script>
  
  <!-- Billing Scripts -->
  <script src="js/stepper/billing/billing.js" type="module"></script>

  <!-- Checkout Scripts -->
  <script src="js/stepper/checkout/checkout.js" type="module"></script>
</body>

</html>