const mix = require('laravel-mix');
const path = require('path');

require('./nova.mix');

mix.js('resources/js/field.js', 'dist/js')
   .sass('resources/sass/field.scss', 'dist/css')
    .vue({ version: 3 })
    .alias({
        'laravel-nova': path.join(__dirname, 'vendor/laravel/nova/resources/js/mixins/packages.js'),
        '@': path.join(__dirname, 'resources/js/'),
    })
