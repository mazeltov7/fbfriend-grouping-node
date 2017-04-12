// appID入れてね
APPID = '';

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = `//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=${APPID}`;
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response) {
	console.log('statusChangeCallback');
	console.log(response);
	if (response.status === 'connected') {
		testAPI();
	} else {
		document.getElementById('status').innerHTML = 'Please login'
	}
}

window.fbAsyncInit = function() {
	FB.init({
		appID: `${APPID}`,
		cookie: true,
		xfbml: true,
		version: 'v2.8'
	});

	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
};

function testAPI() {
	console.log('yeehshehhsheh');
	FB.api('/me', function(response) {
		console.log(`yoo, ${response.id}`);
		getFriendList(response.id);
	});
}

function getFriendList(userID) {
	FB.api(
	    `/${userID}/friendlists`,
	    function (response) {
	      if (response && !response.error) {
	        console.log('success!');
	        console.log(response);

	      }
	    }
	);
}