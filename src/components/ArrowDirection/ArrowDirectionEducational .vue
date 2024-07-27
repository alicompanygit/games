<template>
  <div class="box">
    <div class="setting">
      <div class="setting-box">
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
    <div class="box-text">
      <p v-if="level == 1" class="box-text-show">
        در رنگ <span style="color: red; font-size: 22px"> قرمز</span> به جهت پیکان توجه کنید
      </p>
      <p v-else-if="level == 2" class="box-text-show">
        در رنگ <span style="color: blue; font-size: 22px"> آبی</span> به جهت حرکت پیکان توجه کنید
      </p>
      <p v-else class="box-text-show">در حالت سه تایی به پیکانی که در وسط قرار گرفته توجه کنید</p>
      <button
        class="box-text-button"
        @click="levelUp"
        v-text="level == 3 ? 'شروع بازی' : 'ادامه'"
      ></button>
    </div>
    <div class="box-show-arrow">
      <img class="img2" v-if="level == 3" />
      <img class="img" />
      <img class="img2" v-if="level == 3" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const emit = defineEmits(['GameChange'])
const level = ref(1)
const widthOfShowArrowPage = ref()
const heightOfShowArrowPage = ref()
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

function refresh() {
  delete levelOneArrow()
  level.value = 1
  scor.value = 0
}

const intervalId = setInterval(() => {
  startGame.value++
  if (startGame.value == 3) {
    levelOneArrow()
  }
}, 400)
onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
  levelOneArrow()
})
function exitGame() {
  clearInterval(intervalId)
  delete levelOneArrow()
  emit('GameFinish', 'ArrowDirectionGame', 'win', '#5353578d', 'null', 'null', 'null', 'null', 2)
}
function levelUp() {
  if (level.value < 3) {
    level.value += 1
  } else {
    clearInterval(intervalId)
    emit('GameChange', 'ArrowDirectionLevelPage')
  }
  delete levelOneArrow()
}
const levelOneArrow = () => {
  startGame.value = 0
  setTimeout(() => {
    const randArrow = ref()
    if (level.value == 1) {
      randArrow.value = Math.ceil(Math.random() * 4)
    } else if (level.value == 2) {
      randArrow.value = Math.ceil(Math.random() * 4) + 4
    } else if (level.value == 3) {
      randArrow.value = Math.ceil(Math.random() * 8)
    }
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
    if (level.value == 3) {
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
  if (level.value < 4 && scor.value >= 25) {
    level.value += 1
    scor.value = 0
  }
  if (level.value == 4) {
    clearInterval(intervalId)
    emit('GameChange', 'ArrowDirectionLevelPage')
  }
  levelOneArrow()
}
defineExpose({
  refresh
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
  &-show-arrow {
    display: inline-flex;
    width: 800px;
    height: 450px;
    text-align: center;
    align-items: center !important;
    justify-content: center;
    &-div {
      display: flex;
      text-align: center;
      align-items: center !important;
      justify-content: center;
    }
  }
  &-text {
    display: inline-flex;
    width: 800px;
    height: 50px;
    text-align: center;
    align-items: center !important;
    justify-content: center;
    border: 2px solid #5353578d;
    border-left: none;
    border-right: none;
    font-size: 20px;
    &-show {
      margin: 10px;
    }
    &-button {
      width: 100px;
      height: 30px;
      border-radius: 100px;
      border: 2px solid #5353578d;
      background-color: #fff;
      font-size: 17px;
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
