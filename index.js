// functions //
function newImage(imageSrc, left, bottom, equipableItem = false) {
    let item = document.createElement('img')
    item.src = imageSrc
    item.style.position = 'fixed'
    item.style.left = `${left}px`
    item.style.bottom = `${bottom}px`
    document.body.append(item)
    if(equipableItem){
        item.addEventListener('dblclick', function() {
            item.remove()
        })
    }
}

// static items //
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

// equipable items //
newImage('assets/sword.png', 500, 405, true)
newImage('assets/sheild.png', 165, 185, true)
newImage('assets/staff.png', 600, 100, true)

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