<template>
    <v-container pa-10 mt-10 justify="center">
        <h1 class="text-h3 text-center mb-16"><span>S</span>kills</h1>
        <v-card
          outlined
          shaped
          elevation="3"
        >
            <div class="chart">
                <BarChart
                :styles="myStyles"
                :options="options"
                :height="500"
                >
                </BarChart>
            </div>
        </v-card>
    </v-container>
</template>

<script>
import BarChart from './BarChart';

export default {
    name: 'SkillView',
    components: {
        BarChart
    }
}
</script>

<style scoped lang="scss">
    .container {
        @media screen and (min-width: 1904px) {
            width: 1195px;
        }
    }
    .v-card {
        padding: 20px;
    }
    .chart {
        max-width:1000px;
        height: 500px;
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
</style>
