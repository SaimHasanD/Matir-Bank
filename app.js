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
            }
        })
        // deposit button event handler 
        const depositBtn = document.getElementById("addDeposit");
        depositBtn.addEventListener("click", function(){
            const depositNumber = getInputNumber("depositAmount"); 

            updateSpanText("currentDeposit", depositNumber);
            updateSpanText("currentBalance", depositNumber);
            document.getElementById("depositAmount").value = "";
        }) 

        // withdraw button event handler 
        const withdrawBtn = document.getElementById("addWithdraw");
        withdrawBtn.addEventListener("click", function(){
            const withdrawNumber = getInputNumber("withdrawAmount");

            updateSpanText("currentWithdraw", withdrawNumber)
            updateSpanText("currentBalance", -1 * withdrawNumber)
            document.getElementById("withdrawAmount").value = "";
        })
        // function
        function getInputNumber(id){
            const Amount = document.getElementById(id).value;
            const Number = parseFloat(Amount);
            return Number;
        }

        function updateSpanText(id, addedNumber){
            const currentInput = document.getElementById(id).innerText;
            const currentNumber = parseFloat(currentInput);
            const totalAmount = addedNumber + currentNumber;
            document.getElementById(id).innerText = totalAmount;
        }