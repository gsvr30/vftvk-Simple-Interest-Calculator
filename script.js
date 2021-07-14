window.onload = function(){
    document.getElementById("principal").value = "";
    document.getElementById("rate").value = 0;
    document.getElementById("years").value = "";
}

function checkdata() {
    //Create references to the input elements we wish to validate
    var amount = document.getElementById("principal");
    var rate = document.getElementById("rate");
    var years = document.getElementById("years");
    //Check if amount field is empty
    if(amount.value <= 0 || amount.value == "") {
        alert("Please enter a positive amount");
        amount.focus();
        return false;
    }
    //Check if rate field is empty
    if(rate.value == 0){
        alert("Please enter an interest rate > 0");
        rate.focus();
        return false;
    }
    //Check if year field is empty
    if(years.value == ""){
        alert("Please enter the number of years");
        years.focus();
        return false;
    }
    //If all is well return true.
    return true;
}

function compute() {
    if (checkdata()) {
        if (document.contains(document.getElementById("result"))) {
            document.getElementById("result").remove();
        }
        p = document.getElementById("principal").value;
        r = document.getElementById("rate").value;
        t = document.getElementById("years").value;
        var si = Math.round(p*r*t/100);
        var time_period = new Date().getFullYear() + Number(t);

        var result = document.createElement("p");
        result.setAttribute("id", "result");
        result.innerHTML = "If you deposit " + p +
                            ", <br>" + "at an interest of " + r +
                            "%, <br>" + "You will receive an amount of " +
                            si + ", <br>" + "in the year " + time_period;
        document.getElementById("inner").appendChild(result);
    }
}
