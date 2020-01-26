<template>
  <div id="app">
    <board />
  </div>
</template>

<script>
import Board from './components/Board';

export default {
  name: 'app',
  components: {
    // コンポーネントに登録する
    Board

  }
}
</script>