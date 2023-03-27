document.addEventListener("DOMContentLoaded", function() {
  // Add a click event to each
  const filterLinks = document.querySelectorAll("#project-nav a");

  filterLinks.forEach((nav) => {
    nav.addEventListener("click", (event) => {   
      event.preventDefault();     
      const filter = nav.dataset.filter;
      filterItems(filter);
    });
  });
});

function filterItems(filter) {
  // Get all gallery items
  const galleryItems = document.querySelectorAll(".gallery-item");  
  galleryItems.forEach((project) => {
    if (filter === "all" || project.classList.contains(filter)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}
