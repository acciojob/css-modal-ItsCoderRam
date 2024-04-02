// //your JS code here. If required.

// let openModel = document.getElementById("openModal");
// openModel.addEventListener('click', function() {
// 	let disPlayModel = document.getElementsByClassName("modal");
// 	disPlayModel[0].style.display='block';
// });
// window.onclick = function(event) {
//   let modal = document.getElementsByClassName('modal')[0];
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// let closeModel = document.getElementsByClassName("close-modal");
// closeModel[0].addEventListener('click', function() {
// 	let closeModal = document.getElementsByClassName("modal");
// 	closeModal[0].style.display='none';
// });

      var modal = document.querySelector(".modal");
      var btn = document.querySelector("#openModal");
      var span = document.querySelector(".close-modal");
 
      btn.onclick = function () {
        modal.style.display = "block";
      };
 
      span.onclick = function () {
        modal.style.display = "none";
      };
 
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };

