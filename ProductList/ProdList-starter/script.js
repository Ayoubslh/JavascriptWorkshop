 const products = [
  {
    id: 1,
    name: "ASUS ROG Phone",
    description: "High-performance gaming phone with AMOLED display",
    price: 1299,
    image: "assets/imgs/asus.jpeg",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Huawei Smartphone",
    description: "Latest Android smartphone with amazing camera",
    price: 699,
    image: "assets/imgs/huawei.jpeg",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Apple iPad",
    description: "Premium tablet with Retina display and A14 chip",
    price: 799,
    image: "assets/imgs/Ipad.jpeg",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Huawei Watch",
    description: "Fitness tracking smartwatch with heart rate monitor",
    price: 199,
    image: "assets/imgs/Hwatch.jpeg",
    category: "Wearables",
  },
  {
    id: 5,
    name: "Lenovo Tab",
    description: "Lightweight productivity tablet",
    price: 499,
    image: "assets/imgs/Ltab.jpeg",
    category: "Electronics",
  },
  {
    id: 6,
    name: "MacBook Air",
    description: "Slim Apple laptop with M1 chip",
    price: 999,
    image: "assets/imgs/ILap.jpeg",
    category: "Electronics",
  },
  {
    id: 7,
    name: "Galaxy Tab",
    description: "Premium Samsung tablet with AMOLED display",
    price: 649,
    image: "assets/imgs/GTab.jpeg",
    category: "Electronics",
  },
  {
    id: 8,
    name: "iPhone 15 Pro Max",
    description: "Latest Apple flagship with powerful camera",
    price: 1399,
    image: "assets/imgs/iphone15promax.jpeg",
    category: "Electronics",
  },
  {
    id: 9,
    name: "Lenovo Laptop",
    description: "Powerful laptop for work and gaming",
    price: 899,
    image: "assets/imgs/LLap.jpeg",
    category: "Electronics",
  },
  {
    id: 10,
    name: "Dell Laptop",
    description: "Reliable Dell laptop for everyday use",
    price: 799,
    image: "assets/imgs/Delaptop.jpeg",
    category: "Electronics",
  },
  {
    id: 11,
    name: "Motorola Phone",
    description: "Budget-friendly Android phone",
    price: 299,
    image: "assets/imgs/motorola.jpeg",
    category: "Electronics",
  },
  {
    id: 12,
    name: "OnePlus Phone",
    description: "Smooth performance and fast charging",
    price: 599,
    image: "assets/imgs/oneplus.jpeg",
    category: "Electronics",
  },
  {
    id: 13,
    name: "Google Pixel",
    description: "Clean Android experience with great camera",
    price: 699,
    image: "assets/imgs/pixel.jpeg",
    category: "Electronics",
  },
  {
    id: 14,
    name: "Realme Phone",
    description: "Affordable phone with great specs",
    price: 349,
    image: "assets/imgs/realme.jpeg",
    category: "Electronics",
  },
  {
    id: 15,
    name: "SGU24 Phone",
    description: "High-performance device for power users",
    price: 449,
    image: "assets/imgs/sgu24.jpeg",
    category: "Electronics",
  },
  {
    id: 16,
    name: "Sony Xperia",
    description: "Compact Android phone with premium audio",
    price: 699,
    image: "assets/imgs/sony.jpeg",
    category: "Electronics",
  },
  {
    id: 17,
    name: "Xiaomi Phone",
    description: "Powerful phone with long battery life",
    price: 399,
    image: "assets/imgs/xiaomi.jpeg",
    category: "Electronics",
  },
];



        
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

        function renderProducts(productsToRender = products) {
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

                grid.appendChild(card);
            });
        }

        function searchProducts() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            const filtered = products.filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
            renderProducts(filtered);
        }

        function editProduct(index) {
            alert(`Editing product: ${products[index].name}`);
        }

        function deleteProduct(index) {
            if (confirm(`Are you sure you want to delete ${products[index].name}?`)) {
                products.splice(index, 1);
                renderProducts();
            }
        }

        function toggleSidebar() {
            document.getElementById('sidebar').classList.toggle('active');
        }

        // Search on Enter key
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });

        // Real-time search
        document.getElementById('searchInput').addEventListener('input', function() {
            searchProducts();
        });

        // Initialize the page
        renderProducts();