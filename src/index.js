fetch("http://localhost:3000/bobas")
.then(res => res.json())
.then(obj => renderbobas(obj))


const bobaMenu = document.querySelector("#boba-menu")
const button = document.querySelector("#add-likes")
const like = document.querySelector('#likes-display')
const detailImage = document.querySelector('.detail-image')
const bobaName = document.querySelector('.name')
const description = document.querySelector('.description')
const dislike = document.querySelector('#dislikes-display')
const button2 = document.querySelector("#add-dislikes")


button.addEventListener("click", () =>{
    const addLikes = parseInt(like.textContent) + 1
    like.textContent = addLikes
    console.log(addLikes)
})
button2.addEventListener('click', () => {
    const addDislikes = parseInt(dislike.textContent) + 1
    dislike.textContent = addDislikes
    console.log(addDislikes)
    
})

function renderbobas(bobas){
    bobas.forEach((boba) => renderboba(boba))
}

function renderboba(boba){
    const bobaImg = document.createElement('img')
    bobaImg.src = boba.image
    bobaMenu.append(bobaImg)
    
    bobaImg.addEventListener('click', (e) => { 
    console.log(boba.image)

    detailImage.src = boba.image
    bobaName.textContent = boba.name 
    description.textContent = boba.description
    like.textContent = boba.likes
    dislike.textContent = boba.dislikes

    // bobaImg.querySelector('#likes-display').addEventListener("click",() => {
    //     boba.likes+=10
    //     bobaImg.querySelector('span').textContent = boba.likes
    // })
    updateLikes(boba)

    }) 
}

function handleNewBoba() { 
    const form  = document.querySelector('#new-boba')
    form.addEventListener('submit', (e) => {
            e.preventDefault()
            const newBobaInput = {
                name: e.target['name'].value,
                image: e.target['image'].value,
                likes: e.target['likes'].value,
                dislikes: e.target['dislikes'].value,
                description: e.target['description'].value,

            }
            renderboba(newBobaInput)
            handlePost(newBobaInput)
            console.log(newBobaInput)
            e.target.reset()

        

    })
}
handleNewBoba()

function handlePost(newBobaInput) {
   
    fetch("http://localhost:3000/bobas", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(newBobaInput)
    })
    .then(res => res.json())
    .then(obj => console.log(obj))
}
function updateLikes(newBobaInput){
    fetch (`http://localhost:3000/bobas/${newBobaInput.likes}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBobaInput)
    
    })
    .then(res => res.json())
    .then(obj => console.log(obj))

}

























// Toggle boba stores

// function logItem(e) {
//     const item = document.querySelector(`[data-id=${e.target.id}]`);
//     item.toggleAttribute('hidden');
//   }
  
//   const stores = document.querySelectorAll('details');
//   stores.forEach((chapter) => {
//     store.addEventListener('toggle', logItem);
//   });
