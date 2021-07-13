<template>
  <div class="menu-item" v-for="d in data" :key="d.title">
    <p class="menu-item-title">{{ d.title }}</p>
    <ul class="render-rv">
      <li class="render-item" v-for="s in d.data" :key="s.title"
          @click="$router.push('/' + s.url)">
        <i :class="s.icon"></i>
        <span>{{ s.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "Menu",
  props: {
    name: String,
    data: Object
  },
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss">

.isActive {
  color: #42b983;
}

.menu-item {
  width: 100%;
  padding-left: 30px;


  .menu-item-title {
    height: 40px;
    line-height: 40px;
    color: #ff5200;
    font-size: 15px;
    font-weight: bold;
    padding-left: 12px;
    margin-top: 10px;
  }

  .render-rv {

    .render-item {
      height: 38px;
      width: 92%;
      text-align: start;
      line-height: 38px;
      margin: 8px 0;
      padding: 2px 10px;
      transition: 0.5s all;

      &:hover {
        background-color: rgb(30,206,154) ;
        border-radius: 10px;

        i {
          color: #D2F6EE;
        }

        span {
          color: #D2F6EE;
        }
      }

      i {
        font-size: 20px;
        color: #454F63;
      }

      span {
        margin-left: 10px;
        font-size: 15px;
        color: #454F63;
        font-family: DIN;
      }
    }
  }
}
</style>