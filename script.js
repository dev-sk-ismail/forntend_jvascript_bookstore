//--------------------------------------adding href to the tags------------------------------------------
(function () {
  // IIFE code block
  document.addEventListener("DOMContentLoaded", function () {
    const phoneNumber = 8100542901;
    const email = "info@thekagazi.com";
    // getting the tags
    const whatsappTags = document.querySelectorAll(".wtsp-link");
    const phoneTags = document.querySelectorAll(".phone-link");
    const emailTags = document.querySelectorAll(".mail-link");

    const whatsappLink = `https://wa.me/91${phoneNumber}`;
    const phoneLink = `tel:+91${phoneNumber}`;
    const mailLink = `mailto:${email}`;

    whatsappTags.forEach((el) => el.setAttribute("href", whatsappLink));
    phoneTags.forEach((el) => el.setAttribute("href", phoneLink));
    emailTags.forEach((el) => el.setAttribute("href", mailLink));
  });
})();


//------------------------------------------------LANGUAGE TRANSLATION ------------------------------------------
function translatePage(language) {
  var baseUrl = "http://localhost/kagazi";
  var translateUrl = `https://translate.google.com/translate?sl=en&tl=${language}&u=${encodeURIComponent(
    baseUrl
  )}`;

  // Save the selected language in local storage
  localStorage.setItem("selectedLanguage", language);

  // Redirect to the appropriate URL
  window.location.href = language == "en" ? baseUrl : translateUrl;
}

document.addEventListener("DOMContentLoaded", function () {
  var savedLanguage = localStorage.getItem("selectedLanguage");
  if (savedLanguage) {
    document
      .querySelectorAll(".current-language")
      .forEach((span) => (span.textContent = savedLanguage));
  }
});

// ----------------------------ALL JQUERY SCRIPTS GOES INSIDE THIS-------------------------------------------------
$(document).ready(function () {
  // all jQuery code here
  $(".hero-bg-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000, // 5 seconds per slide
    animateOut: "fadeOut",
    animateIn: "fadeIn",
  });

  $(".offer-carousel").owlCarousel({
    items: 1, // Number of items to display
    loop: true, // Infinite loop
    margin: 10, // Margin between items
    dots: true, // Use dots for navigation
    autoplay: true, // Enable autoplay
    autoplayTimeout: 3000, // Autoplay interval in milliseconds
  });

  $(".rating-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    dots: true, // Show dots below the carousel items
    nav: false, // Hide navigation arrows
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".popular-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: false, // Hide navigation arrows
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1300: {
        items: 5,
      },
    },
  });
});

//------------------------------------------PREVENT INSPECTION-----------------------------------------

// document.addEventListener("contextmenu", e => e.preventDefault(), false);

//--------------------------------------------sticky top nav-----------------------------

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (document.documentElement.scrollTop > 0) {
    navbar.classList.add("sticky-top");
  } else {
    navbar.classList.remove("sticky-top");
  }
});

// -------------------------------------------CHAT BOT JS--------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const message1 = document.querySelector(".message-1");
  const message2 = document.querySelector(".message-2");

  // Show the first message
  message1.style.opacity = "1";
  message1.style.transform = "translateX(0)";

  // Replace the first message with the second one after a delay
  setTimeout(function () {
    message1.style.opacity = "0";
    message1.style.transform = "translateX(-20px)";

    setTimeout(function () {
      message2.style.opacity = "1";
      message2.style.transform = "translateX(0)";
    }, 500); // Time for the first message to disappear
  }, 2000); // Delay before replacing with the second message
});

//------------------------------------------ACADEMICS PAGE-----------------------------------------

(function () {
  // IIFE code block
  document.addEventListener("DOMContentLoaded", function () {
    const books = [
      {
        slNum: 1,
        title: "Mathematics for Class 10",
        author: "R.D. Sharma",
        publisher: "Dhanpat Rai Publications",
        language: "English",
        subject: "Mathematics",
        class: "10th",
        board: "CBSE",
        sku: "EN-MAT-24001",
        mrp: 450,
        discount: 10,
      },
      {
        slNum: 2,
        title: "Comprehensive Physics for Class 12",
        author: "N.K. Bajaj",
        publisher: "Laxmi Publications",
        language: "English",
        subject: "Physics",
        class: "12th",
        board: "WBCHSE",
        sku: "EN-PHY-24002",
        mrp: 520,
        discount: 15,
      },
      {
        slNum: 3,
        title: "Sahitya Sagar: Bangla Sahitya Samagra",
        author: "Rabindranath Tagore",
        publisher: "Ananda Publishers",
        language: "Bengali",
        subject: "Bangla Literature",
        class: "NA",
        board: "WBBSE",
        sku: "BN-LIT-24003",
        mrp: 320,
        discount: 5,
      },
      {
        slNum: 4,
        title: "Basic Electrical Engineering",
        author: "D.P. Kothari",
        publisher: "McGraw Hill Education",
        language: "English",
        subject: "Engineering",
        class: "Diploma",
        board: "Other Authority",
        sku: "EN-ENG-24004",
        mrp: 600,
        discount: 20,
      },
      {
        slNum: 5,
        title: "Modern ABC of Chemistry for Class 11",
        author: "S.P. Jauhar",
        publisher: "Modern Publishers",
        language: "English",
        subject: "Chemistry",
        class: "11th",
        board: "CBSE",
        sku: "EN-CHE-24005",
        mrp: 490,
        discount: 18,
      },
      {
        slNum: 6,
        title: "Geography of India for Class 10",
        author: "Majid Husain",
        publisher: "McGraw Hill Education",
        language: "English",
        subject: "Geography",
        class: "10th",
        board: "WBBSE",
        sku: "EN-GEO-24006",
        mrp: 320,
        discount: 25,
      },
      {
        slNum: 7,
        title: "English Grammar and Composition for Class 9",
        author: "Wren & Martin",
        publisher: "S. Chand Publishing",
        language: "English",
        subject: "English Language",
        class: "9th",
        board: "ICSE",
        sku: "EN-ENG-24007",
        mrp: 280,
        discount: 12,
      },
      {
        slNum: 8,
        title: "Fundamentals of Computer Science",
        author: "E. Balagurusamy",
        publisher: "Tata McGraw Hill",
        language: "English",
        subject: "Computer & IT",
        class: "Graduation",
        board: "Other Authority",
        sku: "EN-COM-24008",
        mrp: 650,
        discount: 22,
      },
      {
        slNum: 9,
        title: "Advanced Mathematics for Class 12",
        author: "K.C. Sinha",
        publisher: "Bharti Bhawan",
        language: "Bengali",
        subject: "Mathematics",
        class: "12th",
        board: "WBCHSE",
        sku: "BN-MAT-24009",
        mrp: 540,
        discount: 8,
      },
      {
        slNum: 10,
        title: "Introduction to Sociology",
        author: "T.B. Bottomore",
        publisher: "Oxford University Press",
        language: "English",
        subject: "Sociology",
        class: "Graduation",
        board: "Other Authority",
        sku: "EN-SOC-24010",
        mrp: 420,
        discount: 10,
      },
      {
        slNum: 11,
        title: "Psychology for Class 12",
        author: "R.G. Rath",
        publisher: "NCERT",
        language: "English",
        subject: "Psychology",
        class: "12th",
        board: "CBSE",
        sku: "EN-PSY-24011",
        mrp: 300,
        discount: 12,
      },
      {
        slNum: 12,
        title: "Philosophical Thoughts",
        author: "A.C. Grayling",
        publisher: "Bloomsbury Publishing",
        language: "English",
        subject: "Philosophy",
        class: "Post Graduation",
        board: "Other Authority",
        sku: "EN-PHI-24012",
        mrp: 700,
        discount: 20,
      },
      {
        slNum: 13,
        title: "Introduction to Business Studies",
        author: "C.B. Gupta",
        publisher: "Sultan Chand & Sons",
        language: "English",
        subject: "Business Studies & Management",
        class: "11th",
        board: "ISC",
        sku: "EN-BUS-24013",
        mrp: 350,
        discount: 18,
      },
      {
        slNum: 14,
        title: "Principles of Accounting",
        author: "M.E. Thukaram Rao",
        publisher: "New Age International Publishers",
        language: "English",
        subject: "Accounting & Finance",
        class: "Graduation",
        board: "Other Authority",
        sku: "EN-ACC-24014",
        mrp: 480,
        discount: 22,
      },
      {
        slNum: 15,
        title: "Environmental Science for Class 10",
        author: "K.R. Kannan",
        publisher: "New Saraswati House",
        language: "English",
        subject: "Environmental Science",
        class: "10th",
        board: "CBSE",
        sku: "EN-ENV-24015",
        mrp: 310,
        discount: 10,
      },
      {
        slNum: 16,
        title: "Modern ABC of Chemistry for Class 12",
        author: "S.P. Jauhar",
        publisher: "Modern Publishers",
        language: "English",
        subject: "Chemistry",
        class: "12th",
        board: "ISC",
        sku: "EN-CHE-24016",
        mrp: 520,
        discount: 18,
      },
      {
        slNum: 17,
        title: "Modern Approach to Verbal Reasoning",
        author: "R.S. Aggarwal",
        publisher: "S. Chand Publishing",
        language: "English",
        subject: "Other",
        class: "Competitive Exams",
        board: "Other Authority",
        sku: "EN-OTH-24017",
        mrp: 380,
        discount: 20,
      },
      {
        slNum: 18,
        title: "Indian Political Thought",
        author: "V.R. Mehta",
        publisher: "Manohar Publishers",
        language: "English",
        subject: "Political Science",
        class: "Post Graduation",
        board: "Other Authority",
        sku: "EN-POL-24018",
        mrp: 570,
        discount: 15,
      },
      {
        slNum: 19,
        title: "Introduction to Microeconomics",
        author: "Mankiw",
        publisher: "Cengage Learning",
        language: "English",
        subject: "Economics",
        class: "Graduation",
        board: "Other Authority",
        sku: "EN-ECO-24019",
        mrp: 450,
        discount: 12,
      },
      {
        slNum: 20,
        title: "Basic Electrical Engineering for Class 12",
        author: "P.S. Dhogal",
        publisher: "McGraw Hill Education",
        language: "English",
        subject: "Engineering",
        class: "12th",
        board: "CBSE",
        sku: "EN-ENG-24020",
        mrp: 450,
        discount: 12,
      },

      {
        slNum: 21,
        title: "Advanced Physics for Class 11",
        author: "D.C. Pandey",
        publisher: "Arihant Publications",
        language: "English",
        subject: "Physics",
        class: "11th",
        board: "CBSE",
        sku: "EN-PHY-24021",
        mrp: 480,
        discount: 15,
      },
      {
        slNum: 22,
        title: "History of Modern India",
        author: "Bipan Chandra",
        publisher: "Orient BlackSwan",
        language: "English",
        subject: "History",
        class: "Graduation",
        board: "Other Authority",
        sku: "EN-HIS-24022",
        mrp: 520,
        discount: 20,
      },
      {
        slNum: 23,
        title: "Environmental Science for Class 11",
        author: "A. K. De",
        publisher: "New Saraswati House",
        language: "English",
        subject: "Environmental Science",
        class: "11th",
        board: "WBCHSE",
        sku: "EN-ENV-24023",
        mrp: 300,
        discount: 10,
      },
      {
        slNum: 24,
        title: "Bangla Byakaran O Abhidhan",
        author: "Tarapada Chattopadhyay",
        publisher: "Ananda Publishers",
        language: "Bengali",
        subject: "Bangla",
        class: "10th",
        board: "WBBSE",
        sku: "BN-BAN-24024",
        mrp: 220,
        discount: 12,
      },
      {
        slNum: 25,
        title: "Economics for Class 12",
        author: "Sandeep Garg",
        publisher: "Dhanpat Rai Publications",
        language: "English",
        subject: "Economics",
        class: "12th",
        board: "CBSE",
        sku: "EN-ECO-24025",
        mrp: 430,
        discount: 18,
      },
      {
        slNum: 26,
        title: "Geography of India for Class 12",
        author: "Majid Husain",
        publisher: "McGraw Hill Education",
        language: "English",
        subject: "Geography",
        class: "12th",
        board: "ISC",
        sku: "EN-GEO-24026",
        mrp: 320,
        discount: 15,
      },
      {
        slNum: 27,
        title: "Psychology for Beginners",
        author: "Gerrig & Zimbardo",
        publisher: "Pearson Education",
        language: "English",
        subject: "Psychology",
        class: "Graduation",
        board: "Other Authority",
        sku: "EN-PSY-24027",
        mrp: 680,
        discount: 22,
      },
      {
        slNum: 28,
        title: "Business Studies for Class 12",
        author: "Poonam Gandhi",
        publisher: "VK Global Publications",
        language: "English",
        subject: "Business Studies & Management",
        class: "12th",
        board: "CBSE",
        sku: "EN-BUS-24028",
        mrp: 370,
        discount: 10,
      },
      {
        slNum: 29,
        title: "English Literature: A Complete Guide",
        author: "David Daiches",
        publisher: "Penguin Books",
        language: "English",
        subject: "English Literature",
        class: "NA",
        board: "ISC",
        sku: "EN-LIT-24029",
        mrp: 540,
        discount: 15,
      },
      {
        slNum: 30,
        title: "Electrical Engineering for Class 11",
        author: "B.L. Theraja",
        publisher: "S. Chand Publishing",
        language: "English",
        subject: "Engineering",
        class: "11th",
        board: "WBCHSE",
        sku: "EN-ENG-24030",
        mrp: 520,
        discount: 17,
      },
      {
        slNum: 31,
        title: "Chemistry for Class 10",
        author: "P.N. Kapil",
        publisher: "S. Chand Publishing",
        language: "Bengali",
        subject: "Chemistry",
        class: "10th",
        board: "WBBSE",
        sku: "BN-CHE-24031",
        mrp: 300,
        discount: 10,
      },
      {
        slNum: 32,
        title: "Philosophy: A Very Short Introduction",
        author: "Edward Craig",
        publisher: "Oxford University Press",
        language: "English",
        subject: "Philosophy",
        class: "Graduation",
        board: "Other Authority",
        sku: "EN-PHI-24032",
        mrp: 380,
        discount: 12,
      },
      {
        slNum: 33,
        title: "Education in India",
        author: "Krishna Kumar",
        publisher: "NCERT",
        language: "English",
        subject: "Education",
        class: "Post Graduation",
        board: "Other Authority",
        sku: "EN-EDU-24033",
        mrp: 600,
        discount: 20,
      },
      {
        slNum: 34,
        title: "Indian Economy for Class 12",
        author: "Ramesh Singh",
        publisher: "McGraw Hill Education",
        language: "English",
        subject: "Economics",
        class: "12th",
        board: "ISC",
        sku: "EN-ECO-24034",
        mrp: 470,
        discount: 15,
      },
      {
        slNum: 35,
        title: "Political Science for Class 11",
        author: "Laxmikant",
        publisher: "Tata McGraw Hill",
        language: "English",
        subject: "Political Science",
        class: "11th",
        board: "CBSE",
        sku: "EN-POL-24035",
        mrp: 340,
        discount: 12,
      },
      {
        slNum: 36,
        title: "Mathematics for Class 9",
        author: "R.D. Sharma",
        publisher: "Dhanpat Rai Publications",
        language: "Bengali",
        subject: "Mathematics",
        class: "9th",
        board: "WBBSE",
        sku: "BN-MAT-24036",
        mrp: 400,
        discount: 10,
      },
      {
        slNum: 37,
        title: "Advanced Physics for Class 12",
        author: "H.C. Verma",
        publisher: "Bharti Bhawan",
        language: "English",
        subject: "Physics",
        class: "12th",
        board: "WBCHSE",
        sku: "EN-PHY-24037",
        mrp: 490,
        discount: 15,
      },
      {
        slNum: 38,
        title: "Introduction to Psychology",
        author: "Morgan & King",
        publisher: "Tata McGraw Hill",
        language: "English",
        subject: "Psychology",
        class: "Graduation",
        board: "Other Authority",
        sku: "EN-PSY-24038",
        mrp: 620,
        discount: 20,
      },
      {
        slNum: 39,
        title: "Computer Science with Python for Class 11",
        author: "Sumita Arora",
        publisher: "Dhanpat Rai Publications",
        language: "English",
        subject: "Computer & IT",
        class: "11th",
        board: "CBSE",
        sku: "EN-COM-24039",
        mrp: 520,
        discount: 18,
      },
      {
        slNum: 40,
        title: "Law of Torts",
        author: "R.K. Bangia",
        publisher: "Allahabad Law Agency",
        language: "English",
        subject: "Law",
        class: "Graduation",
        board: "Other Authority",
        sku: "EN-LAW-24040",
        mrp: 580,
        discount: 15,
      },
    ];

    const booksContainer = document.getElementById("books-container");
    const searchInput = document.getElementById("search-input");
    const filterClass = document.getElementById("filter-class-degree");
    const filterSubject = document.getElementById("filter-subject");
    const filterBoard = document.getElementsByName("filter-board");
    const resetFiltersBtn = document.getElementById("reset-filters");

    function populateBooks(bookArray) {
      booksContainer.innerHTML = ""; // Clear previous content
      bookArray.forEach((book) => {
        const phoneNumber = 8100542901;
        const message = encodeURIComponent(
          `Hi, I am interested in this product- ${book.title} by ${book.author} from ${book.publisher}.Please confirm my order.`
        );
        const whatsapLink = `https://wa.me/91${phoneNumber}?text=${message}`;
        const bookCard = `
                <div class="col-12">
                    <div class="book-card">
                        <div class="row">
                            <div class="col-4 col-md-3 position-relative">
                                <div class="book-img" data-bs-toggle="modal" data-bs-target="#bookModal" data-img-src="academic/book${
                                  book.slNum
                                }.webp" data-title="${book.title}">
                                    <img src="academic/book${
                                      book.slNum
                                    }.webp" alt="Book-Cover" class="img-fluid">
                                    <div class="heart-icon">
                                        <i class="fas fa-heart"></i>
                                    </div>
                                </div>
                                <div class="d-block d-md-none price-div-sm text-center">
                                    <div class="mrp-sm">₹<s>${
                                      book.mrp
                                    }</s></div>
                                    <div class="price-sm"><strong>₹<span>${Math.round(
                                      book.mrp -
                                        (book.mrp * book.discount) / 100
                                    )}</span></strong></div>
                                    
                                </div>
                            </div>
                            <div class="col-8 col-md-9">
                                <div class="row">
                                    <div class="col-12 col-md-7 details-div">
                                        <div class="book-title">${
                                          book.title
                                        }</div>
                                        <div class="book-details">
                                            <ul>
                                                <li><strong>Author : </strong>${
                                                  book.author
                                                }</li>
                                                <li><strong>Publisher : </strong>${
                                                  book.publisher
                                                }</li>
                                                <li><strong>Language : </strong>${
                                                  book.language
                                                }</li>
                                                <li><strong>Sub/Genre : </strong>${
                                                  book.subject
                                                }</li>
                                                <li><strong>Board/Authority : </strong>${
                                                  book.board
                                                }</li>
                                                <li><strong>Standard : </strong>${
                                                  book.class
                                                }</li>
                                                <li><strong>SKU : </strong>${
                                                  book.sku
                                                }</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-none d-md-flex col-md-5 price-div">
                                        <div class="price">₹<span>${Math.round(
                                          book.mrp -
                                            (book.mrp * book.discount) / 100
                                        )}</span></div>
                                        <div class="mrp">₹<s>${
                                          book.mrp
                                        }</s></div>
                                        <div class="buy-link btn btn-primary"><a href="${whatsapLink}"><i class="fa-solid fa-bolt-lightning"></i>Get Now</a></div>
                                    </div>
                                </div>
                                <div class="buy-link btn btn-primary d-block d-md-none"><a href="${whatsapLink}"><i class="fa-solid fa-bolt-lightning"></i>Get Now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        booksContainer.insertAdjacentHTML("beforeend", bookCard);
      });

      // Add event listeners for the modal
      document.querySelectorAll(".book-img").forEach((imgDiv) => {
        imgDiv.addEventListener("click", function () {
          const imgSrc = this.getAttribute("data-img-src");
          const title = this.getAttribute("data-title");
          document.getElementById("modal-book-img").src = imgSrc;
          document.getElementById("bookModalLabel").innerText = title;
        });
      });
    }

    function filterBooks() {
      const query = searchInput.value.toLowerCase();
      const selectedClass = filterClass.value.toLowerCase();
      const selectedSubject = filterSubject.value.toLowerCase();
      let selectedBoard = "";

      filterBoard.forEach((board) => {
        if (board.checked) {
          selectedBoard = board.value.toLowerCase();
        }
      });

      const filteredBooks = books.filter((book) => {
        return (
          (book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query) ||
            book.subject.toLowerCase().includes(query)) &&
          (selectedClass === "" ||
            book.class.toLowerCase() === selectedClass) &&
          (selectedSubject === "" ||
            book.subject.toLowerCase() === selectedSubject) &&
          (selectedBoard === "" || book.board.toLowerCase() === selectedBoard)
        );
      });

      populateBooks(filteredBooks);
    }

    // Event Listeners
    searchInput.addEventListener("input", filterBooks);
    filterClass.addEventListener("change", filterBooks);
    filterSubject.addEventListener("change", filterBooks);
    filterBoard.forEach((board) =>
      board.addEventListener("change", filterBooks)
    );
    resetFiltersBtn.addEventListener("click", () => {
      searchInput.value = "";
      filterClass.value = "";
      filterSubject.value = "";
      filterBoard.forEach((board) => (board.checked = false));
      populateBooks(books);
    });

    // Initial population of books
    populateBooks(books);
  });
})();

// ----------------------------------------------------NON ACADEMIC BOOKS PAGE------------------------------------------------------
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const nonAcademicBooks = [
      {
        slNum: 1,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        publisher: "Celadon Books",
        language: "English",
        genres: ["Thriller", "Psychological Fiction"],
        year: "2019",
        mrp: 350,
        discount: 20,
      },
      {
        slNum: 2,
        title: "Ghare Baire",
        author: "Rabindranath Tagore",
        publisher: "Vishwa Bharati",
        language: "Bangla",
        genres: ["Historical Fiction", "Classic"],
        year: "1916",
        mrp: 150,
        discount: 15,
      },
      {
        slNum: 3,
        title: "Becoming",
        author: "Michelle Obama",
        publisher: "Crown Publishing",
        language: "English",
        genres: ["Biography", "Memoir"],
        year: "2018",
        mrp: 500,
        discount: 10,
      },
      {
        slNum: 4,
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        publisher: "Plata Publishing",
        language: "English",
        genres: ["Self-Help", "Finance"],
        year: "1997",
        mrp: 299,
        discount: 5,
      },
      {
        slNum: 5,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        publisher: "Harper",
        language: "English",
        genres: ["Non-Fiction", "History"],
        year: "2014",
        mrp: 400,
        discount: 10,
      },
      {
        slNum: 6,
        title: "Pather Panchali",
        author: "Bibhutibhushan Bandyopadhyay",
        publisher: "Signet Press",
        language: "Bangla",
        genres: ["Classic", "Drama"],
        year: "1929",
        mrp: 200,
        discount: 25,
      },
      {
        slNum: 7,
        title: "Watchmen",
        author: "Alan Moore",
        publisher: "DC Comics",
        language: "English",
        genres: ["Comics", "Superhero"],
        year: "1986",
        mrp: 450,
        discount: 15,
      },
      {
        slNum: 8,
        title: "Malgudi Days",
        author: "R.K. Narayan",
        publisher: "Indian Thought Publications",
        language: "English",
        genres: ["Short Stories", "Fiction"],
        year: "1943",
        mrp: 250,
        discount: 5,
      },
      {
        slNum: 9,
        title: "Manga Classics: The Count of Monte Cristo",
        author: "Alexandre Dumas (adapted)",
        publisher: "Manga Classics",
        language: "English",
        genres: ["Comics", "Manga", "Classic"],
        year: "2017",
        mrp: 350,
        discount: 20,
      },
      {
        slNum: 10,
        title: "Bhagavad Gita",
        author: "Vyasa",
        publisher: "Gita Press",
        language: "Sanskrit",
        genres: ["Religious", "Philosophy"],
        year: "5000 BCE",
        mrp: 100,
        discount: 5,
      },
      {
        slNum: 11,
        title: "Amar Chitra Katha: Mahabharata",
        author: "Anant Pai",
        publisher: "Amar Chitra Katha",
        language: "English",
        genres: ["Comics", "Indian Mythology"],
        year: "1970",
        mrp: 600,
        discount: 10,
      },
      {
        slNum: 12,
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        publisher: "HarperOne",
        language: "English",
        genres: ["Self-Help", "Motivational"],
        year: "2016",
        mrp: 400,
        discount: 20,
      },
      {
        slNum: 13,
        title: "Byomkesh Bakshi",
        author: "Sharadindu Bandyopadhyay",
        publisher: "Ananda Publishers",
        language: "Bangla",
        genres: ["Detective Fiction", "Thriller"],
        year: "1932",
        mrp: 180,
        discount: 10,
      },
      {
        slNum: 14,
        title: "Norwegian Wood",
        author: "Haruki Murakami",
        publisher: "Kodansha",
        language: "Japanese",
        genres: ["Fiction", "Romance"],
        year: "1987",
        mrp: 350,
        discount: 15,
      },
      {
        slNum: 15,
        title: "Sherlock Holmes: The Complete Novels and Stories",
        author: "Arthur Conan Doyle",
        publisher: "Bantam Classics",
        language: "English",
        genres: ["Detective Fiction", "Classic"],
        year: "1887",
        mrp: 550,
        discount: 10,
      },
      {
        slNum: 16,
        title: "Tintin in Tibet",
        author: "Hergé",
        publisher: "Casterman",
        language: "French",
        genres: ["Comics", "Adventure"],
        year: "1960",
        mrp: 300,
        discount: 15,
      },
      {
        slNum: 17,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        publisher: "Bloomsbury",
        language: "English",
        genres: ["Fantasy", "Children"],
        year: "1997",
        mrp: 400,
        discount: 5,
      },
      {
        slNum: 18,
        title: "The Alchemist",
        author: "Paulo Coelho",
        publisher: "HarperOne",
        language: "English",
        genres: ["Fiction", "Philosophy"],
        year: "1988",
        mrp: 320,
        discount: 10,
      },
      {
        slNum: 19,
        title: "1984",
        author: "George Orwell",
        publisher: "Secker & Warburg",
        language: "English",
        genres: ["Dystopian", "Science Fiction"],
        year: "1949",
        mrp: 280,
        discount: 15,
      },
      {
        slNum: 20,
        title: "Moby-Dick",
        author: "Herman Melville",
        publisher: "Harper & Brothers",
        language: "English",
        genres: ["Adventure", "Classic"],
        year: "1851",
        mrp: 350,
        discount: 10,
      },
      {
        slNum: 21,
        title: "The Book Thief",
        author: "Markus Zusak",
        publisher: "Picador",
        language: "English",
        genres: ["Historical Fiction", "Young Adult"],
        year: "2005",
        mrp: 300,
        discount: 20,
      },
      {
        slNum: 22,
        title: "Midnight's Children",
        author: "Salman Rushdie",
        publisher: "Jonathan Cape",
        language: "English",
        genres: ["Magical Realism", "Historical Fiction"],
        year: "1981",
        mrp: 450,
        discount: 10,
      },
      {
        slNum: 23,
        title: "Gitanjali",
        author: "Rabindranath Tagore",
        publisher: "Macmillan",
        language: "Bangla",
        genres: ["Poetry", "Classic"],
        year: "1910",
        mrp: 150,
        discount: 20,
      },
      {
        slNum: 24,
        title: "The Godfather",
        author: "Mario Puzo",
        publisher: "G.P. Putnam's Sons",
        language: "English",
        genres: ["Crime", "Thriller"],
        year: "1969",
        mrp: 320,
        discount: 10,
      },
      {
        slNum: 25,
        title: "Anne of Green Gables",
        author: "Lucy Maud Montgomery",
        publisher: "L.C. Page & Co.",
        language: "English",
        genres: ["Children's Literature", "Fiction"],
        year: "1908",
        mrp: 250,
        discount: 15,
      },
      {
        slNum: 26,
        title: "The Secret",
        author: "Rhonda Byrne",
        publisher: "Atria Books",
        language: "English",
        genres: ["Self-Help", "Spirituality"],
        year: "2006",
        mrp: 400,
        discount: 5,
      },
      {
        slNum: 27,
        title: "Cosmos",
        author: "Carl Sagan",
        publisher: "Random House",
        language: "English",
        genres: ["Science", "Non-Fiction"],
        year: "1980",
        mrp: 500,
        discount: 10,
      },
      {
        slNum: 28,
        title: "Things Fall Apart",
        author: "Chinua Achebe",
        publisher: "Heinemann",
        language: "English",
        genres: ["Historical Fiction", "Classic"],
        year: "1958",
        mrp: 280,
        discount: 20,
      },
      {
        slNum: 29,
        title: "Autobiography of a Yogi",
        author: "Paramahansa Yogananda",
        publisher: "Self-Realization Fellowship",
        language: "English",
        genres: ["Biography", "Spirituality"],
        year: "1946",
        mrp: 350,
        discount: 15,
      },
      {
        slNum: 30,
        title: "The Art of War",
        author: "Sun Tzu",
        publisher: "Shambhala",
        language: "Chinese",
        genres: ["Military Strategy", "Philosophy"],
        year: "5th century BCE",
        mrp: 200,
        discount: 5,
      },
      {
        slNum: 31,
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        publisher: "Reynal & Hitchcock",
        language: "French",
        genres: ["Children's Literature", "Philosophy"],
        year: "1943",
        mrp: 250,
        discount: 10,
      },
      {
        slNum: 32,
        title: "One Hundred Years of Solitude",
        author: "Gabriel Garcia Marquez",
        publisher: "Harper & Row",
        language: "Spanish",
        genres: ["Magical Realism", "Fiction"],
        year: "1967",
        mrp: 400,
        discount: 15,
      },
      {
        slNum: 33,
        title: "Malgudi Schooldays",
        author: "R.K. Narayan",
        publisher: "Indian Thought Publications",
        language: "English",
        genres: ["Children's Literature", "Fiction"],
        year: "1943",
        mrp: 220,
        discount: 10,
      },
      {
        slNum: 34,
        title: "Mahabharata",
        author: "Vyasa",
        publisher: "Gita Press",
        language: "Sanskrit",
        genres: ["Epic", "Mythology"],
        year: "8th century BCE",
        mrp: 600,
        discount: 25,
      },
      {
        slNum: 35,
        title: "Dracula",
        author: "Bram Stoker",
        publisher: "Archibald Constable and Company",
        language: "English",
        genres: ["Horror", "Gothic Fiction"],
        year: "1897",
        mrp: 300,
        discount: 15,
      },
      {
        slNum: 36,
        title: "The Adventures of Tintin: The Blue Lotus",
        author: "Hergé",
        publisher: "Casterman",
        language: "French",
        genres: ["Comics", "Adventure"],
        year: "1936",
        mrp: 320,
        discount: 10,
      },
      {
        slNum: 37,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        publisher: "Harper",
        language: "English",
        genres: ["Anthropology", "History"],
        year: "2011",
        mrp: 450,
        discount: 20,
      },
      {
        slNum: 38,
        title: "The Alchemist",
        author: "Paulo Coelho",
        publisher: "HarperTorch",
        language: "Portuguese",
        genres: ["Adventure", "Philosophical Fiction"],
        year: "1988",
        mrp: 280,
        discount: 15,
      },
      {
        slNum: 39,
        title: "Maus",
        author: "Art Spiegelman",
        publisher: "Pantheon Books",
        language: "English",
        genres: ["Graphic Novel", "Biography"],
        year: "1980",
        mrp: 400,
        discount: 10,
      },
      {
        slNum: 40,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        publisher: "Bantam Books",
        language: "English",
        genres: ["Science", "Non-Fiction"],
        year: "1988",
        mrp: 500,
        discount: 15,
      },
      {
        slNum: 41,
        title: "The Road",
        author: "Cormac McCarthy",
        publisher: "Knopf",
        language: "English",
        genres: ["Post-Apocalyptic", "Fiction"],
        year: "2006",
        mrp: 350,
        discount: 5,
      },
      {
        slNum: 42,
        title: "Watchmen",
        author: "Alan Moore",
        publisher: "DC Comics",
        language: "English",
        genres: ["Graphic Novel", "Superhero"],
        year: "1986",
        mrp: 450,
        discount: 10,
      },
      {
        slNum: 43,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publisher: "Little, Brown and Company",
        language: "English",
        genres: ["Coming-of-Age", "Fiction"],
        year: "1951",
        mrp: 300,
        discount: 10,
      },
      {
        slNum: 44,
        title: "Gone Girl",
        author: "Gillian Flynn",
        publisher: "Crown Publishing Group",
        language: "English",
        genres: ["Thriller", "Psychological Fiction"],
        year: "2012",
        mrp: 380,
        discount: 15,
      },
      {
        slNum: 45,
        title: "The Diary of a Young Girl",
        author: "Anne Frank",
        publisher: "Contact Publishing",
        language: "Dutch",
        genres: ["Biography", "Historical"],
        year: "1947",
        mrp: 250,
        discount: 10,
      },
      {
        slNum: 46,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publisher: "J.B. Lippincott & Co.",
        language: "English",
        genres: ["Southern Gothic", "Legal Fiction"],
        year: "1960",
        mrp: 280,
        discount: 20,
      },
      {
        slNum: 47,
        title: "The Shining",
        author: "Stephen King",
        publisher: "Doubleday",
        language: "English",
        genres: ["Horror", "Psychological Fiction"],
        year: "1977",
        mrp: 420,
        discount: 10,
      },
      {
        slNum: 48,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publisher: "T. Egerton",
        language: "English",
        genres: ["Romantic Fiction", "Classic"],
        year: "1813",
        mrp: 350,
        discount: 15,
      },
      {
        slNum: 49,
        title: "Frankenstein",
        author: "Mary Shelley",
        publisher: "Lackington, Hughes, Harding, Mavor & Jones",
        language: "English",
        genres: ["Horror", "Science Fiction"],
        year: "1818",
        mrp: 280,
        discount: 10,
      },
      {
        slNum: 50,
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        publisher: "The Russian Messenger",
        language: "Russian",
        genres: ["Philosophical Fiction", "Classic"],
        year: "1880",
        mrp: 400,
        discount: 15,
      },
      {
        slNum: 51,
        title: "The Wind-Up Bird Chronicle",
        author: "Haruki Murakami",
        publisher: "Shinchosha",
        language: "Japanese",
        genres: ["Magical Realism", "Fiction"],
        year: "1994",
        mrp: 480,
        discount: 10,
      },
      {
        slNum: 52,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publisher: "Charles Scribner's Sons",
        language: "English",
        genres: ["Tragedy", "Classic"],
        year: "1925",
        mrp: 300,
        discount: 5,
      },
      {
        slNum: 53,
        title: "Beloved",
        author: "Toni Morrison",
        publisher: "Alfred A. Knopf",
        language: "English",
        genres: ["Historical Fiction", "African American Literature"],
        year: "1987",
        mrp: 380,
        discount: 20,
      },
      {
        slNum: 54,
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        publisher: "Francisco de Robles",
        language: "Spanish",
        genres: ["Satire", "Adventure"],
        year: "1605",
        mrp: 450,
        discount: 15,
      },
    ];

    const nonAcademicBooksContainer = document.getElementById(
      "non-academic-books-container"
    );
    const nonAcademicSearchInput = document.getElementById(
      "search-non-academic"
    );
    const filterLanguage = document.getElementsByName("filter-language");
    const filterSort = document.getElementById("filter-sort");
    const filterFiction = document.getElementById("filter-fiction");
    const filterNonFiction = document.getElementById("filter-non-fiction");
    const filterComics = document.getElementById("filter-comics");
    const filterAge = document.getElementById("filter-age");
    const resetNonAcademicFiltersBtn = document.getElementById(
      "reset-non-academic-filters"
    );

    function populateNonAcademicBooks(bookArray) {
      nonAcademicBooksContainer.innerHTML = ""; // Clear previous content
      bookArray.forEach((book) => {
        const phoneNumber = 7478987797;
        const message = encodeURIComponent(
          `Hi, I am interested in this product- ${book.title} by ${book.author} from ${book.publisher}. Please confirm my order.`
        );
        const whatsapLink = `https://wa.me/91${phoneNumber}?text=${message}`;
        const bookCard = `
                  <div class="col-12">
                      <div class="book-card">
                          <div class="row">
                              <div class="col-4 col-md-3 position-relative">
                                  <div class="book-img" data-bs-toggle="modal" data-bs-target="#bookModal" data-img-src="books/book${
                                    book.slNum
                                  }.webp" data-title="${book.title}">
                                      <img src="books/book${
                                        book.slNum
                                      }.webp" alt="Book-Cover" class="img-fluid">
                                      <div class="heart-icon">
                                          <i class="fas fa-heart"></i>
                                      </div>
                                  </div>
                                  <div class="d-block d-md-none price-div-sm text-center">
                                      <div class="mrp-sm">₹<s>${
                                        book.mrp
                                      }</s></div>
                                      <div class="price-sm"><strong>₹<span>${Math.round(
                                        book.mrp -
                                          (book.mrp * book.discount) / 100
                                      )}</span></strong></div>
                                  </div>
                              </div>
                              <div class="col-8 col-md-9">
                                  <div class="row">
                                      <div class="col-12 col-md-7 details-div">
                                          <div class="book-title">${
                                            book.title
                                          }</div>
                                          <div class="book-details">
                                              <ul>
                                                  <li><strong>Author : </strong>${
                                                    book.author
                                                  }</li>
                                                  <li><strong>Publisher : </strong>${
                                                    book.publisher
                                                  }</li>
                                                  <li><strong>Language : </strong>${
                                                    book.language
                                                  }</li>
                                                  <li><strong>Genre : </strong>${book.genres.join(
                                                    ", "
                                                  )}</li>
                                                  <li><strong>Year : </strong>${
                                                    book.year
                                                  }</li>
                                                  
                                              </ul>
                                          </div>
                                      </div>
                                      <div class="d-none d-md-flex col-md-5 price-div">
                                          <div class="price">₹<span>${Math.round(
                                            book.mrp -
                                              (book.mrp * book.discount) / 100
                                          )}</span></div>
                                          <div class="mrp">₹<s>${
                                            book.mrp
                                          }</s></div>
                                          <div class="buy-link btn btn-primary"><a href="${whatsapLink}"><i class="fa-solid fa-bolt-lightning"></i>Get Now</a></div>
                                      </div>
                                  </div>
                                  <div class="buy-link btn btn-primary d-block d-md-none"><a href="${whatsapLink}"><i class="fa-solid fa-bolt-lightning"></i>Get Now</a></div>
                              </div>
                          </div>
                      </div>
                  </div>
              `;
        nonAcademicBooksContainer.insertAdjacentHTML("beforeend", bookCard);
      });

      // Add event listeners for the modal
      document.querySelectorAll(".book-img").forEach((imgDiv) => {
        imgDiv.addEventListener("click", function () {
          const imgSrc = this.getAttribute("data-img-src");
          const title = this.getAttribute("data-title");
          document.getElementById("modal-book-img").src = imgSrc;
          document.getElementById("bookModalLabel").innerText = title;
        });
      });
    }

    function filterNonAcademicBooks() {
      const query = nonAcademicSearchInput.value.toLowerCase();
      let selectedLanguage = "";
      let selectedFiction = filterFiction.value.toLowerCase();
      let selectedNonFiction = filterNonFiction.value.toLowerCase();
      let selectedComics = filterComics.value.toLowerCase();
      let selectedAge = filterAge.value.toLowerCase();
      const selectedSort = filterSort.value;

      filterLanguage.forEach((language) => {
        if (language.checked) {
          selectedLanguage = language.value.toLowerCase();
        }
      });

      let filteredBooks = nonAcademicBooks.filter((book) => {
        return (
          (book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query) ||
            book.genres.join(", ").toLowerCase().includes(query)) &&
          (selectedLanguage === "" ||
            book.language.toLowerCase() === selectedLanguage) &&
          (selectedFiction === "" ||
            book.genres
              .map((g) => g.toLowerCase())
              .includes(selectedFiction)) &&
          (selectedNonFiction === "" ||
            book.genres
              .map((g) => g.toLowerCase())
              .includes(selectedNonFiction)) &&
          (selectedComics === "" ||
            book.genres.map((g) => g.toLowerCase()).includes(selectedComics)) &&
          (selectedAge === "" ||
            book.genres.map((g) => g.toLowerCase()).includes(selectedAge))
        );
      });

      // Sorting logic
      if (selectedSort === "newest") {
        filteredBooks.sort((a, b) => Number(b.year) - Number(a.year));
      } else if (selectedSort === "price-low-high") {
        filteredBooks.sort(
          (a, b) =>
            a.mrp -
            (a.mrp * a.discount) / 100 -
            (b.mrp - (b.mrp * b.discount) / 100)
        );
      } else if (selectedSort === "price-high-low") {
        filteredBooks.sort(
          (a, b) =>
            b.mrp -
            (b.mrp * b.discount) / 100 -
            (a.mrp - (a.mrp * a.discount) / 100)
        );
      }

      populateNonAcademicBooks(filteredBooks);
    }

    // Event Listeners
    nonAcademicSearchInput.addEventListener("input", filterNonAcademicBooks);
    filterLanguage.forEach((language) =>
      language.addEventListener("change", filterNonAcademicBooks)
    );
    filterFiction.addEventListener("change", filterNonAcademicBooks);
    filterNonFiction.addEventListener("change", filterNonAcademicBooks);
    filterComics.addEventListener("change", filterNonAcademicBooks);
    filterComics.addEventListener("change", filterNonAcademicBooks);
    filterSort.addEventListener("change", filterNonAcademicBooks);
    resetNonAcademicFiltersBtn.addEventListener("click", () => {
      nonAcademicSearchInput.value = "";
      filterLanguage.forEach((language) => (language.checked = false));
      filterFiction.value = "";
      filterNonFiction.value = "";
      filterComics.value = "";
      filterAge.value = "";
      filterSort.value = "";
      populateNonAcademicBooks(nonAcademicBooks);
    });

    // Initial population of books
    populateNonAcademicBooks(nonAcademicBooks);
  });
})();

//-----------------------------------------------------REVIEW AND REQUEST FORM-----------------------------------------

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submissions
    function handleFormSubmission(formId, type) {
      const form = document.getElementById(formId);

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Collecting form data
        const bookTitle = document.querySelector(
          `#${formId} #book-title`
        ).value;
        const bookAuthor = document.querySelector(
          `#${formId} #book-author`
        ).value;
        const bookPublisher = document.querySelector(
          `#${formId} #book-publisher`
        ).value;
        const reviewerName = document.querySelector(
          `#${formId} #reviewer-name`
        ).value;

        let message;

        if (type === "request") {
          message =
            `Hi, I would like to request the following book:\n\n` +
            `*Book Title:* ${bookTitle}\n` +
            `*Author:* ${bookAuthor}\n` +
            `*Publisher:* ${bookPublisher}\n\n` +
            `*Requested by:* ${reviewerName}`;
        } else if (type === "review") {
          const goodreadsRating =
            document.querySelector(`#${formId} #goodreads-rating`).value ||
            "N/A";
          const personalRating = document.querySelector(
            `#${formId} #personal-rating`
          ).value;
          const plotSummary = document.querySelector(
            `#${formId} #plot-summary`
          ).value;
          const reviewText = document.querySelector(
            `#${formId} #review-text`
          ).value;

          message =
            `Hi, I would like to submit a review for the following book:\n\n` +
            `*Book Title:* ${bookTitle}\n` +
            `*Author:* ${bookAuthor}\n` +
            `*Publisher:* ${bookPublisher}\n\n` +
            `*Goodreads Rating:* ${goodreadsRating}\n` +
            `*My Rating:* ${personalRating}/10\n\n` +
            `*Plot Summary:*\n${plotSummary}\n\n` +
            `*My Review:*\n${reviewText}\n\n` +
            `*Reviewed by:* ${reviewerName}`;
        }

        // Create WhatsApp link
        const phoneNumber = 8100542901; // Replace with actual number
        const whatsapLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
          message
        )}`;

        // Redirect to WhatsApp
        window.location.href = whatsapLink;
      });
    }

    // Apply the function to both forms
    handleFormSubmission("request-book", "request");
    handleFormSubmission("review-form", "review");
  });
})();
