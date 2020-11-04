const nameInput = document.getElementById("name-input")
const descInput = document.getElementById("desc-input")
const extraInput = document.getElementById("extra-input")
const listMount = document.getElementById("list-mount")
const btn = document.getElementById("submit-btn")
const delBtn = document.getElementById("remove-btn")
const loadBtn = document.getElementById("load-btn")
const dieBtn = document.getElementById("die-btn")
const listTitle = document.getElementById("top-text")

function handleComplete(e) {
    if (e.target.innerText === "Complete") {
        e.target.parentElement.classList.add("complete")
        e.target.innerText = "Uncomplete"
    } else {
        e.target.parentElement.classList.remove("complete")
        e.target.innerText = "Complete"
    }
}

function handleDie() {
    window.localStorage.clear()
}

function handleLoad() {
    console.log(window.localStorage)
    listTitle.innerText = ""
    for (i in window.localStorage) {
        const data = JSON.parse(window.localStorage.getItem(i))
        const name = data.name
        const desc = data.desc
        const extra = data.extra
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        let cardDiv = document.createElement("div")
        cardDiv.className = "card"
        cardDiv.classList.add("m-3")
        const id = Math.floor(Math.random() * 1000).toString()
        cardDiv.classList.add(id)
        
        let cardBody = document.createElement("div")
        cardBody.className = "card-body"
        
        let cardTitle = document.createElement("h5")
        cardTitle.className = "card-title"
        cardTitle.appendChild(document.createTextNode(name))

        let cardSubtitle = document.createElement("h6")
        cardSubtitle.className = "card-subtitle"
        cardSubtitle.classList.add("text-muted")
        cardSubtitle.appendChild(document.createTextNode("Created at: " + today))

        let cardText = document.createElement("p")
        cardText.className = "card-text"
        cardText.appendChild(document.createTextNode(desc))

        let cardLink = document.createElement("a")
        cardLink.className = "card-link"
        cardLink.href = extra
        cardLink.target = "_blank"
        cardLink.appendChild(document.createTextNode("Entry Link"))

        let cardBtn = document.createElement("button")
        cardBtn.className = "btn"
        cardBtn.classList.add("btn-success")
        cardBtn.classList.add("d-block")
        cardBtn.classList.add("mt-2")
        cardBtn.appendChild(document.createTextNode("Complete"))
        cardBtn.addEventListener("click", (event) => handleComplete(event))
        
        let cardDelBtn = document.createElement("button")
        cardDelBtn.className = "btn"
        cardDelBtn.classList.add("btn-danger")
        cardDelBtn.classList.add("d-block")
        cardDelBtn.classList.add("mt-2")
        cardDelBtn.appendChild(document.createTextNode("Delete"))
        cardDelBtn.addEventListener("click", (event) => handleDeleteBtn(event))

        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardSubtitle)
        cardBody.appendChild(cardText)
        cardBody.appendChild(cardLink)
        cardBody.appendChild(cardBtn)
        cardBody.appendChild(cardDelBtn)

        cardDiv.appendChild(cardBody)
        listMount.appendChild(cardDiv)
    }
}

function handleDeleteBtn(e) {
    const idDelBtn = e.target.parentElement.parentElement.classList[e.target.parentElement.parentElement.classList.length - 1]
    window.localStorage.removeItem(idDelBtn)
    listMount.removeChild(e.target.parentElement.parentElement)
}

function handleSubmit() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    let cardDiv = document.createElement("div")
    cardDiv.className = "card"
    cardDiv.classList.add("m-3")
    const id = Math.floor(Math.random() * 1000).toString()
    cardDiv.classList.add(id)
    
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
    cardLink.target = "_blank"
    cardLink.appendChild(document.createTextNode("Entry Link"))

    let cardBtn = document.createElement("button")
    cardBtn.className = "btn"
    cardBtn.classList.add("btn-success")
    cardBtn.classList.add("d-block")
    cardBtn.classList.add("mt-2")
    cardBtn.appendChild(document.createTextNode("Complete"))
    cardBtn.addEventListener("click", (event) => handleComplete(event))
    
    let cardDelBtn = document.createElement("button")
    cardDelBtn.className = "btn"
    cardDelBtn.classList.add("btn-danger")
    cardDelBtn.classList.add("d-block")
    cardDelBtn.classList.add("mt-2")
    cardDelBtn.appendChild(document.createTextNode("Delete"))
    cardDelBtn.addEventListener("click", (event) => handleDeleteBtn(event))

    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardSubtitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(cardLink)
    cardBody.appendChild(cardBtn)
    cardBody.appendChild(cardDelBtn)

    cardDiv.appendChild(cardBody)

    const storageInput = {
        name: nameInput.value,
        extra: extraInput.value,
        desc: descInput.value
    }

    nameInput.value = ""
    extraInput.value = ""
    descInput.value = ""
    listTitle.innerText = ""
    listMount.appendChild(cardDiv)

    window.localStorage.setItem(cardDiv.classList[cardDiv.classList.length - 1], JSON.stringify(storageInput))
}

function handleDelete() {
    listMount.removeChild(listMount.lastElementChild)
    const idDel = listMount.lastElementChild.classList[listMount.lastElementChild.classList.length - 1]
    window.localStorage.removeItem(idDel)
}

btn.addEventListener("click", () => {
    handleSubmit()
})

loadBtn.addEventListener("click", () => {
    handleLoad()
})

dieBtn.addEventListener("click", () => {
    handleDie()
})

delBtn.addEventListener("click", () => {
    handleDelete()
})