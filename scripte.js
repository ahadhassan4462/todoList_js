// let btn = document.querySelector("#btn");
// const itemTable = document.getElementById("customers");
// let count = 1;

// // Add item
// btn.addEventListener("click", function (event) {
//   let dataInput = document.querySelector("#student");

//   // Conditions And Error Masseges start
//   if(dataInput.value === ""){
//    let worning= document.querySelector("#worning")
//     worning.innerHTML="please type!"
//     return;

//   }else if(dataInput.value.length < 4){
//     worning.innerHTML="Maximum Length 4 Required!"
//     return;

//   }else if(dataInput.value.length > 10){
//     worning.innerHTML="Minimum Length Should be 10 !"
//     return;
//   }
//    else{
//     worning.innerHTML=""
//   }
//   // Conditions And Error Masseges End

// // Create Record start
//   const tr = document.createElement("tr");
//   tr.innerHTML = `<td>${count++} </td>  <td> ${
//     dataInput.value
//   }</td>  <td> <button class="removeBtn"> Remove </button> </td> `;
//   itemTable.appendChild(tr);
//   dataInput.value = "";
// // Creare Record End

//   // Remove Record start
//   const removeBtn = tr.querySelector(".removeBtn")
//   removeBtn.addEventListener("click", function () {
//   itemTable.removeChild(tr)
//  // Remove Record start

//   });
// });

// let btn = document.querySelector("#btn");
// const itemTable = document.getElementById("customers");
// let count = 1;

// // Add item
// btn.addEventListener("click", function () {
//   let dataInput = document.querySelector("#student");
//   let ageInput = document.querySelector("#age");
//   // Conditions And Error Masseges start
//   if (dataInput.value === "") {
//     let worning = document.querySelector("#worning");
//     worning.classList.remove("d-none");
//     worning.innerHTML = "please type!";
//     return;
//   } else if (dataInput.value.length < 4) {
//     worning.classList.remove("d-none");
//     worning.innerHTML = "Maximum Length 4 Required!";
//     return;
//   } else if (dataInput.value.length > 10) {
//     worning.innerHTML = "Minimum Length Should be 10 !";
//     return;
//   } else {
//     worning.innerHTML = "";
//     worning.classList.remove("d-none");
//     worning.innerHTML = "complete data sucessfully done!";
//   }
//   // Conditions And Error Masseges end

//   // age alrt warning
//   //  add number to string
//   let valNum = parseInt(ageInput.value);

//   if (valNum < 18) {
//     worning.classList.remove("d-none");
//     worning.innerHTML = "aGE LIMIT!";
//     return;
//   }

//   // alert add data
//   setTimeout(() => {
//     worning.classList.add("d-none");
//   }, 3000);
//   // alert remove data

//   // Create Record start
//   const tr = document.createElement("tr");
//   tr.innerHTML = ` <th scope="row">${count++}</th> <td> ${
//     dataInput.value
//   }</td> </td> <td>${
//     ageInput.value
//   } </td> <td> <button  type="button"  id="liveToastBtn" class="removeBtn btn btn-danger" > Remove </button>  `;
//   itemTable.appendChild(tr);
//   dataInput.value = "";
//   ageInput.value = "";
//   // Creare Record End

//   // Remove Record start
//   const removeBtn = tr.querySelector(".removeBtn");
//   removeBtn.addEventListener("click", function () {
//     itemTable.removeChild(tr);

//     worning.classList.remove("d-none");
//     worning.innerHTML = "delete data sucessfully done!";

//     setTimeout(() => {
//       worning.classList.add("d-none");
//     }, 3000);

//     // Remove Record start
//   });
// });

let btn = document.querySelector("#btn");
const itemTable = document.getElementById("customers");
let count = 1;

// Add item
btn.addEventListener("click", function () {
  let dataInput = document.querySelector("#student");
  let ageInput = document.querySelector("#age");
  // Conditions And Error Masseges start
  if (dataInput.value === "") {
    let worning = document.querySelector("#worning");
    worning.classList.remove("d-none");
    worning.innerHTML = "please type!";
    return;
  } else if (dataInput.value.length < 4) {
    worning.classList.remove("d-none");
    worning.innerHTML = "Maximum Length 4 Required!";
    return;
  } else if (dataInput.value.length > 10) {
    worning.innerHTML = "Minimum Length Should be 10 !";
    return;
  } else {
    worning.innerHTML = "";
    worning.classList.remove("d-none");
    worning.innerHTML = "complete data sucessfully done!";
     worning.style.color="green"
  

  }
  // Conditions And Error Masseges end

  // age alrt warning
  //  add number to string
  let valNum = parseInt(ageInput.value);

  if (valNum < 18) {
    worning.classList.remove("d-none");
    worning.innerHTML = "aGE LIMIT!";
    return;
  }

  // alert add data
  setTimeout(() => {
    worning.classList.add("d-none");
  }, 3000);
  // alert remove data

  // Create Record start
  const tr = document.createElement("tr");
  tr.innerHTML = ` <th scope="row">${count++}</th> <td> ${
    dataInput.value
  }</td> </td> <td>${
    ageInput.value
  } </td> <td> <button  type="button"  id="liveToastBtn" class="removeBtn btn btn-danger" > Remove </button>  `;
  itemTable.appendChild(tr);
  dataInput.value = "";
  ageInput.value = "";
  // Creare Record End

  // Remove Record start
  const removeBtn = tr.querySelector(".removeBtn");
  removeBtn.addEventListener("click", function () {
    itemTable.removeChild(tr);

    worning.classList.remove("d-none");
    worning.innerHTML = "delete data sucessfully done!";
    worning.style.color="green"

    setTimeout(() => {
      worning.classList.add("d-none");
    }, 3000);

    // Remove Record start
  });
});







// Set interval
// setInterval(() => {
//   console.log("hello world")
// }, 5000)



// set setTimeOut
// setTimeout(() => {
  
// }, 2000)
