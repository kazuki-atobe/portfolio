<template>
    <div class="wrap">
        <div class="main-title">
            <h1><span>K</span>azuki <span>A</span>tobe</h1>
            <h2>Portfolio</h2>
        </div>

        <vue-particles
            color="#a364ff"
            :particleOpacity="0.7"
            :particlesNumber="100"
            shapeType="circle"
            :particleSize="4"
            linesColor="#a364ff"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="300"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            class="particles-js"
        >
        </vue-particles>
    </div>
</template>

<style scoped lang="scss">
    .wrap {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: #ffffff;
    }
    .main-title {
        margin-top: -30px;
        z-index: 1; /* パーティクルの上に表示 */
    }
    h1, h2 {
        text-shadow: 3px 3px 2px rgba(0,0,0,0.3);
        text-align: center;
        span {
            color: #4b0082;
        }
    }
    h1 {
        font-size: clamp(58px, 7vw, 96px);
        font-weight: 300;
        line-height: 1.2;
    }
    h2 {
        font-size: clamp(38px, 7vw, 56px);
        font-weight: 400;
    }
    .particles-js {
        background: linear-gradient(135deg, #f2f6f8 0%,#d8e1e7 50%,#b5c6d0 79%,#e0eff9 100%);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
