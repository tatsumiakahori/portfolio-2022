<template>
    <div class="home__container">
      <section class="home">
          <div class="home__top">
              <div class="homeLeft">
                  <div class="homeLeft__title">
                        <div class="homeLeft__title--en">
                            hi
                        </div>
                        <div class="homeLeft__title--jp">
                            こん✋<br>
                            にちわ
                        </div>
                        <div class="homeLeft__title--folio">
                            folio
                        </div>
                  </div>
              </div>
              <div class="homeRight">
                homeRight
              </div>
          </div>
          <div class="homeBottom">
            homeBottom
          </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
.home {
  &__container {
    width: 100%;
    height: 100%;
    position:relative;
  }
  width: 100%;
  position: absolute;
  top: 0;
  height: 0;
  display: block;
  margin: auto;
  &__top {
    display: flex;
    justify-content: space-around;
  }
  .homeLeft {
    &__title {
      display: flex;
      justify-content: space-around;
      &--en {
        font-size: 128px;
        line-height: 128px;
      }
      &--jp {
        font-family: 'M PLUS 1';
        font-size: 58px;
        line-height: 58px;
      }
      &--folio {
        font-family: 'Molle';
        font-weight: 400;
        font-style: italic;
      }
    }
  }
}
</style>
