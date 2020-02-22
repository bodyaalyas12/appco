export default {
	chart: {
		height: '400px'
	},
	grid: {
		borderColor: '#F1F1F1'
	},
	xaxis: {
		type: 'datetime',
		labels: {
			style: {
				colors: new Array(30).fill('#CCCCCC')
			}
		}
	},
	yaxis: {
		labels: {
			style: {
				colors: new Array(30).fill('#CCCCCC')
			}
		}
	},
	stroke: {
		curve: 'smooth'
	},
	legend: {
		labels: {
			colors: ['#F1F1F1'],
			useSeriesColors: true
		}
	},
	markers: {
		size: 0
	},
	colors: ['#3A80BA']
}
