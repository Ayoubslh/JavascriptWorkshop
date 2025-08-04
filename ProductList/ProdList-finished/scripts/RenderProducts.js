 import products from '../assets/data/items.js';
 const modal = document.querySelector('.edit-modal');
 const modalClose = modal.querySelector('.modal-close');
 const saveButton = modal.querySelector('.save-btn');
function renderProducts(productsToRender) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';

    productsToRender.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image"><img src="${product.image}" alt="${product.name}"></div>
            <h2 class="name">${product.name}</h2>
            <p class="description">${product.description}</p>
            <p class="price">$${product.price}</p>
            <div class="product-actions">
                <button class="btn btn-edit" data-index="${index}">Edit</button>
                <button class="btn btn-delete" data-index="${index}">Delete</button>
            </div>
        `;

        card.querySelector('.btn-edit').addEventListener('click', () => editProduct(index));
        card.querySelector('.btn-delete').addEventListener('click', () => deleteProduct(index));

        grid.appendChild(card);
    });
}

function editProduct(index) {
  modal.classList.add('active');
  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    });
  modal.setAttribute('data-index', index);

  const product = products[index];

  modal.querySelector('input[name="productId"]').value = product.id;
  modal.querySelector('input[name="productName"]').value = product.name;
  modal.querySelector('textarea[name="productDescription"]').value = product.description;
  modal.querySelector('input[name="productPrice"]').value = product.price;
  modal.querySelector('select[name="productCategory"]').value = product.category;

  

  
  modal.querySelector('input[name="productImage"]').value = "";


}


const editForm = document.getElementById('editForm'); // assuming your form has this id


editForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const index = modal.getAttribute('data-index');
  const product = products[index];

  product.name = editForm.querySelector('input[name="productName"]').value;
  product.description = editForm.querySelector('textarea[name="productDescription"]').value;
  product.price = parseFloat(editForm.querySelector('input[name="productPrice"]').value);
  product.category = editForm.querySelector('input[name="productCategory"]').value;

  const fileInput = editForm.querySelector('input[name="productImage"]');
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      product.image = event.target.result;
      renderProducts(products);
      modal.classList.remove('active');
    };
    reader.readAsDataURL(file);
  } else {
    renderProducts(products);
    modal.classList.remove('active');
  }
});
function deleteProduct(index) {
    if (confirm(`Are you sure you want to delete ${products[index].name}?`)) {
        products.splice(index, 1);
        renderProducts(products); 
    }
}

export default renderProducts;
