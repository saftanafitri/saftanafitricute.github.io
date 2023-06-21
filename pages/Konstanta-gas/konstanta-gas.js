const btnHitung = document.getElementById('btnHitung')
const hasilDiv = document.getElementById('hasil')
btnHitung.addEventListener('click', (e) => {
  e.preventDefault()
  let result = 0
  const inputP = document.getElementById('tekanan').value
  const inputV = document.getElementById('volume').value
  const inputn = document.getElementById('mol').value
  const inputT = document.getElementById('suhu').value

  result = (inputP * inputV) / (inputn * inputT)
  console.log(result)
  hasilDiv.innerHTML = result.toString()
})
