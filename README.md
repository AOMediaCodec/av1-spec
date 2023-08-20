
This document provides instructions for working with the [draft] AV1 Bitstream
&amp; Decoding Process Specification.

The specification document is built from plaintext section and subsection
[Markdown] files (more specifically, [kramdown] files) using the [Jekyll] static
site generator tool.

The document build process employs a common [NodeJS]-based web development
toolchain, requiring Node, [npm] (the Node package manager), and [GruntJS], a Node-based task runner.

**Note:** As a general rule, the packages described below should be installed
in user space, not at the system level -- in other words, **do not** install
them as root or via `sudo`. An exception is Ruby development headers, which are
usually needed to build Ruby and certain Ruby gems.
{:.alert .alert-info }


### Ruby and rbenv

This project currently depends on Ruby v3.2.0. Because your distro may lack this
version -- or installing it may conflict with your system's installed version --
first **[install rbenv]**, then install Ruby v3.2.0 within it.

~~~~~ bash
# list all available versions:
$ rbenv install -l
3.1.4
3.2.0
3.2.2
jruby-9.4.2.0
mruby-3.2.0

# install a Ruby version:
$ rbenv install 3.2.0
~~~~~

Depending on your distro and environment, you may have trouble building a
particular Ruby version. The rbenv project site maintains a
[wiki page with troubleshooting help](https://github.com/rbenv/ruby-build/wiki).


### Bundler

Gem dependencies are managed with **[bundler]**.

~~~~~ bash
$ gem install bundler

# Filesystem location where gems are installed
$ gem env home
# => ~/.rbenv/versions/<ruby-version>/lib/ruby/gems/...
~~~~~


### Clone the Repo

~~~~~ bash
git clone git@github.com:AOMediaCodec/av1-spec.git
cd av1-spec
~~~~~


### Set Local Ruby Version (rbenv)

In the directory of your local clone, do:

~~~~~ bash
rbenv local 3.2.0
~~~~~

Regardless of any other Rubies installed on your system, the project environment
will now use v3.2.0 and gems appropriate for it.


### Install Gem Dependencies with Bundler

In the directory of your local clone, run

~~~~~ bash
bundle install
~~~~~

Bundler will set dependencies and install needed gems as listed in
[`Gemfile.lock`].


### NodeJS, npm and GruntJS

Follow **[these instructions]** for installing NodeJS and npm.

Next -- from the project directory -- update npm, install the grunt package,
and install the project's Node dependencies:

~~~~~ bash
## Update npm globally
npm update -g npm

## Install grunt globally
npm install -g grunt-cli

## Install the project's Node dependencies
## (uses package.json and Gruntfile)
npm install
~~~~~


### Grunt Tasks

Building the document is done via Grunt tasks, configured in the CoffeeScript
file [`Gruntfile.coffee`].

There are tasks to

  * clean output directories
  * perform some automated text transformations on the content files
  * build the document with Jekyll
  * copy output files to the correct directories for serving and viewing

These tasks are invoked in turn by the Grunt default task:

~~~~~
$ grunt
~~~~~


#### PDF

Additionally, there is a task `grunt exec` for generating the spec as a PDF
file. It invokes the commercial tool [Prince] (formerly PrinceXML), which must
first be installed on your system. PDF generation can then be done with:

~~~~~
$ grunt && grunt exec
~~~~~

Note that while we are generating PDF as a convenience format during document
development, the canonical spec will likely be served as HTML, not PDF.
{:.alert .alert-info }


[draft]: https://aomediacodec.github.io/av1-spec/
[Markdown]: https://daringfireball.net/projects/markdown/
[kramdown]: https://kramdown.gettalong.org/
[Jekyll]: https://jekyllrb.com/
[rbenv]: https://github.com/rbenv/rbenv
[bundler]: https://bundler.io/
[install rbenv]: https://github.com/rbenv/rbenv#installation
[GruntJS]: https://gruntjs.com/
[NodeJS]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[`Gemfile.lock`]: https://github.com/AOMediaCodec/av1-spec/blob/master/Gemfile.lock
[these instructions]: https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/
[`Gruntfile.coffee`]: https://github.com/AOMediaCodec/av1-spec/blob/master/Gruntfile.coffee
[Prince]: https://www.princexml.com/
