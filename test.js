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
  ];

  const nonAcademicBooksContainer = document.getElementById(
    "non-academic-books-container"
  );
  const nonAcademicSearchInput = document.getElementById("search-non-academic");
  const filterLanguage = document.getElementsByName("filter-language");
  const filterGenre = document.getElementById("filter-genre");
  const filterSort = document.getElementById("filter-sort");
  const resetNonAcademicFiltersBtn = document.getElementById(
    "reset-non-academic-filters"
  );

  function populateNonAcZademicBooks(bookArray) {
    nonAcademicBooksContainer.innerHTML = ""; // Clear previous content
    bookArray.forEach((book) => {
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
                                          <div class="buy-link btn btn-primary"><a href="https://wa.me/917478987797">Get This Now</a></div>
                                      </div>
                                  </div>
                                  <div class="buy-link btn btn-primary d-block d-md-none"><a href="https://wa.me/917478987797">Get Now</a></div>
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
    let selectedGenre = filterGenre.value.toLowerCase();
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
        (selectedGenre === "" ||
          book.genres.map((g) => g.toLowerCase()).includes(selectedGenre))
      );
    });

    // Sorting logic
    if (selectedSort === "newest") {
      filteredBooks.sort((a, b) => b.year - a.year);
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
  filterGenre.addEventListener("change", filterNonAcademicBooks);
  filterSort.addEventListener("change", filterNonAcademicBooks);
  resetNonAcademicFiltersBtn.addEventListener("click", () => {
    nonAcademicSearchInput.value = "";
    filterLanguage.forEach((language) => (language.checked = false));
    filterGenre.value = "";
    filterSort.value = "";
    populateNonAcademicBooks(nonAcademicBooks);
  });

  // Initial population of books
  populateNonAcademicBooks(nonAcademicBooks);
});
