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
          src:  '98.testing.md'
          dest: '_tmp/98.testing.md'
        } ]
    copy:
      docs:
        files: [ {
          expand: true
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
    'replace:boldSyntaxElements'
    'copy'
  ]
  return
