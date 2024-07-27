<template>
  <div v-if="Gamestate != ''" class="win-box" :style="{ borderColor: colorGame }">
    <div v-if="Gamestate == 'win' || Gamestate == 'newRecord' || Gamestate == 'notWin'">
      <img
        v-if="starGame == 'coup'"
        class="win-box-iconwin"
        src="./gameImg/prize-icon.svg"
        alt="medal-icon"
      />
      <img
        v-else-if="starGame != 'null'"
        v-for="i in 3"
        :key="i"
        :class="['win-box-iconwin' + i]"
        alt="star-icon"
      />
      <div v-if="Gamestate == 'win'" class="win-box-wintext">you win</div>
      <div v-else-if="Gamestate == 'newRecord'" class="win-box-wintext">new record</div>
    </div>
    <h1 class="win-box-h1" :style="{ color: colorGame }">{{ Gamename }}</h1>
    <div class="win-box-value">
      <div v-if="timeGame != 'null'" class="win-box-value-time">
        <h4>{{ timeGame }} :</h4>
        <img class="win-box-icons" src="./gameImg/icon-time.png" alt="medal-icon" />
      </div>
      <div v-if="moveGame != 'null'" class="win-box-value-move">
        <h4>{{ moveGame }} :</h4>
        <img class="win-box-icons" src="./gameImg/icon-move.png" alt="medal-icon" />
      </div>
      <div v-if="recordGame != 'null'" class="win-box-value-move">
        <h4>{{ recordGame }} :</h4>
        <img class="win-box-icons" src="./gameImg/icon-point.png" alt="medal-icon" />
      </div>
    </div>
    <div>
      <button
        class="win-box-button"
        @click="resetGame(GamePage)"
        :style="{ backgroundColor: colorGame }"
      >
        بازی ها
      </button>
      <button
        class="win-box-button"
        @click="resetGame(Gamename)"
        :style="{ backgroundColor: colorGame }"
      >
        شروع مجدد
      </button>
    </div>
  </div>
  <component v-else ref="gameRef" @GameFinish="GameFinish" @gamename="gameStart" :is="games" />
</template>
<script setup>
const gameImge = ref()
gameImge.value = './gameImg/prize-icon.svg'
import { ref } from 'vue'
import PuzzleGame from './Puzzle/PuzzleGame.vue'
import ArrowDirectionEngine from './ArrowDirection/ArrowDirectionEngine.vue'
import GamePage from './GamePage.vue'
const gameRef = ref(null)
const games = ref(GamePage)
const Gamename = ref('')
const Gamestate = ref('')
const colorGame = ref('')
const timeGame = ref('')
const recordGame = ref('')
const levelGame = ref('')
const moveGame = ref('')
const starGame = ref('')

function gameStart(game_name) {
  games.value = game_name
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
  Gamename.value = game_name
  Gamestate.value = game_state
  colorGame.value = color_game
  timeGame.value = time_game
  recordGame.value = record_game
  levelGame.value = level_game
  moveGame.value = move_game
  starGame.value = star_game
  setTimeout(() => {
    if (starGame.value != 'null' && starGame.value != 'coup') {
      for (let i = 1; i < 4; i++) {
        if (starGame.value >= i) {
          document.querySelectorAll('.win-box-iconwin' + i).forEach((el) => {
            el.setAttribute('src', './src/components/gameImg/icon-star.png')
          })
          console.log('s')
        } else {
          document.querySelectorAll('.win-box-iconwin' + i).forEach((el) => {
            el.setAttribute('src', './src/components/gameImg/icon-star-noScore.png')
          })
        }
      }
    }
  }, 100)
}

function resetGame(value) {
  Gamestate.value = ''
  games.value = value
}
</script>
<style scoped lang="scss">
.win-box {
  width: 350px;
  border: 8px solid;
  border-radius: 25px;
  margin: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20vh;
  text-align: center;
  align-items: center !important;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
  &-h1 {
  }
  &-iconwin {
    width: 120px;
  }
  &-value {
    display: inline-flex;
    font-size: 25px;
    &-time,
    &-move {
      display: inline-flex;
      margin: 30px;
    }
  }
  &-wintext {
    color: #dea22a;
    font-size: 50px;
  }
  &-icons {
    width: 30px;
    height: 30px;
    margin-top: 35px;
  }
  &-button {
    width: 150px;
    height: 45px;
    margin-left: 5px;
    margin-right: 5px;
    color: #fff;
    font-size: 18px;
    border-radius: 10px;
    border: none;
  }
}
</style>
