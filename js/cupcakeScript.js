
// Cupcake List (iterating over a JSON file with cupcake data)
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        populateCupcakes(JSON.parse(xhttp.responseText));
        // cupcakeList = JSON.parse(xhttp.responseText);
    }
};
xhttp.open("GET","js/data.json",true);
xhttp.send();

const populateCupcakes = (cupcakeList) =>{
    let allCategories = [...new Set(cupcakeList.map((item)=>item.category))];
    // Iterate over the list of cupcakes to produce a list
    for(let i=0;i<cupcakeList.length;i++){
        let item = cupcakeList[i];
        let cupcake = `<li>
        <div class="cupcake-container">
            <h2 class="cupcake-label">${item.flavour}</h2>
            <div class="tag category-tag">${item.category}</div>
            <p class="cupcake-price">${`regular: $${item.price.regular.toFixed(2)}, mini: $${item.price.mini.toFixed(2)}`}</p>
            <img class="cupcake-img" src=${item.image} alt=${item.flavour +" cupcake"}/>
            <p class="cupcake-description">${item.description}</p>
        </div>
        </li>`;
        document.getElementById("cupcakes-list").innerHTML +=cupcake;
    }
    allCategories.forEach((category)=>{
        let ele = document.createElement("li");
        ele.innerHTML = category;
        document.getElementById("categories-list").appendChild(ele);
    })
}
