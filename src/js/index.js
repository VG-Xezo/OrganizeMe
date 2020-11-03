console.log("Trying to see our source code? Just check out our github at https://github.com/VG-Xezo/OrganizeMe")

const { shell } = window.require('electron')

const nameInput = document.getElementById("name-input")
const descInput = document.getElementById("desc-input")
const extraInput = document.getElementById("extra-input")
const listMount = document.getElementById("list-mount")
const btn = document.getElementById("submit-btn")
const delBtn = document.getElementById("remove-btn")
const listTitle = document.getElementById("top-text")
const card = `<div class="card m-3">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Created at: </h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                </div>
            </div>`

function handleSubmit() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    console.log("Work")

    let cardDiv = document.createElement("div")
    cardDiv.className = "card"
    cardDiv.classList.add("m-3")
    
    let cardBody = document.createElement("div")
    cardBody.className = "card-body"
    
    let cardTitle = document.createElement("h5")
    cardTitle.className = "card-title"
    cardTitle.appendChild(document.createTextNode(nameInput.value))

    let cardSubtitle = document.createElement("h6")
    cardSubtitle.className = "card-subtitle"
    cardSubtitle.classList.add("text-muted")
    cardSubtitle.appendChild(document.createTextNode("Created at: " + today))

    let cardText = document.createElement("p")
    cardText.className = "card-text"
    cardText.appendChild(document.createTextNode(descInput.value))

    let cardLink = document.createElement("a")
    cardLink.className = "card-link"
    cardLink.href = extraInput.value
    cardLink.onClick = (e) => {
        e.preventDefault()
        shell.openExternal(e.target.href)
    }
    cardLink.target = "_blank"
    cardLink.appendChild(document.createTextNode("Entry Link"))

    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardSubtitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(cardLink)

    cardDiv.appendChild(cardBody)

    listTitle.innerText = ""
    listMount.appendChild(cardDiv)
}

function handleDelete() {
    listMount.removeChild(listMount.lastElementChild)
}

btn.addEventListener("click", () => {
    handleSubmit()
})

delBtn.addEventListener("click", () => {
    handleDelete()
})