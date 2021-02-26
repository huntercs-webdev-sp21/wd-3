let rowCount = 0;
let colCount = 0;
let cellsTable = document.getElementById("cells");


function rowPlus() {
  let newRow = document.createElement("tr");
  for (let i = 0; i < colCount; i++) {
    let newCell = document.createElement("td");
    // newCell.addEventListener("click",colorCell);
    // newCell.addEventListener("mouseover",colorCellDrag);
    newRow.appendChild(newCell);
  }
  cellsTable.appendChild(newRow);
  rowCount++;
};

function rowMinus() {
  if(rowCount > 0){
    cellsTable.removeChild(cellsTable.lastChild);
    rowCount--;
  }
};

function colPlus() {
  let children = Array.from(cellsTable.children);
  children.forEach((row) => {
    let newCell = document.createElement("td");
    // newCell.addEventListener("click",colorCell);
    // newCell.addEventListener("mouseover",colorCellDrag);
    row.appendChild(newCell);
  });
  colCount++;
};

function colMinus() {
  if(colCount > 0){
    let children = Array.from(cellsTable.children);
    children.forEach((row) => {
      row.removeChild(row.lastChild);
    });
    colCount--;
  }
};

let colorSelector = document.getElementById("select-color");
let color;
function updateColor() {
  color = colorSelector.value;
};
updateColor();
