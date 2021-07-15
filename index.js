const draggables = document.querySelectorAll('.draggable'); 
const containers = document.querySelectorAll('.container');

//Lets set the eventlisteners

draggables.forEach(draggable=> { 
  draggable.addEventListener('dragstart', ()=>{
    //let add a class called dragging to
    draggable.classList.add('dragging');
    console.log('drag start');
  })
})