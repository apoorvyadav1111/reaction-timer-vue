<template>
  <div @click="checkInvalid">
    <h1>Ninja Reaction Timer</h1>
    <button @click="start" :disabled="isPlaying">play</button>
    <Block v-if="isPlaying" :delay="delay"  @start="started" @end="endGame"/>
    <Results v-if="showResult" :score="score"/>
  </div>
</template>

<script>
import Results from './components/Results.vue'
import Block from './components/Block.vue'

export default {
  name: 'App',
  components: {Block, Results},
  data(){
    return{
      isPlaying: false,
      delay: null,
      showResult:false,
      score:null,
      isStarted:false
    }
  },
  methods:{
    start(){
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResult = false
    },
    endGame(reactionTime){
      this.isPlaying = false
      this.score = reactionTime
      this.showResult = true
    },
    started(){
      this.isStarted = true
    },
    checkInvalid(){
      if(!this.isStarted && this.isPlaying){
        console.log('Clicked Early')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button{
  padding: 8px 16px ;
  background-color: #444;
  color: azure;
  border: none;
  font-size: 16px;
  border-radius: 4px;
}
button[disabled]{
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
