<template>
  <div class="music-list-item">
    <span class="id">01</span>
    <img src="https://p2.music.126.net/RtN6VzXNzOPAOhCiQSfjkQ==/109951163754607895.jpg?param=512y512" alt="">
    <div style="display: inline-flex;flex-direction: column;margin-left: 20px">
      <p class="song">I Miss You</p>
      <p class="singer">Blink 182</p>
    </div>


    <div class="menu">
      <span class="total-time">3:45</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicListItem"
}
</script>

<style lang="scss">
.music-list-item {

  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  position: relative;
  padding: 4px 10px;
  .id{
    font-weight: bold;
    margin-right: 20px;
    font-family: "DIN";
  }
  .song{
    font-family: DIN;
    font-weight: bold;
  }
  .singer{
    font-family: DIN;
    font-weight: bold;
    margin-top: 5px;
    color: #7C8DB5;
    font-size: 14px;
  }
  img{
    border-radius: 12px;
    width: 52px;
    height: 52px;
  }
  .menu{
    position: absolute;
    right: 0;
    .total-time{
      color: #7C8DB5;
      font-family: "DIN";
    }
  }
}
</style>