// function newImage(imageName, imageSrc, left, bottom) {
//     let imageName = document.createElement('img')
//     imageName.src = imageSrc
//     imageName.style.position = 'fixed'
//     imageName.style.left = `${left}`
//     imageName.style.bottom = `${bottom}`
//     document.body.append(imageName)
// }

// newImage(assets/green-character.gif, 100, 100)

let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

// newImage(pineTree, assets/pine-tree.png, 450, 200)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)