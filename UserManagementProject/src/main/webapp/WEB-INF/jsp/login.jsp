<html>
    <head>
        <title>Active Ai - Login Application </title>
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link rel = "stylesheet" type="text/css" href="css/login.css" />
        <script src="js/login.js"></script>
    </head>
    <body>

        <!-- START : CONTAINER  -->
        <div class = "container">
            <!-- START : Login Card -->
            <div class="card">
                <h2>LOGIN</h2>
                <p><label for = "username">User Id</label></p>
                <input type="text" placeholder="User Id" id = "username" required/>
                <p><label for = "passwd">Password</label></p>
                <input type="password" id="passwd" placeholder="Password" required/>
                <button id="login">LOGIN</button>
                <p class="error-msg"></p>
            </div>
            <!-- END : Login Card -->
        </div>
        <!-- END : CONTAINER -->
    </body>    
</html>