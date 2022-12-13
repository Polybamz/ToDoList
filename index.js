document.querySelector('#push').onclick = function(){
  if(document.querySelector('#myInput').value.length == 0 ){
    alert('Enter a task')
  } else{
    document.querySelector('#task').innerHTML += 
    `<div class="task">
    <span class="taskname">
    ${document.querySelector('#myInput').value}
    </span>
    <butten class="delete"><i class="bx bx-comment-x"></i></button>
    </div>`
  }
}
function clearInput(){
  var getValue= document.getElementById("myInput");
    if (getValue.value !="") {
        getValue.value = "";
    }
 }
let deleteTask = document.querySelector(".delete");
deleteTask.addEventListener('click',function(){
  deleteTask.remove();
})
console.log(deleteTask)