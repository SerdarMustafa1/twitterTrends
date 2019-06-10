// get UK results
$(document).ready(function() {
	$.getJSON('http://localhost:3000/trendsUK')
		.done(function(data) {
			let obj = data[0].trends;
			let obj2 = data[0].trends;
			for (let i = 0; i < 10; i++) {
				let total =
					obj[i].name +
					' & tweet volume =' +
					' ' +
					'<span class="total">' +
					'(' +
					obj2[i].tweet_volume +
					')' +
					'</span>';
				console.log(total);
				$('.headerUK').append('<li>' + total + '<hr>' + '</li>');
			}
		})
		.fail(function() {
			console.log('PROBLEM, Server Stopped!');
		});
});

// get Germany results
function getTrendsDE() {
	$.getJSON('http://localhost:3000/trendsDE')
		.done(function(data) {
			let obj = data[0].trends;
			let obj2 = data[0].trends;
			for (let i = 0; i < 10; i++) {
				let total =
					obj[i].name +
					' & tweet volume =' +
					' ' +
					'<span class="total">' +
					'(' +
					obj2[i].tweet_volume +
					')' +
					'</span>';
				console.log(total);
				$('.headerDE').append('<li>' + total + '<hr>' + '</li>');
			}
		})
		.fail(function() {
			console.log('PROBLEM, Server Stopped!');
		});
}
setTimeout(getTrendsDE, 2500);
// get US results

function getTrendsUS() {
	$.getJSON('http://localhost:3000/trendsUS')
		.done(function(data) {
			let obj = data[0].trends;
			let obj2 = data[0].trends;
			for (let i = 0; i < 10; i++) {
				let total =
					obj[i].name +
					' & tweet volume =' +
					' ' +
					'<span class="total">' +
					'(' +
					obj2[i].tweet_volume +
					')' +
					'</span>';
				console.log(total);
				$('.headerUS').append('<li>' + total + '<hr>' + '</li>');
			}
		})
		.fail(function() {
			console.log('PROBLEM, Server Stopped!');
		});
}
setTimeout(getTrendsUS, 4000);
