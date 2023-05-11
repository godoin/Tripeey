<?php
include 'core/functions.php';
$seller_id = $_SESSION['seller_id'];

if(isset($_GET['category'])) {
  $category_id = $_GET['category'];
} 

// echo '<script>alert("CHECK: ' . $category_id .'")</script>';
// echo '<script>alert("CHECK: ' . $seller_id .'")</script>';
?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $title; ?></title>
  <!-- CSS Link -->
  <link rel="stylesheet" href="main.css" type="text/css">
  <!-- Font Awesome Link -->
  <script src="https://kit.fontawesome.com/84e2199ce0.js" crossorigin="anonymous"></script>
</head>

<body>

  <?php include('views/inc/header.php') ?>
  <?php include('views/inc/modals.php') ?>
  <?php include($contentView) ?>
  <?php include('views/inc/footer.php') ?>

  <!-- JS Link -->
  <script src="assets/javascript/main.js"></script>
  <script src="assets/javascript/shop.js"></script>
  <script src="assets/javascript/rating.js"></script>
</body>

</html>