// 1. Button color change
document.getElementById("colorBtn").onclick = function () {
    this.style.backgroundColor = "green";
};

// 2. Greeting based on time
document.getElementById("greetBtn").onclick = function () {
    let hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    alert(greeting);
};

// 3. Calculator addition
document.getElementById("addBtn").onclick = function () {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    document.getElementById("result").innerText =
        "Result: " + (n1 + n2);
};
