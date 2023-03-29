function changeLanguage(event) {
    const langSelect = document.getElementById('langSelect');
    const selectedId = langSelect.options[langSelect.selectedIndex].id;

    if (selectedId === 'en') {
        setEnglishValues();
        alert('Enjoy the webpage in English!')
    } else {
        setDanishValues();
        alert('Nyd hjemmeside på dansk!')
    }



}

function setDanishValues() {
    const menu = "MENU";
    document.getElementById('title').textContent = menu;

    const cafeTitle = "CAMPER CAFE";
    document.getElementById('cafeTitle').textContent = cafeTitle;

    const est = "Etableret 2020";
    document.getElementById('est').textContent = est;

    const secCoffee = "Kaffe";
    document.getElementById('secCoffee').textContent = secCoffee;

    const secDesserts = "Desserter";
    document.getElementById('secDesserts').textContent = secDesserts;

    const products = "Produkter";
    document.getElementById('products').textContent = products;

    const camperCafe = "Camper Cafe";
    document.getElementById('camperCafe').textContent = camperCafe;

    const legalActivities = "Juridiske aktiviteter";
    document.getElementById('legalActivities').textContent = legalActivities;

    const findUs = "Find Os";
    document.getElementById('findUs').textContent = findUs;

    const coffeeFV = "Fransk Vanilje";
    document.getElementById('coffeeFV').textContent = coffeeFV;

    const coffeeCM = "Karamel Macchiato";
    document.getElementById('coffeeCM').textContent = coffeeCM;

    const coffeeH = "Hasselnød";
    document.getElementById('coffeeH').textContent = coffeeH;

    const coffeePS = "Græskar Krydderi";
    document.getElementById('coffeePS').textContent = coffeePS;

    const coffeeM = "Mokka";
    document.getElementById('coffeeM').textContent = coffeeM;

    const dessertCP = "Kirsebærtærte";
    document.getElementById('dessertCP').textContent = dessertCP;

    const dessertC = "Cheesecake";
    document.getElementById('dessertC').textContent = dessertC;

    const dessertCR = "Kanelsnegl";
    document.getElementById('dessertCR').textContent = dessertCR;
}

function setEnglishValues() {
    const menu = "MENU";
    document.getElementById('title').textContent = menu;

    const cafeTitle = "CAMPER CAFE";
    document.getElementById('cafeTitle').textContent = cafeTitle;

    const est = "Est. 2020";
    document.getElementById('est').textContent = est;

    const secCoffee = "Coffee";
    document.getElementById('secCoffee').textContent = secCoffee;

    const secDesserts = "Desserts";
    document.getElementById('secDesserts').textContent = secDesserts;

    const products = "Products";
    document.getElementById('products').textContent = products;

    const camperCafe = "Camper Cafe";
    document.getElementById('camperCafe').textContent = camperCafe;

    const legalActivities = "Legal Activities";
    document.getElementById('legalActivities').textContent = legalActivities;

    const findUs = "Find Us";
    document.getElementById('findUs').textContent = findUs;

    const coffeeFV = "French Vanilla";
    document.getElementById('coffeeFV').textContent = coffeeFV;

    const coffeeCM = "Caramel Macchiato";
    document.getElementById('coffeeCM').textContent = coffeeCM;

    const coffeeH = "Hazelnut";
    document.getElementById('coffeeH').textContent = coffeeH;

    const coffeePS = "Pumpkin Spice";
    document.getElementById('coffeePS').textContent = coffeePS;

    const coffeeM = "Mocha";
    document.getElementById('coffeeM').textContent = coffeeM;

    const dessertCP = "Cherry Pie";
    document.getElementById('dessertCP').textContent = dessertCP;

    const dessertC = "Cheesecake";
    document.getElementById('dessertC').textContent = dessertC;

    const dessertCR = "Cinnamon Roll";
    document.getElementById('dessertCR').textContent = dessertCR;
}