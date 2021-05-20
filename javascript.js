function calculate() {
    let billAmount = document.getElementById("billAmount").value;
    let percentageTip = document.getElementById("percentageTip").value;
    if (billAmount === "" || percentageTip === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input.";

    } else {
        billAmount = parseInt(billAmount);
        percentageTip = parseInt(percentageTip);
        let tipAmount = (percentageTip / 100) * billAmount;
        let totalAmount = billAmount + tipAmount;
        document.getElementById("tipAmount").value = tipAmount;
        document.getElementById("totalAmount").value = totalAmount;
        document.getElementById("errorMessage").textContent = "";
    }

}