<template>
  <div id="home">
        <div class="top50">
          <p style="font-weight: bold;font-family: 'DIN'">Global Top 50</p>
          <div style="display: flex;justify-content: space-between;margin-top: 20px">
            <music-grid-item/>
            <music-grid-item/>
            <music-grid-item/>
            <music-grid-item/>
          </div>
        </div>
        <div class="top50" style="margin-top: 20px">
          <p style="font-weight: bold;font-family: 'DIN'">Global Top 50</p>
          <div style="display: flex;justify-content: space-between;margin-top: 20px">
            <music-grid-item/>
            <music-grid-item/>
            <music-grid-item/>
            <music-grid-item/>
          </div>
        </div>

        <div class="common-border">
          <p style="font-weight: bold;font-family: 'DIN'">Global Top 50</p>
          <music-list-item/>
          <music-list-item/>
          <music-list-item/>
        </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import MusicGridItem from "../../components/MusicGridItem.vue"
import MusicListItem from "../../components/MusicListItem.vue";
import RadiusPlayer from "../../components/RadiusPlayer.vue";

import {onMounted, reactive} from "vue";

export default defineComponent({
  name: "Home",
  components: {
    RadiusPlayer,
    MusicListItem,
    MusicGridItem
  },
  setup() {
    onMounted(() => {
    })

    return {}
  }
})

</script>

<style lang="scss" scoped>

#home {
  padding: 20px;

  li {
    display: inline-block;
  }

  .top50 {
    border: 2px solid #EBF2FC;
    border-radius: 10px;
    padding: 20px;
  }
}
</style>