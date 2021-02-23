
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
    arrayReader();
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
      mainArray[i][tableRow] = externalArray[i][tableRow].innerHTML;
    }
  }
  console.log(mainArray);
}

queryRender();
// All mouse based actions SET
mouseActios();


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
  if (confirm("Are You Sure To exit?")) {
    location.replace("../index.html");
  }
});