const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

//Lets set the eventlisteners

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    //let add a class called dragging to
    draggable.classList.add('dragging');
    console.log('drag start');
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  })
});

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector('.dragging');
    container.appendChild(draggable);
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    console.log(offset);
    if(offset < 0 && offset > closest.offset) {
      return {offset: offset, element: child}
    }
  }, {
    offset: Number.POSITIVE_INFINITY
  })
}