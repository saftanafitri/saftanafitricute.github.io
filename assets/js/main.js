
document.addEventListener('DOMContentLoaded', init)
var inputSearch = document.getElementById('myInput')
var table = document.getElementById('myTable')
var tableBody = table.getElementsByTagName('tbody')[0]

async function fetchFormulaJSON() {
  const fileRequest = new Request('/assets/data.json')
  const response = await fetch(fileRequest)
  const formulas = await response.json()
  return formulas
}

function init() {
  fetchFormulaJSON().then((v) => {
    v
    insertNewRecord(v.data.fisika)
    dataLength = v.data.fisika.length;
  })
}

function insertNewRecord(data) {
  data.forEach((item) => {
    let row = tableBody.insertRow()
    row.insertCell().innerHTML = item.id
    row.insertCell().innerHTML = item.name
    row.insertCell().innerHTML = item.formula
    row.insertCell().innerHTML = item.action
  })
}

inputSearch.addEventListener('input', searchDataFunc)

function searchDataFunc(e) {
  e.preventDefault()
  let searchVal = e.target.value
  fetchFormulaJSON().then((v) => {
    v
    const currentData = v.data.fisika.filter((item) => item.name.toLowerCase() === searchVal.toLowerCase())
    while (tableBody.hasChildNodes()) {
      tableBody.removeChild(tableBody.lastChild);
    }
    setTimeout(() => {
        if (searchVal !== '') {
          insertNewRecord(currentData);
        } else {
          insertNewRecord(v.data.fisika)
        }
    }, 1000)
  })
}
