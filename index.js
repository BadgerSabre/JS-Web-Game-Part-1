// functions //
function newImage(imageSrc, left, bottom) {
    let item = document.createElement('img')
    item.src = imageSrc
    item.style.position = 'fixed'
    item.style.left = `${left}px`
    item.style.bottom = `${bottom}px`
    document.body.append(item)
    return item
}


function newItem(imageSrc, left, bottom) {
    let item = newImage(imageSrc, left, bottom)

    item.addEventListener('dblclick', () => {
        item.remove()
    })
}

// static items //
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

// equipable items //
newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

// sky //
for(let i = 0; i < 76; i++){
    let skyTile = document.createElement('img')
    skyTile.src = './assets/sky.png'
    document.body.append(skyTile)
}

// grass //
for(let i = 0; i < 114; i++){
    let grassTile = document.createElement('img')
    grassTile.src = './assets/grass.png'
    document.body.append(grassTile)
}