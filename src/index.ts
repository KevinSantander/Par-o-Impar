let data = document.getElementById("data");
let btnSend = document.getElementById("send");

btnSend.addEventListener("click", () => {
  if (Number(data.value) === 0) {
    console.log("No par ni impar");
  } else {
    if (Number(data.value) % 2 === 0) {
      console.log("Es par");
    } else {
      console.log("Es impar");
    }
  }
});
