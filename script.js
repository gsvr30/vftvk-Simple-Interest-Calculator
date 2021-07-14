window.onload = function(){
    document.getElementById("principal").value = "";
    document.getElementById("rate").value = 1;
    document.getElementById("years").value = 1;
}

function checkdata() {
    //Create references to the input elements we wish to validate
    var amount = document.getElementById("principal");
    var years = document.getElementById("years");
    //Check if amount field is empty
    if(amount.value <= 0 || amount.value == "") {
        alert("Please enter a positive amount");
        amount.focus();
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
        result.innerHTML = "If you deposit <mark>" + p +
                            "</mark>, <br>" + "at an interest of <mark>" + r +
                            "%</mark>, <br>" + "You will receive an amount of <mark>" +
                            si + "</mark>, <br>" + "in the year <mark>" +
                            time_period + "</mark>";
        document.getElementById("inner").appendChild(result);
    }
}
        
