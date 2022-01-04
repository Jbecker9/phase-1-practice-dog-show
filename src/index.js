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
    })
    buttonData.append(editButton)
}

function editDog(dog){
    const form = document.getElementById("dog-form")
    form.children[0].value = dog.children[0].innerText
    form.children[1].value = dog.children[1].innerText
    form.children[2].value = dog.children[2].innerText
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let dogObject = {
            name:e.target.children[0].value,
            breed:e.target.children[1].value,
            sex:e.target.children[2].value
        }
        fetch(`http://localhost:3000/dogs/${dog.id}`,{
            method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body:JSON.stringify(dogObject)
        })
            .then(response => {
                response.json()}
                )
            .then(data => {
                console.log(data)
            })
    })
}
