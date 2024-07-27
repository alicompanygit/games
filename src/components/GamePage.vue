<template>
  <div class="game">
    <div class="game-box" @click="StartGame(0)">
      <img class="game-box-img" src="./gameImg/ArrowDirection.jpg" alt="icon" />
      <h3>Arrow Direction</h3>
    </div>
    <div class="game-box" @click="StartGame(1)">
      <img class="game-box-img" src="./gameImg/number-puzllel-game.png" alt="icon" />
      <h3>puzlle</h3>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const emit = defineEmits(['gamename'])
const games = ref(['ArrowDirectionEngine', 'PuzzleGame'])
function StartGame(value) {
  emit('gamename', games.value[value])
}
</script>
<style scoped lang="scss">
.game {
  &-box {
    width: 200px;
    height: 200px;
    align-items: center !important;
    justify-content: center;
    text-align: center;
    margin: 40px;
    &-img {
      border: 3px solid #0d9276;
      border-radius: 15px;
      width: 150px;
      height: 150px;
    }
  }
}
</style>
