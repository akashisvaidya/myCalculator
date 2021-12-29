let num1 = "";
let num2 = "";
var operator = "";
var result = "";
var num = "";
$(document).ready(function () {
  // let num1 = "";
  // let num2 = "";
  // var operator = "";
  // var result = "";
  // var num = "";

  $(".btn-num").click(function () {
    var num = $(this).text();
    if (operator === "") {
      num1 += num;
      $("input").val(num1);
      console.log("num1 =" + num1);
    } else {
      num2 += num;
      $("input").val(num1 + operator + num2);
      console.log("num2=" + num2);
    }
  });

  $(".operator").click(function () {
    if (!num1) return;
    else if (num1) {
      operation();
      operator = $(this).text();
      $("input").val(num1 + operator + num2);
      console.log("operator = " + operator);
    }
    if (num2) {
      operation();
      $("input").val(result);
      update();
      return;
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

  $(".equal").click(function () {
    operation();
    $("input").val(result);
    update();
    console.log("new result =" + result);
    console.log("new n1 =" + num1);
    console.log("new n2 =" + num2);
    console.log("operator = " + operator);
  });

  function update() {
    num1 = result;
    num2 = "";
    // result = "";
  }
  //// clear////
  $(".btn-clear").click(function () {
    $("input").val("");
    num1 = "";
    num2 = "";
    result = "";
    operator = "";
    num = "";
  });
  //////
});
