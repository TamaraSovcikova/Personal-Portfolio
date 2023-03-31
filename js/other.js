document.addEventListener('DOMContentLoaded', function() {
  const article = document.querySelector('#article-div article');
  const paragraph = document.querySelector('#article-div p');

  const content = [
    '"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."',
    '"We are what we repeatedly do. Excellence, then, is not an act, but a habit."',
    '"Don\'t watch the clock; do what it does. Keep going."',
    '"The best way to predict the future is to invent it."'   
  ];
  const authors = [
    '- Antoine de Saint-Exupery',
    '- Aristotle',
    '- Sam Levenson',
    '- Alan Kay'
  ];
  let index = 0;

  article.innerHTML = content[index]; 
  paragraph.innerHTML = authors[index];

  const leftArrow = document.querySelector('.arrow-left');
  leftArrow.addEventListener('click', function() {
    index = (index - 1 + content.length) % content.length;
    article.innerHTML = content[index];
    paragraph.innerHTML = authors[index];
  });

  const rightArrow = document.querySelector('.arrow-right');
  rightArrow.addEventListener('click', function() {
    index = (index + 1) % content.length;
    article.innerHTML = content[index];
    paragraph.innerHTML = authors[index];
  });

});






