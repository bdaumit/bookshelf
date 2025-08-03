const books = [
  {
    id: "book1",
    title: "The Reality Dysfunction",
    author: "Peter F. Hamilton",
    authorLast: "Hamilton",
    spine: "covers/book1_spine.jpg",
    cover: "covers/book1_cover.jpg",
    summary: "A sci-fi epic set in a distant future where humanity spans hundreds of worlds—and something terrifying begins to cross over from beyond death."
  },
  {
    id: "book2",
    title: "Pandora's Star",
    author: "Peter F. Hamilton",
    authorLast: "Hamilton",
    spine: "covers/book2_spine.jpg",
    cover: "covers/book2_cover.jpg",
    summary: "When a mysterious force destroys a distant star system, humanity's exploration brings them face to face with an alien power."
  },
  {
    id: "book3",
    title: "Dune",
    author: "Frank Herbert",
    authorLast: "Herbert",
    spine: "covers/book3_spine.jpg",
    cover: "covers/book3_cover.jpg",
    summary: "A legendary sci-fi saga about politics, prophecy, and survival on the desert world of Arrakis."
  },
  {
    id: "book4",
    title: "Gaunt’s Ghosts",
    author: "Dan Abnett",
    authorLast: "Abnett",
    spine: "covers/book4_spine.jpg",
    cover: "covers/book4_cover.jpg",
    summary: "An elite Imperial Guard unit fights impossible battles across brutal campaigns in the Warhammer 40k universe."
  }
];

function sortBooks(books) {
  return books.sort((a, b) => {
    const lastCompare = a.authorLast.localeCompare(b.authorLast);
    if (lastCompare !== 0) return lastCompare;
    return a.title.localeCompare(b.title);
  });
}

function renderBookshelf() {
  const sortedBooks = sortBooks(books);
  const shelf = document.querySelector('.bookshelf');
  shelf.innerHTML = '';

  sortedBooks.forEach(book => {
    const div = document.createElement('div');
    div.className = 'book';
    div.onclick = () => showBookDetails(book.id);

    const img = document.createElement('img');
    img.src = book.spine;
    img.alt = `${book.title} Spine`;
    img.title = `${book.title} by ${book.author}`; // Tooltip on hover

    div.appendChild(img);
    shelf.appendChild(div);
  });
}

function showBookDetails(bookId) {
  const book = books.find(b => b.id === bookId);
  document.getElementById('bookTitle').innerText = `${book.title} by ${book.author}`;
  document.getElementById('bookCover').src = book.cover;
  document.getElementById('bookCover').alt = `${book.title} Cover`;
  document.getElementById('bookSummary').innerText = book.summary;
  document.getElementById('bookModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('bookModal').style.display = 'none';
}

window.onload = renderBookshelf;
