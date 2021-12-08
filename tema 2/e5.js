var num;

num = parseInt(prompt("Escribe el año"));

num = (year) => {
  return (year % 400 === 0) ? true : 
  			(year % 100 === 0) ? false : 
  				year % 4 === 0;
};

alert(num);