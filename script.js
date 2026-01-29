let allProducts = [];

fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        allProducts = data.products;
        displayProducts(allProducts);
    })
    .catch(err => console.log(err));

function displayProducts(products) {
    const container = document.getElementById("products");
    container.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.thumbnail}">
            <h3>${product.title}</h3>
            <div class="price">₹ ${product.price}</div>
        `;

        container.appendChild(card);
    });
}

// function searchProduct() {
//     const value = document
//         .getElementById("searchInput")
//         .value
//         .toLowerCase();

//     const filtered = allProducts.filter(p =>
//         p.title.toLowerCase().includes(value)
//     );

//     displayProducts(filtered);
// }
