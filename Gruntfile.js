module.exports = function( grunt ) {
    // Initial grunt configurations
    grunt.initConfig({
        // Read the package manifest.
        pkg: grunt.file.readJSON( "package.json" ),
        replace: {
          dist: {
            options: {
              patterns: [
                {
                  match: /@@[a-zA-Z_0-9]*(\[[^\]]*\])*/g,
                  replacement: function(match) { return "<b>" + match.substring(2) + "</b>"; }
                }
              ]
            },
            files: [
              { src: ["_site/index.html"], dest: "_site/av1-spec.html" }
            ]
          }
        },
        jekyll: {
          options: {
            bundleExec: true,
            skip_initial_build: false,
            verbose: true,
          },
          serve: {
            options: {
              serve: true,
              dest: ".jekyll",
            }
          }
        }
    }) //grunt.initConfig
    // Load the NPM tasks.
    grunt.loadNpmTasks( "grunt-jekyll" );
    grunt.loadNpmTasks( "grunt-replace" );
    // Register the default tasks.
    grunt.registerTask( "default", "replace");
} //module.exports
