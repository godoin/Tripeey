<?php
  session_start();
  include 'core/database.php';
  $title = 'Home';
  $contentView = 'views/_Checkout.php';
  include('views/MasterLayout.php');
  