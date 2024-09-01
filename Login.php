<?php
  session_start();
  include 'core/database.php';
  $title = 'Home';
  $contentView = 'views/_Login.php';
  include('views/LoginLayout.php');
?>