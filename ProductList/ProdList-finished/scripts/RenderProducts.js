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
    modal.querySelector('input[name="productId"]').value = products[index].id;
    modal.querySelector('input[name="productName"]').value = products[index].name;
    modal.querySelector('textarea[name="productDescription"]').value = products[index].description;
    modal.querySelector('input[name="productPrice"]').value = products[index].price;
    modal.querySelector('input[name="productCategory"]').value = products[index].category;
    modal.setAttribute('data-index', index);
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    

 
    
   
}

saveButton.addEventListener('click', () => {
    const index = modal.getAttribute('data-index');
    products[index].name = modal.querySelector('input[name="name"]').value;
    products[index].description = modal.querySelector('textarea[name="description"]').value;
    products[index].price = parseFloat(modal.querySelector('input[name="price"]').value);
    products[index].category = modal.querySelector('select[name="category"]').value;

    modal.classList.remove('active');
    renderProducts(products);
});

function deleteProduct(index) {
    if (confirm(`Are you sure you want to delete ${products[index].name}?`)) {
        products.splice(index, 1);
        renderProducts(products); 
    }
}

export default renderProducts;
