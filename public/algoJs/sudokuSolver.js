
/* -------------------------------- ********************* --------------------------------- */
/* -------------------------------- ********************* --------------------------------- */
/* -------------------------------- ********************* --------------------------------- */
/* -------------------------------- Main Algorithm Begins --------------------------------- */
/* -------------------------------- ********************* --------------------------------- */
/* -------------------------------- ********************* --------------------------------- */
/* -------------------------------- ********************* --------------------------------- */

const noVal = null;

function initiate() {

  /* populate the board with whatever the user input */
  let startingBoard = [[]];
  let j = 0;
  for (let i = 1; i <= 81; i++) {
    const val = document.getElementById(String(i)).value;
    if (val == "") {
      startingBoard[j].push(null);
    } else {
      startingBoard[j].push(Number(val));
    }
    if (i % 9 == 0 && i < 81) {
      startingBoard.push([]);
      j++;
    }
  }
  // console.log(startingBoard);
  const inputValid = validBoard(startingBoard);
  if (!inputValid) {
    inputIsInvalid();
  } else {
    const answer = solve(startingBoard);
    updateBoard(answer, inputValid);
  }
}

function solve(board) {

  /* Assuming the given sudoku board is valid
  solves the given sudoku board */
  if (solved(board)) {
    return board;
  } else {
    const possibilities = nextBoards(board);
    const validBoards = keepOnlyValid(possibilities);
    return searchForSolution(validBoards);
  }
}

function searchForSolution(boards) {

  /* finds a valid solution to the sudoku problem */
  if (boards.length < 1) {
    return false;
  } else {
    // backtracking search for solution
    let first = boards.shift();
    const tryPath = solve(first);
    if (tryPath != false) {
      return tryPath;
    } else {
      return searchForSolution(boards);
    }
  }
}


function solved(board) {

  // checks to see if the given puzzle is solved
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == null) {
        return false;
      }
    }
  }
  return true;
}

function nextBoards(board) {
  /* finds the first emply square and generates nine
  different boards filling in that square with numbers 1 to 9 */
  let res = [];
  const firstEmpty = findEmptySquare(board);
  if (firstEmpty != undefined) {
    const y = firstEmpty[0];
    const x = firstEmpty[1];
    for (let i = 1; i <= 9; i++) {
      let newBoard = [...board];
      let row = [...newBoard[y]];
      row[x] = i;
      newBoard[y] = row;
      res.push(newBoard);
    }
  }
  return res;
}

function findEmptySquare(board) {

  /* get the (i, j) coordinates for the first empty square */
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == null) {
        return [i, j];
      }
    }
  }
}

function keepOnlyValid(boards) {

  /* filters out all of the invalid boards from the list */
  let res = [];
  for (let i = 0; i < boards.length; i++) {
    if (validBoard(boards[i])) {
      res.push(boards[i]);
    }
  }
  return res;
}

function validBoard(board) {
  /* checks to see if given board is valid */
  return rowsGood(board) && columnsGood(board) && boxesGood(board);
}

function rowsGood(board) {

  /* makes sure there are no repeating numbers for each row */
  for (let i = 0; i < 9; i++) {
    let cur = [];
    for (let j = 0; j < 9; j++) {
      if (cur.includes(board[i][j])) {
        return false;
      } else if (board[i][j] != null) {
        cur.push(board[i][j]);
      }
    }
  }
  return true;
}

function columnsGood(board) {

  /* makes sure there are no repeating numbers for each column */
  for (let i = 0; i < 9; i++) {
    let cur = [];
    for (let j = 0; j < 9; j++) {
      if (cur.includes(board[j][i])) {
        return false;
      } else if (board[j][i] != null) {
        cur.push(board[j][i]);
      }
    }
  }
  return true;
}

/* This function checks all 3x3 boxes for their Uniqueness */
function boxesGood(board) {

  /* coordinates of each 3x3 box of the sudoku matrix */
  const boxCoordinates = [
    [0, 0], [0, 1], [0, 2],
    [1, 0], [1, 1], [1, 2],
    [2, 0], [2, 1], [2, 2]
  ];

  /* makes sure there are no repeating numbers for each box */
  for (let y = 0; y < 9; y += 3) {
    for (let x = 0; x < 9; x += 3) {
      let cur = [];

      for (let i = 0; i < 9; i++) {
        // destructuring the numbers
        let coordinates = [...boxCoordinates[i]];
        coordinates[0] += y;
        coordinates[1] += x;

        if (cur.includes(board[coordinates[0]][coordinates[1]])) {
          return false;
        } else if (board[coordinates[0]][coordinates[1]] != null) {
          cur.push(board[coordinates[0]][coordinates[1]]);
        }

      }
    }
  }
  return true;
}
function updateBoard(board) {
  // THIS FUNCTION WORKS.
  // Board -> null
  // update the DOM with the answer
  if (board == false) {
    for (i = 1; i <= 9; i++) {
      document.getElementById("row " + String(i)).innerHTML = "NO SOLUTION EXISTS TO THE GIVEN BOARD"
    }
  }
  else {
    for (let i = 1; i <= 9; i++) {
      let row = ""
      for (let j = 0; j < 9; j++) {
        if (row == "") {
          row = row + String(board[i - 1][j])
        }
        else {
          row = row + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + String(board[i - 1][j])
        }
      }
      document.getElementById("row " + String(i)).innerHTML = row
    }
  }
}

function inputIsInvalid() {
  // starting board is invalid or puzzle is insolvable
  for (i = 1; i <= 9; i++) {
    document.getElementById("row " + String(i)).innerHTML = "THE GIVEN BOARD IS INVALID"
  }
}



/* -------------------------- ******************* --------------------------------- */
/* -------------------------- ******************* --------------------------------- */
/* -------------------------- ******************* --------------------------------- */
/* -------------------------- Main Algorithm Ends --------------------------------- */
/* -------------------------- ******************* --------------------------------- */
/* -------------------------- ******************* --------------------------------- */
/* -------------------------- ******************* --------------------------------- */


var mainArray = [];
for (let i = 0; i < tableOrder; i++) {
  mainArray[i] = [];
}

// Rendering Matrix
function queryRender() {

  // Building Table UI Components to pack them for data accumulation
  var tableInfo = document.createElement("tbody");

  tableInfo.setAttribute("id", "table-body");

  for (i = 0; i < tableOrder; i++) {
    // Table Rows
    var tableRow = document.createElement("TR");

    for (j = 0; j < tableOrder; j++) {
      // Real digits 
      var tableHeader = document.createElement("TH");

      tableHeader.setAttribute("id", "num");
      tableHeader.setAttribute("class", "float-digit");
      tableHeader.setAttribute("tabindex", 0);
      tableHeader.setAttribute("scope", "row");
      tableHeader.innerHTML = "0";

      // Adding table header (***actual digits here***) with digits
      tableRow.appendChild(tableHeader);
    }
    tableInfo.appendChild(tableRow);
  }
  // Final Injection of SUDOKU_ARRAY Information
  document.getElementById("extractTable").appendChild(tableInfo);
}

// Function to check Solution
function checkSolution(theBoard) {
  if (theBoard !== false) {
    renderingTheSuccessfulMatrix(theBoard);
    $("#finishED").modal("show");
  } else {
    $("#failed").modal("show");
  }
}

/*--------------------------- Returning the successful Matrix---------------------- */

function renderingTheSuccessfulMatrix(finalresult) {


  if (true) {
    var child = document.getElementById("table-body");
    child.innerHTML = " ";

    for (let i = 0; i < 9; i++) {
      tableRow = document.createElement("TR");

      for (j = 0; j < tableOrder; j++) {
        // Real digits
        var tableHeader = document.createElement("TH");

        tableHeader.setAttribute("id", "num");
        tableHeader.setAttribute("class", "float-digit");
        tableHeader.setAttribute("tabindex", 0);
        tableHeader.setAttribute("scope", "row");
        tableHeader.innerHTML = finalresult[i][j];

        // Adding table header (***actual digits here***) with digits
        tableRow.appendChild(tableHeader);
      }
      child.appendChild(tableRow);
    }
  }
}

/*--------------------------- Returning the successful Matrix---------------------- */

//A function for all mouse based operations
function mouseActios() {
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
      selectedBlock.innerHTML = 1;
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD 2 actions
  document.getElementById("num2").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = 2;
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD 3 actions
  document.getElementById("num3").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = 3;
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD 4 actions
  document.getElementById("num4").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = 4;
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD 5 actions
  document.getElementById("num5").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = 5;
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD 6 actions
  document.getElementById("num6").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = 6;
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD 7 actions
  document.getElementById("num7").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = 7;
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD 8 actions
  document.getElementById("num8").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = 8;
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD 9 actions
  document.getElementById("num9").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = 9;
      selectedBlock.setAttribute("style", "background-color: darkgreen");
    }
  });

  // NUMPAD C actions
  document.getElementById("clear").addEventListener("click", () => {
    if (selectedBlock != null) {
      selectedBlock.innerHTML = 0;
      selectedBlock.removeAttribute("style");
    }
  });

  // NUMPAD CHECKBOX
  document.getElementById("check").addEventListener("click", () => {
    //arrayReader();
    checkSolution(arrayReader());
  });
}

//A function executed when check button is clicked
function arrayReader() {
  var child = document.getElementById("table-body").children;
  var externalArray = [];
  for (let i = 0; i < tableOrder; i++) {
    externalArray[i] = [];
  }

  for (let i = 0; i < externalArray.length; i++) {
    for (tableRow in child) {
      externalArray[i][tableRow] = child[i].children[tableRow];
    }
  }
  for (let i = 0; i < externalArray.length; i++) {
    for (tableRow in externalArray[i]) {
      mainArray[i][tableRow] = parseInt(externalArray[i][tableRow].innerHTML);
    }
  }

  for (let i = 0; i < externalArray.length; i++) {
    for (tableRow in externalArray[i]) {
      if (mainArray[i][tableRow] == 0) {
        mainArray[i][tableRow] = noVal;
      }
    }
  }

  return solve(mainArray);
}

queryRender();
// All mouse based actions SET
mouseActios();

//Setting Timeout Modal Button Actions
document.getElementById("return").addEventListener("click", () => {
  location.replace("../index.html");
});
document.getElementById("replay").addEventListener("click", () => {
  location.reload();
});
document.getElementById("retry").addEventListener("click", () => {
  $("#failed").modal("hide");
});
document.getElementById("showdata").addEventListener("click", () => {
  $("#finishED").modal("hide");
});


document.getElementById("clearAll").addEventListener("click", () => {
  var child = document.getElementById("table-body");
  child.innerHTML = " ";

  for (let i = 0; i < 9; i++) {
    tableRow = document.createElement("TR");

    for (j = 0; j < tableOrder; j++) {
      // Real digits
      var tableHeader = document.createElement("TH");

      tableHeader.setAttribute("id", "num");
      tableHeader.setAttribute("class", "float-digit");
      tableHeader.setAttribute("tabindex", 0);
      tableHeader.setAttribute("scope", "row");
      tableHeader.innerHTML = 0;

      // Adding table header (***actual digits here***) with digits
      tableRow.appendChild(tableHeader);
    }
    child.appendChild(tableRow);
  }
});