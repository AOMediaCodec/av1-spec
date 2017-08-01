---
---
# Draft AV1 Bitstream & Decoding Process Specification

![AV1 logo graphic](images/av1-logo-297x142.png)

This document, once published, will define the AV1 video codec bitstream format
and decoding process.

The document is built from plaintext section and subsection [Markdown] files
(more specifically, [kramdown] files) using the [Jekyll] static site building
tool.


**Contents**

* TOC
{:toc}


## Building Locally

Contributors will want to preview their edits locally before submitting patches
for review. Doing so requires a sane Ruby and rubygems environment. We use
[rbenv] and [bundler] to "groom" the project environment and avoid conflicts.

_**Note** that all commands are to be run as an ordinary, unprivileged user._


### Ruby and rbenv

This project currently depends on Ruby v2.3.0. Because your distro may lack this
version -- or installing it may conflict with your system's installed version --
first **[install rbenv]**, then install Ruby v2.3.0 within it (again, in
userland).

~~~~~
# list all available versions:
$ rbenv install -l
2.2.6
2.3.0-dev
2.3.0-preview1
2.3.0-preview2
2.3.0

# install a Ruby version:
$ rbenv install 2.3.0
~~~~~


### Bundler

Gem dependencies are managed by [bundler].

~~~~~
$ gem install bundler

# Filesystem location where gems are installed
$ gem env home
# => ~/.rbenv/versions/<ruby-version>/lib/ruby/gems/...
~~~~~


### Clone the Repo

~~~~~
git clone https://aomedia.googlesource.com/av1-spec
cd av1-spec
~~~~~


### Set Local Ruby Version (rbenv)

In the directory of your local clone, do:

~~~~~
rbenv local 2.3.0
~~~~~

Regardless of any other Rubies installed on your system, the project environment
will now use v2.3.0 and gems appropriate for it.


### Install Gem Dependencies with Bundler

In the directory of your local clone, run

~~~~~
bundle install
~~~~~

Bundler will set dependencies and install needed gems as listed in
`Gemfile.lock`.

_**Note** that you may need Ruby development headers installed on your system
for some gems to compile successfully._


### Build and Preview Locally with Jekyll

~~~~~
bundle exec jekyll serve
~~~~~

This will build the document and launch a local webserver at
`http://127.0.0.1:4000/av1-spec/` (by default). Jekyll will also watch the
the filesystem for changes and rebuild the document as needed. Reload your
browser tab to view any changes you've made.


## Git at Google, and Gerrit

The project is [hosted on Git at Google](https://aomedia.googlesource.com/),
which uses the Gerrit code review tool. Prospective contributors must have a
Google account and a working knowledge of [Gerrit]. In particular, contributors
must install the Gerrit [commit-msg] script in their local repo for Gerrit to
accept any patches they push to it for review.


[Markdown]: https://daringfireball.net/projects/markdown/
[kramdown]: https://kramdown.gettalong.org/
[Jekyll]: https://jekyllrb.com/
[rbenv]: https://github.com/rbenv/rbenv
[bundler]: http://bundler.io/
[install rbenv]: https://github.com/rbenv/rbenv#installation
[Gerrit]: https://gerrit-review.googlesource.com/Documentation/
[commit-msg]: https://gerrit-review.googlesource.com/Documentation/cmd-hook-commit-msg.html