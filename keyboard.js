$(document).ready(function () {
  $(".btn-del").click(function () {
    console.log(operator);
    var str = $("input").val();
    str = str.substr(0, str.length - 1);
    console.log(str);
    $("input").val(str);
    if (operator === "") {
      num1 = str;
      $("input").val(num1);
      console.log("num1 =" + num1);
    } else {
      num2 = str;
      $("input").val(num2);
      console.log("num2=" + num2);
    }
  });
  //////................/////////////////

  $(document).keydown(function (e) {
    if (
      e.key === "0" ||
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "."
    ) {
      let num = e.key;
      if (operator === "") {
        num1 += num;
        $("input").val(num1);
      } else {
        num2 += num;
        $("input").val(num2);
      }
    } else if (
      e.key === "+" ||
      e.key === "-" ||
      e.key === "/" ||
      e.key === "*"
    ) {
      operator = e.key;
      if (operator) {
        num2 += num;
      } else if (e.keyCode === 8) {
        alert("del");
      } else if (e.key == "Enter" || e.key === "=") {
        operation();
        $("input").val(result);
        update();
        console.log("new result =" + result);
        console.log("new n1 =" + num1);
        console.log("new n2 =" + num2);
        console.log("operator = " + operator);
      }
    }
  });
  function operation() {
    if (operator === "+") {
      result = parseFloat(num1) + parseFloat(num2);
    } else if (operator === "×") {
      result = parseFloat(num1) * parseFloat(num2);
    } else if (operator === "-") {
      result = parseFloat(num1) - parseFloat(num2);
    } else if (operator === "÷") {
      result = parseFloat(num1) / parseFloat(num2);
    }

    console.log("result= " + result);
  }

  function update() {
    num1 = result;
    num2 = "";
    // result = "";
  }
});
