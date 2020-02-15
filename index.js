function fetchBooks() {
  return fetch(`https://anapioficeandfire.com/api/books`)
  .then(resp => resp.json())
  .then(json=> renderBooks(json))
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    
    const h2 = document.createElement('h2')
    h2.textContent = book.name
    main.appendChild(h2)
    // console.log(h2)

    // let removeButton = document.createElement("button")  
    // removeButton.innerText = 'Delete Button'
    // h2.append(removeButton)

    // h2.addEventListener("click", () => {
    //   h2.remove()
    // })

  })

}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

