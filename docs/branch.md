# Branch Estrategies

> Note: Up until the first public release of a product, it absolutely makes sense to commit all changes directly to the main branch—even if you are a Git flow advocate—for the sake of the speed and simplicity of the development workflow. Since there’s no production yet, there’s no possibility of a production bug that the team needs to fix ASAP. Doing all the branching magic that classic Git flow implies is therefore overkill at this stage.

* [Trunk-based Development vs. Git Flow](https://www.toptal.com/software/trunk-based-development-git-flow)
    <details><summary>Expand</summary>
    
    ## Trunk-based

  ![enter image description here](https://uploads.toptal.io/blog/image/129304/toptal-blog-image-1551794413174-f4139c4be533dc592d49f9a0bcc330f0.png)

    Pros and Cons of Trunk-based Development
    Let’s take a closer look at both sides of the cost—the very best and very worst scenarios.

    ### When Does Trunk-based Development Work Best?
    - When you are just starting up.
    If you are working on your minimum viable product, then this style is perfect for you. It offers maximum development speed with minimum formality. Since there are no pull requests, developers can deliver new functionality at the speed of light. Just be sure to hire experienced programmers.

    - When you need to iterate quickly.
    Once you reached the first version of your product and you noticed that your customers want something different, then don’t think twice and use this style to pivot into a new direction. You are still in the exploration phase and you need to be able to change your product as fast as possible.

    ### When you work mostly with senior developers.
    - If your team consists mainly of senior developers, then you should trust them and let them do their job. This workflow gives them the autonomy that they need and enables them to wield their mastery of their profession. Just give them purpose (tasks to accomplish) and watch how your product grows.

    ### When Can Trunk-based Development Cause Problems?
    - When you run an open-source project.
    If you are running an open-source project, then Git flow is the better option. You need very strict control over changes and you can’t trust contributors. After all, anyone can contribute. Including online trolls.

    - When you have a lot of junior developers.
    If you hire mostly junior developers, then it’s a better idea to tightly control what they are doing. Strict pull requests will help them to to improve their skills and will find potential bugs more quickly.

    - When you have established product or manage large teams.
    If you already have a prosperous product or manage large teams at a huge enterprise, then Git flow might be a better idea. You want to have strict control over what is happening with a well-established product worth millions of dollars. Probably, application performance and load capabilities are the most important things. That kind of optimization requires very precise changes.
    ## Git Flow
    ![Git Flow branches](https://uploads.toptal.io/blog/image/129305/toptal-blog-image-1551794424851-b3d5928bc33edfc954ef460062e5cbcc.png)

    ### When Does Git Flow Work Best?
    - When you run an open-source project.
    This style comes from the open-source world and it works best there. Since everyone can contribute, you want to have very strict access to all the changes. You want to be able to check every single line of code, because frankly you can’t trust people contributing. Usually, those are not commercial projects, so development speed is not a concern.

    - When you have a lot of junior developers.
    If you work mostly with junior developers, then you want to have a way to check their work closely. You can give them multiple hints on how to do things more efficiently and help them improve their skills faster. People who accept pull requests have strict control over recurring changes so they can prevent deteriorating code quality.

    - When you have an established product.
    This style also seems to play well when you already have a successful product. In such cases, the focus is usually on application performance and load capabilities. That kind of optimization requires very precise changes. Usually, time is not a constraint, so this style works well here. What’s more, large enterprises are a great fit for this style. They need to control every change closely, since they don’t want to break their multi-million dollar investment.

    ### When Can Git Flow Cause Problems?
    - When you are just starting up.
    If you are just starting up, then Git flow is not for you. Chances are you want to create a minimal viable product quickly. Doing pull requests creates a huge bottleneck that slows the whole team down dramatically. You simply can’t afford it. The problem with Git flow is the fact that pull requests can take a lot of time. It’s just not possible to provide rapid development that way.

    - When you need to iterate quickly.
    Once you reach the first version of your product, you will most likely need to pivot it few times to meet your customers’ need. Again, multiple branches and pull requests reduce development speed dramatically and are not advised in such cases.

    - When you work mostly with senior developers.
    If your team consists mainly of senior developers who have worked with one another for a longer period of time, then you don’t really need the aforementioned pull request micromanagement. You trust your developers and know that they are professionals. Let them do their job and don’t slow them down with all the Git flow bureaucracy.

    </details>
* 