// function moveLeft(element) {
//   element.style.transform = 'translateX(-200px)'
// }
// function moveRight(element) {
//   element.style.transform = 'translateX(+200px)'
// }
// function moveTop(element) {
//   element.style.transform = 'translateY(-200px)'
// }
// function moveBottom(element) {
//   element.style.transform = 'translateY(+200px)'
// }
// const moveElement = function move(index, event, nullValue) {
//   event.target.style.transition = '0.3s'
//   if (index == 0) {
//     if (nullValue == 1) {
//       moveRight(event.target)
//     } else if (nullValue == 3) {
//       moveBottom(event.target)
//     } else {
//       event.target.style.backgroundColor = 'red'
//       setTimeout((event.target.style.backgroundColor = '#fff'), 300)
//       vue.delete(setvalue)
//     }
//   }
//   if (index == 1) {
//     if (nullValue == 0) {
//       moveLeft(event.target)
//     } else if (nullValue == 2) {
//       moveRight(event.target)
//     } else if (nullValue == 4) {
//       moveBottom(event.target)
//     } else {
//       event.target.style.backgroundColor = 'red'
//       setTimeout((event.target.style.backgroundColor = '#fff'), 300)
//       vue.delete(setvalue)
//     }
//   }
//   if (index == 2) {
//     if (nullValue == 1) {
//       moveLeft(event.target)
//     } else if (nullValue == 5) {
//       moveBottom(event.target)
//     } else {
//       event.target.style.backgroundColor = 'red'
//       setTimeout((event.target.style.backgroundColor = '#fff'), 300)
//       vue.delete(setvalue)
//     }
//   }
//   if (index == 3) {
//     if (nullValue == 0) {
//       moveTop(event.target)
//     } else if (nullValue == 4) {
//       moveRight(event.target)
//     } else if (nullValue == 6) {
//       moveBottom(event.target)
//     } else {
//       event.target.style.backgroundColor = 'red'
//       setTimeout((event.target.style.backgroundColor = '#fff'), 300)
//       vue.delete(setvalue)
//     }
//   }
//   if (index == 4) {
//     if (nullValue == 1) {
//       moveTop(event.target)
//     } else if (nullValue == 3) {
//       moveLeft(event.target)
//     } else if (nullValue == 5) {
//       moveRight(event.target)
//     } else if (nullValue == 7) {
//       moveBottom(event.target)
//     } else {
//       event.target.style.backgroundColor = 'red'
//       setTimeout((event.target.style.backgroundColor = '#fff'), 300)
//       vue.delete(setvalue)
//     }
//   }
//   if (index == 5) {
//     if (nullValue == 2) {
//       moveTop(event.target)
//     } else if (nullValue == 4) {
//       moveLeft(event.target)
//     } else if (nullValue == 8) {
//       moveBottom(event.target)
//     } else {
//       event.target.style.backgroundColor = 'red'
//       setTimeout((event.target.style.backgroundColor = '#fff'), 300)
//       vue.delete(setvalue)
//     }
//   }
//   if (index == 6) {
//     if (nullValue == 3) {
//       moveTop(event.target)
//     } else if (nullValue == 7) {
//       moveRight(event.target)
//     } else {
//       event.target.style.backgroundColor = 'red'
//       setTimeout((event.target.style.backgroundColor = '#fff'), 300)
//       vue.delete(setvalue)
//     }
//   }
//   if (index == 7) {
//     if (nullValue == 4) {
//       moveTop(event.target)
//     } else if (nullValue == 6) {
//       moveLeft(event.target)
//     } else if (nullValue == 8) {
//       moveRight(event.target)
//     } else {
//       event.target.style.backgroundColor = 'red'
//       setTimeout((event.target.style.backgroundColor = '#fff'), 300)
//       vue.delete(setvalue)
//     }
//   }
//   if (index == 8) {
//     if (nullValue == 5) {
//       moveTop(event.target)
//     } else if (nullValue == 7) {
//       moveLeft(event.target)
//     } else {
//       event.target.style.backgroundColor = 'red'
//       setTimeout((event.target.style.backgroundColor = '#fff'), 300)
//       vue.delete(setvalue)
//     }
//   }
//   const setvalue = setTimeout(() => {
//     randomNumber.value[nullValue] = randomNumber.value[index]
//     randomNumber.value[index] = 9
//     nullValue = index
//     event.target.style.transition = '0s'
//     event.target.removeAttribute('style')
//   }, 300)
// }
// export default moveElement
