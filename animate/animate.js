const space = document.getElementById("space")
const area = document.getElementById("area")
const button = document.getElementById("move")
console.log("runs")
var id = null
button.addEventListener("click",  function() {
    console.log("Clicked")
    const mover = document.getElementById("mover")
    var position = 0
    clearInterval(id);
    console.log("Moving")
    id = setInterval(move,5);
    console.log("Moved")
    function move(){
        if (position < 540){
            position += 1;
            mover.style.top = position + 'px';
            mover.style.left = position + 'px';
        }
        else{
            clearInterval(id);
        }
    }
})


