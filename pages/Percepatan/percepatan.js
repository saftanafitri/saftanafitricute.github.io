const btnHitung = document.getElementById('btnHitung')
const hasilDiv = document.getElementById('hasil')
btnHitung.addEventListener('click', (e) => {
  e.preventDefault()
  let result = 0
  const inputV2 = document.getElementById('v2').value
  const inputV1 = document.getElementById('v1').value
  const inputt2 = document.getElementById('t2').value
  const inputt1 = document.getElementById('t1').value

  result = (inputV2 - inputV1) / (inputt2 - inputt1)
  console.log(result)
  hasilDiv.innerHTML = result.toString()
})
