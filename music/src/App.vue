<template>
  <div id="app">
    <Mheader></Mheader>
    <Tab></Tab>
    <!-- ESO把这些dom都缓存到内存中 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Mheader from '@/components/m-header/m-header'
import Tab from '@/components/tab/tab'
export default {
  name: 'app',
  components: {
    Mheader,
    Tab
  }
}
</script>
