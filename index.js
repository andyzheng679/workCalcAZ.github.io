// reage function
const reageMultiplier = 1.10;

document.getElementById("reageSubmitButton").onclick = function(){
    let highestBucket = document.getElementById("reageNum").value;
    let reageResult = highestBucket * reageMultiplier;
    document.getElementById("reageClac").value = reageResult.toFixed(2);
    document.getElementById("roundUpMessage").style.display = "block";
}

document.getElementById("reageResetButton").onclick = function(){
    document.getElementById("reageNum").value = "";
    document.getElementById("reageClac").value = "0"
}

// settlement percentage function
const settlementPercentage = .25;

document.getElementById("settlementSubmitButton").onclick = function(){
	let accountBal = document.getElementById("settlementBal").value;

	let percentage = document.getElementById("settlementPercentage").value;

	let settlementResult = (percentage / 100) * accountBal
	document.getElementById("settlementCalc").value = settlementResult.toFixed(2);
}

document.getElementById("settlementResetButton").onclick = function(){
    document.getElementById("settlementBal").value = "";
    document.getElementById("settlementPercentage").value = "";
    document.getElementById("settlementCalc").value = "0"
}

// long-term payer

document.getElementById("ltPayerSubmitButton").onclick = function(){
	let ltAccountBal = document.getElementById("ltPayerBal").value;
	
	let onePercentage = ltAccountBal * .01;

	let numOfPayments = (ltAccountBal/onePercentage) - 1;
	document.getElementById("onePercentCalc").value = onePercentage.toFixed(2);
	document.getElementById("numOfPaymentsCalc").value = numOfPayments;
}

document.getElementById("ltPayerResetButton").onclick = function(){
    document.getElementById("ltPayerBal").value = "";
    document.getElementById("onePercentCalc").value = "0";
    document.getElementById("numOfPaymentsCalc").value = "0"
}

// less than 1% payments

document.getElementById("ltPayerSubmitButton2").onclick = function(){
	let ltAccountBal2 = document.getElementById("ltPayerBal").value;

	let howMuchPay = document.getElementById("customerPayments").value;

	let numOfPayments2 = (ltAccountBal2 / howMuchPay) - 1;
	document.getElementById("numOfPaymentsCalc2").value = Math.ceil(numOfPayments2);
}

document.getElementById("ltPayerResetButton2").onclick = function(){
    document.getElementById("customerPayments").value = "";
    document.getElementById("numOfPaymentsCalc2").value = "0";
}
