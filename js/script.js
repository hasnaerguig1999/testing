// let togg1 = document.getElementById("togg1");
// let togg2 = document.getElementById("togg2");

// let d1 = document.getElementById("d1");
// let d2 = document.getElementById("d2");
// togg1.addEventListener("click", () => {
//   if(getComputedStyle(d1).display != "none"){
//     d1.style.display = "none";
//   } else {
//     d1.style.display = "block";
//   }
// })

// function togg(){
//   if(getComputedStyle(d2).display != "none"){
//     d2.style.display = "none";
//   } else {
//     d2.style.display = "block";
//   }
// };
// togg2.onclick = togg;
// var select = document.getElementById('choix');
// var cards = document.getElementsByClassName('items');
// var itemTitle = document.querySelectorAll('.items h4');

// select.onchange = function () {
//     var selectedValue = select.value;
//     for (let index = 0; index < itemTitle.length; index++) {
//         if (selectedValue == 'Tous') {
//             cards[index].style.display = 'block';
//         } else if (selectedValue != itemTitle[index].textContent) {
//             cards[index].style.display = 'none';
//         } else {
//             cards[index].style.display = 'block';
//         }
//     }
//     };
let togg1 = document.getElementById("togg1");
let togg2 = document.getElementById("togg2");
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
togg1.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
})

function togg(){
  if(getComputedStyle(d2).display != "none"){
    d2.style.display = "none";
  } else {
    d2.style.display = "block";
  }
};
togg2.onclick = togg;