let rowCount = 0;
let colCount = 0;
let cellsTable = document.getElementById("cells");


function rowPlus() {
  let newRow = document.createElement("tr");
  for (let i = 0; i < colCount; i++) {
    let newCell = document.createElement("td");
    newRow.appendChild(newCell);
  }
  cellsTable.appendChild(newRow);
  rowCount++;
};
