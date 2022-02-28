// login button event handler
const enterBtn = document.getElementById("enter").addEventListener("click", function () {
    const userName = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;
    if (userName == 'yourname@gmail.com' && userPassword == '1234') {
        const loginArea = document.getElementById("login-area");
        loginArea.style.display = "none";
        const transationArea = document.getElementById("transaction-area");
        transationArea.style.display = "block";
    } else {
        alert('please input valid email & password')
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
})

// deposit button event handler 
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount");

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    document.getElementById("depositAmount").value = "";
})

// withdraw button event handler 
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");

    updateSpanText("currentWithdraw", withdrawNumber)
    updateSpanText("currentBalance", -1 * withdrawNumber)
    document.getElementById("withdrawAmount").value = "";
})
// function
function getInputNumber(id) {
    const Amount = document.getElementById(id).value;
    const Number = parseFloat(Amount);
    return Number;
}

function updateSpanText(id, addedNumber) {
    const currentInput = document.getElementById(id).innerText;
    const currentNumber = parseFloat(currentInput);
    let totalAmount = currentInput;
    if (totalAmount >= 0) {
        totalAmount = currentNumber + addedNumber;
    } else {
        alert('balance can not be negative')
    }
    document.getElementById(id).innerText = totalAmount;
}

            // const currentDeposit = document.getElementById("currentDeposit").innerText;
            // const currentDepositNumber = parseFloat(currentDeposit);
            // const totalDeposit = depositNumber + currentDepositNumber;
            // document.getElementById("currentDeposit").innerText = totalDeposit;

            // const currentBalance = document.getElementById("currentBalance").innerText;
            // const currentBalanceNumber = parseFloat(currentBalance);
            // const totalBalance = depositNumber + currentBalanceNumber;
            // document.getElementById("currentBalance").innerText = totalBalance;
