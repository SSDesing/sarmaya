'use strict';

app.service('spendAnalysisService', function() {

    //functions, variables that can be accessed from the HTML come here

    var accountDetails = [{
            'id': '1',
            'type': 'Savings Account',
            'maskNumber': 'XXXXXXXX9755',
            'amount': '94,630'
        },

        {
            'id': '2',
            'type': 'Savings Account',
            'maskNumber': 'XXXXXXXX9756',
            'amount': '84,520'
        },

        {
            'id': '3',
            'type': 'Current Account',
            'maskNumber': 'XXXXXXXX9757',
            'amount': '44,530'
        },

        {
            'id': '4',
            'type': 'Savings Account',
            'maskNumber': 'XXXXXXXX9758',
            'amount': '64,530'
        }

    ]

    var weekDataConfig = {
        type: 'line',
        data: {
            labels: ['JAN 2013', 'FEB 2013', 'MAR 2013', 'APR 2013', 'MAY 2013', 'JUN 2013'],
            datasets: [{
                // label: '2013',
                data: [2021, 4456, 3545, 6237, 1783, 2323],
                backgroundColor: "#ddd",
                lineTension: 0

            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        max: 7000,
                        min: 1000,
                        stepSize: 1200

                    },
                    gridLines: {
                        display: false
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                        beginAtZero: 1
                    }
                }]
            },
            tooltips: {
                enabled: false
            },
            title: {
                display: true,
                // text: 'Year 2013'
            },
            animation: {
                duration: 0,
                onComplete: function() {
                    // render the value of the chart above the bar
                    var ctx = this.chart.ctx;
                    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
                    ctx.fillStyle = this.chart.config.options.defaultFontColor;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    this.data.datasets.forEach(function(dataset) {
                        for (var i = 0; i < dataset.data.length; i++) {
                            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                            ctx.fillText(dataset.data[i], model.x, model.y - 5);
                        }
                    });
                }
            }
        }
    };

    var monthDataConfig = {
        type: 'line',
        data: {
            labels: ['JAN 2013', 'FEB 2013', 'MAR 2013', 'APR 2013', 'MAY 2013', 'JUN 2013'],
            datasets: [{
                // label: '2013',
                data: [22021, 42456, 32345, 68237, 22783, 42323],
                backgroundColor: "#ddd",
                lineTension: 0

            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        max: 70000,
                        min: 10000,
                        stepSize: 12000

                    },
                    gridLines: {
                        display: false
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                        beginAtZero: 1
                    }
                }]
            },
            tooltips: {
                enabled: false
            },
            title: {
                display: true,
                // text: 'Year 2013'
            },
            animation: {
                duration: 0,
                onComplete: function() {
                    // render the value of the chart above the bar
                    var ctx = this.chart.ctx;
                    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
                    ctx.fillStyle = this.chart.config.options.defaultFontColor;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    this.data.datasets.forEach(function(dataset) {
                        for (var i = 0; i < dataset.data.length; i++) {
                            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                            ctx.fillText(dataset.data[i], model.x, model.y - 5);
                        }
                    });
                }
            }
        }
    };

    var quarterDataConfig = {
        type: 'line',
        data: {
            labels: ['JAN 2013', 'FEB 2013', 'MAR 2013', 'APR 2013', 'MAY 2013', 'JUN 2013'],
            datasets: [{
                // label: '2013',
                data: [242021, 424456, 323545, 682637, 427783, 523823],
                backgroundColor: "#ddd",
                lineTension: 0

            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        max: 700000,
                        min: 100000,
                        stepSize: 120000

                    },
                    gridLines: {
                        display: false
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                        beginAtZero: 1
                    }
                }]
            },
            tooltips: {
                enabled: false
            },
            title: {
                display: true,
                // text: 'Year 2013'
            },
            animation: {
                duration: 0,
                onComplete: function() {
                    // render the value of the chart above the bar
                    var ctx = this.chart.ctx;
                    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
                    ctx.fillStyle = this.chart.config.options.defaultFontColor;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    this.data.datasets.forEach(function(dataset) {
                        for (var i = 0; i < dataset.data.length; i++) {
                            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                            ctx.fillText(dataset.data[i], model.x, model.y - 5);
                        }
                    });
                }
            }
        }
    };



    var spendAnalysisData = [{
            'tagName': 'shop',
            'tagPercentage': 15,
            'tagAmount': 15000,
            'tagColor': '#ff6384'

        },
        {
            'tagName': 'utilities',
            'tagPercentage': 20,
            'tagAmount': 20000,
            'tagColor': '#36a2eb'

        },
        {
            'tagName': 'food',
            'tagPercentage': 5,
            'tagAmount': 5000,
            'tagColor': '#FDB45C'

        },
        {
            'tagName': 'phone',
            'tagPercentage': 10,
            'tagAmount': 10000,
            'tagColor': '#46BFBD'

        },
        {
            'tagName': 'travel',
            'tagPercentage': 25,
            'tagAmount': 25000,
            'tagColor': '#949FB1'

        },
        {
            'tagName': 'atm',
            'tagPercentage': 10,
            'tagAmount': 10000,
            'tagColor': '#F7464A'

        },
        {
            'tagName': 'others',
            'tagPercentage': 15,
            'tagAmount': 15000,
            'tagColor': '#4D5360'

        }
    ]

    var doughnutDataConfig = {
        type: 'doughnut',
        data: {
            labels: [
                "Shop",
                "Utilites",
                "Food",
                "Phone",
                "Travel",
                "ATM",
                "Others"
            ],
            datasets: [{
                data: [160000, 160000, 360000, 160000, 80000, 80000, 80000],
                backgroundColor: [
                    "#ff6384",
                    "#36a2eb",
                    "#FDB45C",
                    "#46BFBD",
                    "#949FB1",
                    "#F7464A",
                    "#4D5360",

                ],
                hoverBackgroundColor: [
                    "#ff6384",
                    "#36a2eb",
                    "#FDB45C",
                    "#46BFBD",
                    "#949FB1",
                    "#F7464A",
                    "#4D5360"
                ]
            }]
        },
        options: {

            cutoutPercentage: 70,
            responsive: true,
            showAllTooltips: true,
            legend: {
                position: 'bottom',
            },
            legend: {
                display: false
            },
            tooltipTemplate: "<%= value %>",
            onAnimationComplete: function() {
                this.showTooltip(this.segments, true);
            },
            tooltipEvents: [],
            elements: {
                center: {
                    // the longest text that could appear in the center
                    maxText: '100%',
                    text: 'CATEGORY',
                    fontColor: '#000',
                    fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    fontStyle: 'normal',
                    fontSize: 14,
                    // if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
                    // if these are not specified either, we default to 1 and 256
                    minFontSize: 1,
                    maxFontSize: 256,
                }
            }

        }

    };

    this.getAccountDetails = function() {
        return accountDetails;
    }
    this.getWeekData = function() {
        return weekDataConfig;
    }
    this.getMonthData = function() {
        return monthDataConfig;
    }
    this.getQuarterData = function() {
        return quarterDataConfig;
    }
    this.getDoughnutData = function() {
        Chart.pluginService.register({
            afterUpdate: function(chart) {
                if (chart.config.options.elements.center) {
                    var helpers = Chart.helpers;
                    var centerConfig = chart.config.options.elements.center;
                    var globalConfig = Chart.defaults.global;
                    var ctx = chart.chart.ctx;

                    var fontStyle = helpers.getValueOrDefault(centerConfig.fontStyle, globalConfig.defaultFontStyle);
                    var fontFamily = helpers.getValueOrDefault(centerConfig.fontFamily, globalConfig.defaultFontFamily);

                    if (centerConfig.fontSize)
                        var fontSize = centerConfig.fontSize;
                    // figure out the best font size, if one is not specified
                    else {
                        ctx.save();
                        var fontSize = helpers.getValueOrDefault(centerConfig.minFontSize, 1);
                        var maxFontSize = helpers.getValueOrDefault(centerConfig.maxFontSize, 256);
                        var maxText = helpers.getValueOrDefault(centerConfig.maxText, centerConfig.text);

                        do {
                            ctx.font = helpers.fontString(fontSize, fontStyle, fontFamily);
                            var textWidth = ctx.measureText(maxText).width;

                            // check if it fits, is within configured limits and that we are not simply toggling back and forth
                            if (textWidth < chart.innerRadius * 2 && fontSize < maxFontSize)
                                fontSize += 1;
                            else {
                                // reverse last step
                                fontSize -= 1;
                                break;
                            }
                        } while (true)
                        ctx.restore();
                    }

                    // save properties
                    chart.center = {
                        font: helpers.fontString(fontSize, fontStyle, fontFamily),
                        fillStyle: helpers.getValueOrDefault(centerConfig.fontColor, globalConfig.defaultFontColor)
                    };
                }
            },
            afterDraw: function(chart) {
                if (chart.center) {
                    var centerConfig = chart.config.options.elements.center;
                    var ctx = chart.chart.ctx;

                    ctx.save();
                    ctx.font = chart.center.font;
                    ctx.fillStyle = chart.center.fillStyle;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
                    var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
                    ctx.fillText(centerConfig.text, centerX, centerY);
                    ctx.restore();
                }
            },
        })

        return doughnutDataConfig;
    }
    this.getSpendAnalysisData = function() {
        return spendAnalysisData;
    }
    return this;
});