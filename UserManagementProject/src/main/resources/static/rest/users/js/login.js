$ (document).ready (function () {
  //login action
  $ ('#login').click (function () {
    console.log ('in click');
    $ ('.error-msg').text ('');
    var userCredentials = {};
    userCredentials['id'] = $ ('#username').val ();
    userCredentials['password'] = $ ('#passwd').val ();
    userCredentials.role = 'default';
    var isValid = validate (userCredentials);

    if (isValid) {
      $.ajax ({
        url: '/rest/users/login',
        data: userCredentials,
        beforeSend: function () {
        	$ ('.error-msg').text('Loading...');
        },
        error: function (xhr, ajaxOptions, thrownError) {
          $ ('.error-msg').text (
            'Error in logging in, Please check the UserId and Password  ( err-code : ' +
              xhr.status +
              ')'
          );
        },
        success: function (data) {
          if (data == 'admin') {
            window.location.href =
              '/rest/users/userdetails';
          } else if (data == 'valid') {
            window.location.href =
              '/rest/users/display';
          } else {
            $ ('.error-msg').text ('Invalid User Id or Password');
          }
        },
        type: 'GET',
      });
    }
  });

  //client-side validation
  function validate (userCredentials) {
    var username = userCredentials.username;
    var passwd = userCredentials.passwd;
    if (username == '' || passwd == '') {
      $ ('.error-msg').text ('Enter both Username and Password');
      return false;
    }
    return true;
  }
});
