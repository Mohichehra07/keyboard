function appendValue(value) {
   document.getElementById('natija').value+=value;
}
function calculate() {
 const result = document.getElementById('natija');
   result.value = eval(result.value);
}
 function clearResult() {
   document.getElementById('natija').value = '';
}
function btns () {
    console.log(alert("Bu tugmalarni bu klaviaturalarda ishlamydi!"));
}


