
// Dropdown Hamburger Menu
const dropdownLists = document.querySelectorAll(".nav-dropdown");
        const page = document.querySelector("html");
        const hamburger = document.getElementById("nav-toggle");
        const navList = document.querySelector(".nav-list");

        document.querySelectorAll("nav ul li > a:not(:only-child)").forEach(item=>{
            item.addEventListener("click",event=>{
                let currentDropdown=item.nextElementSibling;
                dropdownLists.forEach(dropdown=>{
                    if(dropdown!==currentDropdown){     
                        dropdown.style.display = "none";
                    }else{
                        if(dropdown.style.display==="block"){
                            dropdown.style.display="none";
                        }else{
                            dropdown.style.display = "block";
                        }
                        
                    }
                })
                event.stopPropagation();
            })
        })
        
        page.addEventListener("click", event=>{
            dropdownLists.forEach(dropdown=>{
                    if(dropdown.style.display==="block"){
                        dropdown.style.display = "none";
                    }     
                })
        })

        hamburger.addEventListener("click",event=>{
            hamburger.classList.toggle("active");
            navList.classList.toggle("active-nav-list");
        })