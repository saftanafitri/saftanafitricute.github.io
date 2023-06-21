const btnHitung = document.getElementById('btnHitung')
const hasilDiv = document.getElementById('hasil')
btnHitung.addEventListener('click', (e) => {
  e.preventDefault()
  let result = 0
  const inputM = document.getElementById('massa').value
  const inputr = document.getElementById('jarak').value

  result =inputM*Math.pow(inputr,2)
  console.log(result)
  hasilDiv.innerHTML = result.toString()
})
