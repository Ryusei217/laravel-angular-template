<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Project</title>
    <link rel="stylesheet" href="assets/stylesheets/frontend.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body ng-app="laravelApp">
    <!--[if lt IE 9]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to           improve your experience.</p>
    <![endif]-->

    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
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
                    <li><a href="/">Home</a>
                    </li>
                    <li><a href="/comments">Comments</a>
                    </li>
                    <li><a href="#about">About</a>
                    </li>
                    <li><a href="#contact">Contact</a>
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

    <script src="assets/javascript/frontend.js"></script>
</body>

</html>