<template>
  <div id="app" >
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss" scoped>
  #app{
    font-size:vw(28);
  }
</style>
