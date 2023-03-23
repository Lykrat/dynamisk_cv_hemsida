const writeIt=document.querySelector("ul")

fetch("../javascript/cvlist.json")
    .then(res=>res.json())
    .then(data=> {
        data.forEach(post => {
            if(post.Employer==null){
                writeIt.insertAdjacentHTML("beforeend",`<div class="space"><h2>${post.name}</h2><p>${post.time}</p></div>`);
            }
            else{
                writeIt.insertAdjacentHTML("beforeend",`<div class="space"><h2>${post.name}, ${post.Employer}</h2><p>${post.time}</p>o</div>`);
            }
        });
    })