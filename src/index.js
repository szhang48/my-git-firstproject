fetch("http://localhost:3000/bobas")
.then(res => res.json())
.then(obj => renderbobas(obj))


const bobaMenu = document.querySelector("#boba-menu")

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

    const like = document.querySelectorAll('#likes-display')
    like.textContent = boba.likes

    }) 
}