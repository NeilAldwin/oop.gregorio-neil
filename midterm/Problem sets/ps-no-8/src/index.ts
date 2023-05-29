interface Transact {
  transactionId: number
  productName: string
  quantity: number
  price: number
  cashier: string
}

const transactions: Transact[] = [
  {
    transactionId: 1,
    productName: 'Milo',
    quantity: 1,
    price: 10.0,
    cashier: 'Sophia',
  },
  {
    transactionId: 2,
    productName: 'Gatas na Choco',
    quantity: 2,
    price: 30.0,
    cashier: 'Alicia',
  },
  {
    transactionId: 3,
    productName: 'Choco na Gatas',
    quantity: 3,
    price: 45.0,
    cashier: 'Rachel',
  },
  {
    transactionId: 4,
    productName: 'Lomi',
    quantity: 1,
    price: 50.0,
    cashier: 'Kathlyn',
  },
  {
    transactionId: 5,
    productName: 'Snowbear',
    quantity: 2,
    price: 5.0,
    cashier: 'Grace',
  },
  {
    transactionId: 6,
    productName: 'Milo',
    quantity: 4,
    price: 40.0,
    cashier: 'Sophia',
  },
]

function totalSales(transactions: Transact[]): number {
  return transactions.reduce((acc, transaction) => acc + transaction.price, 0)
}
function totalTransactions(transactions: Transact[]): number {
  return transactions.length
}
function highestSalesCashierName(transactions: Transact[]): string {
  const salesByCashier: { [key: string]: number } = {}

  transactions.forEach((transaction) => {
    if (salesByCashier[transaction.cashier]) {
      salesByCashier[transaction.cashier] += transaction.price
    } else {
      salesByCashier[transaction.cashier] = transaction.price
    }
  })

  const sortedSales = Object.entries(salesByCashier).sort((a, b) => b[1] - a[1])

  return sortedSales[0][0]
}

console.log(`Total Sales:` , totalSales(transactions))
console.log(`Total Transactions: `, totalTransactions(transactions))
console.log(`Cashier With Highest Sale: `,highestSalesCashierName(transactions))
