/**
 * This Gruntfile is used to build the scripts.
 */

/*jshint
    unused: true,
    debug: true,
    devel: true,
    browser: true,
    asi: true
 */


module.exports = function( grunt ) {

    // Initial grunt configurations
    grunt.initConfig({


        // Read the package manifest.
        pkg: grunt.file.readJSON( 'package.json' ),


        // Concatenate the files and add banners.
        concat: {
            options: {
                banner: '/*!\n' +
                        ' * <%= pkg.title %> v<%= pkg.version %>, <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                        ' *\n' +
                        ' * Hosted on <%= pkg.homepage %>\n' +
                        ' * Copyright (c) <%= pkg.author.name %> (<%= pkg.author.url %>)\n' +
                        ' * Licensed under <%= pkg.licenses[ 0 ].type %> license.\n' +
                        ' */\n\n'
            },
            scripts: {
                src: '_scripts/*.js',
                dest: 'media/js/main.js'
            }
        },


        // Lint the build files.
        jshint: {
            files: [ 'media/js/main.js' ]
        },


        // Watch the project files.
        watch: {
            files: [ '_scripts/*.js' ],
            tasks: [ 'default' ]
        }
    }) //grunt.initConfig


    // Load the NPM tasks.
    grunt.loadNpmTasks( 'grunt-contrib-concat' )
    grunt.loadNpmTasks( 'grunt-contrib-watch' )
    grunt.loadNpmTasks( 'grunt-contrib-jshint' )


    // Register the default tasks.
    grunt.registerTask( 'default', [ 'jshint' ] )

    grunt.loadNpmTasks('grunt-replace');
    grunt.initConfig({
      replace: {
        dist: {
          options: {
            patterns: [
              {
                match: /utf-8/,
                replacement: 'utf-9'
              }
            ]
          },
          files: [
            {expand: true, flatten: true, src: ['_site/index.html'], dest: '_build'}
          ]
        }
      }
    });
    grunt.registerTask('default', 'replace');

} //module.exports


