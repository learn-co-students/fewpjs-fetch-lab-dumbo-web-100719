document.addEventListener('DOMContentLoaded', function() {
  let main = document.querySelector("main")
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(booksData => {
    booksData.forEach(book => {
      let li = document.createElement('li')
      li.textContent = book.name
      console.log(li)
      main.append(li)
    })
  });
})