const btnHitung = document.getElementById('btnHitung')
const hasilDiv = document.getElementById('hasil')
btnHitung.addEventListener('click', (e) => {
  e.preventDefault()
  let result = 0
  const inputF = document.getElementById('gaya').value
  const inputs = document.getElementById('perpindahan').value

  result = inputF * inputs
  console.log(result)
  hasilDiv.innerHTML = result.toString()
})
