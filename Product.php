<?php
  session_start();
  include 'core/database.php';
  $title = 'Home';
  $contentView = 'views/_Product.php';
  include('views/MasterLayout.php');
  