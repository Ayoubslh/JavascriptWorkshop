

function renderCarousel(items) {
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.innerHTML = ''; // Clear existing content
    
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('carousel-item');
    
        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.title;
    
        const itemTitle = document.createElement('h3');
        itemTitle.textContent = item.title;
    
        itemElement.appendChild(itemImage);
        itemElement.appendChild(itemTitle);
        carouselContainer.appendChild(itemElement);
    });
    }
 export default renderCarousel;