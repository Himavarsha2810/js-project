    async function fetchBooks() {
    const response = await fetch('https://679b63c633d316846323adc6.mockapi.io/books');
    const books = await response.json();
    return books;
}

function createCard(book) {
    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('h2');
    title.innerText = book.title;
    card.appendChild(title);

    const author = document.createElement('p');
    author.innerText = book.author;
    card.appendChild(author);

    const genre = document.createElement('p');
    genre.innerText = book.genre;
    card.appendChild(genre); 

    const price = document.createElement('p');
    genre.innerText = book.price;
    card.appendChild(price);


    return card;
}

async function initSlider() {
    const slider = document.getElementById('slider');
    const books = await fetchBooks();

    books.forEach(book => {
        const card = createCard(book);
        slider.appendChild(card);
    });

    let currentIndex = 0;

    function slideNext() {
        currentIndex = (currentIndex + 1) % books.length;
        const offset = -currentIndex * (250 + 20); // Card width + margin
        slider.style.transform = `translateX(${offset}px)`;
    }

    setInterval(slideNext, 3000);
}

initSlider();