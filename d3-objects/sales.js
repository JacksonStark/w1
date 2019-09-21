const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const createObject = (array) => {
  let framework = {};
  for (const item in array) {
    framework[item] = {};
    framework[item] = province
  }
}

// companySalesData[0].name




// create a function that sets the framework to plug in values into
// create a function to calculate Total Tax of an element
// create a function 



const calculateSalesTax = (salesData, taxRates) => {
  let results = {};
  for (const infoList in salesData) {
    if (results[infoList] === true) {

    }
  }
}


calculateSalesTax(companySalesData, salesTaxRate)



const calculateTax = (sales, taxRate) => {
  let totalSale = 0;
  // Adding up all sales...
  for (const sale of sales) {
    totalSale += sale;
  }
  // Creating totalTax...
  let totalTaxes = totalSale * taxRate;
  return totalTaxes;
};