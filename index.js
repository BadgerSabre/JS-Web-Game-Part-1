function newImage(imageSrc, left, bottom) {
    let item = document.createElement('img')
    item.src = imageSrc
    item.style.position = 'fixed'
    item.style.left = `${left}px`
    item.style.bottom = `${bottom}px`
    document.body.append(item)
}
// static items //
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)