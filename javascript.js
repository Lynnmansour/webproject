console.log('JavaScript Loaded');

document.addEventListener("DOMContentLoaded", function() {
    // Function to show only the selected category and hide others
    function showCategory = (category) => {
        // Hide all categories
        const categories = document.querySelectorAll('.category');
        categories.forEach((cat) => {
            cat.style.display = 'none';
        });

        // Show the selected category
        const selectedCategory = document.getElementById(category);
        if (selectedCategory) {
            selectedCategory.style.display = 'block'; // Show selected category
        }
    };

    // Get the links in the menu (Dropdown links)
    const foodLink = document.querySelector("a[href='#food']");
    const drinksLink = document.querySelector("a[href='#drinks']");
    const dessertsLink = document.querySelector("a[href='#desserts']");

    // Add click event listeners to the links
    if (foodLink) {
        foodLink.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('Food clicked');
            showCategory('food');
        });
    }
    if (drinksLink) {
        drinksLink.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('Drinks clicked');
            showCategory('drinks');
        });
    }
    if (dessertsLink) {
        dessertsLink.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('Desserts clicked');
            showCategory('desserts');
        });
    }



    showCategory('food');
});




function searchMenuItems() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const itemName = item.querySelector('.menu-text p').innerText.toLowerCase();
        const itemDescription = item.querySelector('.description').innerText.toLowerCase();

        if (itemName.includes(query) || itemDescription.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
.    });
}
