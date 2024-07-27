<template>
  <div class="box" v-if="activ">
    <div class="box-text"><h1>ArrowDirectionGame</h1></div>
    <div class="box-button">
      <div>
        <button class="box-button-elements" @click="startGame">شروع بازی</button>
      </div>
      <div>
        <button class="box-button-elements" @click="startGame('education')">آموزش</button>
      </div>
    </div>
  </div>
  <component
    ref="gameRef"
    @GameChange="GameChange"
    :levelUser="levelUser"
    @GameFinish="GameFinish"
    :is="games"
  />
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['GameFinish'])
import ArrowDirectionEducation from './ArrowDirectionEducational .vue'
import ArrowDirectionLevelPage from './ArrowDirectionLevelPage.vue'
import ArrowDirectionGame from './ArrowDirectionGame.vue'
const levelUser = ref(0)
const gameRef = ref(null)
const games = ref()
const activ = ref(true)
function startGame(value) {
  activ.value = false
  if (value == 'education') {
    games.value = ArrowDirectionEducation
  } else {
    games.value = ArrowDirectionLevelPage
  }
}
function GameChange(page, value) {
  games.value = page
  levelUser.value = value
}
function GameFinish(
  game_name,
  game_state,
  color_game,
  time_game,
  record_game,
  level_game,
  move_game,
  star_game
) {
  emit(
    'GameFinish',
    'ArrowDirectionEngine',
    game_state,
    color_game,
    time_game,
    record_game,
    level_game,
    move_game,
    star_game
  )
}
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
  &-text {
    display: inline-flex;
    width: 800px;
    height: 300px;
    text-align: center;
    align-items: center !important;
    justify-content: center;
    color: #1b1b1d8d;
    font-size: 23px;
  }
  &-button {
    display: block;
    width: 800px;
    height: 300px;
    text-align: center;
    justify-content: center;
    &-elements {
      width: 300px;
      height: 50px;
      margin: 10px;
      font-size: 18px;
      border-radius: 10px;
      border: 2px solid #5353578d;
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
