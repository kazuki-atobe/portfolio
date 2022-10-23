<template>
    <v-container pa-10 mt-10>
        <h1 class="text-h3 text-center"><span>W</span>orks</h1>
        
        <div v-for="(workItem, i) in workItems" :key=i>
            <h2>{{ workItem.title }}</h2>
            <p>{{ workItem.content }}</p>
            
            <div v-if="workItem.link">
                <v-row>
                    <v-hover v-for="(img, i) in workItem.imgs" :key=i v-slot="{ hover }">
                        <v-col cols="12" sm="6">
                            <v-img :src="imgPath(img.path)" max-height="304" max-width="540">
                                <v-expand-transition>
                                    <a
                                        v-if="hover"
                                        class="hover-link d-flex transition-fast-in-fast-out"
                                        :href=img.url
                                    >
                                        HPを見る
                                    </a>
                                </v-expand-transition>
                            </v-img>
                        </v-col>
                    </v-hover>
                </v-row>
            </div>
            <div v-else>
                <v-row>
                    <v-col v-for="(img, i) in workItem.imgs" :key=i cols="12" sm="6">
                        <v-img :src="imgPath(img.path)" max-height="304" max-width="540"></v-img>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'WorkView',
    data () {
        return {
            workItems: [
                {
                    title: 'ソーシャルゲームのサーバーサイド開発',
                    content: 'DB設計、プログラミング、管理ツール作成を担当',
                    link: false,
                    imgs: [
                        { path: 'img_a3.jpeg' },
                        { path: 'img_ichu.jpeg' }
                    ]
                },
                {
                    title: 'ホームページのリニューアル',
                    content: 'デザイン、コーディングを担当',
                    link: true,
                    imgs: [
                        {
                            path: 'img_anet.png',
                            url: 'https://www.advancednet.co.jp/'
                        }
                    ]
                },
                {
                    title: 'コーポレートサイト制作',
                    content: 'デザイン、コーディング、CMSプログラム組込みを担当',
                    link: true,
                    imgs: [
                        {
                            path: 'img_cubic.png',
                            url: 'https://www.cubic-gr.co.jp/'
                        },
                        {
                            path: 'img_saibou.png',
                            url: 'http://www.saibouyoku-hide.com/'
                        },
                        {
                            path: 'img_bakery.png',
                            url: 'https://www.bakerychamp.biz/'
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        imgPath(path){
            return require(`@/assets/${path}`)
        }
    }
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
            color: #4b0082;
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
        font-size: clamp(18px, 4vw, 24px);
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
        font-size: clamp(16px, 4vw, 24px);
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
