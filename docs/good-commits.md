# Good commits

## How to Create Good Commits



## How to Write Good Commit Messages

<details><summary>Git Commit Message Templates</summary>

[link](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)

For instance, consider a template file at `~/.gitmessage.txt` that looks like this:
```
Subject line (try to keep under 50 characters)

Multi-line description of commit,
feel free to be detailed.

[Ticket: X]
```
Note how this commit template reminds the committer to keep the subject line short (for the sake of `git log --oneline` output), to add further detail under that, and to refer to an issue or bug tracker ticket number if one exists.

To tell Git to use it as the default message that appears in your editor when you run git commit, set the commit.template configuration value:
```
$ git config --global commit.template ~/.gitmessage.txt
$ git commit
```
Then, your editor will open to something like this for your placeholder commit message when you commit:
```
Subject line (try to keep under 50 characters)

Multi-line description of commit,
feel free to be detailed.

[Ticket: X]
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
# modified:   lib/test.rb
#
~
~
".git/COMMIT_EDITMSG" 14L, 297C
````

If your team has a commit-message policy, then putting a template for that policy on your system and configuring Git to use it by default can help increase the chance of that policy being followed regularly.

</details>

<details><summary>How to Write a Git Commit Message </summary>

[Link](https://cbea.ms/git-commit/)
## The seven rules of a great Git commit message    

> Keep in mind: <a href="http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html">This</a> <a href="https://www.git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project#_commit_guidelines">has</a> <a href="https://github.com/torvalds/subsurface-for-dirk/blob/master/README.md#contributing">all</a> <a href="http://who-t.blogspot.co.at/2009/12/on-commit-messages.html">been</a> <a href="https://github.com/erlang/otp/wiki/writing-good-commit-messages">said</a> <a href="https://github.com/spring-projects/spring-framework/blob/30bce7/CONTRIBUTING.md#format-commit-messages">before</a>.</em></blockquote>
<ol><li><a href="#separate">Separate subject from body with a blank line</a></li><li><a href="#limit-50">Limit the subject line to 50 characters</a></li><li><a href="#capitalize">Capitalize the subject line</a></li><li><a href="#end">Do not end the subject line with a period</a></li><li><a href="#imperative">Use the imperative mood in the subject line</a></li><li><a href="#wrap-72">Wrap the body at 72 characters</a></li><li><a href="#why-not-how">Use the body to explain <em>what</em> and <em>why</em> vs. <em>how</em></a></li></ol>
</details>

<details><summary>A diff will tell you what changed, but only the commit message can properly tell you why</summary>

[Link](http://who-t.blogspot.com/2009/12/on-commit-messages.html)

**Any software project is a collaborative project.**

> Re-establishing the context of a piece of code is wasteful. We can’t avoid it completely, so our efforts should go to reducing it [as much] as possible. Commit messages can do exactly that and as a result, _a commit message shows whether a developer is a good collaborator._   
> _**Peter Hutterer**_

A good commit message should answer three questions about a patch:

* Why is it necessary? It may fix a bug, it may add a feature, it may improve performance, reliabilty, stability, or just be a change for the sake of correctness.

* How does it address the issue? For short obvious patches this part can be omitted, but it should be a high level description of what the approach was.

* What effects does the patch have? (In addition to the obvious ones, this may include benchmarks, side effects, etc.)

These three questions establish the context for the actual code changes, **put reviewers and others into the frame of mind to look at the diff and check if the approach chosen was correct**. A good commit message also helps maintainers to decide if a given patch is suitable for stable branches or inclusion in a distribution.
</details>
   
<details><summary>Conventional Commits</summary>

[link](https://www.conventionalcommits.org/en/v1.0.0/)



## Summary
<p>The Conventional Commits specification is a lightweight convention on top of commit messages.
It provides an easy set of rules for creating an explicit commit history;
which makes it easier to write automated tools on top of.
This convention dovetails with <a href="http://semver.org">SemVer</a>,
by describing the features, fixes, and breaking changes made in commit messages.</p>
<p>The commit message should be structured as follows:</p>
<hr>
<pre><code>&lt;type&gt;[optional scope]: &lt;description&gt;

[optional body]

[optional footer(s)]
</code></pre><hr>
<p><!-- raw HTML omitted -->
The commit contains the following structural elements, to communicate intent to the
consumers of your library:</p>
<ol>
<li><strong>fix:</strong> a commit of the <em>type</em> <code>fix</code> patches a bug in your codebase (this correlates with <a href="http://semver.org/#summary"><code>PATCH</code></a> in Semantic Versioning).</li>
<li><strong>feat:</strong> a commit of the <em>type</em> <code>feat</code> introduces a new feature to the codebase (this correlates with <a href="http://semver.org/#summary"><code>MINOR</code></a> in Semantic Versioning).</li>
<li><strong>BREAKING CHANGE:</strong> a commit that has a footer <code>BREAKING CHANGE:</code>, or appends a <code>!</code> after the type/scope, introduces a breaking API change (correlating with <a href="http://semver.org/#summary"><code>MAJOR</code></a> in Semantic Versioning).
A BREAKING CHANGE can be part of commits of any <em>type</em>.</li>
<li><em>types</em> other than <code>fix:</code> and <code>feat:</code> are allowed, for example <a href="https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional">@commitlint/config-conventional</a> (based on the <a href="https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines">the Angular convention</a>) recommends <code>build:</code>, <code>chore:</code>,
<code>ci:</code>, <code>docs:</code>, <code>style:</code>, <code>refactor:</code>, <code>perf:</code>, <code>test:</code>, and others.</li>
<li><em>footers</em> other than <code>BREAKING CHANGE: &lt;description&gt;</code> may be provided and follow a convention similar to
<a href="https://git-scm.com/docs/git-interpret-trailers">git trailer format</a>.</li>
</ol>
<p>Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in Semantic Versioning (unless they include a BREAKING CHANGE).
<!-- raw HTML omitted --><!-- raw HTML omitted -->
A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., <code>feat(parser): add ability to parse arrays</code>.</p>
<h2 id="examples"><a class="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="" href="#examples" style="font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 1em; line-height: inherit; font-family: anchorjs-icons; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Examples</h2>
<h3 id="commit-message-with-description-and-breaking-change-footer"><a class="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="" href="#commit-message-with-description-and-breaking-change-footer" style="font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 1em; line-height: inherit; font-family: anchorjs-icons; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Commit message with description and breaking change footer</h3>
<pre><code>feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
</code></pre><h3 id="commit-message-with--to-draw-attention-to-breaking-change"><a class="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="" href="#commit-message-with--to-draw-attention-to-breaking-change" style="font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 1em; line-height: inherit; font-family: anchorjs-icons; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Commit message with <code>!</code> to draw attention to breaking change</h3>
<pre><code>feat!: send an email to the customer when a product is shipped
</code></pre><h3 id="commit-message-with-scope-and--to-draw-attention-to-breaking-change"><a class="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="" href="#commit-message-with-scope-and--to-draw-attention-to-breaking-change" style="font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 1em; line-height: inherit; font-family: anchorjs-icons; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Commit message with scope and <code>!</code> to draw attention to breaking change</h3>
<pre><code>feat(api)!: send an email to the customer when a product is shipped
</code></pre><h3 id="commit-message-with-both--and-breaking-change-footer"><a class="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="" href="#commit-message-with-both--and-breaking-change-footer" style="font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 1em; line-height: inherit; font-family: anchorjs-icons; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Commit message with both <code>!</code> and BREAKING CHANGE footer</h3>
<pre><code>chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
</code></pre><h3 id="commit-message-with-no-body"><a class="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="" href="#commit-message-with-no-body" style="font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 1em; line-height: inherit; font-family: anchorjs-icons; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Commit message with no body</h3>
<pre><code>docs: correct spelling of CHANGELOG
</code></pre><h3 id="commit-message-with-scope"><a class="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="" href="#commit-message-with-scope" style="font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 1em; line-height: inherit; font-family: anchorjs-icons; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Commit message with scope</h3>
<pre><code>feat(lang): add Polish language
</code></pre><h3 id="commit-message-with-multi-paragraph-body-and-multiple-footers"><a class="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="" href="#commit-message-with-multi-paragraph-body-and-multiple-footers" style="font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 1em; line-height: inherit; font-family: anchorjs-icons; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Commit message with multi-paragraph body and multiple footers</h3>
<pre><code>fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
</code></pre><h2 id="specification"><a class="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="" href="#specification" style="font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 1em; line-height: inherit; font-family: anchorjs-icons; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Specification</h2>
<p>The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in <a href="https://www.ietf.org/rfc/rfc2119.txt">RFC 2119</a>.</p>
<ol>
<li>Commits MUST be prefixed with a type, which consists of a noun, <code>feat</code>, <code>fix</code>, etc., followed
by the OPTIONAL scope, OPTIONAL <code>!</code>, and REQUIRED terminal colon and space.</li>
<li>The type <code>feat</code> MUST be used when a commit adds a new feature to your application or library.</li>
<li>The type <code>fix</code> MUST be used when a commit represents a bug fix for your application.</li>
<li>A scope MAY be provided after a type. A scope MUST consist of a noun describing a
section of the codebase surrounded by parenthesis, e.g., <code>fix(parser):</code></li>
<li>A description MUST immediately follow the colon and space after the type/scope prefix.
The description is a short summary of the code changes, e.g., <em>fix: array parsing issue when multiple spaces were contained in string</em>.</li>
<li>A longer commit body MAY be provided after the short description, providing additional contextual information about the code changes. The body MUST begin one blank line after the description.</li>
<li>A commit body is free-form and MAY consist of any number of newline separated paragraphs.</li>
<li>One or more footers MAY be provided one blank line after the body. Each footer MUST consist of
a word token, followed by either a <code>:&lt;space&gt;</code> or <code>&lt;space&gt;#</code> separator, followed by a string value (this is inspired by the
<a href="https://git-scm.com/docs/git-interpret-trailers">git trailer convention</a>).</li>
<li>A footer’s token MUST use <code>-</code> in place of whitespace characters, e.g., <code>Acked-by</code> (this helps differentiate
the footer section from a multi-paragraph body). An exception is made for <code>BREAKING CHANGE</code>, which MAY also be used as a token.</li>
<li>A footer’s value MAY contain spaces and newlines, and parsing MUST terminate when the next valid footer
token/separator pair is observed.</li>
<li>Breaking changes MUST be indicated in the type/scope prefix of a commit, or as an entry in the
footer.</li>
<li>If included as a footer, a breaking change MUST consist of the uppercase text BREAKING CHANGE, followed by a colon, space, and description, e.g.,
<em>BREAKING CHANGE: environment variables now take precedence over config files</em>.</li>
<li>If included in the type/scope prefix, breaking changes MUST be indicated by a
<code>!</code> immediately before the <code>:</code>. If <code>!</code> is used, <code>BREAKING CHANGE:</code> MAY be omitted from the footer section,
and the commit description SHALL be used to describe the breaking change.</li>
<li>Types other than <code>feat</code> and <code>fix</code> MAY be used in your commit messages, e.g., <em>docs: updated ref docs.</em></li>
<li>The units of information that make up Conventional Commits MUST NOT be treated as case sensitive by implementors, with the exception of BREAKING CHANGE which MUST be uppercase.</li>
<li>BREAKING-CHANGE MUST be synonymous with BREAKING CHANGE, when used as a token in a footer.</li>
</ol>
<h2 id="why-use-conventional-commits"><a class="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="" href="#why-use-conventional-commits" style="font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 1em; line-height: inherit; font-family: anchorjs-icons; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Why Use Conventional Commits</h2>
<ul>
<li>Automatically generating CHANGELOGs.</li>
<li>Automatically determining a semantic version bump (based on the types of commits landed).</li>
<li>Communicating the nature of changes to teammates, the public, and other stakeholders.</li>
<li>Triggering build and publish processes.</li>
<li>Making it easier for people to contribute to your projects, by allowing them to explore
a more structured commit history.</li>
</ul>
</details>
