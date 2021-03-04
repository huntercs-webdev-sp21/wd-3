let rowCount = 0;
let colCount = 0;
let cellsTable = document.getElementById("cells");

function colorCell(event) {
  event.target.style = `background-color: ${color}`
}

function createCell() {
  const cell = document.createElement("td");
  cell.addEventListener("click", colorCell);
  return cell
}

function rowPlus() {
  let newRow = document.createElement("tr");
  for (let i = 0; i < colCount; i++) {
    let newCell = createCell();
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
    let newCell = createCell();
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

rowPlus();
colPlus();
updateColor();
