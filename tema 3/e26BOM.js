<!DOCTYPE html>
<html>
<body>

<p>Click the button to display the code name of your browser.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x = "Browser CodeName: " + navigator.appCodeName;
  document.getElementById("demo").innerHTML = x;
}
</script>

</body>
</html>