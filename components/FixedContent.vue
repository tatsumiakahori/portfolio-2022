<template>
    <div class="fixedContent">
        <div class="fixedContent__pageTitle fixedContent__pageTitle--left">{{ this.$route.name === 'index' ? 'home' : this.$route.name }}</div>
        <div class="fixedContent__pageTitle fixedContent__pageTitle--right">{{ this.$route.name === 'index' ? 'home' : this.$route.name }}</div>
        <div class="fixedContent__mail">
            <font-awesome-icon icon="envelope" class="fixedContent__mail--icon" />
            <a class="fixedContent__mail--link" href="mailto:seadragon0828@gmail.com">seadragon0828@gmail.com</a>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default: 'home',
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.fixedContent {
  position: fixed;
  width: 100vw;
  height: 100vh;
  text-align: center;
  z-index: -999;
  &__pageTitle {
    font-family: 'Montserrat';
    position: absolute;
    transform: rotate(90deg);
    font-size: 84px;
    font-style: italic;
    font-weight: 800;
    @include text-stroke(#000);
    color: #fff;
    z-index: -9999;
    width: 280px;
    &--left {
      top: 177px;
      left: -130px;
    }
    &--right {
      top: 177px;
      right: -145px;
    }
  }
  &__mail {
    position: absolute;
    bottom: 235px;
    left: 35px;
    font-size: 10px;
    letter-spacing: .2em;
    z-index: 9999;
    &--icon {
      color: #222;
    }
    &--link {
      color: #222;
      transform: rotate(90deg);
      display: block;
      position: absolute;
      left: -88px;
      top: 106px;
      text-decoration: underline .5px;
      text-underline-offset: 3px;
    }
  }
}
</style>
