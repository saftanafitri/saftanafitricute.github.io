const btnHitung = document.getElementById('btnHitung')
const hasilDiv = document.getElementById('hasil')
btnHitung.addEventListener('click', (e) => {
  e.preventDefault()
  let result = 0
  const inputF = document.getElementById('gaya').value
  const inputr = document.getElementById('jarak').value
  const inputM = document.getElementById('massa').value

  result = inputF * Math.pow(inputr, 2) / Math.pow(inputM, 2)
  console.log(result)
  hasilDiv.innerHTML = result.toString()
})
