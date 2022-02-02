const input = document.getElementById("input");

function addingEventListener(e) {
    input.addEventListener('click', function(e){
        alert('I was clicked');
    })
}
