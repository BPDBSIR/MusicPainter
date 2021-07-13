<template>
  <div class="music-grid-item">

    <img class="img" style="width: 152px;height: 152px;border-radius: 22px" src="https://p2.music.126.net/RtN6VzXNzOPAOhCiQSfjkQ==/109951163754607895.jpg?param=512y512" alt="">
    <p class="song">🍕Solo Dance</p>
    <p class="singer">Paramore</p>
  </div>
</template>

<script>
export default {
  name: "MusicGridItem",
  setup() {

  }
}
</script>

<style lang="scss">

.music-grid-item {

  border: 2px solid #EBF2FC;
  padding: 20px;
  border-radius: 10px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 23%;

  .song {
    color: #2F4276;
    font-weight: bold;
    margin-top: 10px;
    width: 100%;
    font-family: "DIN";
  }

  .singer {
    color: #7C8DB5;
    margin-top: 10px;
    font-size: 14px;
    width: 100%;
    font-family: "DIN";
  }
}
</style>