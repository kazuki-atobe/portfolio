<template>
    <v-container pa-10 mt-10>
        <h1 class="text-h3 text-center"><span>W</span>orks</h1>

        <h2 class="text-h5 font-weight-bold">ソーシャルゲームのサーバーサイド開発</h2>

        <!-- <div class="">▼開発に携わったタイトル▼</div> -->

        <v-row no-gutters>
            <v-col cols="12" md="6" mb-10>
                <div class="text-h6">『A3』</div>
                <div class="game a3"></div>
            </v-col>
            <v-col cols="12" md="6">
                <div class="text-h6">『アイ☆チュウ』</div>
                <div class="game ichu"></div>
            </v-col>
        </v-row>
        <p class="text-h6">DB設計、プログラミング、管理ツール作成を担当</p>

        <h2 class="text-h5 font-weight-bold">ホームページのリニューアル</h2>
        <v-row no-gutters>
            <v-hover v-slot="{ hover }">
                <v-col cols="6">
                    <div class="anet">
                        <v-expand-transition>
                            <a
                                v-if="hover"
                                class="hover-link d-flex transition-fast-in-fast-out"
                                href="https://www.advancednet.co.jp/"
                            >
                                HPを見る
                            </a>
                        </v-expand-transition>
                    </div>
                </v-col>
            </v-hover>
        </v-row>
        <p class="text-h6">デザイン、コーディングを担当</p>

        <h2 class="text-h5 font-weight-bold">コーポレートサイト制作</h2>
        <v-row no-gutters>
            <v-hover v-slot="{ hover }">
                <v-col cols="12" md="4">
                    <div class="co-hp cubic">
                        <v-expand-transition>
                            <a
                                v-if="hover"
                                class="hover-link d-flex transition-fast-in-fast-out"
                                href="https://www.cubic-gr.co.jp/"
                            >
                                HPを見る
                            </a>
                        </v-expand-transition>
                    </div>
                </v-col>
            </v-hover>
            <v-hover v-slot="{ hover }">
                <v-col cols="12" md="4">
                    <div class="co-hp saibou">
                        <v-expand-transition>
                            <a
                                v-if="hover"
                                class="hover-link d-flex transition-fast-in-fast-out"
                                href="http://www.saibouyoku-hide.com/"
                            >
                                HPを見る
                            </a>
                        </v-expand-transition>
                    </div>
                </v-col>
            </v-hover>
            <v-hover v-slot="{ hover }">
                <v-col cols="12" md="4">
                    <div class="co-hp bakery">
                        <v-expand-transition>
                            <a
                                v-if="hover"
                                class="hover-link d-flex transition-fast-in-fast-out"
                                href="https://www.bakerychamp.biz/"
                            >
                                HPを見る
                            </a>
                        </v-expand-transition>
                    </div>
                </v-col>
            </v-hover>
        </v-row>
        <p class="text-h6">デザイン、コーディング、CMSプログラム組込みを担当</p>
    </v-container>
</template>

<script>
export default {
    head: {
        link: [
          { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css' },
        ]
    },
}
</script>

<style scoped lang="scss">
    h1 {
        text-shadow: 3px 3px 2px rgba(0,0,0,0.3);
        color: #ffffff;
        position: relative;
        margin-bottom: 80px;
        span {
            color: #4b0082
        }
        &:after {
            content:'';
            width: 50px;
            height: 3px;
            position: absolute;
            bottom: -10px;
            left: calc(50% - 25px);
            background-color: #4b0082;
        }
    }
    h2 {
        margin-bottom: 15px;
        padding-left: 10px;
        position: relative;
        color: #808080;
        &:after {
            content: '';
            width: 3px;
            height: 23px;
            position: absolute;
            top: calc(50% - 11.5px);
            left: 0;
            background-color: #4b0082;
        }
    }

    p {
        margin-top: 5px;
        margin-bottom: 60px;
    }
    .game {
        width: 500px;
        height: 282px;
        box-shadow: 0px 0px 15px 0 #777777;
        border-radius: 10px;
        margin-bottom: 10px;
        &.a3 {
            background: url(../assets/img_a3.jpeg) 0 0 / 100% 100% no-repeat;
        }
        &.ichu {
            background: url(../assets/img_ichu.jpeg) 0 0 / 100% 100% no-repeat;
        }
        @media screen and (max-width: 1265px) {
            width: 380px;
            height: 230px;
        }
        @media screen and (max-width: 520px) {
            width: 280px;
            height: 180px;
        }
    }
    .anet {
        width: 500px;
        height: 320px;
        background: url(../assets/img_anet.png) 0 0 / 100% 100% no-repeat;
        box-shadow: 0px 0px 15px 0 #777777;
        border-radius: 10px;
        margin-bottom: 10px;
        @media screen and (max-width: 1265px) {
            width: 380px;
            height: 280px;
        }
        @media screen and (max-width: 520px) {
            width: 280px;
            height: 200px;
        }
    }
    .co-hp {
        width: 350px;
        height: 280px;
        box-shadow: 0px 0px 15px 0 #777777;
        border-radius: 10px;
        margin-bottom: 10px;
        &.cubic {
            background: url(../assets/img_cubic.png) 0 0 / 100% 100% no-repeat;
        }
        &.saibou {
            background: url(../assets/img_saibou.png) 0 0 / 100% 100% no-repeat;
        }
        &.bakery {
            background: url(../assets/img_bakery.png) 0 0 / 100% 100% no-repeat;
        }
        @media screen and (max-width: 1265px) {
            width: 260px;
            height: 210px;
        }
        @media screen and (max-width: 959px) {
            width: 380px;
            height: 280px;
        }
        @media screen and (max-width: 520px) {
            width: 280px;
            height: 180px;
        }
    }
    .hover-link {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: rgba(128, 128, 128, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-size: 24px;

        text-decoration: none;
    }
</style>
