document.addEventListener('DOMContentLoaded', function () {
  // Contact form interactivity
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for contacting Radhakrisna Garments! We will get back to you soon.');
      form.reset();
    });
  }

  // Product filtering and rendering
  const products = [
    { name: "Blue Kurta Pajama", category: "kurta", image: "https://via.placeholder.com/150", price: "₹999" },
    { name: "Elegant Saree", category: "saree", image: "https://via.placeholder.com/150", price: "₹1,299" },
    { name: "Kids T-shirt", category: "kids", image: "https://via.placeholder.com/150", price: "₹499" },
    { name: "Thermal Set", category: "winter", image: "https://via.placeholder.com/150", price: "₹799" },
    { name: "Cotton Vest", category: "undergarments", image: "https://via.placeholder.com/150", price: "₹199" },
    { name: "Running Shoes", category: "shoes", image: "https://via.placeholder.com/150", price: "₹1,599" },
    { name: "Summer Dress", category: "summer", image: "https://via.placeholder.com/150", price: "₹899" },
  ];

  const productGrid = document.getElementById("productGrid");
  const filter = document.getElementById("productFilter");

  if (productGrid && filter) {
    function renderProducts(filterValue) {
      productGrid.innerHTML = "";
      const filtered = filterValue === "all" ? products : products.filter(p => p.category === filterValue);
      filtered.forEach(product => {
        const card = `
          <div class="border rounded-lg p-4 shadow hover:shadow-md transition">
            <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover mb-4 rounded">
            <h3 class="text-lg font-semibold text-gray-800">${product.name}</h3>
            <p class="text-blue-600 font-bold mt-2">${product.price}</p>
          </div>
        `;
        productGrid.innerHTML += card;
      });
    }

    filter.addEventListener("change", () => {
      renderProducts(filter.value);
    });

    renderProducts("all");
  }
});
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}); 
// Back to top button functionality
const backToTopButton = document.getElementById('backToTop');   
if (backToTopButton) {
  backToTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove('hidden');
    } else {
      backToTopButton.classList.add('hidden');
    }
  });
}   
