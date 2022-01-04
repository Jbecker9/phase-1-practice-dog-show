document.addEventListener('DOMContentLoaded', () => {
makeList()
})

function makeList(){
    fetch(" http://localhost:3000/dogs")
        .then(response => response.json())
        .then(data => data.forEach(element => {
            listDog(element)
        }))

}

function listDog(dog){
    const tableBody = document.getElementById("table-body")
    const tableRow = document.createElement("tr")
        tableRow.id = dog.id
    tableBody.append(tableRow)
    const dogName = document.createElement("td")
        dogName.id = "dog-name"
        dogName.innerText = dog.name
    tableRow.append(dogName)
    const dogBreed = document.createElement("td")
        dogBreed.id = "dog-breed"
        dogBreed.innerText = dog.breed
    tableRow.append(dogBreed)
    const dogSex = document.createElement("td")
        dogSex.id = "dog-sex"
        dogSex.innerText = dog.sex
    tableRow.append(dogSex)
    createEditButton(tableRow)
}

function createEditButton(parent){
    const buttonData = document.createElement("td")
    parent.append(buttonData)
    const editButton = document.createElement("button")
    editButton.innerText = "Edit"
    editButton.addEventListener("click", () => {
        editDog(parent)
        console.log(parent)
    })
    buttonData.append(editButton)
}

function editDog(dog){
    const form = document.getElementById("dog-form")
    const tagName = document.getElementsByTagName("name")
        console.log(tagName)
        tagName.placeholder = dog.name.innerText
    const tagBreed = document.getElementsByTagName("breed")
        tagBreed.placeholder = dog.innerText
    const tagSex = document.getElementsByTagName("sex")
        tagSex.placeholder = dog.innerText
}