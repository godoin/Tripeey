<?php
    $uri = parse_url($_SERVER['REQUEST_URI'])['path'];

    // echo $uri;

    $routes = [
        '/' => 'controllers/index.php',
        '/billing' => 'controllers/billing.php',
        '/cart' => 'controllers/cart.php',
        '/checkout' => 'controllers/checkout.php',
        '/contact' => 'controllers/contact.php',
        '/faqs' => 'controllers/faqs.php',
        '/login' => 'controllers/login.php',
        '/product' => 'controllers/product.php',
        '/profile' => 'controllers/profile.php',
        '/shop' => 'controllers/shop.php',
    ];

    function abort($code = 404) {
        http_response_code($code);

        require(`views/{$code}.php`);

        die();
    }
    function routeToController($uri, $routes) {
        if(array_key_exists($uri, $routes)) {
            require $routes[$uri];
        } else {
            http_response_code(404);
    
            require('views/404.php');
    
            die();
        }
    }

    routeToController($uri, $routes);
