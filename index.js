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
    const draggable = document.querySelector('.dragging');
    container.appendChild(draggable);
  })
})