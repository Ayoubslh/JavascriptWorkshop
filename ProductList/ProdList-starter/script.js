  const products = [
            { name: "ASUS Gaming Laptop", description: "High-performance gaming laptop with RTX graphics", price: 1299, image: "💻", category: "Electronics" },
            { name: "Huawei Smartphone", description: "Latest Android smartphone with amazing camera", price: 699, image: "📱", category: "Electronics" },
            { name: "Wireless Headphones", description: "Premium noise-canceling wireless headphones", price: 299, image: "🎧", category: "Audio" },
            { name: "Smart Watch", description: "Fitness tracking smartwatch with heart rate monitor", price: 199, image: "⌚", category: "Wearables" },
            { name: "Tablet Pro", description: "Professional tablet for creative work and productivity", price: 899, image: "📱", category: "Electronics" },
            { name: "Gaming Mouse", description: "RGB gaming mouse with programmable buttons", price: 79, image: "🖱️", category: "Gaming" },
            { name: "Mechanical Keyboard", description: "Premium mechanical keyboard with RGB lighting", price: 149, image: "⌨️", category: "Gaming" },
            { name: "4K Monitor", description: "Ultra-wide 4K monitor for professionals", price: 549, image: "🖥️", category: "Displays" },
            { name: "Bluetooth Speaker", description: "Portable waterproof Bluetooth speaker", price: 89, image: "🔊", category: "Audio" },
            { name: "External SSD", description: "Fast external SSD with 1TB storage", price: 159, image: "💾", category: "Storage" },
            { name: "Webcam HD", description: "1080p HD webcam for video calls", price: 69, image: "📹", category: "Electronics" },
            { name: "USB-C Hub", description: "Multi-port USB-C hub with HDMI and ethernet", price: 49, image: "🔌", category: "Accessories" }
        ];

        function renderProducts(productsToRender = products) {
            const grid = document.getElementById('productGrid');
            grid.innerHTML = '';

            productsToRender.forEach((product, index) => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <div class="product-image">${product.image}</div>
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p class="price">$${product.price}</p>
                    <div class="product-actions">
                        <button class="btn btn-edit" onclick="editProduct(${index})">Edit</button>
                        <button class="btn btn-delete" onclick="deleteProduct(${index})">Delete</button>
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