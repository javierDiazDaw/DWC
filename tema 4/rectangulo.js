class Rectangulo {

			constructor(p1,p2){

				this.p1 = p1;
				this.p2 = p2; 
			};

			perimetro(p1,p2){

				var base = Math.abs(p1.x - p2.x);
				var altura = Math.abs(p1.y - p2.y);
				var p = base*2 + altura*2;

				return p ;
			};

			area(p1,p2){

				var base = Math.abs(p1.x - p2.x);
				var altura = Math.abs(p1.y - p2.y);
				var h = base*altura;

				return h ;

			};

		}



		