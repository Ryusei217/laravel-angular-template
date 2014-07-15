<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Project</title>
    <link rel="stylesheet" href="assets/stylesheets/frontend.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body ng-app="laravelApp">
    <!--[if lt IE 7]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation" ng-controller="NavCtrl">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">Project</a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li ng-repeat="item in menu" ng-class="{active: isActive(item.link)}">
                        <a ng-href="{{item.link}}"><i class="fa {{item.icon}}"></i> {{item.title}}</a>
                    </li>
                    <li ng-class="{ active: isActive('/login') } " ng-hide="logged">
                        <a href="/login" >
                            <i class="fa fa-sign-in"></i> Sign In
                        </a>
                    </li>
                    <li ng-show="logged">
                        <a href ng-click="logout()" >
                            <i class="fa fa-sign-in"></i> Sign Out
                        </a>
                    </li>
                </ul>
            </div>
            <!--/.nav-collapse -->
        </div>
    </nav>
    
    <!-- Add your site or application content here -->
    <div ng-view=""></div>

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <hr />
                    <ul class="list-unstyled">
                        <li class="pull-right"><a href="#top">Back to top</a>
                        </li>
                        <li><a href="https://twitter.com/calderonc217">Twitter</a>
                        </li>
                        <li><a href="https://github.com/ryusei217/">GitHub</a>
                        </li>
                    </ul>
                    <p>Made by <a href="#" rel="nofollow">Cristian Calderón</a>. Contact <a href="mailto:calderon_c217@outlook.com">calderon_c217@outlook.com</a>.</p>
                    <p>Code released under the <a href="http://opensource.org/licenses/MIT">MIT License</a>.</p>
                    <p>Frontend Based on <a href="http://bootswatch.com/" rel="nofollow">Bootswatch</a>. Icons from <a href="http://fortawesome.github.io/Font-Awesome/" rel="nofollow">Font Awesome</a>. Web fonts from <a href="http://www.google.com/webfonts" rel="nofollow">Google</a>.</p>
                    <p>Backend and Gruntfile from <a href="http://blog.elenakolevska.com/using-grunt-with-laravel-and-bootstrap/">Elena Kolevska</a>.</p>
                </div>
            </div>
        </div>
    </footer>
    
    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID -->
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                                })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-XXXXX-X');
        ga('send', 'pageview');
    </script>
    
    <script src="assets/javascript/frontend.js"></script>
    <script type="text/javascript">
        angular.module('laravelApp').constant('CSRF_TOKEN', '<?php echo csrf_token(); ?>'); 
    </script>
</body>

</html>