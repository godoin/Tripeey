<?php
  session_start();
  include 'core/database.php';
  $title = 'Home';
  $contentView = 'views/_Contact.php';
  include('views/GuestLayout.php');
?>