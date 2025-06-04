<?php include "include/header.php" ?>
<span id="target-search-academic"></span>
<!-- --------------------------------------------------BANNER SECTION---------------------------------------- -->
<section>
    <div class="banner-sect">
        <div class="banner-bg">
            <div class="banner-bg-img"></div>
            <div class="banner-bg-mask"></div>
        </div>
        <div class="container">
            <div class="row banner-content">
                <div class="col-3">
                    <div class="breadcrumbs">
                        <nav style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Academics</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div class="col-9">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>ACADEMIC BOOKS</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- --------------------------------------------------BOOKS SECTION---------------------------------------- -->

<section>
    <div class="books-sect">
        <div class="container">
            <div class="row">

                <!--------------------------------SEARCH BAR------------------------------>
                <div class="col-12">
                    <div class="search-div container d-flex justify-content-between align-items-center">
                        <!-- Filter Button for Small Screens -->
                        <button class="btn btn-primary d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#filterColumn" aria-expanded="false" aria-controls="filterColumn">
                            <i class="fas fa-filter"></i> Filter
                        </button>
                        <input type="search" class="search-input" id="search-input" placeholder="Quick search by book name, author, subject or genre to find your book fast...">
                    </div>
                </div>

                <!--------------------------------FILTER COLUMN------------------------------>
                <div class="col-lg-3">
                    <div id="filterColumn" class="collapse d-lg-block">
                        <div class="filter-header mb-4">
                            <h5>Filters</h5>
                        </div>
                        <!-- Class/Degree Filter -->
                        <div class="mb-3">
                            <label for="filter-class-degree" class="form-label">Class/Degree</label>
                            <select class="form-select" id="filter-class-degree">
                                <option value="">Select Class/Degree</option>
                                <option value="1st">1st</option>
                                <option value="2nd">2nd</option>
                                <option value="3rd">3rd</option>
                                <option value="4th">4th</option>
                                <option value="5th">5th</option>
                                <option value="6th">6th</option>
                                <option value="7th">7th</option>
                                <option value="8th">8th</option>
                                <option value="9th">9th</option>
                                <option value="10th">10th</option>
                                <option value="11th">11th</option>
                                <option value="12th">12th</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Graduation">Graduation</option>
                                <option value="Post Graduation">Post Graduation</option>
                                <option value="Competitive Exams">Competitive Exams</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <!-- Subject Filter -->
                        <div class="mb-3">
                            <label for="filter-subject" class="form-label">Subject</label>
                            <select class="form-select" id="filter-subject">
                                <option value="">Select Subject</option>
                                <option value="English">English</option>
                                <option value="Bangla">Bangla</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Physics">Physics</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="Biology">Biology</option>
                                <option value="Computer & IT">Computer & IT</option>
                                <option value="History">History</option>
                                <option value="Geography">Geography</option>
                                <option value="Economics">Economics</option>
                                <option value="Political Science">Political Science</option>
                                <option value="Sociology">Sociology</option>
                                <option value="Psychology">Psychology</option>
                                <option value="Philosophy">Philosophy</option>
                                <option value="Business Studies & Management">Business Studies & Management</option>
                                <option value="Accounting & Finance">Accounting & Finance</option>
                                <option value="Education">Education</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Environmental Science">Environmental Science</option>
                                <option value="Law">Law</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <!-- Board/Authority Filter -->
                        <div class="mb-4">
                            <label class="form-label">Board/Authority</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter-board" id="boardCBSE" value="CBSE">
                                <label class="form-check-label" for="boardCBSE">CBSE</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter-board" id="boardWBBSE" value="WBBSE">
                                <label class="form-check-label" for="boardWBBSE">WBBSE</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter-board" id="boardWBCHSE" value="WBCHSE">
                                <label class="form-check-label" for="boardWBCHSE">WBCHSE</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter-board" id="boardICSE" value="ICSE">
                                <label class="form-check-label" for="boardICSE">ICSE</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter-board" id="boardISC" value="ISC">
                                <label class="form-check-label" for="boardISC">ISC</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter-board" id="boardOther" value="Other">
                                <label class="form-check-label" for="boardOther">Other</label>
                            </div>
                        </div>

                        <!-- Reset Button -->
                        <div class="d-grid">
                            <button class="btn btn-outline-secondary" id="reset-filters">Reset Filters</button>
                        </div>
                    </div>
                </div>


                <!--------------------------------BOOKS COLUMN------------------------------>
                <div class="col-lg-9 col-md-12">
                    <div class="row books-container" id="books-container">
                        <!-- Book cards will be appended here -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Modal Structure -->
<div class="modal fade" id="bookModal" tabindex="-1" aria-labelledby="bookModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="bookModalLabel">Book Title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                <img src="" alt="Book Image" id="modal-book-img" class="img-fluid">
            </div>
        </div>
    </div>
</div>














<?php include "include/footer.php" ?>
