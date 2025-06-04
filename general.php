<?php include "include/header.php" ?>

<span id="target-search-general"></span>

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
                                <li class="breadcrumb-item active" aria-current="page">Non-Academic</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div class="col-9">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2>BOOKS' UNIVERSE</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- --------------------------------------------------NON-ACADEMIC BOOKS SECTION---------------------------------------- -->
<section>
    <div class="books-sect">
        <div class="container">
            <div class="row">

                <!--------------------------------SEARCH BAR------------------------------>
                <div class="col-12">
                    <div class="search-div container d-flex justify-content-between align-items-center">
                        <!-- Filter Button for Small Screens -->
                        <button class="btn btn-primary mx-2 d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#filterNonAcademic" aria-expanded="false" aria-controls="filterNonAcademic">
                        <i class="fa-solid fa-sliders"></i>
                        </button>
                        <input type="search" class="search-input" id="search-non-academic" placeholder="Quick search by book name, author, subject or genre to find your book fast...">
                    </div>
                </div>

                <!--------------------------------FILTER COLUMN------------------------------>
                <div class="col-lg-3">
                    <div id="filterNonAcademic" class="collapse d-lg-block">
                        <div class="filter-header mb-4">
                            <h5>Apply Filters to Find Your Book Fast</h5>
                        </div>
                        <!-- Language Filter -->
                        <div class="mb-3">
                            <label class="form-label">Language</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter-language" id="languageBangla" value="Bangla">
                                <label class="form-check-label" for="languageBangla">Bangla</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter-language" id="languageEnglish" value="English">
                                <label class="form-check-label" for="languageEnglish">English</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="filter-language" id="languageOther" value="Other">
                                <label class="form-check-label" for="languageOther">Other</label>
                            </div>
                        </div>

                        <!-- Sorting Filter -->
                        <div class="mb-3">
                            <label for="filter-sort" class="form-label">Sort By</label>
                            <select class="form-select" id="filter-sort">
                                <option value="">Select Sorting</option>
                                <option value="new-releases">New Releases</option>
                                <option value="low-to-high">Price: Low to High</option>
                                <option value="high-to-low">Price: High to Low</option>
                            </select>
                        </div>

                        <!-- Fiction Genre Filter -->
                        <div class="mb-3">
                            <label for="filter-fiction" class="form-label">Fiction Genres</label>
                            <select class="form-select" id="filter-fiction">
                                <option value="">Select Genre</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Horror">Horror</option>
                                <option value="Mystery">Mystery</option>
                                <option value="Romance">Romance</option>
                                <option value="Science Fiction">Science Fiction</option>
                                <option value="Thriller">Thriller</option>
                            </select>
                        </div>

                        <!-- Non-Fiction Genre Filter -->
                        <div class="mb-3">
                            <label for="filter-non-fiction" class="form-label">Non-Fiction Genres</label>
                            <select class="form-select" id="filter-non-fiction">
                                <option value="">Select Genre</option>
                                <option value="Biography">Biography</option>
                                <option value="History">History</option>
                                <option value="Philosophy">Philosophy</option>
                                <option value="Self Help">Self Help</option>
                                <option value="Hobbies">Hobbies</option>
                            </select>
                        </div>

                        <!-- Comics Filter -->
                        <div class="mb-3">
                            <label for="filter-comics" class="form-label">Comics</label>
                            <select class="form-select" id="filter-comics">
                                <option value="">Select Genre</option>
                                <option value="Western Comics">Western Comics</option>
                                <option value="Indian Comics">Indian Comics</option>
                                <option value="Manga">Manga</option>
                            </select>
                        </div>

                        <!-- Young and Curious Filter -->
                        <div class="mb-3">
                            <label for="filter-young-curious" class="form-label">Young and Curious</label>
                            <select class="form-select" id="filter-age">
                                <option value="">Select Genre</option>
                                <option value="Children's Books">Children's Books</option>
                            </select>
                        </div>

                        <!-- Reset Button -->
                        <div class="d-grid">
                            <button class="btn btn-outline-secondary" id="reset-non-academic-filters">Reset Filters</button>
                        </div>
                    </div>
                </div>

                <!--------------------------------BOOKS COLUMN------------------------------>
                <div class="col-lg-9 col-md-12">
                    <div class="row books-container" id="non-academic-books-container">
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






















