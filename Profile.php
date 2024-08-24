<?php
  session_start();
  include 'core/database.php';
  $title = 'Home';
  $contentView = 'views/_Profile.php';
  include('views/GuestLayout.php');
?>