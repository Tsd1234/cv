$(document).ready(function(){
  $("#output").text("0");
  
});

var calculater = {
  "prevNum": 0,
  "currNum": "",
  "command": ["",""],
  "equalPressed": 0,  
  "opePressedTime":0,
  "displayStr":""
};

// when pressing number or dot
function numPressed(number){
  if (calculater.equalPressed == 1){
    calculater.equalPressed = 0;
    calculater.displayStr = "";
  }
 calculater.currNum += number;
  calculater.displayStr += number;
 /* console.log("in function numPressed: " + "currNum = " + calculater.currNum + "prevNum = " + calculater.prevNum + "display = " + calculater.displayStr); */
  
  display(); 
  
}

function opePressed(command){
 //calculater.command = command;
  
  display();
  if(calculater.opePressedTime == 0){
     calculater.command[0] = command;
    /*  console.log("command: " + command);
      console.log("command[0]: " + calculater.command[0]);
     
    console.log( "in opePressed : command[0] " + calculater.command[0]); */
    if(calculater.equalPressed == 1){
      calculater.currNum = calculater.displayStr;
       }
      //calculater.displayStr = "";
    calculater.prevNum = Number(calculater.currNum);
    }
   else if(calculater.opePressedTime>0){
     if(calculater.opePressedTime >1){
       calculater.command[0] = calculater.command[1];
           }
   /*  console.log("command: " + command);
     console.log("command[1]: " + calculater.command[1]);
   
     console.log("in opePressTime, command[1] :" + calculater.command[1]); */
     calculater.command[1] = command;
     calculater.prevNum = operation(calculater.prevNum, Number(calculater.currNum), calculater.command[0]);
     calculater.displayStr = calculater.prevNum;
  }
  calculater.displayStr += command;
 calculater.currNum = "";
 calculater.opePressedTime ++;
 
 display();
  
 /* console.log("in opePressed: "+ calculater.command);
  console.log("currNum: "+ calculater.currNum);
  console.log("prevNum: " + calculater.prevNum);

  console.log("display: " + calculater.displayStr); */
  
  
}

function operation(firstNum, lastNum, command){
  var result;
  switch(command){
    case "+":  result = firstNum + lastNum ;
      
      break;
    case "-":  result = firstNum - lastNum;
      break;
    case "x":   result = firstNum * lastNum;
     break;
    case "÷":  result = firstNum / lastNum
      break;
  }
  return result;
}

function display(){
  $("#output").text(calculater.displayStr);
}

function equalPressed(){
  if (calculater.opePressedTime == 0){
    
    return;
  }
  if(calculater.opePressedTime > 1){
calculater.prevNum = operation(calculater.prevNum, Number(calculater.currNum), calculater.command[1]);} 
  else{
  calculater.prevNum = operation(calculater.prevNum, Number(calculater.currNum),calculater.command[0]);
}
  
  calculater.displayStr = calculater.prevNum; 
/*  console.log("in equalPressed: "+ calculater.command);
  console.log("currNum: "+ calculater.currNum);
  console.log("prevNum: " + calculater.prevNum); 
  
  console.log("display: " + calculater.displayStr); */
  display();

  calculater.currNum = '';
  calculater.opePressedTime = 0;
  calculater.equalPressed = 1;
  calculater.command[0] = "";
  calculater.command[1] = "";

  
  
  }

function ACPressed(){
  calculater.displayStr = "0";
  calculater.prevNum = 0;
  calculater.currNum = "";
  calculater.opePressedTime = 0;
  calculater.command = ["",""];
  calculater.equalPressed = 0;
  display();
  calculater.displayStr = "";
}

function CEPressed(){
  
  if(calculater.command[0] == "" && calculater.command[1] == ""){
   calculater.displayStr = "0";
  calculater.prevNum = 0;
  calculater.currNum = "";
  calculater.opePressedTime = 0;
  calculater.command = ["",""];
  calculater.equalPressed = 0;  
  calculater.displayStr = ""; 
    display();
    return;
  }
  
  calculater.displayStr = calculater.prevNum;
  calculater.currNum = "";
  display();
  
  
}