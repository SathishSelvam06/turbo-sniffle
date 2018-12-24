var dataTable;
$ (document).ready (function () {
  getData ();

  var idTobeEdited;

  function editFunction () {
    $ ('.edit-button').click (function () {
      $ ('#save').val ('edit-user');
      $ ('.edit-overlay').css ('display', 'block');

      idTobeEdited = $ (this).val ();

      var userName = $ (this)
        .parent ()
        .parent ()
        .children (':nth-child(2)')
        .text ();

      var passWord = $ (this)
        .parent ()
        .parent ()
        .children (':nth-child(3)')
        .text ();

      var email = $ (this)
        .parent ()
        .parent ()
        .children (':nth-child(4)')
        .text ();

      var role = $ (this)
        .parent ()
        .parent ()
        .children (':nth-child(5)')
        .text ();

      var phone = $ (this)
        .parent ()
        .parent ()
        .children (':nth-child(6)')
        .text ();

      $ ('#card-heading').text ('EDIT DETAILS OF');

      $ ('.userIdspan').text (idTobeEdited);
      $ ('#userId').val (idTobeEdited);
      $ ('#userId').hide ();
      $ ('label[for="userId"]').hide ();
      $ ('#username').val (userName);
      $ ('#passwd').val (passWord);
      $ ('#email').val (email);
      $ ('#role').val (role);
      $ ('#phone').val (phone);
    });
  }

  //add user
  $ ('#add-user').click (function () {
    $ ('#save').val ('add-user');
    $ ('#card-heading').text ('ADD NEW USER');
    $ ('.userIdspan').text ('');
    $ ('#userId').show ();
    $ ('label[for="userId"]').show ();
    $ ('#userId').val ('');
    $ ('#username').val ('');
    $ ('#passwd').val ('');
    $ ('#email').val ('');
    $ ('#role').val ('');
    $ ('#phone').val ('');
    $ ('.edit-overlay').show();
  });
  
  $ ('.close').click (function () {
    $ ('.edit-overlay').hide ();
    $ ('.delete-overlay').hide ();
  });

  $ ('#save').click (function () {
    var url;
    if ($ (this).val () == 'edit-user') {
      url = '/rest/users/update';
    } else {
      url = '/rest/users/insert';
    }
    console.log (url);
    var isValid = validate ();
    console.log (isValid);
    if (isValid) {
      $.ajax ({
        url: url,
        data: {
          userId: $ ('#userId').val (),
          userName: $ ('#username').val (),
          password: $ ('#passwd').val (),
          emailId: $ ('#email').val (),
          role: $ ('#role').val (),
          phoneNumber: $ ('#phone').val (),
        },
        beforeSend: function () {
          $ ('.error-msg').text ('Loading ... ');
        },
        error: function (xhr, ajaxOptions, thrownError) {
          $ ('.error-msg').text ('Error on Saving (' + xhr.status + ')');
        },
        success: function (data) {
          $ ('#msg').text ('Sucess -Save');
          $ ('.edit-overlay').hide ();
          location.reload ();
        },
        type: 'GET',
      });
    }
  });

  function validate () {
    if (
      $ ('#userId').val () == '' ||
      $ ('#username').val () == '' ||
      $ ('#passwd').val () == '' ||
      $ ('#email').val () == '' ||
      $ ('#role').val () == '' ||
      $ ('#phone').val () == ''
    ) {
      $ ('.error-msg').text ('Enter data in all fields');
      return false;
    }
    return true;
  }

  var userToBeDeleted = {};
  function deleteFunction () {
    $ ('.delete-button').click (function () {
      $ ('.delete-overlay').css ('display', 'block');
      userToBeDeleted.userId = $ (this).val ();

      userToBeDeleted.userName = $ (this)
        .parent ()
        .parent ()
        .children (':nth-child(2)')
        .text ();

      userToBeDeleted.passWord = $ (this)
        .parent ()
        .parent ()
        .children (':nth-child(3)')
        .text ();

      userToBeDeleted.email = $ (this)
        .parent ()
        .parent ()
        .children (':nth-child(4)')
        .text ();

      userToBeDeleted.role = $ (this)
        .parent ()
        .parent ()
        .children (':nth-child(5)')
        .text ();

      userToBeDeleted.phone = $ (this)
        .parent ()
        .parent ()
        .children (':nth-child(6)')
        .text ();
      console.log (userToBeDeleted);
      $ ('.userIdspan').text (userToBeDeleted.userId);
    });
  }

  $ ('#delete-user').click (function () {
    $.ajax ({
      url: '/rest/users/delete',
      data: userToBeDeleted,
      beforeSend: function () {
        $ ('#msg').text ('Loading - Save');
      },
      error: function () {
        $ ('#msg').text ('Error -Save');
      },
      success: function (data) {
        $ ('#msg').text ('Sucess -Save');
        $ ('.delete-overlay').hide ();
        location.reload ();
      },
      type: 'GET',
    });
  });

  function getData () {
    $.ajax ({
      url: '/rest/users/list',
      data: {},
      beforeSend: function () {
        $ ('#msg').text ('Loading - Get Data');
      },
      error: function () {
        $ ('#msg').text ('Error - Get Data ');
      },
      success: function (data) {
        $ ('#msg').text ('Success - Get Data ');
        var dataSource = getFormattedDataSource (data);
        renderDataTable (dataSource);
        editFunction ();
        deleteFunction ();
      },
      type: 'GET',
    });
  }
  function getFormattedDataSource (userDetails) {
   
    //format data source
    var dataSource = [];
    for (i = 0; i < userDetails.length; i++) {
      var array = [];
      array.push (userDetails[i].userId);
      array.push (userDetails[i].userName);
      array.push (userDetails[i].password);
      array.push (userDetails[i].emailId);
      array.push (userDetails[i].role);
      array.push (userDetails[i].phoneNumber);
      dataSource.push (array);
    }
    return dataSource;
  }

  function renderDataTable (dataSource) {
    dataTable = $ ('#example').DataTable ({
      data: dataSource,
      columnDefs: [
        {
          data: null,
          render: function (data, type, row) {
            return (
              '<button class = "edit-button" value = "' +
              row[0] +
              '">Edit</button> <button class = "delete-button" value = "' +
              row[0] +
              '"> Delete </button>'
            );
          },
          targets: -1,
        },
      ],
    });
  }
});
