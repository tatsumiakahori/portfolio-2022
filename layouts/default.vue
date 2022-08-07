<template>
  <div class="pageContainer">
    <FixedContent />
    <Header />
    <div class="mainContainer">
        <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import FixedContent from '~/components/FixedContent.vue'

export default {
  components: {
    Header,
    Footer,
    FixedContent
  }
}
</script>

<style lang="scss" scoped>
.pageContainer {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.mainContainer {
  padding: 100px 70px 0 90px;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - 40px);
  margin: 20px;
  border-top: 1px solid #aaa;
}

.footerLeft {
  &__ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__li {
    padding: 10px;
  }
}

.footerCenter {
  &__title {
    display: inline-block;
  }

  &__mail {
    display: inline-block;
    text-decoration: underline;
    vertical-align: bottom;
  }
}
</style>
