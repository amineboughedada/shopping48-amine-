const products = document.querySelectorAll('.product');
let currentPage = 0;
const productsPerPage = 9;

function showProducts() {
  for (let i = 0; i < products.length; i++) {
    if (i >= currentPage * productsPerPage && i < (currentPage + 1) * productsPerPage) {
      products[i].style.display = 'block';
    } else {
      products[i].style.display = 'none';
    }
  }
}

function showNextPage() {
  if (currentPage < Math.ceil(products.length / productsPerPage) - 1) {
    currentPage++;
    showProducts();
  }
}

function showPreviousPage() {
  if (currentPage > 0) {
    currentPage--;
    showProducts();
  }
}

showProducts();
