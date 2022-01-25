const auth = "https://cataas.com/api/cats?tags=cute#"
const next = document.querySelector(".next")
const input = document.querySelector("input")
const searchbutton = document.querySelector(".earchbutton");

let pagenr = 1;
let search = false;
let query = "";

input.addEventListener("input",(e)=>{
    e.preventDefault();
    query = e.target.value;
})

async function CurtedPhotos(pagenr){
    const data = await fetch(
        `https://cataas.com/api/cats?tags=cute`, 
        {
            method: "Get",
            headers: {
                Accept: "application/json",
                Authorization: auth,
            }
        }
    );
    
   const result = await data.json();
    for(let tag of result){
        const pic = document.createElement("div")
        pic.innerHTML = `<img src =  ${tag.id}
        
        <a herf = ${tag.src}>Download</a>
        `;
        document.querySelector(".gallery").appendChild(pic)
    }
}
CurtedPhotos(pagenr)
