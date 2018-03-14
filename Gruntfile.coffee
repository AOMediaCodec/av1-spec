module.exports = (grunt) ->
  # Initial grunt configurations
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    clean: [ 'docs', '_site', '_tmp' ]
    replace:
      boldSyntaxElements:
        options: patterns: [ {
          match: /@@[a-zA-Z_0-9]*(\[[^\]]*\])*/g
          replacement: (match) ->
            '<b class="syntax-element">' + match.substring(2) + '</b>'
        } ]
        files: [ {
          src:  '_site/index.html'
          dest: 'docs/index.html'
        } ]
      preserveIndents:
        options:
          patterns: [ {
            match: /^\|([ ]){2,}/gm
            replacement: (match) ->
              '| ' + '&nbsp;'.repeat(match.substring(1).length - 1)
          } ]
        files: [ {
          src:  '_site/98.testing.md'
          dest: '_site/'
        } ]
    copy:
      docs:
        files: [ {
          expand: true
          cwd: '_site'
          src: 'assets/**'
          dest: 'docs/'
        } ]
      readme:
        files: [ {
          expand: true  # Not intuitive
          flatten: true # Not intuitive
          src: '_site/README.html'
          dest: 'docs/'
        } ]
      deprecated: # Preserves ArgonDesign webserver scheme
        files: [ {
          src: 'docs/index.html'
          dest: '_site/av1-spec.html'
        } ]
    jekyll:
      options:
        bundleExec: true
        skip_initial_build: false
        verbose: false
        dest: '_site'
      serve: options:
        serve: false
    connect:
      remote:
        options:
          hostname: '*'
          port: 4000
          base: '.'
          keepalive: true
          livereload: false
      local:
        options:
          hostname: '*'
          port: 4000
          base: '.'
          keepalive: true
          open: 'http://127.0.0.1:4000/docs/'
          livereload: false
      nospawn:
        options:
          hostname: '*'
          port: 4000
          base: '.'
          keepalive: true
          livereload: false
  # Load the NPM tasks.
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-jekyll'
  grunt.loadNpmTasks 'grunt-replace'
  # Register the default tasks.
  grunt.registerTask 'default', [
    'clean'
    #'replace:preserveIndents'
    'jekyll'
    'replace:boldSyntaxElements'
    'copy'
  ]
  return
