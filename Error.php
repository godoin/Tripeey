<?php
  session_start();
  include 'core/database.php';
  $title = 'Home';
  $contentView = 'views/_FAQs.php';
  include('views/GuestLayout.php');
?>