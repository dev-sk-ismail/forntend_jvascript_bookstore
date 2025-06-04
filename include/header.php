<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Essential Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="The Kagazi - Your online bookstore. Explore a wide range of academic and general books with delivery at your doorstep.">
    <meta name="keywords" content="online bookstore, The Kagazi, buy books online, academic books, general books, book reviews, order books">
    <meta name="author" content="The Kagazi Online Bookstore">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="The Kagazi - Online Bookstore">
    <meta property="og:description" content="Discover and order your favorite books at The Kagazi, your trusted online bookstore. Wide selection of academic and general books.">
    <meta property="og:image" content="path_to_your_image.jpg"> <!-- Replace with your bookstore's image URL -->
    <meta property="og:url" content="https://www.yourwebsite.com"> <!-- Replace with your website URL -->
    <meta property="og:site_name" content="The Kagazi Online Bookstore">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="The Kagazi - Online Bookstore">
    <meta name="twitter:description" content="Shop a wide range of academic and general books at The Kagazi. Your favorite books delivered to your doorstep.">
    <meta name="twitter:image" content="path_to_your_image.jpg"> <!-- Replace with your bookstore's image URL -->

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">



    <!-- ---------------JQuery css -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">

    <!-- ----------------------------FONT AWESOME only needs a JS -->
    <script src="https://kit.fontawesome.com/1e81e6ec6a.js" crossorigin="anonymous"></script>

    <!-- Custom CSS -->
    <link rel="stylesheet" href="styles.css"> <!-- Your custom styles -->

    <!-- Favicon and Title -->
    <link rel="icon" type="image/jpeg" href="files/logo-icon.jpeg">
    <title>The Kagazi - Online Bookstore</title>
</head>

<body>

    <!-- Header Section -->
    <header class="py-1">
        <section>
            <div class="pre-nav d-none d-lg-flex">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 d-flex align-items-center justify-content-between">
                            <div class="pre-nav-msg">
                                <div id="carouselExampleFade" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active" data-bs-interval="4000">
                                            <div class="search-div container d-flex justify-content-between align-items-center">
                                                <a href="academics.php#target-search-academic"><input type="search" class="search-input" id="" placeholder="Search for Academic Books"></a>
                                            </div>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="4000">
                                            <div class="search-div container d-flex justify-content-between align-items-center">
                                                <a href="general.php#target-search-general"><input type="search" class="search-input" id="" placeholder="Search for Non-academic Books"></a>
                                            </div>
                                        </div>
                                        <div class="carousel-item py-1 mx-2">
                                            <span>Can' find some books ?</span>
                                            <a href="contacts.php btn" class="px-2"><em>REQUEST HERE</em></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pre-nav-links">
                                <div>
                                    <a class="phone-link"><i class="fa-solid fa-phone-flip"></i></a>
                                </div>
                                <div>
                                    <a class="wtsp-link"><i class="fa-brands fa-whatsapp"></i></a>
                                </div>
                                <div>
                                    <a class="mail-link"><i class="fa-regular fa-envelope"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">

                        </div>
                    </div>
                </div>

            </div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid container">
                    <!-- Toggle button for collapsed menu -->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
                    </button>

                    <!-- Logo (brand) -->
                    <div class="navbar-brand">
                        <a href="index.php">
                            <img src="files/logo1.png" alt="Logo" class="logo-img" width="100">
                        </a>
                    </div>


                    <!-- Navigation items -->
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="index.php">
                                    HOME
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="academics.php">
                                    ACADEMIC BOOKS
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="general.php">
                                    ALL BOOKS
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    EXPLORE
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="contactS.php">CONTACTS</a>
                                    <a class="dropdown-item" href="about.php">KNOW US</a>
                                    <a class="dropdown-item" href="reviews.php">BOOK REVIEWS</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown language-select">
                                <a class="nav-link dropdown-toggle fs-6" id="services" href="#services" role="button" data-bs-toggle="dropdown" aria-expanded="false" tabindex="2">
                                    <i class="fa-solid fa-language" aria-hidden="true"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button" onclick="translatePage('en');">English</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="translatePage('hi');">Hindi</button></li>
                                    <li><button class="dropdown-item" type="button" onclick="translatePage('bn');">Bengali</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <!-- Call button when navbar collapse -->
                    <div class="nav-call-btn d-block d-lg-none">
                        <a class="wtsp-link"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
            </nav>
        </section>
    </header>


    <!-- Main Content -->
    <main role="main">