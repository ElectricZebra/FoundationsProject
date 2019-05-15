console.log('js working')

const data = {
  customers: {
    Dwight: {
      Stapler: 0,
      Candy: 0,
      Coke: 0
    },
    Michael: {
      Stapler: 0,
      Candy: 0,
      Coke: 0
    },
    Pam: {
      Stapler: 0,
      Candy: 0,
      Coke: 0
    }
  },
  prizes: {
    Stapler: 1,
    Candy: 3,
    Coke: 5
  }
};

const names = document.querySelector('#names');
const prizes = document.querySelector('#prizes');

function renderNames () {
  const arrCust = [];
  const customers = data.customers;
  arrCust.push(Object.keys(customers))
  return arrCust.join('');
}
// `
// <ul>
// ${
//   Object.keys(data)
// }
// </ul>
// `

function renderCustomers () {
  const customers = data.customers;
  const arrCust = [];

  return arrCust;
}


names.innerHTML = renderNames();

console.log(renderNames());

