module.exports = (grunt) ->
  # Initial grunt configurations
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    clean: [ 'docs' ]
    copy: files: {
      expand: true
      src: 'assets/**'
      dest: 'docs/'
    }
    replace: dist:
      options: patterns: [ {
        match: /@@[a-zA-Z_0-9]*(\[[^\]]*\])*/g
        replacement: (match) ->
          '<b class="syntax-element">' + match.substring(2) + '</b>'

      } ]
      files: [ {
        src: [ '_site/index.html' ]
        dest: 'docs/index.html'
      } ]
    jekyll:
      options:
        bundleExec: true
        skip_initial_build: false
        verbose: true
      serve: options:
        serve: true
        dest: '.jekyll'
  # Load the NPM tasks.
  grunt.loadNpmTasks 'grunt-jekyll'
  grunt.loadNpmTasks 'grunt-replace'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  # Register the default tasks.
  grunt.registerTask 'default', [
    'clean'
    'copy'
    'replace'
  ]
  return
