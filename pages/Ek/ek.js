const btnHitung = document.getElementById('btnHitung')
const hasilDiv = document.getElementById('hasil')
btnHitung.addEventListener('click', (e) => {
  e.preventDefault()
  let result = 0
  const inputM = document.getElementById('massa').value
  const inputV = document.getElementById('kecepatan').value

  result = 0.5 * inputM * inputV * inputV
  console.log(result)
  hasilDiv.innerHTML = result.toString()
})
