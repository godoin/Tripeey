<?php
include_once 'core/functions.php';

if (isset($_SESSION['seller_id'])) {
  $seller_id = $_SESSION['seller_id'];
}

if (isset($_GET['category'])) {
  $category_id = $_GET['category'];
}

if (isset($_GET['product'])) {
  $product_name = $_GET['product'];
  $table_data = getProdByName('product', $product_name);
  $product = mysqli_fetch_array($table_data);
}

if (isset($_POST['cancel-order'])) {
  $product_id = $_POST['product_id'];
  $member_id = $_SESSION['member_id'];
  $quantity_bought = $_POST['quantity'];

  $res = getProductById('product', $product_id);
  $check = mysqli_fetch_assoc($res);
  $product_quantity = $check['quantity'];

  $new_quantity = $check['quantity'] + $quantity_bought;
  $update = "UPDATE product SET quantity='$new_quantity' WHERE id='$product_id'";
  mysqli_query($conn, $update);

  $delete = "DELETE FROM bill WHERE member_id = '$member_id' AND product_id = '$product_id'";
  mysqli_query($conn, $delete);
  header('location: ' . $_SERVER['REQUEST_URI']);
}

// echo '<script>alert("CHECK: ' . $category_id .'")</script>';

?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $title; ?></title>
  <!-- CSS Link -->
  <link rel="stylesheet" href="styles.css" type="text/css">
  <!-- Font Awesome Link -->
  <script src="https://kit.fontawesome.com/84e2199ce0.js" crossorigin="anonymous"></script>
  <!-- FontAwesome Offline -->
  <link rel="stylesheet" href="assets\fontawesome-web\css\all.css">
</head>

<body>

  <?php include('views/inc/header.php') ?>
  <?php include('views/inc/modals.php') ?>
  <?php include($contentView) ?>

  <?php include('views/inc/footer.php') ?>

  <!-- JS Link -->
  <script src="assets/javascript/main.js" type="text/javascript"></script>
  <script src="assets/javascript/shop.js" type="text/javascript"></script>
  <script src="assets/javascript/products.js" type="text/javascript"></script>
  <!-- <script src="assets/javascript/selector.js" type="text/javascript"></script> -->
  <script src="assets/javascript/seller.js" type="text/javascript"></script>
  <script src="assets/javascript/member.js" type="text/javascript"></script>
  <!-- <script src="assets/javascript/click.js"></script> -->
</body>

</html>