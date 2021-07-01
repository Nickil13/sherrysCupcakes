let cupcakesData = [];
// Cupcake List (iterating over a JSON file with cupcake data)
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        loadData(JSON.parse(xhttp.responseText));
    }
};
xhttp.open("GET","js/data.json",true);
xhttp.send();

const clearList = () =>{
    let list = document.querySelectorAll("#cupcakes-list li");
    
    for(i=0;li=list[i];i++){
        li.parentNode.removeChild(li);
    }
}
const loadData = (data) =>{
    cupcakesData = JSON.parse(xhttp.responseText);
    populateCupcakes(data,"all");
    addCategories();
}
const addCategories = ()=>{
    let allCategories = [...new Set(cupcakesData.map((item)=>item.category))];
    allCategories.forEach((category)=>{
        let ele = document.createElement("li");
        ele.setAttribute("class","category-btn");
        ele.addEventListener("click",event=>{
            clearList();
            populateCupcakes(cupcakesData,category);
            
            document.querySelectorAll(".category-btn").forEach((btn)=>{
                if(btn===ele || btn.classList.contains("active-category")){
                    btn.classList.toggle("active-category");
                }
            })
        })
        ele.innerHTML = category;
        document.getElementById("categories-list").appendChild(ele);
    })
}
const populateCupcakes = (cupcakeList,category) =>{
    // Iterate over the list of cupcakes to produce a list
    for(let i=0;i<cupcakeList.length;i++){
        let item = cupcakeList[i];
        if(category==="all" || category===item.category){
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
        
    }
    
}
