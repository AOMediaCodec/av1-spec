
# Draft AV1 Bitstream & Decoding Process Specification

![AV1 logo graphic](images/av1-logo-297x142.png)

This document, once published, will define the AV1 video codec bitstream format
and decoding process.

The document is built from plaintext section and subsection [Markdown] files
(more specifically, [kramdown] files) using the [Jekyll] static site building
tool. GitHub supports Jekyll natively.


## Building Locally

Contributors will want to preview their edits locally before submitting pull
requests. Doing so requires a sane Ruby and rubygems environment. We use [rbenv]
and [bundler] to "groom" the project environment and avoid conflicts.

_**Note** that all commands are to be run as an ordinary, unprivileged user._


### Ruby and rbenv

This project currently depends on Ruby v2.3.0. Because your distro may lack this
version -- or installing it may conflict with your system's installed version --
first [install rbenv], then install Ruby v2.3.0 within it (again, in userland).

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


## Fork and Clone the Repo

First, use the **Fork** button on the repo's [homepage] to fork a copy to your
GitHub account.

Second, clone your fork locally:

~~~~~
git clone git@github.com:<username>/av1-bitstream.git
cd av1-bitstream
~~~~~

_**Note** that we **strongly** suggest [using SSH] with GitHub, not HTTPS._

Third, add a Git remote `upstream` that points to webmproject/av1-bitstream:

~~~~~
git remote add upstream git@github.com:webmproject/av1-bitstream.git
~~~~~

Your local repo with then have two remotes, `upstream` pointing at the
authoritative GitHub repo and `origin` pointing at your GitHub fork.

~~~~~
$ git remote
origin
upstream

$ git remote show origin
* remote origin
  Fetch URL: git@github.com:<username>/av1-bitstream.git
  Push  URL: git@github.com:<username>/av1-bitstream.git
  HEAD branch: master
  Remote branch:
    master tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)

$ git remote show upstream
* remote upstream
  Fetch URL: git@github.com:webmproject/av1-bitstream.git
  Push  URL: git@github.com:webmproject/av1-bitstream.git
  HEAD branch: master
  Remote branch:
    master tracked
  Local ref configured for 'git push':
    master pushes to master (up to date)
~~~~~

[**See this page**][1] for a longer discussion of managing remotes and general
GitHub workflow.


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
bundle exec jekyll serve --watch
~~~~~

This will build the document and launch a local webserver at
`http://127.0.0.1:4000/av1-bitstream/` (by default). Jekyll will also watch the
the filesystem for changes and rebuild the document as needed.


## General GitHub Workflow

Always do your work in a local branch.

~~~~~
git co -b my-branch-name
## work ##
git add <filenames or -A for all>
git ci -m "Reasonably clear commit message"
~~~~~

Push your branch to `origin` (your GitHub fork):

~~~~~
git push origin my-branch-name
~~~~~

Next, visit the `upstream` [homepage]. GitHub will be aware of your recently
pushed branch, and offer an in-page widget for submitting a pull request for the
project maintainers to consider.

Once your pull request is merged into upstream's master branch, you may
synchronize your clone (and remote `origin`) as follows:

~~~~~
git co master
git fetch upstream
git merge upstream/master
git push origin
~~~~~

Your old working branch is no longer needed, so do some housekeeping:

~~~~~
git br -d my-branch-name
~~~~~


[Markdown]: https://daringfireball.net/projects/markdown/
[kramdown]: https://kramdown.gettalong.org/
[Jekyll]: https://jekyllrb.com/
[rbenv]: https://github.com/rbenv/rbenv
[bundler]: http://bundler.io/
[install rbenv]: https://github.com/rbenv/rbenv#installation
[homepage]: https://github.com/webmproject/av1-bitstream
[using SSH]: https://help.github.com/articles/connecting-to-github-with-ssh/
[1]: https://2buntu.com/articles/1459/keeping-your-forked-repo-synced-with-the-upstream-source/ 
