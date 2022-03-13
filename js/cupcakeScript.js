const cupcakeContainer = document.getElementById("cupcake-container");

// Cupcake List (iterating over a JSON file with cupcake data)
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        loadData(JSON.parse(xhttp.responseText));
    }
};
xhttp.open("GET", "data/data.json", true);
xhttp.send();

const clearList = () => {
    let list = document.querySelectorAll("#cupcake-container div");

    for (i = 0; (div = list[i]); i++) {
        div.parentNode.removeChild(div);
    }
};
const loadData = (data) => {
    populateCupcakes(data, "all");
    addCategories(data);
};
const filterList = (category) => {
    document.querySelectorAll(".cupcake-card").forEach((card) => {
        let cupcakeCat = card.children[1].textContent;
        if (cupcakeCat === category || category === "all") {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
};
const addCategories = (data) => {
    let allCategories = ["all", ...new Set(data.map((item) => item.category))];
    allCategories.forEach((category) => {
        let ele = document.createElement("li");
        ele.setAttribute("class", "category-btn");
        ele.addEventListener("click", (event) => {
            filterList(category);

            document.querySelectorAll(".category-btn").forEach((btn) => {
                if (btn === ele || btn.classList.contains("active-category")) {
                    btn.classList.toggle("active-category");
                }
            });
        });
        ele.innerHTML = category;
        document.getElementById("categories-list").appendChild(ele);
    });
};
const populateCupcakes = (cupcakeList, category) => {
    // Iterate over the list of cupcakes to produce a list
    for (let i = 0; i < cupcakeList.length; i++) {
        let item = cupcakeList[i];
        if (category === "all" || category === item.category) {
            let cupcake = `
            <div class="cupcake-card" id="${item.flavour}">
                <h4 class="cupcake-label">${item.flavour}</h4>
                <div class="category-tag">${item.category}</div>
                <p class="cupcake-price">${`regular: $${item.price.regular.toFixed(
                    2
                )}, mini: $${item.price.mini.toFixed(2)}`}</p>
                <div class="img-container"
                style="background: url(${
                    item.image
                }); background-position: center; background-size: cover;">
                </div>  
                <p class="cupcake-description">${item.description}</p>
            </div>
            `;
            cupcakeContainer.innerHTML += cupcake;
        }
    }
};
