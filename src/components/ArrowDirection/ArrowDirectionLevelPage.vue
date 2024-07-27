<template>
  <div class="boxLevel">
    <div v-for="i in 9" :key="i" class="boxLevel-levels">
      <div class="boxLevel-levels-box" @click="startGame(i)">
        <div>
          <p class="boxLevel-levels-box-p">
            {{ 'level ' + i }}
          </p>
          <div>
            <img alt="icon-level" :class="['boxLevel-levels-box-img', 'imgLavel' + i]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['GameChange'])
const activLevel = ref(['Activ', 'noActiv', 'noActiv', 'noActiv', 'noActiv', 'noActiv', 'noActiv'])
setTimeout(() => {
  for (let i = 1; i < 10; i++) {
    if (activLevel.value[i - 1] == 'Activ') {
      document.querySelectorAll('.imgLavel' + i).forEach((el) => {
        el.setAttribute(
          'src',
          './src/components/ArrowDirection/ArrowDirectionGameImg/icon-star.png'
        )
      })
    } else {
      document.querySelectorAll('.imgLavel' + i).forEach((el) => {
        el.setAttribute(
          'src',
          './src/components/ArrowDirection/ArrowDirectionGameImg/icon-lock.png'
        )
      })
    }
  }
}, 1)
function startGame(i) {
  if (activLevel.value[i - 1] == 'Activ') {
    emit('GameChange', 'ArrowDirectionGame', i)
  }
}
</script>
<style scoped lang="scss">
.boxLevel {
  width: 500px;
  height: 500px;
  user-select: none;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  border: 3px solid #5353578d;
  margin-top: 30px;
  &-levels {
    display: inline-flex;
    width: 164px;
    height: 166px;
    text-align: center;
    align-items: center !important;
    justify-content: center;
    &-box {
      display: inline-flex;
      width: 118px;
      height: 120px;
      text-align: center;
      align-items: center !important;
      justify-content: center;
      border-radius: 15px;
      border: 3px solid #5353578d;
      &-p {
        font-size: 18px;
      }
      &-img {
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>
