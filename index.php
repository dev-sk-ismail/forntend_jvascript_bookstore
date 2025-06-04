<?php include 'include/header.php'; ?>

<!-- --------------------------------------------------HERO SECTION---------------------------------------- -->
<section>
    <div class="hero-sect">
        <div class="owl-carousel hero-bg-carousel">
            <div class="hero-bg">
                <div class="hero-bg-img" style="background-image: url('files/hero1.jpeg');"></div>
                <div class="hero-bg-mask"></div>
            </div>
            <div class="hero-bg">
                <div class="hero-bg-img" style="background-image: url('files/hero2.jpg');"></div>
                <div class="hero-bg-mask"></div>
            </div>
            <div class="hero-bg">
                <div class="hero-bg-img" style="background-image: url('files/hero1.jpeg');"></div>
                <div class="hero-bg-mask"></div>
            </div>
        </div>
        <div class="container">
            <div class="hero-content row">
                <div class="col-md-5 d-none d-md-block">
                    <div class="hero-inner">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1>ARE YOU A <span>BIBLIOPHILE</span> ?</h1>
                            </div>
                            <div class="col-lg-12">
                                <div class="hero-text">
                                    <div><span>Unbelievable Discount, Fast Delivery</span></div>
                                    <div>Order from Anywhere, Anytime</div>
                                    <div>Save time, Save money</div>
                                    <div>&nbsp;</div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="btn-div">
                                    <a href="contacts.php#target" target="_self" class="hero-btn">
                                        <div>GET BOOKS</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <form id="request-book" class="p-4 rounded form-box">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="book-title" class="form-label">Book Title</label>
                                <input type="text" class="form-control" id="book-title" placeholder="Enter the book title" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="book-author" class="form-label">Author</label>
                                <input type="text" class="form-control" id="book-author" placeholder="Enter the author name" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="book-publisher" class="form-label">Publisher</label>
                                <input type="text" class="form-control" id="book-publisher" placeholder="Enter the publisher name">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="reviewer-name" class="form-label">Your Name</label>
                                <input type="text" class="form-control" id="reviewer-name" placeholder="Enter your name" required>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Request The Book</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="scroll-container">
            <div>
                <a href="#heroBottom" class="scroll-icon">
                    <i class="fa-solid fa-chevron-down" id="heroBottom"></i>
                </a>
            </div>
        </div>
    </div>
</section>


<!-- ----------------------------------------------------OFFER CAROUSEL------------------------------------------ -->
<section>
    <div class="container">
        <div class="row">
            <div class="col-md-12"></div>
            <div class="col-md-12">
                <div class="owl-carousel offer-carousel">
                    <div class="item"><a href=""><img src="files/slide1.jpg" alt=""></a></div>
                    <div class="item"><a href=""><img src="files/slide2.jpg" alt=""></a></div>
                    <div class="item"><a href=""><img src="files/slide3.jpg" alt=""></a></div>
                    <div class="item"><a href=""><img src="files/slide4.gif" alt=""></a></div>
                </div>
            </div>
        </div>
    </div>

</section>


<!-- --------------------------------------------------ABOUT SECTION---------------------------------------- -->
<?php include 'include/aboutSection.php'; ?>


<!---------------------------------------------------------ACADEMIC BOOK CATEGORIES SECTION------------------------------------>
<section class="home-academic-section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title">ACADEMIC BOOKS</div>
                <div class="para-div">
                    <p>Congratulations! You have found the emporium of academcic books. If you need books for school, college, entrance exam or competetive exam then we have them all and more.</p>
                    <p>Explore the academics section of The KAGAZI and take advantage of the filters and searchbar to find the books you need.</p>
                </div>
            </div>
            <div class="col-md-12">
                <div class="small-title"><i class="fa-solid fa-fire"></i> Popular in Academics Section:</div>
            </div>
            <div>
                <div class="owl-carousel popular-carousel">
                    <div class="book-item">
                        <a href="academics.php">
                            <div class="item-img">
                                <img src="files/car1-book1.jpeg" alt="popular-category" class="img-fluid">
                            </div>
                            <div class="item-name">
                                <div>Different Boards</div>
                            </div>
                        </a>
                    </div>
                    <div class="book-item">
                        <a href="academics.php">
                            <div class="item-img">
                                <img src="files/car1-book2.jpeg" alt="popular-category" class="img-fluid">
                            </div>
                            <div class="item-name">
                                <div>School Books</div>
                            </div>
                        </a>
                    </div>
                    <div class="book-item">
                        <a href="academics.php">
                            <div class="item-img">
                                <img src="files/car1-book3.jpeg" alt="popular-category" class="img-fluid">
                            </div>
                            <div class="item-name">
                                <div>Degree Books</div>
                            </div>
                        </a>
                    </div>
                    <div class="book-item">
                        <a href="academics.php">
                            <div class="item-img">
                                <img src="files/car1-book4.jpeg" alt="popular-category" class="img-fluid">
                            </div>
                            <div class="item-name">
                                <div>Entrance Tests</div>
                            </div>
                        </a>
                    </div>
                    <div class="book-item">
                        <a href="academics.php">
                            <div class="item-img">
                                <img src="files/car1-book5.jpeg" alt="popular-category" class="img-fluid">
                            </div>
                            <div class="item-name">
                                <div>Professional Degree</div>
                            </div>
                        </a>
                    </div>
                    <div class="book-item">
                        <a href="academics.php">
                            <div class="item-img">
                                <img src="files/car1-book6.jpeg" alt="popular-category" class="img-fluid">
                            </div>
                            <div class="item-name">
                                <div>Competetive Exams</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!---------------------------------------------------------General BOOK CATEGORIES SECTION------------------------------------>
<section class="home-academic-section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title">For the Love of Books</div>
                <div class="para-div">
                    <p>Welcome to the world of stories, creativity, and inspiration! Our collection of non-academic books covers everything from fiction, non-fiction, and self-help to children’s books, comics, hobbies, and more.</p>
                    <p>Whether you’re looking for a thrilling novel, a comic to relax with, or books to inspire and uplift, you’ll find them here. Browse through our extensive selection and enjoy the pleasure of reading!</p>
                </div>
            </div>
            <div class="col-md-12">
                <div class="small-title"><i class="fa-solid fa-fire"></i> Popular in Non-academics Section:</div>
            </div>
            <div>
                <div class="owl-carousel popular-carousel">
                    <div class="book-item">
                        <a href="general.php">
                            <div class="item-img">
                                <img src="files/car2-book1.jpeg" alt="popular-category" class="img-fluid">
                            </div>
                            <div class="item-name">
                                <div>Comics</div>
                            </div>
                        </a>
                    </div>
                    <div class="book-item">
                        <a href="general.php">
                            <div class="item-img">
                                <img src="files/car2-book2.jpeg" alt="popular-category" class="img-fluid">
                            </div>
                            <div class="item-name">
                                <div>Self Help</div>
                            </div>
                        </a>
                    </div>
                    <div class="book-item">
                        <a href="general.php">
                            <div class="item-img">
                                <img src="files/car2-book3.jpeg" alt="popular-category" class="img-fluid">
                            </div>
                            <div class="item-name">
                                <div>Adventure Books</div>
                            </div>
                        </a>
                    </div>
                    <div class="book-item">
                        <a href="general.php">
                            <div class="item-img">
                                <img src="files/car2-book4.jpeg" alt="popular-category" class="img-fluid">
                            </div>
                            <div class="item-name">
                                <div>Children Books</div>
                            </div>
                        </a>
                    </div>
                    <div class="book-item">
                        <a href="general.php">
                            <div class="item-img">
                                <img src="files/car2-book5.jpeg" alt="popular-category" class="img-fluid">
                            </div>
                            <div class="item-name">
                                <div>Detective Thrillers</div>
                            </div>
                        </a>
                    </div>
                    <div class="book-item">
                        <a href="general.php">
                            <div class="item-img">
                                <img src="files/car2-book6.jpeg" alt="popular-category" class="img-fluid">
                            </div>
                            <div class="item-name">
                                <div>Poetry</div>
                            </div>
                        </a>
                    </div>
                    <div class="book-item">
                        <a href="general.php">
                            <div class="item-img">
                                <img src="files/car2-book7.jpeg" alt="popular-category" class="img-fluid">
                            </div>
                            <div class="item-name">
                                <div>Translation Books</div>
                            </div>
                        </a>
                    </div>
                    <div class="book-item">
                        <a href="general.php">
                            <div class="item-img">
                                <img src="files/car2-book8.jpeg" alt="popular-category" class="img-fluid">
                            </div>
                            <div class="item-name">
                                <div>Religious Books</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>




<?php include 'include/footer.php'; ?>