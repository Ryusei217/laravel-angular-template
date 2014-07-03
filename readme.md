## Laravel-Angular Template
Warning: This is an alpha version many features are no available!!!!

This is a template for build sites with Laravel 4 and AngularJS, contains all necesary features like Less for frontend and backend, javascript minification, easy to customize boostrap theme thanks to Bootswatch and others.

This project use composer, bower an grunt for an easy to build site and live reload features.

### Packages

#### Bower Packages
* [AngularJS](http://angularjs.org)
    * AngularJS lets you write client-side modern web applications (no available.
* [UI-Bootstrap](http://angular-ui.github.io/bootstrap/)
    *  Native AngularJS directives based on Twitter Bootstrap's markup and CSS (no available).
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

#### Step 2: Configure Database

Edit Config/databas.php to match your local database settings.

#### Step 3: Populate Database (no available)
Run these commands to create and populate Users table:

	php artisan migrate
	php artisan db:seed

#### Step 4: Make sure app/storage is writable by your web server.

If permissions are set correctly:

    chmod -R 775 app/storage

Should work, if not try

    chmod -R 777 app/storage

### Important Folders and Files
#### app/assets
Contains the javascripts and stylesheets for customizing your app.

#### app/views/index.php
Index file for the application.

#### public/assets
Contains the compiled javascripts, stylesheets and fonts.

#### public/app
Contains the AngularJS javascript files.

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