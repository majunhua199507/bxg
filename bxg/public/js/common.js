
// NProgress.start();

// NProgress.done();

// $('.navs ul').prev('a').on('click', function () {
// 	$(this).next().slideToggle();

define(['jquery','cookie','template'], function ($,cookie,template) {
	if (!$.cookie('PHPSESSID') && location.pathname != '/login') {
		location.href = 'login';
	}
	if (location.pathname != '/login' && location.pathname != '/dashboard/login' && location.pathname != '/bxg/dashboard/login') {
		var tcInfo = JSON.parse($.cookie('tcInfo'));
		var htmlStr = template('tpl', tcInfo);
		$('.aside>.profile').html(htmlStr);
	}
})