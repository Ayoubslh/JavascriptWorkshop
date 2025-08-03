  import renderProducts from "./RenderProducts.js";
import products from '../assets/data/items.js';
  
  function searchProducts() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            const filtered = products.filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
            renderProducts(filtered);
 }

    export default searchProducts;  