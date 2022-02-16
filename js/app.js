

//calculate expense 
document.getElementById('expense-calculate-button').addEventListener('click',function(){
    //calculate event handler
    // const incomeAmount = getInputValues('income');
    // const food  = getInputValues('food ');
    // const rent  = getInputValues('rent ');
    // const cloth  = getInputValues('cloth ');
    
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = Number(incomeInput.value);

    const foodInput = document.getElementById('food-input');
    const foodAmount  = Number(foodInput.value);

    const  rentInput = document.getElementById( 'rent-input');
    const  rentAmount = Number( rentInput.value);

    const clothInput = document.getElementById('cloth-input');
    const clothAmount  = Number(clothInput.value);

   
    const total  = foodAmount  + clothAmount  + rentAmount ;
    const balance = incomeAmount - total ;
    console.log(total )
    
    document.getElementById('total-expense').innerText = total ;
    document.getElementById('balance').innerText = balance;

   
    //income input data
});

document.getElementById('saving-input-button').addEventListener('click',function(){
    const savingInput = document.getElementById('saving-input');
    const savingPercentage = Number(savingInput.value);
    const balanceValue = document.getElementById('balance').innerText
    const balance = Number(balanceValue);
    
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = Number(incomeInput.value);


    const savingAmount = incomeAmount/100*savingPercentage;
    const remainingBalance = balance - savingAmount;
    
    document.getElementById('saving-amount').innerText =savingAmount;
    document.getElementById('remaining -amount').innerText = remainingBalance;
    console.log(savingAmount);
});
