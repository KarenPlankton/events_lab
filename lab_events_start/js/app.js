
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const button = document.querySelector('#new-item-form');
  button.addEventListener('submit', handleFormSubmit);
});

const resetReadingList = function() {
  const list = document.querySelector('#reading-list'); 
  list.innerHTML='';
  
}

const handleFormSubmit = function (event) {
  event.preventDefault();
  const list = document.querySelector('#reading-list'); 
  const category = document.createElement('h1');
  category.textContent=this.category.value;
  list.appendChild(category);
  const title = document.createElement('li');
  title.textContent="Title: "+ this.title.value;
  list.appendChild(title);
  const author = document.createElement('li');
  author.textContent="Author:" + this.author.value;
  list.appendChild(author);
  
  event.target.reset();

  
};