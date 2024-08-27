<?php
  session_start();
  include 'core/database.php';
  $title = 'Home';
  $contentView = 'views/_Shop.php';
  include('views/GuestLayout.php');
  