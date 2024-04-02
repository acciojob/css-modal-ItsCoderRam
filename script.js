//your JS code here. If required.

let openModel = document.getElementById("openModal");
openModel.addEventListener('click', function() {
	let disPlayModel = document.getElementsByClassName("modal");
	disPlayModel[0].style.display='block';
});
window.onclick = function(event) {
  let modal = document.getElementsByClassName('modal')[0];
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
let closeModel = document.getElementsByClassName("close-modal-button");
closeModel[0].addEventListener('click', function() {
	let closeModal = document.getElementsByClassName("modal");
	closeModal[0].style.display='none';
});

