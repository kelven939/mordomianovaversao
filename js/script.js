const clicks = document.getElementById("dropbtn1");
clicks.addEventListener('click', function(){
  document.getElementById("mydrop").classList.toggle("show");
});

/*function mydrop() {
  document.getElementById("mydrop").classList.toggle("show");
} */

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdown = document.getElementsByClassName("contents");
    for (let i = 0; i < dropdown.length; i++) {
      let opendrop = dropdown[i];
      if (opendrop.classList.contains('show')) {
        opendrop.classList.remove('show');
      }
    }
  }
}