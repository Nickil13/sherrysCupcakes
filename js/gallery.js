const galleryContainer = document.querySelector(".gallery-container");


        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                loadSlider(JSON.parse(xhttp.responseText));
            }
        };
        xhttp.open("GET","data/gallery-images.json",true);
        xhttp.send();
        
        const loadSlider = (data) =>{
            data.forEach((item)=>{
                let content = `<div class="gallery-image"
                style="background-image:url(${item.image});
                background-size: cover; background-repeat:no-repeat;
                background-position: 50% 30%;">
                </div>`
                galleryContainer.innerHTML+=content;
            });
        }
