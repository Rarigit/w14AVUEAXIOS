<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <NormalJoke/>
    <SnakeJoke/>
    <LoudJoke/>
    <JokeButton/>
  </div>
</template>

<script>
import NormalJoke from '@/components/NormalJoke.vue';
import SnakeJoke from '@/components/SnakeJoke.vue';
import LoudJoke from '@/components/LoudJoke.vue';
import JokeButton from '@/components/JokeButton.vue';

export default {
  name: 'App',
  components: {
    NormalJoke,
    SnakeJoke,
    LoudJoke,
    JokeButton,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
