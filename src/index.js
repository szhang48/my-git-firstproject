fetch("http://localhost:3000/bobas")
.then(res => res.json())
.then(obj => renderbobas(obj))


const bobaMenu = document.querySelector("#boba-menu")
const button = document.querySelector("#add-likes")
const like = document.querySelector('#likes-display')

button.addEventListener("click", () =>{
    const addLikes = parseInt(like.textContent.split(" ")[0])
    like.textContent = addLikes
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
        const detailImage = document.querySelector('.detail-image')
        const bobaName = document.querySelector('.name')
        const description = document.querySelector('.description')
        
    detailImage.src = boba.image
    bobaName.textContent = boba.name 
    description.textContent = boba.description
    like.textContent = boba.likes

    }) 
}

function handleNewBoba() { 
    const form  = document.querySelector('#new-boba')
    form.addEventListener('submit', (e) => {
            e.preventDefault()
            const newBobaInput = {
                name: e.target['name'].value,
                description: e.target['description'].value,
                image: e.target['image'].value,
                likes: e.target['likes'].value,

            }
            renderboba(newBobaInput)
            console.log(newBobaInput)
            e.target.reset()



    })
}
handleNewBoba()