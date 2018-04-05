module.exports = (grunt) ->
  # Initial grunt configurations
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    clean: [ 'docs', '_tmp' ]
    replace:
      boldSyntaxElements:
        options: patterns: [ {
          match: /@@[a-zA-Z_0-9]*(\[[^\]]*\])*/g
          replacement: (match) ->
            '<b class="syntax-element">' + match.substring(2) + '</b>'
        } ]
        files: [
          { src:  '_site/index.html', dest: 'docs/index.html' },
          { src:  '_site/pdf.html', dest: 'docs/av1-spec.html' }
        ]
      preserveIndents:
        options:
          patterns: [ {
            match: /^\|([ ]){2,}/gm
            replacement: (match) ->
              '| ' + '&nbsp;'.repeat(match.substring(1).length - 1)
          } ]
        files: [
          { src:  '98.testing.md', dest: '_tmp/' },
          { src:  '04.conventions.md', dest: '_tmp/' },
          { src:  '06.bitstream.syntax.md', dest: '_tmp/' }
          { src:  'annex.b.superframes.md', dest: '_tmp/' }
        ]
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
        src: '.'
        dest: '_site'
      serve: options:
        serve: false
    connect:
      remote:
        options:
          hostname: '*'
          port: process.env.AV1_SPEC_PORT ? 4000
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
    exec:
      pdf:
        cmd: 'prince docs/av1-spec.html -o docs/av1-spec.pdf'
        stderr: false
  # Load the NPM tasks.
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-jekyll'
  grunt.loadNpmTasks 'grunt-replace'
  grunt.loadNpmTasks('grunt-exec');
  # Register the default tasks.
  grunt.registerTask 'default', [
    'clean'
    'replace:preserveIndents'
    'jekyll'
    'replace:boldSyntaxElements'
    'copy'
  ]
  return
