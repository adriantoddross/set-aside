/*
Create our number formatter.
From stackoverflow: https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript
*/


const formatToIncome = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
// example: formatToIncome.format(2500); /* $2,500.00 */ 

export default formatToIncome;