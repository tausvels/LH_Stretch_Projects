console.clear();
const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];
const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1
};

// ----- HELPER FUNCTIONS -------------- //
const calculateTax = function(arrTaxKeys, obj) {
  let tax = [];
  arrTaxKeys.forEach(key => {
    if (obj.province === key) {
      tax = obj.sales.map(item => {
        return item * salesTaxRates[key];
      });
    }
  });
  return tax;
};
const sumArray = function(arr) {
  let sum = 0;
  sum = arr.reduce((total, current) => {
    return total + current;
  });
  return sum;
};
// ------- MAIN FUNCTION ------------------------ //
const calculateSalesTax = function(salesData, taxRates) {
  let res = {};
  const taxKeys = Object.keys(taxRates);
  salesData.forEach(obj => {
    if (!res.hasOwnProperty(obj.name)) {
      res[obj.name] = {
        totalSales: sumArray(obj.sales),
        totalTaxes: sumArray(calculateTax(taxKeys, obj))
      };
    } else {
      res[obj.name].totalSales += sumArray(obj.sales);
      res[obj.name].totalTaxes += sumArray(calculateTax(taxKeys, obj));
    }
  });
  return res;
};
const output = calculateSalesTax(companySalesData, salesTaxRates);
console.log(output);
