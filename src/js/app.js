document.addEventListener("DOMContentLoaded", () => {
  let celsius = document.getElementById("cel");
  celsius.addEventListener("input", () => {
    if (typeof celsius.value === "string") {
      alert("please write a number");
      celsius.value = "";
    }
  });
});
