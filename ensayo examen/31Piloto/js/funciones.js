

	function sortFunction(a, b) {

		for (let item of sesion) {
		
		    if (a[1] === b[1]) {
		        return 1;
		    }
		    else {
		        return (a[1] < b[1]) ? -1 : 1;
		    	}
		    	document.write("<br>");
			}

		}

	function arrayNueva() {


    }

    function borrarArray() {

    	for(let borrar of this.sesion) {
			borrar.pop();
					
			}

			document.write("Eliminado");    	
    	
    }
