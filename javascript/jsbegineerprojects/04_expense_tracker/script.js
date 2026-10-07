document.addEventListener("DOMContentLoaded", () => {
  let expenses = JSON.parse(localStorage.getItem("expense")) || [];
  let totalAmount = calculateTotal();

  const expenseForm = document.getElementById("expense-form");
  const expensename = document.getElementById("expense-name");
  const expenseamount = document.getElementById("expense-amount");
  const expenselistdisplay = document.getElementById("expense-list");
  const totalAmountdisplay = document.getElementById("total-amount");

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = expensename.value.trim();
    let amount = parseFloat(expenseamount.value.trim());
    if (name != "" && !isNaN(amount) && amount > 0) {
      const newexpenses = {
        id: Date.now(),
        Name: name,
        amount: amount,
      };
      expenses.push(newexpenses);
      saveExpensesToLocal(expenses);
      renderexpenses();
      updateamount();

      expensename.value = "";
      expenseamount.value = "";
    }
  });
  function calculateTotal() {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  function renderexpenses() {
    expenselistdisplay.innerHTML = "";
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
      ${expense.Name} - ${expense.amount}
      <button data-id=${expense.id}>Delete</button>
      `;
      expenselistdisplay.appendChild(li);
    });
  }

  function saveExpensesToLocal(expense) {
    localStorage.setItem("expenses", JSON.stringify(expense));
  }

  function updateamount() {
    const totalAmount = calculateTotal();
    totalAmountdisplay.textContent = totalAmount.toFixed(2);
  }

  expenselistdisplay.addEventListener('click',(e)=>{
    if(e.target.tagName = 'BUTTON'){
      const expenseId = parseInt(e.target.getAttribute('data-id'))
      expenses = expenses.filter( expense => expense.id != expenseId)
      saveExpensesToLocal();
      renderexpenses()
      updateamount()
    }
  })
});
