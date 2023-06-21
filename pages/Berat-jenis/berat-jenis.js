const btnHitung = document.getElementById('btnHitung')
const hasilDiv = document.getElementById('hasil')
btnHitung.addEventListener('click', (e) => {
  e.preventDefault()
  let result = 0
  const inputberatbenda = document.getElementById('berat').value
  const inputVolume = document.getElementById('volume').value

  result = inputberatbenda / inputVolume
  console.log(result)
  hasilDiv.innerHTML = result.toString()
})
