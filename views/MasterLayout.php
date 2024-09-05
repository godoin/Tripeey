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
  <meta name="#" content="#">

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
    
    <?php include('views/inc/Footer.php') ?>
  </div>


  <!-- JS Link -->
  <script src="js/index.js" type="text/javascript"></script>
  <script src="js/ui/menu_toggle.js" type="text/javascript"></script>
  <script src="js/ui/password_toggle.js" type="text/javascript"></script>
  <script src="js/ui/radio_checkbox_toggle.js" type="text/javascript"></script>
  <script src="js/ui/cart_quantity_manager.js" type="text/javascript"></script>
  <script src="js/ui/product_quantity_manager.js" type="text/javascript"></script>
  <script src="js/ui/tab_toggle.js" type="text/javascript"></script>
  <script src="js/ui/form.js" type="text/javascript"></script>
  <script src="js/ui/shop.js" type="text/javascript"></script>
  <!-- <script src="js/utils.js" type="module"></script> -->
</body>

</html>