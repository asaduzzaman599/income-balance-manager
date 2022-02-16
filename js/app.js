function getValue(elementId) {

    //collect data from user input and return the value in number.
    const InputElement = document.getElementById(elementId + "-input");
    return Number(InputElement.value);
}

function displayErrorMessage(elementId, message) {

    //disblay error message.
    const errorText = document.getElementById(elementId);
    errorText.innerText = message;
    errorText.style.display = 'block';
}


//saving-error-message
//calculate expense 
document.getElementById('expense-calculate-button').addEventListener('click', function () {
    
    //income info
    const incomeAmount = getValue('income');

    //expense info
    const foodAmount = getValue('food');
    const rentAmount = getValue('rent');
    const clothAmount = getValue('cloth');


    if(incomeAmount>=0){
        if(foodAmount >=0 && rentAmount >=0 && clothAmount >=0 ){

            const total = foodAmount + clothAmount + rentAmount;
            const balance = incomeAmount - total;
                
            if (balance >= 0) {
                
            //condition check then calculate then display balance and total expense     
                document.getElementById('total-expense').innerText = total;
                document.getElementById('balance').innerText = balance;

                //removed all expense and income error after successfully input.
                document.getElementById('expense-error-message').style.display = 'none';

            } else {
                
                //error for expense more than income.
                displayErrorMessage('expense-error-message', "Sorry. income is insufficient for expense.")
            }
        }else if(isNaN(foodAmount) || isNaN(rentAmount) || isNaN(clothAmount)){

            //error for expense info input not a number.
            displayErrorMessage('expense-error-message', "Sorry. invalid input for expense.");
        }else{

            //error for expense info negative input number.
            displayErrorMessage('expense-error-message', "Please enter positive number for expense.");
        }
    }else if(isNaN(incomeAmount)){

        //error for income  input not a number.
        displayErrorMessage('expense-error-message', "Sorry. invalid input for income.");
    }else{

        //error for income negative input number.
        displayErrorMessage('expense-error-message', "Please enter positive number for income.");
    }
});


document.getElementById('saving-input-button').addEventListener('click', function () {
    //savings data
    const savingPercentage = getValue('saving');
    if(savingPercentage >= 0){

        //collecting balance amount from ui
        const balanceValue = document.getElementById('balance').innerText
        const balance = Number(balanceValue);
        
        //income amount
        const incomeAmount = getValue('income');
    
    
        const savingAmount = incomeAmount / 100 * savingPercentage;
        const remainingBalance = balance - savingAmount;
    
    
        if (remainingBalance >= 0) {
            //calculate then condition check then display saving amount , remaining amount.
            document.getElementById('saving-amount').innerText = savingAmount;
            document.getElementById('remaining-amount').innerText = remainingBalance;

            
                //removed all saving error after successfully input.
            document.getElementById('saving-error-message').style.display = 'none';
        } else {

            //error for savings more than balance.
            displayErrorMessage('saving-error-message', "Sorry. Balance is insufficient for saving money.")
        }
    }else if(isNaN(savingPercentage)){

        //error for saving-percentage  input not a number.
        displayErrorMessage('expense-error-message', "Sorry. invalid input for saving.");
    }else{
        
        //error for saving-percentage  negative input number.
        displayErrorMessage('expense-error-message', "Please enter positive number for saving.");
    }
});