<template>
<div>
    <section class="works__wrapper">
        <h2 class="works__title">web</h2>
        <div class="works">
            <div class="work">
                <div class="work--left">
                    <div class="work__title">映像制作会社RAN de VoO</div>
                    <div class="work__date"><strong>date: </strong>2019</div>
                    <div class="work__role"><strong>role: </strong>coding</div>
                    <p class="work__overview">
                        着なくなった洋服を3着持参することで、会場にある古着を3着持って帰ることのできるPOP UPショップ「CLOSET to CLOSET」の運営に携わっていました。主にInstagramの広告運用や店頭スタッフを担い、当初は10人程度だった集客を100人規模まで伸ばすことができました。
                    </p>
                </div>
                <div class="work--right">
                    <picture>
                        <source srcset="~/assets/images/randevoo-fv.webp" type="image/webp" />
                        <img class="work__image" src="~/assets/images/randevoo-fv.png" />
                    </picture>
                </div>
            </div>
            <div class="work">
                <div class="work--left">
                    <div class="work__title">株式会社DHE テストサイト</div>
                    <div class="work__date"><strong>date: </strong>2020</div>
                    <div class="work__role"><strong>role: </strong>coding, interaction design</div>
                    <p class="work__overview">
                        このサイトは、reynato.tokyo株式会社 にてインターン中に制作しました。残念ながら本番リリースには至りませんでしたが、テストサイトとして制作しました。
                        担当業務はオープニングアニメーションやメニュー開閉時のインタラクションデザイン及び実装です。気持ちの良いアニメーションとなるように心がけて、発火タイミングやdurationに配慮しました。<br>
                        <br>
                        実際の動作環境をご覧になりたい方は seadragon0828@gmail.com までご連絡ください。
                    </p>
                </div>
                <div class="work--right">
                    <picture>
                        <source srcset="~/assets/images/dhe-fv.webp" type="image/webp" />
                        <img class="work__image" src="~/assets/images/dhe-fv.png" />
                    </picture>
                </div>
            </div>
        </div>
    </section>
    <section class="works__wrapper">
        <h2 class="works__title">event</h2>
        <div class="works">
            <div class="work">
                <div class="work--left">
                    <div class="work__title">CLOET to CLOSET</div>
                    <div class="work__date"><strong>date: </strong>2020.4~2021.5</div>
                    <div class="work__role"><strong>role: </strong>marketing, store staff</div>
                    <p class="work__overview">
                        着なくなった洋服を3着持参することで、会場にある古着を3着持って帰ることのできるPOP UPショップ「CLOSET to CLOSET」の運営に携わっていました。主にInstagramの広告運用や店頭スタッフを担い、当初は10人程度だった集客を100人規模まで伸ばすことができました。
                    </p>
                </div>
                <div class="work--right">
                    <picture>
                        <source srcset="~/assets/images/cloclo.webp" type="image/webp" />
                        <img class="work__image" src="~/assets/images/cloclo.jpg" />
                    </picture>
                </div>
            </div>
            <div class="work">
                <div class="work--left">
                    <div class="work__title">Freak’s Free Market</div>
                    <div class="work__date"><strong>date: </strong>2021.7.24, 2021.10.16</div>
                    <div class="work__role"><strong>role: </strong>planning, management</div>
                    <p class="work__overview">
                        あるものが大好きで仕方がない人-freak-達による自由市場(フリーマーケット)を主催。
                        イベント企画からSNS運用、当日の仕切りまで全て1人で担当。血の通った温もりのあるマーケットを目指し、過去2回開催で延70人程を集客しました。
                    </p>
                </div>
                <div class="work--right">
                    <picture>
                        <source srcset="~/assets/images/freaks-free-market.webp" type="image/webp" />
                        <img class="work__image" src="~/assets/images/freaks-free-market.jpg" />
                    </picture>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.works {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  &__title {
    color: #000;
    font-size: 24px;
    font-style: italic;
    position: relative;
    font-weight: 500;
    margin-bottom: 20px;
    &:after {
      content: "";
      width: 8px;
      height: 1px;
      background-color: #000;
      position: absolute;
      bottom: -3px;
      left: -4px;
    }
  }
}
.work {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  width: 520px;
  border-radius: 30px;
  box-shadow: 3px 4px 4px 2px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  &--left {
    width: 200px;
  }
  &__image {
    width: 220px;
    height: auto;
  }
  &__title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &__date {
    padding-bottom: 4px;
  }
  &__overview {
    word-break: break-all;
  }
}
</style>
