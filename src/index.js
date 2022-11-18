
function handleFetch() {
fetch("http://localhost:3000/bobas")
.then(res => res.json())
.then(obj => renderbobas(obj))
}
handleFetch()

const bobaMenu = document.querySelector("#boba-menu")
const likeButton = document.querySelector("#add-likes")
const like = document.querySelector('#likes-display')
const detailImage = document.querySelector('.detail-image')
const bobaName = document.querySelector('.name')
const description = document.querySelector('.description')
const dislike = document.querySelector('#dislikes-display')
const dislikeButton = document.querySelector("#add-dislikes")

let bobaId
function buttonLikes(id){
likeButton.addEventListener("click", () =>{
    const addLikes = parseInt(like.textContent) 
    like.textContent = `${addLikes} Likes`
    const currentLikes = parseInt(like.textContent.split(" ")[0])
    console.log(currentLikes)
    

    fetch(`http://localhost:3000/bobas/${likeButton.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            likes: currentLikes +1
        })

    })
    .then(res => res.json())
    .then(obj => {
        like.textContent = `${obj.likes} Likes`
    })
    
})
}
buttonLikes()
function buttonDislikes(id) {
dislikeButton.addEventListener('click', () => {
    const addDislikes = parseInt(dislike.textContent) 
    dislike.textContent = `${addDislikes} Dislikes`
    const currentDislikes = parseInt(dislike.textContent.split(" ")[0])

    console.log(currentDislikes)
    fetch(`http://localhost:3000/bobas/${dislikeButton.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            dislikes: currentDislikes +1
        })

    })
    .then(res => res.json())
    .then(obj => {
       dislike.textContent = `${obj.dislikes} Dislikes `
    })
    
})
}
buttonDislikes()


likeButton.addEventListener('mouseover', (e) => {
    e.target.style.color = "black";
    setTimeout(() => {
        e.target.style.color = '';
    }, 500)
}, false);

dislikeButton.addEventListener('mouseover', (e) => {
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
        likeButton.id = boba.id
        dislikeButton.id = boba.id
        
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
    .then(obj => {
        e.preventDefault()
        console.log(obj)
    })
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
