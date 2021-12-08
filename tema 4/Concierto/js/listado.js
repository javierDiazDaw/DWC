class Listado {
	constructor(arrayBandas){
		this.arrayBandas = arrayBandas;
	}



	imprimirListadoBandas = () =>{

		for (var l of this.arrayBandas) {
			l.infoBanda();
			l.infoLista();
			document.write("<br>");
		} 

		document.write("<br>");


	}

	buscarBandaPorNombre = (nombre) =>{

		return this.arrayBandas.filter((listado)=> listado.nombre==nombre)[0];

	}

	buscarBandaPorEstilo = (estilo) => {


	return this.arrayBandas.filter((listado)=> listado.estilo==estilo)[0];

	}

	ordenarBandaPorAnio = () =>{

		return this.arrayBandas.sort(function (a, b){
			if (a.anio > b.anio) {
				return 1;
			}else if (a.anio < b.anio) {
				return -1;
			}
			return 0
		});

	}

	eliminarBandaPorNombre = (nombre) =>{

		var index = this.arrayBandas.indexOf((banda)=> banda.nombre.toUpperCase() == nombre.toUpperCase());
		if (index!=-1) {
			this.arrayBandas.splice(index, 1);
			return true;
		}
		return false;
	}




}