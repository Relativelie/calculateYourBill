const calculate = document.querySelector("#btn");
calculate.addEventListener("click", calculateSum);


const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip);

function showTip(e) {
    e.preventDefault();
    tip.style.display = "block";
}



document.querySelector("#bill").addEventListener('input', stopInput);

function stopInput(e) {
    let _max = 999999;
    let _min = 0;
    let newValue = Math.min(_max, Math.max(_min, e.target.value));
    document.querySelector("#bill").value = newValue
}


function calculateSum(e) {
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;


    e.preventDefault();
    if (bill === "" || people === "" || people < 1) {

        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please enter your information!'
        })
    }

    if (people > 0) {
        let amountPerPerson = bill / people;
        let tipForPerson = (bill * tip) / people;
        let totalSum = amountPerPerson + tipForPerson;


        amountPerPerson = amountPerPerson.toFixed(2);
        tipForPerson = tipForPerson.toFixed(2);
        totalSum = totalSum.toFixed(2);

        document.querySelector("#divadedBill").textContent = amountPerPerson;
        document.querySelector("#divadedTip").textContent = tipForPerson;
        document.querySelector("#divadedBillTip").textContent = totalSum;
    }



}