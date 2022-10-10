<template>
    <v-container pa-10 mt-10>
        <h1 class="text-h3 text-center"><span>W</span>orks</h1>

        <h2 class="text-h5 font-weight-bold">ソーシャルゲームのサーバーサイド開発</h2>

        <p class="text-h6">DB設計、プログラミング、管理ツール作成を担当<br>▼開発に携わったタイトル▼</p>
        <v-row>
            <v-col cols="12" sm="6">
                <v-img src="../assets/img_a3.jpeg" max-height="304" max-width="540"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
                <v-img src="../assets/img_ichu.jpeg" max-height="304" max-width="540"></v-img>
            </v-col>
        </v-row>

        <h2 class="text-h5 font-weight-bold">ホームページのリニューアル</h2>
        <p class="text-h6">デザイン、コーディングを担当</p>
        <v-row>
            <v-hover v-slot="{ hover }">
                <v-col cols="12" sm="6">
                    <v-img src="../assets/img_anet.png" max-height="304" max-width="540">
                        <v-expand-transition>
                            <a
                                v-if="hover"
                                class="hover-link d-flex transition-fast-in-fast-out"
                                href="https://www.advancednet.co.jp/"
                            >
                                HPを見る
                            </a>
                        </v-expand-transition>
                    </v-img>
                </v-col>
            </v-hover>
        </v-row>

        <h2 class="text-h5 font-weight-bold">コーポレートサイト制作</h2>
        <p class="text-h6">デザイン、コーディング、CMSプログラム組込みを担当</p>
        <v-row>
            <v-hover v-slot="{ hover }">
                <v-col cols="12" sm="6">
                    <v-img src="../assets/img_cubic.png" max-height="304" max-width="540">
                        <v-expand-transition>
                            <a
                                v-if="hover"
                                class="hover-link d-flex transition-fast-in-fast-out"
                                href="https://www.cubic-gr.co.jp/"
                            >
                                HPを見る
                            </a>
                        </v-expand-transition>
                    </v-img>
                </v-col>
            </v-hover>
            <v-hover v-slot="{ hover }">
                <v-col cols="12" sm="6">
                    <v-img src="../assets/img_saibou.png" max-height="304" max-width="540">
                        <v-expand-transition>
                            <a
                                v-if="hover"
                                class="hover-link d-flex transition-fast-in-fast-out"
                                href="http://www.saibouyoku-hide.com/"
                            >
                                HPを見る
                            </a>
                        </v-expand-transition>
                    </v-img>
                </v-col>
            </v-hover>
            <v-hover v-slot="{ hover }">
                <v-col cols="12" sm="6">
                    <v-img src="../assets/img_bakery.png" max-height="304" max-width="540">
                        <v-expand-transition>
                            <a
                                v-if="hover"
                                class="hover-link d-flex transition-fast-in-fast-out"
                                href="https://www.bakerychamp.biz/"
                            >
                                HPを見る
                            </a>
                        </v-expand-transition>
                    </v-img>
                </v-col>
            </v-hover>
        </v-row>
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
    .container {
        @media screen and (min-width: 1904px) {
            width: 1195px;
        }
    }
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
    .row {
        margin-bottom: 60px;
    }
    .v-image {
        box-shadow: 0px 0px 15px 0 #777777;
        border-radius: 10px;
        margin-bottom: 10px;
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
