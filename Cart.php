<?php
  session_start();
  include 'core/database.php';
  $title = 'Home';
  $contentView = 'views/_Cart.php';
  include('views/MasterLayout.php');
  