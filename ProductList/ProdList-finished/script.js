import products from './assets/data/items.js';
import renderProducts from './scripts/RenderProducts.js';
import searchProducts from './scripts/Search.js';
import AddProduct from './scripts/AddProduct.js';

const links = document.querySelectorAll('.sidebar a');
const sections = document.querySelectorAll('.tab-content');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Remove 'active' from all sections
        sections.forEach(section => section.classList.remove('active'));
          links.forEach(l => l.classList.remove('active'));

        // Add 'active' to the one being clicked
        if (targetSection) {
            targetSection.classList.add('active');
            
            link.classList.toggle('active');
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        
    });
});



document.addEventListener('DOMContentLoaded', () => {   

       renderProducts(products);
         document.getElementById('searchInput').addEventListener('input', searchProducts);
           document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
        AddProduct();
        document.querySelector('.mobile-toggle').addEventListener('click', toggleSidebar);
    });

    function toggleSidebar() {
        document.getElementById('sidebar').classList.toggle('active');
        }

       
      

        document.getElementById('searchInput').addEventListener('input', function() {
            searchProducts();
        });

       