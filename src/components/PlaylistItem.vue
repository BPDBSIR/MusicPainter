<template>
  <div class="playlist-item">
    <el-space direction="vertical" alignment="flex-start">
      <el-skeleton style="width: 100%" :loading="loading" animated>
        <template #template>
          <el-skeleton-item variant="image" style="width: 100%; height: 140px;"/>
          <el-skeleton-item variant="h3" style="width: 60%;margin-top: 12px"/>
        </template>
        <template #default>
          <router-link :to="{name: 'PlaylistDetail',params: {id: data.id}}">
            <img
                class="pic"
                style="width: 100%; height: 100%;border-radius: 12px"
                :src="data.coverImgUrl || data.picUrl" alt=""/>
          </router-link>
          <p class="name">{{ data.name }}</p>
        </template>
      </el-skeleton>
    </el-space>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, PropType, ref} from "vue";
import {IPlayData} from '@/types'

export default defineComponent({
  name: "PlaylistItem",
  props: {
    data: {
      type: Object as PropType<IPlayData>,
      required: true
    }
  },
  setup(props) {
    const loading = ref(true)
    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 2500)
    })
    return {
      loading
    }
  }
})
</script>

<style lang="scss" scoped>
.playlist-item {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 12.5%;
  padding: 5px 10px;
  position: relative;

  .pic {
    transition: all 0.3s;

    &:hover {
      transform: translateY(-12px);
    }
  }

  .name {
    color: #2B2B2B;
    font-size: 14px;
    margin-top: 10px;
    width: 100%;

    &:hover {
      color: #31c27c;
    }
  }

  .writer {
    color: #2B2B2B;
    font-size: 14px;
  }
}
</style>