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
                  </div>
                  <div class="homeLeft__content">
                      <div class="homeLeft__text">
                          I’m Tatsumi Akahori, developer.I’m able to develop web services and create websites.I'm not good at designing… I wanna create somethig cool, funny, avant‐garde opus.I look forward to collaborations with you:)
                      </div>
                      <div class="homeLeft__lang">
                          <div class="homeLeft__lang--text">JP</div>
                          <div class="homeLeft__lang--slash">/</div>
                          <div class="homeLeft__lang--text isActive">EN</div>
                      </div>
                      <div class="homeLeft__sign">
                          <span class="homeLeft__sign--montserrat">t.akahori</span>'s <span class="homeLeft__sign--molle">folio</span>
                      </div>
                  </div>
              </div>
              <div class="homeRight">
                  <div class="homeRight__content">
                      <div class="homeRight__sub">
                          <div class="homeRight__text">
                              These are my few works.<br>
                              (Under construction...; ;)
                          </div>
                          <div class="homeRight__sub--number">1.</div>
                      </div>
                      <div class="homeRight__main">
                          <nuxt-link class="homeRight__link" to="/works">
                              <div class="homeRight__link--1">works</div>
                              <div class="homeRight__link--2">works</div>
                              <div class="homeRight__link--3">works</div>
                              <div class="homeRight__link--4">works</div>
                              <div class="homeRight__link--5">works</div>
                          </nuxt-link>
                      </div>
                  </div>
                  <div class="homeRight__content">
                      <div class="homeRight__sub">
                          <div class="homeRight__text">
                              Who am I? I don’t know..<br>
                              But maybe the hint is here.
                          </div>
                          <div class="homeRight__sub--number">2.</div>
                      </div>
                      <div class="homeRight__main">
                          <nuxt-link class="homeRight__link" to="/about">
                              <div class="homeRight__link--1">about</div>
                              <div class="homeRight__link--2">about</div>
                              <div class="homeRight__link--3">about</div>
                              <div class="homeRight__link--4">about</div>
                              <div class="homeRight__link--5">about</div>
                          </nuxt-link>
                      </div>
                  </div>
              </div>
          </div>
          <div class="home__bottom">
              <font-awesome-icon icon="envelope" class="home__bottom--icon" />
              <div class="home__bottom--mail">takahori-dev@gmail.com</div>
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
    width: 860px;
    height: 380px;
    position:relative;
    margin: auto;
  }
  width: 100%;
  position: absolute;
  top: 0;
  height: 0;
  display: block;
  margin: auto;
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .homeLeft {
    &__title {
      display: flex;
      justify-content: space-around;
      &--en {
        font-size: 128px;
        line-height: 128px;
        font-weight: 200;
      }
      &--jp {
        font-family: 'M PLUS 1';
        font-size: 58px;
        line-height: 58px;
        font-weight: 300;
      }
    }
    &__content {
      position: relative;
    }
    &__text {
      max-width: 308px;
      word-break: break-word;
    }
    &__lang {
      margin-top: 6px;
      * {
        display: inline-block;
      }
      &--text {
        font-style: italic;
        font-size: 10px;
        font-weight: 700;
        color: #999;
      }
      .isActive {
        color: #333;
      }
    }
    &__sign {
      display: inline-block;
      position: absolute;
      bottom: -5px;
      right: 33px;
      letter-spacing: 1px;
      font-size: 10px;
      &--montserrat {
        font-weight: 700;
        font-style: italic;
        font-size: 12px;
      }
      &--molle {
        font-family: 'Molle';
        font-style: italic;
        font-size: 24px;
      }
    }
  }
  .homeRight {
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:first-child {
        margin-bottom: 20px;
      }
    }
    &__sub {
      position: relative;
      &--number {
        position: absolute;
        right: -16px;
        bottom: -6px;
        font-size: 16px;
        font-style: italic;
      }
    }
    &__text {
      width: 190px;
      border-bottom: .5px solid #000;
    }
    &__main {
      position: relative;
      display: block;
      width: 300px;
      height: 100px;
      left: 15px;
      &--number {
        position: absolute;
        bottom: 36px;
        left: -10px;
        font-size: 16px;
        font-style: italic;
      }
    }
    &__link {
      position: absolute;
      top: -22px;
      * {
        font-size: 96px;
        font-weight: 900;
        color: #fff;
        @include text-stroke(#333);
        letter-spacing: -10px;
        position: absolute;
      }
      &--1 {
        top: -6px;
      }
      &--2 {
        top: -3px;
      }
      &--4 {
        top: 3px;
      }
      &--5 {
        top: 6px;
      }
    }
  }
  &__bottom {
    margin-top: 16px;
    border-top: 1px dotted #000;
    text-align: right;
    * {
      display: inline-block;
      margin-top: 8px;
    }
    &--icon {
      color: #444;
    }
    &--mail {
      letter-spacing: 1px;
    }
  }
}
</style>
