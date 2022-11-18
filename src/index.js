

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
    const addLikes = parseInt(like.textContent) 
    like.textContent = `${addLikes + 1 } Likes`
    console.log(addLikes)

    fetch = (`http://localhost:3000/bobas/${id.likes}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addLikes)

        .then(res => res.json())
        .then(addLikes => console.log(addLikes))
    })
})
button2.addEventListener('click', () => {
    const addDislikes = parseInt(dislike.textContent) 
    dislike.textContent = `${addDislikes + 1 } Dislikes`
    console.log(addDislikes)
    
})


button.addEventListener('mouseover', (e) => {
    e.target.style.color = "black";
    setTimeout(() => {
        e.target.style.color = '';
    }, 500)
}, false);

button2.addEventListener('mouseover', (e) => {
    e.target.style.color = "black";
    setTimeout(() => {
        e.target.style.color = '';
    }, 500)
}, false);

function renderbobas(bobas){
    bobas.forEach((boba) => renderboba(boba))
}

function renderboba(boba){
    const bobaImg = document.createElement('img')
    bobaImg.src = boba.image
    bobaMenu.append(bobaImg)
    
    bobaImg.addEventListener('click', (e) => { 
        currentBoba = boba
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
            
    
    }) 
}

function handleNewBoba() { 
    const form  = document.querySelector('#new-boba')
    form.addEventListener('submit', (e) => {
        
            e.preventDefault()
            const newBobaInput = {
                name: e.target['name'].value,
                image: e.target['image'].value,
                likes: parseInt(e.target['likes'].value),
                dislikes: parseInt(e.target['dislikes'].value),
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
// function updateLikes(newBobaInput) {
//     console.log(newBobaInput.id)
//     fetch (`http://localhost:3000/bobas/${newBobaInput.id}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newBobaInput)
    
//     })
//     .then(res => res.json())
//     .then(obj => console.log(obj))

// }



// Toggle boba stores

// function logItem(e) {
//     const item = document.querySelector(`[data-id=${e.target.id}]`);
//     item.toggleAttribute('hidden');
//   }
  
//   const stores = document.querySelectorAll('details');
//   stores.forEach((chapter) => {
//     store.addEventListener('toggle', logItem);
//   });
