// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Script for pagination

let currentPage = 1; // Initialize variables to keep track of the current page and products per page.
const productsPerPage = 20;

// Function to show products for the current page.
function showProducts() {
    const products = document.querySelectorAll('.pro');
    const pageButtons = document.querySelectorAll('.page');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');

    // Calculate the start and end indices of the products to display.
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    // Loop through all products and hide or show them based on the current page.
    products.forEach((product, index) => {
        if (index >= startIndex && index < endIndex) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });

    // Update the active page button.
    pageButtons.forEach((button, index) => {
        if (index + 1 === currentPage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Show/hide previous and next page buttons and Page 3 and Page 4 buttons.
    if (currentPage > 1) {
        prevPageButton.style.display = 'inline-block';
    } else {
        prevPageButton.style.display = 'none';
    }

    if (currentPage < Math.ceil(products.length / productsPerPage)) {
        nextPageButton.style.display = 'inline-block';
        document.querySelector('.page:nth-child(5)').style.display = 'none'; // Hide Page 4
    } else {
        nextPageButton.style.display = 'none';
        document.querySelector('.page:nth-child(5)').style.display = 'inline-block'; // Hide Page 4
    }
}

// Add click event listeners to page buttons.
document.querySelectorAll('.page').forEach((button, index) => {
    button.addEventListener('click', () => {
        currentPage = index + 1;
        showProducts();
    });
});

// Add click event listener to the previous page button.
document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showProducts();
    }
});

// Add click event listener to the next page button.
document.getElementById('next-page').addEventListener('click', () => {
    if (currentPage < Math.ceil(document.querySelectorAll('.pro').length / productsPerPage)) {
        currentPage++;
        showProducts();
    }
});

// Initial call to show products for the first page.
showProducts();
