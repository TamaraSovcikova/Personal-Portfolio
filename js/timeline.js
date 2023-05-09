document.addEventListener('DOMContentLoaded', () => {
  const timelineItems = document.querySelectorAll('#timeline .col');

 timelineItems.forEach(item => {
  const content = item.querySelector('p.timeline-content');
  const heading = item.querySelector('h2.timeline-title');
  const point = item.querySelector('.timeline-point');

  let isExpanded = false;
  const toggleContent = () => {
    if (isExpanded) {
      content.style.display = 'none';
      isExpanded = false;
    } else {
      content.style.display = 'block';
      isExpanded = true;
    }
  };

  heading.addEventListener('click', toggleContent);
  point.addEventListener('click', toggleContent);
});
  });
