const btnHitung = document.getElementById('btnHitung')
const hasilDiv = document.getElementById('hasil')
btnHitung.addEventListener('click', (e) => {
  e.preventDefault()
  let result = 0
  const inputF = document.getElementById('gaya').value
  const inputA = document.getElementById('luas').value

  result = inputF / inputA
  console.log(result)
  hasilDiv.innerHTML = result.toString()
})
