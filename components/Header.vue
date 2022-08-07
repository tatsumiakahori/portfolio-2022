<template>
    <div>
        <header class="header">
            <nuxt-link to="/">
                <h1 class="headerTitle">t.akahori</h1>
            </nuxt-link>
            <div class="headerNav">
                <ul class="headerNav__ul">
                    <li class="headerNav__li">
                        <nuxt-link class="headerNav__li--link" to="/">0.home</nuxt-link>
                        <font-awesome-icon icon="caret-up" class="headerNav__li--icon" v-show="this.$route.name === 'index'" />
                    </li>
                    <li class="headerNav__li">
                        <nuxt-link class="headerNav__li--link" to="/works">1.works</nuxt-link>
                        <font-awesome-icon icon="caret-up" class="headerNav__li--icon" v-show="this.$route.name === 'works'" />
                    </li>
                    <li class="headerNav__li">
                        <nuxt-link class="headerNav__li--link" to="/me">2.me</nuxt-link>
                        <font-awesome-icon icon="caret-up" class="headerNav__li--icon" v-show="this.$route.name === 'me'" />
                    </li>
                </ul>
            </div>
        </header>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    width: 100vw;
    box-sizing: border-box;
    padding: 20px 30px 5px;
    display: flex;
    justify-content: space-between;
    backdrop-filter: blur(2px);
}

.headerTitle {
    font-size: 22px;
    line-height: 44px;
    color: #000;
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 700;
    letter-spacing: 1.5px;
}

.headerNav {
    &__ul {
        display: flex;
        justify-content: space-between;
    }
    &__li {
        padding: 0 10px;
        position: relative;
        &--link {
            padding: 0 10px;
            color: #555;
            letter-spacing: 3px;
        }
        &--icon {
            position: absolute;
            bottom: -12px;
            left: 0;
            right: 0;
            margin: auto;
            display: block;
            color: #AE483A;
        }
    }
}
</style>
