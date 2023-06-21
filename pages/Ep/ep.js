const btnHitung = document.getElementById('btnHitung')
const hasilDiv = document.getElementById('hasil')
btnHitung.addEventListener('click', (e) => {
  e.preventDefault()
  let result = 0
  const inputM = document.getElementById('massa').value
  const inputG = document.getElementById('gravitasi').value
  const inputH = document.getElementById('ketinggian').value

  result = inputM * inputG * inputH
  console.log(result)
  hasilDiv.innerHTML = result.toString()
})
