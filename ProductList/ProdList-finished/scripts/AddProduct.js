import products from './../assets/data/items.js';
import renderProducts from './RenderProducts.js';

function AddProduct() {
  const form = document.getElementById('addForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fileInput = document.getElementById('newProductImage');
    const file = fileInput.files[0];

    if (!file) {
      alert("Please select an image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const newProduct = {
        id: Date.now(), // Optional: unique ID
        image: event.target.result,
        name: document.getElementById('newProductName').value.trim(),
        description: document.getElementById('newProductDescription').value.trim(),
        price: parseFloat(document.getElementById('newProductPrice').value),
        category: document.getElementById('newProductCategory').value.trim(),
      };

      products.push(newProduct);
      renderProducts(products);
      form.reset();
      fileInput.value = ""; 
    };

    reader.readAsDataURL(file);
  });
}

export default AddProduct;
