const btnHitung = document.getElementById('btnHitung')
const hasilDiv = document.getElementById('hasil')
btnHitung.addEventListener('click', (e) => {
  e.preventDefault()
  let result = 0
  const inputG = document.getElementById('gaya').value
  const inputM = document.getElementById('massa').value

  result = inputG / inputM
  console.log(result)
  hasilDiv.innerHTML = result.toString()
})
