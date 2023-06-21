const btnHitung = document.getElementById('btnHitung')
const hasilDiv = document.getElementById('hasil')
btnHitung.addEventListener('click', (e) => {
  e.preventDefault()
  let result = 0
  const inputG = document.getElementById('gaya').value
  const inputW = document.getElementById('waktu').value

  result = inputG * inputW
  console.log(result)
  hasilDiv.innerHTML = result.toString()
})
