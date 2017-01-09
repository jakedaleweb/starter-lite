let mix = require("laravel-mix").mix;

mix.setCachePath("src/cache");
mix.setPublicPath("dist");

mix.js("src/js/main.js", "dist/js/main.js");
mix.sass("src/scss/main.scss", "dist/css/main.css");
