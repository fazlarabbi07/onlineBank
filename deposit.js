//clicking Deposit  Button
document
  .getElementById("btnDeposit")
  .addEventListener("click", function clickDepositBtn() {
    const depositFieldAmount = document.getElementById("depositField");
    const previousDepositAmount = document.getElementById(
      "previousDepositAmount"
    );
    const previousBalances = document.getElementById("previousBalance");

    //Make string to Float
    const previousDepositAmounts = parseFloat(previousDepositAmount.innerText);
    const depositFieldsValues = parseFloat(depositFieldAmount.value);
    const previousBalance = parseFloat(previousBalances.innerText);
     // Remove the input Value 
     depositFieldAmount.value='';
    if (isNaN(depositFieldsValues)) {
      alert("Please Input a valid Number");
    } else {
      //Adding the deposit amount Section
      const totalDeposit = previousDepositAmounts + depositFieldsValues;
      previousDepositAmount.innerText = totalDeposit;

      //Adding The Deposit amout to Main Balance
      const totalBalance = previousBalance + depositFieldsValues;
      previousBalances.innerText = totalBalance;
    }
  });
