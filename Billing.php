<?php
  session_start();
  include 'core/database.php';
  $title = 'Home';
  $contentView = 'views/_Billing.php';
  include('views/MasterLayout.php');
  