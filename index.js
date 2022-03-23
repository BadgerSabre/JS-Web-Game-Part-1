function newImage(image, imageName, left, bottom) {
    let image = document.createElement('img')
    image.src = `assets/${imageName}`
    image.style.position = 'fixed'
    image.style.left = `${left}px`
    image.style.bottom = `${bottom}px`
    document.body.append(image)
}

newImage(greenCharacter, green-character.gif, 100, 100)

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)