<head>
    <title>Active Ai - Login Application </title>
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel = "stylesheet" type="text/css" href="css/userdetails.css" />
    <script src="js/userdetails.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
</head>
<body>

    

    <!-- START : CONTAINER  -->
    <div class = "container">
        <!-- START : HEADER -->
        <div class="header">
            <h2>WelcomeAdmin..!</h2>
            <button id = "add-user"> + Add User</button>
            <a href="/rest/users/index"><button> < Go Back</button></a>
            <div class="clear-fix"></div>
        </div>
        <!-- END : HEADER -->
        <!-- START : USER LIST -->
        <table id="example" class="display" style="width:100%">
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>User name</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Phone Number</th>
                    <th>Modify</th>
                </tr>
            </thead>
            
        </table>
        <!-- END : USER LIST -->
        <!-- START : EDIT  -->
       <div class = "edit-overlay">
            <!-- START : USER Card -->
            <div class="card">
                    <h2><span id = "card-heading"></span> <span class = "userIdspan"></span></h2>

                    <p><label for = "userId">User Id : </label></p>
                    <input type="text" placeholder="User Id" id = "userId" required/>

                    <p><label for = "username">User Name : </label></p>
                    <input type="text" placeholder="User Name" id = "username" required/>

                    <p><label for = "passwd">Password : </label></p>
                    <input type="password" id="passwd" placeholder="Password" required/>

                    <p><label for = "email">Email : </label></p>
                    <input type="text" id="email" placeholder="Email" required/>

                    <p><label for = "role">Role : </label></p>
                    <input type="text" id="role" placeholder="Role" required/>

                    <p><label for = "phone">Phone : </label></p>
                    <input type="tel" id="phone" placeholder="Phone Number" required/>

                    <button id="save" value = "">SAVE</button>
                    <button class="close">CANCEL</button>
                    <p class="error-msg"></p>
                </div>
                <!-- END : User Card -->
       </div>
       <!-- END : EDIT -->
       <!-- START : EDIT  -->
       <div class = "delete-overlay">
            <!-- START : Login Card -->
            <div class="card">
                    <h2>DELETE USER - <span class = "userIdspan"></span></h2>

                    <p class="delete-message">Are you sure you want to delete this user?</p>

                    <button id="delete-user">DELETE</button>
                    <button class="close">CANCEL</button>
                    <p class="error-msg"></p>
                </div>
                <!-- END : Login Card -->
       </div>
       <!-- END : EDIT -->
       <p id="msg"></p>
    </div>
    <!-- END : CONTAINER -->
    </body>    
</html>