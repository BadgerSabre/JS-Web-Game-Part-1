// functions //
function newImage(imageSrc, left, bottom) {
    let item = document.createElement('img')
    item.src = imageSrc
    item.style.position = 'fixed'
    item.style.left = `${left}px`
    item.style.bottom = `${bottom}px`
    document.body.append(item)
}

function newItem(imageSrc, left, bottom) {
    newImage(imageSrc, left, bottom)
    item.addEventListener('click', function() {
        item.remove()
    })
}

// static images //
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

// equipable items //
newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)