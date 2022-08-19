//clicking Withdraw  Button
document.getElementById('btnWithdraw').addEventListener('click',function clickWithdrawBtn(){

    const withdrawFieldAmount=document.getElementById('withdrawField');
    const previousWithdrawAmount=document.getElementById('previousWithdrawAmount');
    const previousBalances=document.getElementById('previousBalance');
    
    //Make string to Float
    const previousWithdrawAmounts=parseFloat(previousWithdrawAmount.innerText);
    const withdrawFieldsValues=parseFloat(withdrawFieldAmount.value);
    const previousBalance=parseFloat(previousBalances.innerText);
    // Remove the input Value 
    withdrawFieldAmount.value='';
    if(isNaN(withdrawFieldsValues))
    {
        alert("Please Input a valid Number"); 
    }
    else
    {
        if(withdrawFieldsValues>previousBalance)
        {
            alert("Insufficient Balance");
        }
        else
            {
        //Subtract the Withdraw amount Section
        const totalWithdraw=previousWithdrawAmounts+withdrawFieldsValues;
        const totalWithdrawIn=Math.abs(totalWithdraw);
        previousWithdrawAmount.innerText=totalWithdrawIn;
        
        //Subtract The Withdraw amout from Main Balance
        const totalBalance=previousBalance-withdrawFieldsValues;
        previousBalances.innerText=totalBalance;
            }
    }


    })