<template>
  <div class="setting" :style="{ width: tableWidth >= 5 ? tableWidth * 80 + 10 + 'px' : '450px' }">
    <div class="setting-box">
      <div class="setting-box-item">{{ moveCounter }} :حرکت</div>
      <div class="setting-box-item">{{ String(TimeCounter).padStart(3, '0') }} :زمان</div>
    </div>
    <div class="setting-box" dir="rtl">
      <img
        src="./../gameImg/IconImg/icon-logout.png"
        alt="exit"
        @click="exitGame"
        class="setting-box-exit"
      />
      <img
        src="./../gameImg/IconImg/icon-refresh.png"
        alt="refresh"
        @click="refresh"
        class="setting-box-refresh"
      />
    </div>
  </div>
  <div class="box" :style="{ width: tableWidth * 80 + 'px', height: tableHeight * 80 + 'px' }">
    <div
      disabled
      v-for="(val, i) in randomNumber"
      :class="['box-div', { 'box-div-9': i == nullIndex }]"
      :key="i"
      v-text="val"
      @click="game(i, $event)"
    ></div>
  </div>
</template>
<script setup>
// import { ref, reactive, toRefs, computed, watch, provide, inject, onMounted } from 'vue'
import { ref, reactive } from 'vue'
const emit = defineEmits(['GameFinish'])
const timeSet = ref(100)
const randomNumber = ref({})
const nullIndex = ref(0)
const TimeCounter = ref(0)
const moveCounter = ref(0)
const tableWidth = ref(4)
const tableHeight = ref(4)
const activNumberColumnTop = ref([])
const activNumberColumnBottom = ref([])
const activNumberRowLeft = ref([])
const activNumberRowRight = ref([])
const araayMove = ref([])
const table = ref(tableWidth.value * tableHeight.value)
setInterval(() => {
  TimeCounter.value++
}, 1000)
const makeRandNumber = () => {
  const min = 1
  const max = table.value
  const count = table.value
  const randomNumbers = reactive([])
  let numbers = reactive([])
  for (let i = min; i <= max; i++) {
    numbers.push(i)
  }
  for (let j = 0; j < count; j++) {
    let randomIndex = ref(Math.floor(Math.random() * numbers.length))
    let randomNumber = ref(numbers[randomIndex.value])
    if (randomNumber.value == table.value) {
      nullIndex.value = randomNumbers.length
    }
    randomNumbers.push(randomNumber.value)
    numbers.splice(randomIndex.value, 1)
  }
  randomNumber.value = randomNumbers
}
makeRandNumber()

function refresh() {
  makeRandNumber()
  TimeCounter.value = 0
  moveCounter.value = 0
}
function winGameCheck() {
  const conter = ref(0)
  setTimeout(() => {
    Object.entries(randomNumber.value).forEach((item) => {
      if (parseInt(item[0]) + 1 == item[1]) {
        conter.value++
      }
    })
    if (table.value == nullIndex.value + 1) {
      conter.value++
    }
    if (conter.value == table.value) {
      emit(
        'GameFinish',
        'PuzzleGame',
        'win',
        '#0d9276',
        TimeCounter.value,
        'null',
        'null',
        moveCounter.value,
        'coup'
      )
    }
  }, timeSet.value + 10)
}
function moveLeft(element) {
  element.style.transition = timeSet.value / 1000 + 's'
  element.style.transform = 'translateX(-80px)'
}
function moveRight(element) {
  element.style.transition = timeSet.value / 1000 + 's'
  element.style.transform = 'translateX(+80px)'
}
function moveTop(element) {
  element.style.transition = timeSet.value / 1000 + 's'
  element.style.transform = 'translateY(-80px)'
}
function moveBottom(element) {
  element.style.transition = timeSet.value / 1000 + 's'
  element.style.transform = 'translateY(+80px)'
}
function exitGame() {
  emit('GameFinish', 'PuzzleGame', 'exit', '#0d9276', 'null', 'null', 'null', 'null', 'coup')
}

function activValue() {
  const i = ref(0)
  const nullMap = ref([])
  activNumberColumnTop.value = []
  activNumberColumnBottom.value = []
  activNumberRowRight.value = []
  activNumberRowLeft.value = []
  for (
    let index = nullIndex.value + tableWidth.value;
    index < randomNumber.value.length;
    index += tableWidth.value
  ) {
    activNumberColumnBottom.value.push(index)
  }
  for (let index = nullIndex.value - tableWidth.value; index >= 0; index -= tableWidth.value) {
    activNumberColumnTop.value.push(index)
  }
  if (nullIndex.value < tableWidth.value) {
    nullMap.value = nullIndex.value
  } else {
    nullMap.value = activNumberColumnTop.value[activNumberColumnTop.value.length - 1]
  }
  i.value = 0
  for (let index = nullMap.value; index < tableWidth.value - 1; index++) {
    i.value++
    activNumberRowRight.value.push(nullIndex.value + i.value)
  }
  i.value = 0
  for (let index = nullMap.value; index > 0; index--) {
    i.value++
    activNumberRowLeft.value.push(nullIndex.value - i.value)
  }
}
function move(listActivNumber, direction) {
  document.querySelectorAll('.box-div').forEach((el, i) => {
    if (listActivNumber.includes(i)) {
      if (direction == 'top') {
        moveTop(el)
      } else if (direction == 'right') {
        moveRight(el)
      } else if (direction == 'left') {
        moveLeft(el)
      } else if (direction == 'bottom') {
        moveBottom(el)
      }
    }
  })
}
winGameCheck()
function game(index, event) {
  winGameCheck()
  activValue()
  araayMove.value = []
  if (activNumberColumnTop.value.includes(index)) {
    for (let i = 0; i < activNumberColumnTop.value.length; i++) {
      if (activNumberColumnTop.value[i] >= index) {
        araayMove.value.push(activNumberColumnTop.value[i])
      }
    }
    move(araayMove.value, 'bottom')
  } else if (activNumberColumnBottom.value.includes(index)) {
    for (let i = 0; i < activNumberColumnBottom.value.length; i++) {
      if (activNumberColumnBottom.value[i] <= index) {
        araayMove.value.push(activNumberColumnBottom.value[i])
      }
    }
    move(araayMove.value, 'top')
  } else if (activNumberRowRight.value.includes(index)) {
    for (let i = 0; i < activNumberRowRight.value.length; i++) {
      if (activNumberRowRight.value[i] <= index) {
        araayMove.value.push(activNumberRowRight.value[i])
      }
    }
    move(araayMove.value, 'left')
  } else if (activNumberRowLeft.value.includes(index)) {
    for (let i = 0; i < activNumberRowLeft.value.length; i++) {
      if (activNumberRowLeft.value[i] >= index) {
        araayMove.value.push(activNumberRowLeft.value[i])
      }
    }
    move(araayMove.value, 'right')
  } else {
    event.target.style.backgroundColor = 'rgb(249, 58, 58)'
    setTimeout(() => {
      event.target.style.backgroundColor = '#fff'
    }, 100)
    delete stopSetvalue()
  }
  moveCounter.value += araayMove.value.length
  setTimeout(() => {
    randomNumber.value[nullIndex.value] = randomNumber.value[araayMove.value[0]]
    nullIndex.value = araayMove.value[araayMove.value.length - 1]
    for (let sum = 0; sum < araayMove.value.length - 1; sum++) {
      randomNumber.value[araayMove.value[sum]] = randomNumber.value[araayMove.value[sum + 1]]
    }
    document.querySelectorAll('.box-div').forEach((el, i) => {
      el.style.transition = '0s'
      el.removeAttribute('style')
    })
  }, timeSet.value)
}
defineExpose({
  refresh
})
</script>
<style scoped lang="scss">
.box {
  user-select: none;
  margin-left: auto;
  margin-right: auto;
  border: 10px solid #0d9276;
  background-color: #0d9276;
  border-radius: 5px;
  &-div {
    display: inline-flex;
    width: 76px;
    height: 76px;
    border: 2px solid #0d9276;
    background-color: #ffffff;
    color: #0c7a62;
    font-size: 30px;
    border-radius: 5px;
    align-items: center !important;
    justify-content: center;
    &-9 {
      opacity: 0;
    }
  }
}
.setting {
  display: flex;
  height: 60px;
  border: 4px solid #0d9276;
  border-radius: 5px;
  margin: 10px;
  margin-left: auto;
  margin-right: auto;
  &-box {
    width: 300px;
    display: flex;
    align-items: center !important;
    padding-left: 12px;
    padding-right: 12px;
    &-item {
      margin: 7px;
      font-size: 20px;
    }
  }
  &-box {
    &-exit,
    &-refresh {
      width: 22px;
      margin: 10px;
      &:hover {
        width: 24px;
      }
    }
    &-refresh {
      width: 25px;
      &:hover {
        width: 27px;
      }
    }
  }
}
</style>
