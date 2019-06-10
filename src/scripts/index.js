import '../styles/index.scss';
import './twitApi';

$(document).ready(function() {
	var loading = $('.loading');
	loading.delay(loading.attr('delay-hide')).slideUp();
});
