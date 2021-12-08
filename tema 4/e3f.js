<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">
		let aVocales = ["a", "e", "i", "o", "u"]; 
		function bar(){ 
		let txt = ''; 
		for(let i in arguments){ 
		txt += arguments[i];
		} 
		console.log(txt); // la salida por consola es aeiou 
		} 
		function foo(aVocales){ 
		console.log(aVocales.length); //aVocales es un array 
		bar(...aVocales); //esto es como llamar a bar('a','e','i','o','u') 
		} 
		foo(aVocales);

	</script>
</head>
<body>

</body>
</html>
