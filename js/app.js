function subtractionAmount(firstElementId, resultElementId, secondValue, errorID) {
    const firstElementValue = Number(document.getElementById(firstElementId).innerText);
    const resultElement = document.getElementById(resultElementId);
    console.log(firstElementValue)
    if (firstElementValue >= secondValue) {
        resultElement.innerText = firstElementValue - secondValue;
        document.getElementById(errorID).style.display = 'none';
        return true;
    } else {
        if (errorID == "saving-error-message") {
            displayErrorMessage(errorID, "Sorry. Balance is insufficient for saving money.")
        }
    }
}

function displayErrorMessage(elementId, message) {

    const errorText = document.getElementById(elementId);

    errorText.innerText = message;
    errorText.style.display = 'block';
}
//saving-error-message
//calculate expense 
document.getElementById('expense-calculate-button').addEventListener('click', function () {
    //calculate event handler
    // const incomeAmount = getInputValues('income');
    // const food  = getInputValues('food ');
    // const rent  = getInputValues('rent ');
    // const cloth  = getInputValues('cloth ');

    const incomeInput = document.getElementById('income-input');
    const incomeAmount = Number(incomeInput.value);

    const foodInput = document.getElementById('food-input');
    const foodAmount = Number(foodInput.value);

    const rentInput = document.getElementById('rent-input');
    const rentAmount = Number(rentInput.value);

    const clothInput = document.getElementById('cloth-input');
    const clothAmount = Number(clothInput.value);


    const total = foodAmount + clothAmount + rentAmount;
    const balance = incomeAmount - total;
    console.log(total)
    

    if (balance >= 0 ) {

        document.getElementById('total-expense').innerText = total;
        document.getElementById('balance').innerText = balance;
        document.getElementById('expense-error-message').style.display = 'none';
    }else{
        displayErrorMessage('expense-error-message', "Sorry. income is insufficient for expense.")
    }

    //income input data
});

document.getElementById('saving-input-button').addEventListener('click', function () {
    const savingInput = document.getElementById('saving-input');
    const savingPercentage = Number(savingInput.value);
    const balanceValue = document.getElementById('balance').innerText
    const balance = Number(balanceValue);

    const incomeInput = document.getElementById('income-input');
    const incomeAmount = Number(incomeInput.value);


    const savingAmount = incomeAmount / 100 * savingPercentage;
    const remainingBalance = balance - savingAmount;


    if (remainingBalance >= 0 ) {
        document.getElementById('saving-amount').innerText = savingAmount;
        document.getElementById('remaining-amount').innerText = remainingBalance;
        document.getElementById('saving-error-message').style.display = 'none';
    }else{
        displayErrorMessage('saving-error-message', "Sorry. Balance is insufficient for saving money.")
    }
    // console.log(savingAmount);
});

