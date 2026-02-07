// Test para ejecutar JavaScript en FrontEnd
function evaluar() {
  const text = document.getElementById("eval").value;
  let response = document.getElementById("response").value
  const result = eval(text)
  alert(result)
}
