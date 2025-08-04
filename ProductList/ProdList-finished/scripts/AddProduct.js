 import products from './../assets/data/items.js';
import renderProducts from './RenderProducts.js';
function AddProduct() {
    const form = document.getElementById('addForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const newProduct = {
            image: document.getElementById('newProductImage').value,
            name: document.getElementById('newProductName').value,
            description: document.getElementById('newProductDescription').value,
            price: document.getElementById('newProductPrice').value,
            category: document.getElementById('newProductCategory').value
        };
        products.push(newProduct);
        renderProducts(products);
        form.reset();
    });
}


export default AddProduct;