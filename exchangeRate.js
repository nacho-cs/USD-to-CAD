const USD = document.getElementById("amount");
const output = document.getElementById("output");

const exchangeRate = async () => {
  const response = await fetch("https://open.er-api.com/v6/latest/USD");
  const data = await response.json();
  const rounded = Math.round(100 * (USD.value * data.rates.CAD)) / 100
  output.innerText = `Canadian Dollars: $${rounded}`
  console.log(rounded);
};