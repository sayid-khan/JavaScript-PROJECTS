const container = document.querySelector(".container");
generateBtn = container.querySelector(".form button");
qrimg = container.querySelector(".qr-code img");
qrinput = container.querySelector(".form input");

generateBtn.addEventListener("click", () => {
  // console.log('hello')
  let qrvalue = qrinput.value;
  if (!qrvalue) return;
  generateBtn.innerText = "Generating QR-Code....";
  //getting a qr code from the value entered by the user using the qrserver
  //api and passing the api returned img src to qrimg
  qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`;

  qrimg.addEventListener("load", () => {
    container.classList.add("active");
    generateBtn.innerText = "Generate QR-Code";
  });
});

qrinput.addEventListener("keyup", () => {
  if (!qrinput.value) {
    container.classList.remove("active");
  }
});
