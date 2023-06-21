const btnHitung = document.getElementById('btnHitung')
const hasilDiv = document.getElementById('hasil')
btnHitung.addEventListener('click', (e) => {
  e.preventDefault()
  let result = 0
  const inputM = document.getElementById('massa').value
  const inputV= document.getElementById('volume').value

  result = inputM / inputV
  console.log(result)
  hasilDiv.innerHTML = result.toString()
})
