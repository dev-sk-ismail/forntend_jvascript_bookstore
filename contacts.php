<?php include "include/header.php" ?>

<!-----------------------------------------------------------HERO SECTION------------------------------------------------------------>
<section>
    <div class="hero-sect">
        <div class="hero-bg">
            <div class="contact-hero-bg-img"></div>
            <div class="hero-bg-mask contact-hero-bg-mask"></div>
        </div>
        <div class="container">
            <div class="hero-content">
                <div class="hero-inner contact-hero-inner">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1><span>READ</span> MORE</h1>
                            <h1>SMILE <span>MORE</span></h1>
                        </div>
                        <div class="col-lg-12">
                            <div class="hero-text">
                                <div><span>We’d love to hear from you!</span></div>
                                <div> Reach out to us with any questions, feedback,</div>
                                <div>or just to say hello.</div>
                                <div>&nbsp;</div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="btn-div">
                                <a class="wtsp-link" target="_self" class="hero-btn">
                                    <div>Contact Us</div>
                                </a>
                            </div>
                        </div>
                    </div>
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


<!-----------------------------------------------------------Contact SECTION------------------------------------------------------------>
<section class="contact-section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="section-title">Contact Us</h1>
            </div>
            <div class="col-md-12 call-us">
                <div class="call-bg-img"></div>
                <div class="call-bg-mask"></div>
                <div class="call-content">
                    <div class="row">
                        <div class="col-md-12">
                            <h1>How can we help you?</h1>
                        </div>
                        <div class="col-md-12">
                            <div class="description-para d-none d-md-block">At The KAGAZI, we are dedicated to ensuring a seamless and enjoyable shopping experience.</div>
                            <div class="description-para">For any assistance or inquiries, please don’t hesitate to contact us.</div>
                        </div>
                        <div class="col-md-3 col-lg-2 col-6">
                            <a class="book_btn phone-link"><i class="fa-solid fa-phone-flip"></i> Call Us</a>
                        </div>
                        <div class="col-md-3 col-lg-2 col-6">
                            <a class="book_btn mail-link"><i class="fa-regular fa-envelope"></i> Mail Us</a>
                        </div>
                        <div class="col-md-12">
                            <a href="https://wa.me/918100542901?text=${encodeURIComponent('Hello, I need urgent response please.')}" class="btn urgent-btn"><i class="fa-brands fa-whatsapp"></i> It's Urgent</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<!-----------------------------------------------------------Request form SECTION------------------------------------------------------------>

<section class="forms-section py-5">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 class="section-title">Request for a book</h2>
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
                    <button type="submit" class="btn btn-primary w-100">Request  The  Book</button>
                </form>
            </div>
        </div>
    </div>
</section>

<!-----------------------------------------------------------HERO SECTION------------------------------------------------------------>
<!-----------------------------------------------------------HERO SECTION------------------------------------------------------------>
















<?php include "include/footer.php" ?>