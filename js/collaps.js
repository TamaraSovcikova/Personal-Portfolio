document.addEventListener("DOMContentLoaded", function() {
  const extraElements = document.getElementsByClassName('hidden');
  for (let i = 0; i < extraElements.length; i++) {
    extraElements[i].style.display = 'none';
  }

  const downArrow = document.querySelector('#arrow-collapse');
  let isExpanded = false;
  downArrow.addEventListener('click', (event) => {
    event.preventDefault();
    if (isExpanded) {
      for (let i = 0; i < extraElements.length; i++) {
        extraElements[i].style.display = 'none';
      }
      isExpanded = false;
    } else {
      for (let i = 0; i < extraElements.length; i++) {
        extraElements[i].style.display = 'block';
      }
      isExpanded = true;
      extraElements[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});