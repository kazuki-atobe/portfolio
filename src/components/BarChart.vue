<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    data () {
        return {
            data: {
                labels: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'vue.js', 'AngularJS','Backbone.js', 'PHP', 'FuelPHP', 'CakePHP', 'Unity', 'FinalCutProX'],
                datasets: [
                    {
                        data: [5, 5, 2, 4, 4, 0.3, 0.2, 1, 4, 3, 1, 0.3, 2],
                        backgroundColor: [
                            'rgba(100, 149, 237, 0.4)',
                            'rgba(0, 128, 128, 0.4)',
                            'rgba(189, 183, 107, 0.4)',
                            'rgba(244, 164, 96, 0.4)',
                            'rgba(220, 20, 60, 0.4)',
                            'rgba(218, 112, 214, 0.4)',
                            'rgba(0, 255, 255, 0.4)',
                            'rgba(154, 205, 50, 0.4)',
                            'rgba(255, 215, 0, 0.4)',
                            'rgba(199, 21, 133, 0.4)',
                            'rgba(128, 0, 128, 0.4)',
                            'rgba(72, 209, 204, 0.4)',
                            'rgba(107, 142, 35, 0.4)',
                        ],
                        borderColor: [
                            'rgba(100, 149, 237, 1)',
                            'rgba(0, 128, 128, 1)',
                            'rgba(189, 183, 107, 1)',
                            'rgba(244, 164, 96, 1)',
                            'rgba(220, 20, 60, 1)',
                            'rgba(218, 112, 214, 1)',
                            'rgba(0, 255, 255, 1)',
                            'rgba(154, 205, 50, 1)',
                            'rgba(255, 215, 0, 1)',
                            'rgba(199, 21, 133, 1)',
                            'rgba(128, 0, 128, 1)',
                            'rgba(72, 209, 204, 1)',
                            'rgba(107, 142, 35, 1)',
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                barThickness:10,
                scales: {
                    xAxes: [{
                        display: true,
                        // X軸グリッド非表示
                        gridLines: {
                            display:false
                        },
                        categoryPercentage: 1,
                        barPercentage: 0.4,
                    }],
                    // Y軸
                    yAxes: [{
                        display: true,
                        position: 'left',
                        ticks: {
                            // 0から始まる
                            beginAtZero: true,
                            // 最大目盛
                            maxTicksLimit: 10,
                        },
                    }]
                },
                title: {
                    display: true,
                    fontSize: 18,
                    text: 'プログラミング言語/ライブラリ/フレームワークの経験年数'
                },
                legend: {
                    display: false
                },
            },
        }
    },
    mounted () {
        this.renderChart(this.data, this.options)
    }
}
</script>
