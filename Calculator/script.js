// const display = document.getElementById("display");
// const buttons = document.querySelectorAll("button");

// let expression = "";

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const value = button.innerText;

//     if (value === "AC") {
//       expression = "";
//     } else if (value === "=") {
//       try {
//         expression = eval(expression).toString();
//       } catch (error) {
//         expression = "Error";
//       }
//     } else if (value === "±") {
//       expression = (parseFloat(expression) * -1).toString();
//     } else if (value === "()") {
//       // Simple toggle for brackets (you can make it smarter later)
//       if (!expression.includes("(")) {
//         expression += "(";
//       } else {
//         expression += ")";
//       }
//     } else {
//       expression += value;
//     }

//     display.value = expression;
//   });
// });

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression="";

buttons.forEach(button=>{
  button.addEventListener('click',()=>{
    const value=button.innerText;

    if(value==='AC'){
      expression="";
    }

    else if(value==='='){
      try{
        expression=eval(expression).toString();
      }
      catch(error){
        expression="Error";
      }
    }

    else if(value===''){
      expression=(parseFloat(expression)*-1).toString();
    }
    else if(value==='()'){
      if(!expression.includes("(")){
        expression+='(';
      }
      else{
        expression+=')';
      }
    }
    else{
      expression+=value;
    }
    display.value=expression;
  })
})