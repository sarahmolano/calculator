document.addEventListener("DOMContentLoaded", function () {
  const item_userinput = document.querySelectorAll(".calculator .userinput");

    userinput.addEventListener("change", user_input_listener);
    userinput.addEventListener("keyup", user_input_listener)
  });


function user_input_listener(e){
  const this_input = e.target;
  const userinput = this_input.closest(".userinput");
  const userinput = this_input.value;
}

function calculation() {
  const item_userinput = document.querySelectorAll(".calculator .userinput");

  item_userinput.forEach(function(userinput){
    const userinput = row.querySelector(".userinput");
    let userinput = userinput.value;

    userinput = parseFloat(userinput);

    const income_field = row.querySelector(".income_input");

    const rent_field = row.querySelector("rent_input")

    const total = parseInt(income_field) - parseInt(rent_field);

    total.querySelector(".span").innerHTML = round_number(total);
  })
}


function round_number(num) {
  num = num * 100;
  num = Math.round(num);
  num = num / 100;
  num = num.toFixed(2);
  return num;
}
