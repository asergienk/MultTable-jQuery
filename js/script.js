// Link to this assignment: https://asergienk.github.io/MultiplicationTable/
// GitHub repository link: https://github.com/asergienk/MultiplicationTable
// 91.61 Assignment: Multiplication Table with JavaScript
// Anna Sergienko, UMass Lowell Computer Science, anna_sergienko@student.uml.edu
// Copyright (c) 2020 by Anna Sergienko. All rights reserved. May be
// freely copied or excerpted for educational purposes with credit to the author.
// updated by AS on October 28, 2020 at 9:30 PM


//Function to generate a multiplication table based on user's range input.
function generateTable() {
  //getting input values
  var minCol = parseInt(document.getElementById("minCol").value);
  var maxCol = parseInt(document.getElementById("maxCol").value);
  var minRow = parseInt(document.getElementById("minRow").value);
  var maxRow = parseInt(document.getElementById("maxRow").value);
  var error = document.getElementById("message");

  //clearMessage();

  //swapping values if min>max
  /*
  if(minCol>maxCol && minRow>maxRow)
  {
    let temp = maxCol;
    maxCol = minCol;
    minCol = temp;

    let temp2 = maxRow;
    maxRow = minRow;
    minRow = temp2;

    var node = document.createTextNode("Min and Max Column AND Row Values are swapped.");
    printMessage(node);
  }
 else{
  if(minCol>maxCol)
  {
    let temp = maxCol;
    maxCol = minCol;
    minCol = temp;
    var node = document.createTextNode("Min and Max Column Values are swapped.");
    printMessage(node);
  }
  if(minRow>maxRow)
  {
    let temp = maxRow;
    maxRow = minRow;
    minRow = temp;
    var node = document.createTextNode("Min and Max Row Values are swapped.");
    printMessage(node);
  }
}

*/

  var table = document.getElementById("multTable");
  var result = "";
  //creating a multTable
  for(var i=minRow; i<=maxRow;i++)
  {
      //executed only once
      if(i==minRow)
      {
        //starting a new row
        result += "<tr>";
        result += "<th>&times;</th>";
      }

      for(var j=minCol; j<=maxCol; j++)
      {
          if(i==minRow || j==minCol)
          {
            //filling out top row of the table
            if(i==minRow)
              result += "<th>" + j + "</th>";
            else
              result += "<td>"+ (i-1)*j + "</td>";
          }
          else
            result += "<td>"+ (i-1)*j + "</td>";
      }
        //closing the row
        result += "</tr>";
        result += "<tr>";
        //filling out left most column of the table
        result += "<th>" + i + "</th>";
        if(i==maxRow)
        {
          for(var j=minCol; j<=maxCol; j++)
          {
            result += "<td>"+ i*j + "</td>";
          }
        }
    }
  //printing the table
  table.innerHTML=result;

  return false;
}


/*
//Function to print a message if min and max values were swapped.
function printMessage(message){
   var node = document.getElementById("message");
   var newP = document.createElement("P");
   clearMessage();
   newP.appendChild(message);
   node.appendChild(newP);
}
//Function to clear a message.
function clearMessage(){
    var message = document.getElementById("message");
    while(message.firstChild){
        message.removeChild(message.firstChild);
    }
}
*/
