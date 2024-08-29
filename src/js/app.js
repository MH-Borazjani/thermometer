document.addEventListener("DOMContentLoaded", () => {
  let celsius = document.getElementById("cel");
  let fahrenheit = document.getElementById("far");
  celsius.addEventListener("input", () => {
    if (celsius.value === "") {
      fahrenheit.value = "";
    } else {
      fahrenheit.value = (celsius.value * 9) / 5 + 32;
    }
  });
});
