<template>
  <div class="box">
    <div class="setting">
      <div class="setting-box">
        <div class="setting-box-item">{{ String(TimeCounter).padStart(2, '0') }} :زمان</div>
        <div class="setting-box-item">{{ scor }} :امتیاز</div>
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
    <div v-if="false" class="box-text">
      <input type="button" value="ok" class="box-text-button" />
    </div>
    <div v-else class="box-show-arrow">
      <img class="img2" v-if="randNumberArrow == 2" />
      <img class="img" />
      <img class="img2" v-if="randNumberArrow == 2" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue'
const emit = defineEmits(['GameFinish'])
const levelUser = defineProps({
  levelUser: Number
})
const widthOfShowArrowPage = ref()
const heightOfShowArrowPage = ref()
const randNumberArrow = ref()
const addresOfImg = ref('')
const lastKeyPressed = ref('')
const randArrowForCheck = ref()
const randDirectionForCheck = ref()
const activ = ref(0)
const scor = ref(0)
const TimeCounter = ref(30)
const startGame = ref(true)
const arrow = ref([
  'redTop',
  'redRight',
  'redLeft',
  'redBottom',
  'blueTop',
  'blueRight',
  'blueLeft',
  'blueBottom'
])
const levelarray = ref({
  level1: 10,
  level2: 'null',
  level3: 'null',
  level4: 'null',
  level5: 'null',
  level6: 'null',
  level7: 'null',
  level8: 'null',
  level9: 'null'
})
function refresh() {
  delete levelOneArrow()
}
const intervalId = setInterval(() => {
  startGame.value++
  if (startGame.value == 3) {
    levelOneArrow()
  }
}, 400)
function clearInt() {
  clearInterval(intervalId)
}
onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
  levelOneArrow()
})
function exitGame() {
  delete levelOneArrow()
  clearInterval(intervalId)
  emit(
    'GameFinish',
    'ArrowDirectionGame',
    'exit',
    '#5353578d',
    'null',
    'null',
    levelUser,
    'null',
    2
  )
}
setInterval(() => {
  TimeCounter.value--
}, 1000)
setInterval(() => {
  clearInterval(intervalId)
  if (
    levelarray.value['level' + levelUser.levelUser] == 'null' ||
    levelarray.value['level' + levelUser.levelUser] < scor.value
  ) {
    levelarray.value['level' + levelUser.levelUser] = scor.value
    emit(
      'GameFinish',
      'ArrowDirectionGame',
      'newRecord',
      '#5353578d',
      'null',
      scor.value,
      levelUser,
      'null',
      2
    )
  } else {
    emit(
      'GameFinish',
      'ArrowDirectionGame',
      'notWin',
      '#5353578d',
      'null',
      scor.value,
      levelUser,
      'null',
      2
    )
  }
}, 8000)
const levelOneArrow = () => {
  startGame.value = 0
  randNumberArrow.value = Math.ceil(Math.random() * 2)
  setTimeout(() => {
    const randArrow = ref(Math.ceil(Math.random() * 8))
    const randDirection = ref(Math.ceil(Math.random() * 4))
    randArrowForCheck.value = randArrow.value
    randDirectionForCheck.value = randDirection.value
    document.querySelectorAll('.img').forEach((el) => {
      el.style.transition = '0s'
      el.removeAttribute('style')
    })
    document.querySelectorAll('.img2').forEach((el) => {
      el.style.transition = '0s'
      el.removeAttribute('style')
    })
    document.querySelectorAll('.box-show-arrow').forEach((el) => {
      widthOfShowArrowPage.value = el.offsetWidth / 2 - 60
      heightOfShowArrowPage.value = el.offsetHeight / 2 - 60
    })
    addresOfImg.value =
      '/src/components/ArrowDirection/ArrowDirectionGameImg/icon-arrow-' +
      arrow.value[randArrow.value - 1] +
      '.png'
    document.querySelectorAll('.img').forEach((el) => {
      el.setAttribute('src', addresOfImg.value)
    })
    document.querySelectorAll('.img').forEach((el) => {
      const sum = ref()
      if (randDirection.value == 1) {
        sum.value = 'translateY(+' + heightOfShowArrowPage.value + 'px)'
      } else if (randDirection.value == 2) {
        sum.value = 'translateY(-' + heightOfShowArrowPage.value + 'px)'
      } else if (randDirection.value == 3) {
        sum.value = 'translateX(+' + widthOfShowArrowPage.value + 'px)'
      } else if (randDirection.value == 4) {
        sum.value = 'translateX(-' + widthOfShowArrowPage.value + 'px)'
      }
      el.style.transform = sum.value
      el.style.transition = '1.5s'
    })
    if (randNumberArrow.value == 2) {
      document.querySelectorAll('.img2').forEach((el) => {
        el.style.transition = '0s'
        el.removeAttribute('style')
      })
      document.querySelectorAll('.img2').forEach((el) => {
        el.setAttribute('src', addresOfImg.value)
      })
      const randDirection2 = ref(Math.ceil(Math.random() * 4))
      document.querySelectorAll('.img2').forEach((el) => {
        const sum = ref()
        if (randDirection2.value == 1) {
          sum.value = 'translateY(+' + heightOfShowArrowPage.value + 'px)'
        } else if (randDirection2.value == 2) {
          sum.value = 'translateY(-' + heightOfShowArrowPage.value + 'px)'
        } else if (randDirection2.value == 3) {
          widthOfShowArrowPage.value -= 100
          sum.value = 'translateX(+' + widthOfShowArrowPage.value + 'px)'
        } else if (randDirection2.value == 4) {
          widthOfShowArrowPage.value -= 100
          sum.value = 'translateX(-' + widthOfShowArrowPage.value + 'px)'
        }
        el.style.transform = sum.value
        el.style.transition = '1.5s'
      })
    }
  }, 1)
}
const handleKeyDown = (event) => {
  lastKeyPressed.value = event.key
  if (
    (event.key == 'ArrowDown' &&
      randDirectionForCheck.value == 1 &&
      randArrowForCheck.value > 4 &&
      randArrowForCheck.value < 9) ||
    (event.key == 'ArrowUp' &&
      randDirectionForCheck.value == 2 &&
      randArrowForCheck.value > 4 &&
      randArrowForCheck.value < 9) ||
    (event.key == 'ArrowRight' &&
      randDirectionForCheck.value == 3 &&
      randArrowForCheck.value > 4 &&
      randArrowForCheck.value < 9) ||
    (event.key == 'ArrowLeft' &&
      randDirectionForCheck.value == 4 &&
      randArrowForCheck.value > 4 &&
      randArrowForCheck.value < 9)
  ) {
    if (activ.value == 1) {
      scor.value += 20
    } else if (activ.value == 2) {
      scor.value += 10
    } else {
      scor.value += 5
    }
    console.log('blue true')
  } else if (
    (event.key == 'ArrowUp' && arrow.value[randArrowForCheck.value - 1] == 'redTop') ||
    (event.key == 'ArrowDown' && arrow.value[randArrowForCheck.value - 1] == 'redBottom') ||
    (event.key == 'ArrowRight' && arrow.value[randArrowForCheck.value - 1] == 'redRight') ||
    (event.key == 'ArrowLeft' && arrow.value[randArrowForCheck.value - 1] == 'redLeft')
  ) {
    if (activ.value == 1) {
      scor.value += 20
    } else if (activ.value == 2) {
      scor.value += 10
    } else {
      scor.value += 5
    }
    console.log('red true')
  } else {
    if (scor.value >= 5) {
      scor.value -= 5
    } else {
      scor.value = 0
    }
  }
  levelOneArrow()
}
defineExpose({
  refresh,
  clearInt
})
</script>
<style scoped lang="scss">
.box {
  width: 800px;
  height: 600px;
  user-select: none;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  border: 3px solid #5353578d;
  margin-top: 30px;
  &-show-arrow,
  &-text {
    display: inline-flex;
    width: 800px;
    height: 515px;
    text-align: center;
    align-items: center !important;
    justify-content: center;
    border-radius: 15px;
    border: 2px solid #5353578d;
  }
  &-show-arrow {
    &-div {
      display: flex;
      text-align: center;
      align-items: center !important;
      justify-content: center;
    }
  }
}
.setting {
  display: flex;
  width: 700px;
  height: 60px;
  border-radius: 15px;
  border: 2px solid #5353578d;
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
