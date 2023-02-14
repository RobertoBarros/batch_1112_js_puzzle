// todo
const button = document.querySelector("#show-hint")
const hint = document.querySelector(".hint")

button.addEventListener('click',(event) => {
  hint.classList.add('active')
})

const canMove = (td) => {
  tdCol = td.cellIndex
  tdRow = td.parentElement.rowIndex

  const empty = document.querySelector('.empty')

  emptyCol = empty.cellIndex
  emptyRow = empty.parentElement.rowIndex


  // console.log(`Click in Row: ${tdRow} - Col: ${tdCol}`);
  // console.log(`Empty in Row: ${emptyRow} - Col: ${emptyCol}`);

  return (tdCol == emptyCol && (tdRow + 1 === emptyRow || tdRow - 1 === emptyRow)) ||
         (tdRow == emptyRow && (tdCol + 1 === emptyCol || tdCol - 1 === emptyCol))

}

const checkWin = () => {
  const tds = document.querySelectorAll('td')
  let positions = []
  tds.forEach((td) => {
    positions.push(parseInt(td.innerText))
  })
  if (positions.join(',') === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
    // setTimeout(() => { alert("YOU WIN") }, 100)
    document.getElementById('win').style.display = ''
  }
}




const tds = document.querySelectorAll('td')

tds.forEach((td)=>{
  td.addEventListener('click',(event) => {
    const td = event.currentTarget

    if (canMove(td)) {
      console.log('MOVE')
      const empty = document.querySelector('.empty')
      empty.classList.remove('empty')

      td.classList.add('empty')
      text = td.innerText

      empty.innerText = text
      td.innerText = ''

      checkWin()

    }
    else {
      console.log('DONT MOVE');
    }

  })
})
