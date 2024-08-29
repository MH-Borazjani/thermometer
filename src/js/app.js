document.addEventListener("DOMContentLoaded", () => {
  let celsius = document.getElementById("cel");
  let fahrenheit = document.getElementById("far");
  celsius.addEventListener("input", () => {
    if (celsius.value === "") {
      fahrenheit.value = "";
    } else {
      fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
    }
  });
  fahrenheit.addEventListener("input",()=>{
    if (fahrenheit.value==="") {
        celsius.value=""
    } else {
        celsius.value= ((fahrenheit.value-32)*5/9).toFixed(2)
    }
  })
});
