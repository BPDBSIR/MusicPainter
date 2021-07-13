<template>
  <div class="radius-player">
    <h4 style="color: white;font-family: DIN;text-align: center">Now Playing</h4>
    <img class="banner" src="https://p1.music.126.net/q_ORbqne82jAyfTuWQwwIA==/109951165928322663.jpg?param=1024y1024" alt="">
    <p class="song">The Adventure</p>
    <p class="singer">Anlges & Airwares</p>
    <div>
      <span>2:40</span>

      <span>3:45</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadiusPlayer"
}
</script>

<style lang="scss">
.radius-player{
  background-color: #289595;
  border-radius: 16px;
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  p{
    text-align: center;
    color: white;
    font-family: DIN;
    margin-bottom: 10px;
  }
  span{
    color: white;
    font-family: DIN;
  }
  .banner{
    border-radius: 12px;
    margin: 20px 0;
    width: 100%;
  }
  .song{

  }
  .singer{
    opacity: 0.5;
  }
}
</style>