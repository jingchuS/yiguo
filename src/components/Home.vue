<template>
  <div class="home">
      <main>
        <router-view></router-view>
        <!-- <Content class="Content"></Content> -->
      </main>
      <Footer class="Footer"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/common/Footer.vue';
// import Content from '@/components/common/content.vue';
export default {
  components: {
      Footer,
      // Content,
  }
}
</script>

<style>
.home {
  background: #f4f4f4 !important;
}
.Content {
  overflow-y: auto;
}
.Footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

