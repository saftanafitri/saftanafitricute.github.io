const btnHitung = document.getElementById('btnHitung')
const hasilDiv = document.getElementById('hasil')
btnHitung.addEventListener('click', (e) => {
  e.preventDefault()
  let result = 0
  const inputS = document.getElementById('jarak').value
  const inputT = document.getElementById('waktu').value

  result = inputS / inputT
  console.log(result)
  hasilDiv.innerHTML = result.toString()
})
