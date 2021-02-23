localStorage.removeItem("tableOrder");

function fetchQuestion() {
  return;
}

//An Array to get Questions from Database
//const sudokuArray = fetchQuestion();

//A simple question in SUDOKU Test app
var sudokuArrayMatrixThreeByThree = [[2, 1, 3], [1, 3, 2], [3, 2, 1]];

var sudokuArrayMatrixFourByFour = [[1, 4, 3, 2], [2, 3, 4, 1], [3, 4, 1, 2], [1, 2, 3, 4]];

var sudokuArrayMatrixNineByNine = [
  [4, 3, 5, 2, 6, 9, 7, 8, 1],
  [6, 8, 2, 5, 7, 1, 4, 9, 3],
  [1, 9, 7, 8, 3, 4, 5, 6, 2],
  [8, 2, 6, 1, 9, 5, 3, 4, 7],
  [3, 7, 4, 6, 8, 2, 9, 1, 5],
  [9, 5, 1, 7, 4, 3, 6, 2, 8],
  [5, 1, 9, 3, 2, 6, 8, 7, 4],
  [2, 4, 8, 9, 5, 7, 1, 3, 6],
  [7, 6, 3, 4, 1, 8, 2, 5, 9]
];

//var sudokuArray = [[1,1,1], [2,2,2], [3,3,3]]
//Another declaration to confirm the SUDOKU matrix value
var confirmationArrayThreeByThree = [[2, 1, 3], [1, 3, 2], [3, 2, 1]];
var confirmationArrayFourByFour = [[1, 4, 3, 2], [2, 3, 4, 1], [3, 4, 1, 2], [1, 2, 3, 4]];
var confirmationArrayNineByNine = [
  [4, 3, 5, 2, 6, 9, 7, 8, 1],
  [6, 8, 2, 5, 7, 1, 4, 9, 3],
  [1, 9, 7, 8, 3, 4, 5, 6, 2],
  [8, 2, 6, 1, 9, 5, 3, 4, 7],
  [3, 7, 4, 6, 8, 2, 9, 1, 5],
  [9, 5, 1, 7, 4, 3, 6, 2, 8],
  [5, 1, 9, 3, 2, 6, 8, 7, 4],
  [2, 4, 8, 9, 5, 7, 1, 3, 6],
  [7, 6, 3, 4, 1, 8, 2, 5, 9],
];

//A function to render question in form of an array
function queryRender(queryArray) {
  //A descision maker for the question set to preset solid blocks
  for (i = 0; i < tableOrder; i++) {
    for (j = 0; j < tableOrder; j++) {
      if (Math.random() > 0.5) {
        queryArray[i][j] = 0;
      }
    }
  }

  //Building Table UI Components to pack them for data accumulation
  var tableInfo = document.createElement("tbody");
  //A variable that increases class name value
  var increament = 1;

  for (i = 0; i < tableOrder; i++) {
    // Generating new TR tags to hold TH in them
    var tableRow = document.createElement("TR");

    for (j = 0; j < tableOrder; j++) {
      // Generating new TH tags to hold real digits in them
      var tableHeader = document.createElement("TH");

      /* A junction point (***  -<  ***) that separates incoming data 
                  into float/fixed digit holders(the TH tags)*/
      if (queryArray[i][j] != 0) {
        // Creating the fixed blocks
        tableHeader.setAttribute("id", "num");
        tableHeader.setAttribute("class", "fixed-digit");
        tableHeader.setAttribute("scope", "row");
        tableHeader.setAttribute("data", increament);
        tableHeader.innerHTML = queryArray[i][j];
        increament++;
      } else {
        // Creating the float blocks
        tableHeader.setAttribute("id", "num");
        tableHeader.setAttribute("class", "float-digit");
        tableHeader.setAttribute("data", increament);
        tableHeader.setAttribute("tabindex", 0);
        tableHeader.setAttribute("scope", "row");
        tableHeader.innerHTML = "0";
        increament++;
      }

      // Adding table header (***actual digits here***) with digits
      tableRow.appendChild(tableHeader);
    }

    // Adding table rows with digits
    tableInfo.appendChild(tableRow);
  }

  //Final Injection of SUDOKU_ARRAY Information
  document.getElementById("injectTable").appendChild(tableInfo);
}

//A function for all mouse based operations
function mouseActios(mainArray) {
  //A variable that decides the particular selected float-block
  var selectedBlock;

  //A statement to assign the selected-block-value to the selectedBlock variable
  document.onclick = () => {
    // Rendering UI actions to the float headers in the matrix
    if (document.activeElement.tagName === "TH") {
      selectedBlock = document.activeElement;
    } else {
      selectedBlock = null;
    }
  };

  // NUMPAD 1 actions
  document.getElementById("num1").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = "1";
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD 2 actions
  document.getElementById("num2").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = "2";
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD 3 actions
  document.getElementById("num3").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = "3";
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD 4 actions
  document.getElementById("num4").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = "4";
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD 5 actions
  document.getElementById("num5").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = "5";
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD 6 actions
  document.getElementById("num6").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = "6";
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD 7 actions
  document.getElementById("num7").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = "7";
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD 8 actions
  document.getElementById("num8").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = "8";
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD 9 actions
  document.getElementById("num9").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = "9";
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD C actions
  document.getElementById("clear").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = "0";
      selectedBlock.removeAttribute("style");
    }
  });

  // NUMPAD CHECKBOX
  document.getElementById("check").addEventListener("click", () => {
    confirmed(mainArray);
  });
}

//A function executed when check button is clicked
function confirmed(confirmationArray) {
  //An increament variable to fill index value for user input array
  var increament = 0,
    vacantCheck = false;
  // SUDOKU Array as per User Input
  var inputArray = [tableOrder * tableOrder];

  //A confirmation block to check whether table has any vacant field or not
  //Matching Algorithm
  for (i = 0; i < tableOrder; i++) {
    for (j = 0; j < tableOrder; j++) {
      // Rendering each child to get innerHTML value for Checking float-digit available or not
      var table = document.getElementsByTagName("tbody")[0].children[i]
        .children[j];
      if (table.innerHTML == 0) {
        // Testing fail
        $("#emptyBlocks").modal("show");
        vacantCheck = true;
        break;
      } else {
        // Testing pass, adding text matrix index info
        inputArray[increament] = table.innerHTML;
        increament++;
      }
    }

    // Breaking the outer loop
    if (vacantCheck) {
      break;
    }
  }

  // A variable to confirm matrix content satified or not
  if (!vacantCheck) {
    // Taking user submit permission
    var confirmation = confirm("Are you Sure to submit?");
    if (confirmation) {
      // A variable to confirm equality of query matrix and user matrix, and index of user matrix
      var arrayEqualConfirm = true;
      var inc = 0;

      //Check for SUDOKU array equal to User Input Array
      for (i = 0; i < tableOrder; i++) {
        for (j = 0; j < tableOrder; j++) {
          if (confirmationArray[i][j] != inputArray[inc]) {
            arrayEqualConfirm = false;
          }
          inc++;
        }
      }

      // A check to confirm th result and display SUCCESS/FAIL message
      if (arrayEqualConfirm) {
        //Successful
        $("#finishED").modal("show");
        clearInterval(interval);
      } else {
        //Wrong Matrix
        $("#failed").modal("show");
      }
    }
  }
}

// Rendering the table
if (tableOrder === 3) {
  queryRender(sudokuArrayMatrixThreeByThree);
  // All mouse based actions SET
  mouseActios(confirmationArrayThreeByThree);
}
else if (tableOrder === 4) {
  queryRender(sudokuArrayMatrixFourByFour);
  // All mouse based actions SET
  mouseActios(confirmationArrayFourByFour);
}
else if (tableOrder === 9) {
  queryRender(sudokuArrayMatrixNineByNine);
  // All mouse based actions SET
  mouseActios(confirmationArrayNineByNine);
}


//Setting Timeout Modal Button Actions
document.getElementById("returnSuccess").addEventListener("click", () => {
  location.replace("../index.html");
});
document.getElementById("replaySuccess").addEventListener("click", () => {
  location.reload();
});
document.getElementById("return").addEventListener("click", () => {
  location.replace("../index.html");
});
document.getElementById("replay").addEventListener("click", () => {
  location.reload();
});
document.getElementById("quit").addEventListener("click", () => {
  if(confirm("Are You Sure To exit?")){
    location.replace("../index.html");
  }
});