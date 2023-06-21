const btnHitung = document.getElementById('btnHitung')
const hasilDiv = document.getElementById('hasil')
btnHitung.addEventListener('click', (e) => {
  e.preventDefault()
  let result = 0
  const inputW = document.getElementById('usaha').value
  const inputt = document.getElementById('waktu').value

  result = inputW / inputt
  console.log(result)
  hasilDiv.innerHTML = result.toString()
})
