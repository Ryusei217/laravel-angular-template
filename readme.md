## Laravel-Angular Template
Warning: This is a beta version could have some bugs!!!!

Important: This work is inspired in https://github.com/bktz/Laravel-4-AngularJS-Starter-Site special thanks to Benjamin Katznelson

This is a template for build sites with Laravel 4 and AngularJS, contains all necesary features like Less for frontend and backend, javascript minification, easy to customize boostrap theme thanks to Bootswatch and others.

This project use composer, bower an grunt for an easy to build site and live reload features.

### Packages

#### Composer Packages
* [Entrust](https://github.com/zizaco/entrust)
    * Entrust provides a flexible way to add Role-based Permissions to Laravel 4.
* [Confide](https://github.com/zizaco/confide)
    * Confide is an authentication solution for Laravel4 made to cut repetitive work involving the management of users: Account creation, login, logout, confirmation by e-mail, password reset, etc.
* [PHPUnit](https://github.com/sebastianbergmann/phpunit)
    * PHPUnit is a programmer-oriented testing framework for PHP. It is an instance of the xUnit architecture for unit testing frameworks.

#### Bower Packages
* [AngularJS](http://angularjs.org)
    * AngularJS lets you write client-side modern web applications.
* [UI-Bootstrap](http://angular-ui.github.io/bootstrap/)
    *  Native AngularJS directives based on Twitter Bootstrap's markup and CSS.
* [Boostrap](http://getbootstrap.com/)
    * Twitter Bootstrap with Bootswatch United Theme ready for customize.

#### Grunt Packages
* [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)
    * Compile LESS files to CSS.
* [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)
    * Copy files and folders.
* [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
    * Clean files and folders.
* [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)
    * Concatenate files.
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
    * Minify files with UglifyJS.
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
    * Run predefined tasks whenever watched file patterns are added, changed or deleted.
* [grunt-phpunit](https://www.npmjs.org/package/grunt-phpunit)
    * Run phpunit tests.

### Installation

#### Requirements
    PHP >= 5.3.7
    NodeJS
    Bower
	Grunt
	Composer

If you haven't already, you might want to make [composer be installed globally](http://andrewelkins.com/programming/php/setting-up-composer-globally-for-laravel-4/) for future ease of use.


#### Step 1: Install dependencies

    composer install --prefer-dist
    npm install
    bower install
    grunt init

If you want live reload use "grunt watch" task. For only build without using live reload use "grunt init".

#### Step 2: Configure Environments

Laravel 4 will load configuration files depending on your environment. Basset will also build collections depending on this environment setting.

Open ***bootstrap/start.php*** and edit the following lines to match your settings. You want to be using your machine name in Windows and your hostname in OS X and Linux (type `hostname` in terminal). Using the machine name will allow the `php artisan` command to use the right configuration files as well.

    $env = $app->detectEnvironment(array(

        'local' => array('your-local-machine-name'),
        'staging' => array('your-staging-machine-name'),
        'production' => array('your-production-machine-name'),

    ));

Now create the folder inside ***app/config*** that corresponds to the environment the code is deployed in. This will most likely be ***local*** when you first start a project.

You will now be copying the initial configuration file inside this folder before editing it. Let's start with ***app/config/app.php***. So ***app/config/local/app.php*** will probably look something like this, as the rest of the configuration can be left to their defaults from the initial config file:

    <?php

    return array(

        'url' => 'http://myproject.local',

        'timezone' => 'UTC',

        'key' => 'YourSecretKey!!!',

        'providers' => array(

        [... Removed ...]

        /* Uncomment for use in development */
    //     'Way\Generators\GeneratorsServiceProvider', // Generators
    //     'Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider', // IDE Helpers

        ),

    );

#### Step 3: Configure Database

Now that you have the environment configured, you need to create a database configuration for it. Copy the file ***app/config/database.php*** in ***app/config/local*** and edit it to match your local database settings. You can remove all the parts that you have not changed as this configuration file will be loaded over the initial one.

#### Step 4: Configure Mailer

In the same fashion, copy the ***app/config/mail.php*** configuration file in ***app/config/local/mail.php***. Now set the `address` and `name` from the `from` array in ***config/mail.php***. Those will be used to send account confirmation and password reset emails to the users.
If you don't set that registration will fail because it cannot send the confirmation email.

#### Step 5: Populate Database
Run these commands to create and populate Users table:

	php artisan migrate
	php artisan db:seed

#### Step 6: Make sure app/storage is writable by your web server.

If permissions are set correctly:

    chmod -R 775 app/storage

Should work, if not try

    chmod -R 777 app/storage

### Important Folders and Files
#### app/assets
Contains the AngularJS javascripts files, and stylesheets for customizing your app.

#### app/views/index.php
Index file for the application.

#### public/assets
Contains the compiled javascripts, stylesheets and fonts.

#### public/partials
Contains the AngularJS partial views.

#### Others
Coming soon.

### Licensing

The MIT License (MIT)
Copyright (c) 2014 Cristian Calderón

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
