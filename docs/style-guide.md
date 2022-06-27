## Why do we have a style guide for Git?

We have a style guide for the following reasons: 

-   To help new team members understand how we use Git and GitHub
-   To help us all be consistent in how we use Git
-   To explain why we have some Git conventions

### Commits should be atomic

This means they should contain one change or fix. Each commit should represent working or at least buildable code.

Atomic commits are easier to roll back, easier to be cherry-picked and ported into another pull requests, easier to understand, and easier to reorder when you’re trying to show the work in the most coherent way. 

**Tip: If your commit summary contains an ‘and’ it might be a candidate for being broken down into more commits!**

### Commit messages should tell you what and why

Your commit message should say “what” the change was for scanning purposes, and “why” you made it. It’s easy to see what a change was, you can look at the diff,  but why a change was made should be recorded in the commit message.

Example of a [good commit message](https://github.com/Financial-Times/next-myft-jobs/pull/96/commits/7cfc091657ce2155ffc7b3f60646c2a706eaece0) from Tatiana Stantonian:

    Get supersededBy ids from Things API

    This gets the related concepts information from the Things API, and for those
    that are superseding concepts retrieves their id.

    This also returns default values for each property to ensure that these values
    always have the same type, regardless of whether Things API returned a value
    for them. This means buildChangedList won't need to do that anymore.

## Structure

Commit messages should start with a one-line summary no longer than 70 characters. Github truncates summaries longer than 70 characters which makes them impossible to visually scan when debugging.

Write your commit messages for scanning - use bullet points and new lines.

You can (and should!) configure your editor to make help you write your commits like this.

[This blog post from Chris Beams](https://chris.beams.io/posts/git-commit/) contains more great tips for writing a good commit message.

## Branching and Merging

We use GitHub. Do your work in a branch and then open a pull request to the main branch (mostly ‘main’, but there are still some references to ‘master’ which we're migrating).

Don’t forget you can Use Git’s history rewriting features to organise your commits into a coherent order before you request a review locally before pushing to remote. ([Atlassian has a good tutorial on rewriting history if you'd like more information on how to do this](https://www.atlassian.com/git/tutorials/rewriting-history)).

We use GitHub, which offers options for merging.

Avoid squash and merge (aka The Squerge). Squashing puts all your commits into a single commit which means you lose all the detail of having a commit message associated with a change. Bugs introduced through a ‘squerge’ are harder to find!

Read more about GitHub’s merging options on their [page about merge methods](https://help.github.com/en/articles/about-merge-methods-on-github)

Use `git rebase` to keep your feature branch up to date with main. Rebasing local branches off of main allows for fast-forward merges which give a much cleaner Git history.

## Pull Requests

Except in emergencies, where the stability of the site depends on it, do not merge your own pull requests without a peer review.

Even trivial pull requests should be reviewed by someone else as they give people low effort exposure to new bits of code, practise in reviewing PRs, and help other people in the team see what code is being worked on.

In general, favour smaller pull requests which can be dealt with quickly rather than epics.

Pull requests should be structured to help the reviewer understand the changes and work through them. GitHub pull requests are written in markdown so you can use the full expressive power of markdown to explain your changes. Consider including GIFs or images if they would help the reviewer understand the change. 

## Reviewing Pull Requests

Reviewing pull requests is an important part of your job as a developer. It is a good way to share knowledge, spot bugs before they reach prod and identify hygiene issues. Though you are responsible for checking the code, if the code is difficult to review for any reason it is OK to ask for help or changes from the person that opened it.

Try to review pull requests assigned to you in a timely manner so they don’t become blockers.

If a set of changes is particularly complicated then use pair-reviews to walk through the changes with the author. This can help uncover unchallenged assumptions and lead to useful discussion.

When reviewing a pull request, remember to highlight anything you think is particularly good. Using pull requests to give praise for anything you think is particularly good or elegant is encouraged!

When reviewing a pull request think about:

-   Do any tests need to be added to cover this change
-   Does this change need to be documented in the README?
-   Does this change need to be documented in Biz-ops or a runbook
-   Is there anything “magic” happening in the code that needs some comments?
    -   For example have you used a magic pixel value in CSS to help something line up
    -   Have you used some weird old browser hack to make something work in IE9?
-   Are there any feature flags that need to be set up?
-   For front end changes, does this change work in all the browsers we support. Does it consider a what the core experience is (eg - how does it work in the browser without JavaScript?)

### Renaming files

When renaming files, keep it to a single commit, so that Git can preserve the history of the file, otherwise git-blame will make it appear that the whole file was written by the author who did the rename.


---
category: Architecture