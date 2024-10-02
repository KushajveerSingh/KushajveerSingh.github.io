---
title: 'The Pragmatic Programmer: Your Journey To Mastery'
---

**The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary (2nd Edition) by _David Thomas_, _Andrew Hunt_ (352 pages) (Sep 13, 2019)**

**Pragmatic** - Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.

**Kaizen** - Every day, work to refine the skills you have and to add new tools to your repertoire. Unlike the Eton lawns, you'll start seeing results in a matter of days. Over the years, you'll be amazed at how your experience has blossomed and how your skills have grown.

## Pragmatic Programmers

-   Attitude, style, philosophy of approaching problems and their solutions. The Pragmatic Programmers think beyond the immediate problem, placing it in a larger context and seeking out the bigger picture.
-   They take responsibility of themselves and their actions, and are not afraid to admit ignorance or error.
    -   Instead of blaming others or making excuses, provide a solution. In hard scenarios, providing multiple options might be necessary.
    -   Follow "I don't know" with "but I'll find out".
-   They write good enough software. Good enough for the users, for future maintainers, and for their own peace of mind.

## How good software becomes rot

-   One broken window, left unrepaired for any substantial length of time, instills in the inhabitants of the building a sense of abandonment, which leads to another broken window and thus software becomes worse over time.
-   Broken window can mean bad design choices, wrong decisions, or poor code.
-   _Solution_ - Take some action to prevent further damage and to show that you're on top of the situation.

## How to get approval for a change

-   In situation, when you know the things that needs to be done and how to do it, but you don't have permission to make the change (budget approval, forming committees, start-up fatigue).
-   _Solution_
    -   Work out what you can reasonably ask for. Develop it well, and then show it to the people and say "of course, it would be better if we added...".
    -   Then wait for them to ask you to add the functionality. People find it easier to join an ongoing success.

## Good software better than perfect software

-   Many users would rather use software with some rough edges today than wait a year for the perfect version. Plus in a year, something completely new might pop up anyway.
-   Giving users something to use early has to benefit of early feedback.
-   Once the program is deemed good, avoid overembellishment and overrefinement. This helps avoid feature bloat.

## How to keep up with knowledge

-   _Invest regularly_ - Plan a consistent time and place, away from interruptions, to invest in new knowledge, even if it is a small amount. Follow Kaizen principle.

    -   Learn at least one programming language eery year, as different languages solve the same problems in different ways.
    -   Read a technical book each month.
    -   After mastering the technologies you are currently using, branch out and study some that don't relate to your project.
    -   Read nontechnical books, to sharpen the soft skills.
    -   Take classes at local or online college, or at a trade show or conference.
    -   Participate in local user groups and meetups, to find out what people are working on outside your company.
    -   Experiment with different environments. Learn to use IDE, if you have always used editor or switch OS.
    -   Stay current. Read news and posts online on technology different from that of your current project.

-   _Diversify_ - Learn different things, including non-technical skills. And learn technologies that might not be related to your direct work (like quantum computing) as this makes adjusting to change easier.
-   _Manage risk_ - There is risky potentially high-reward to low-risk, low-reward technology. Diversify and don't put all your technical eggs in one basket.
-   _Buy low, sell high_ - Learning an emerging technology before it becomes popular is similar to finding an undervalued stock.
-   _Review and rebalance_ - The hot technology you started investigating last month might be stone cold by now.

## How to critically analyze things

-   Ask the "Five Whys" - Dig deeper by asking "why?".
-   Who does this benefit? - What is the flow of money.
-   What's the context?
-   When or Where would this work?
    -   Under what circumstances
    -   Is it too late
    -   Is it too early
    -   What will happen next
    -   When will happen after that
-   Why is this a problem?

## How to communicate

-   Treat English like another programming language. And apply DRY principle, ETC, automation, and so on.
-   Kow your audience, their needs, interests, and capabilities.
-   Goal of communication should be to gather feedback. Don't just wait for questions, ask for them.
-   Write an outline of what you want to say, and then ask yourself "Does this communicate what I want to express to my audience in a way that works for them?" Refine it until it does.
    -   Also, plan a couple of strategies for getting your points/ideas across, in case the conversation get's south.
-   Choose the right moment to have a conversation. Ask them "Is this a good time to talk about...?"
-   Adjust the style. Some people prefer a formal "just the facts" briefing, others like a long, wide-ranging chat before getting down to business. Knowing other person's interests and expertise can help with this.
-   The written communication should look good. Use software like Markdown and other dedicated tools for writing, to make it look good.
-   Try to involve your readers with early drafts to get their feedback.
-   If you don't listen to them, they won't listen to you. Encourage people to talk by asking questions, or ask them to restate the discussion in their own words.
-   Always respond to email and voicemail, even if the response if "I'll get back to you later." This makes them feel that you haven't forgotten them.

When communicating with users

-   The users have a vague idea of what they want to achieve, but they neither know nor care about the details. That is your job, to guess intent and convert it to code.
-   So don't give the users a requirements document to sign, as this will force them to make random changes to save face and sign it to get you out of their office.
-   Instead give them code that runs, and that they can play with.

## How to write comments

-   For non-API things, restrict the commenting to discussing why something is done, its purpose and its goal, as the code already shows how it is done.
-   This can include engineering trade-offs, why decisions were made, what other alternatives were discarded.

## ETC (Easier to change) principle

-   Make the code that you write easily replaceable.
-   All the design principles discussed in the book are a special case of ETC.
-   If there are multiple paths to solve a problem, identify the one which is easiest to change in the future.

## DRY (Don't repeat yourself) principle

Every piece of knowledge (not all code duplication is knowledge duplication) must have a single, unambiguous, authoritative representation within a system.

-   Duplicating knowledge in the specification, processes, and programs are bad from a maintenance perspective, as a single change has to be made at multiple places, and you have to remember to make those places and pass it down to the next person.
-   Acid test - when some single facet of the code has to change, do you have to make that change in multiple places. If you do, then the code is not DRY. For example, database scheme and a structure that holds it, code and documentation.
-   Use accessor functions (getters and setters) to read and write attributes of objects. This ensures the code does not depend on the data structure exposed by the object.
-   Duplication for performance cases. Make sure to localize the impact. The violation is not exposed to the outside world: only the methods within the class have to worry about keeping things straight.
-   Duplication across internal APIs. Specify the APIs in a neutral format (like OpenAPI), which lets you generate documentation, mock APIs, functional tests, and API clients.
-   Duplication across external APIs. If OpenAPI is not available, create one. OpenAPI lets you import the API spec into your local API tool.
-   Duplication across data sources. Rather than manually creating the code to contain the data, copy the schema and use that to create the data structure automatically.
    -   Another solution is to use a key-value data structure to store the data. And then add a table on top, to keep track of what each key-value store contains.
-   Duplication across teams. Encourage active and frequent communication between developers, and have a central place in the source tree where utility routines and scripts can be deposited. And use code reviews, to ensure people are reading other people's code.

## Orthogonality principle

Two or more things are orthogonal if changes in once do not affect any of the others.

-   Use a layers approach to design orthogonal systems. Because each layer uses only the abstractions provided by the layers below it, giving you more flexibility to make code changes.
-   Test for orthogonal design. If you change the requirements behind a particular function, how many modules are affected. In an orthogonal system, the answer should be "one". Moving a button on GUI should not impact the database schema.
-   Test how decoupled design is from real world.
    -   Using telephone number as identifier is bad, if the phone company decided to change the area code.
    -   Postal codes, Social Security Numbers or government IDs, email addresses, and domain are all external identifiers. These could change at any time for any reason.
    -   Do not rely on properties of things you can't control.
-   When using external APIs, check if using the API imposes changes on code that shouldn't be there.

How to maintain orthogonality

-   Keep your code decoupled. Create modules that don't reveal anything unnecessary to other modules and don't rely on other modules implementations.
    -   If you have to change an object's state, get the object to do it for you.
-   Avoid global data. When a component references global data, it ties itself into the other components that share that data. This is true for read only global data as well, due to problems with concurrency.
-   Avoid similar functions. Strategy pattern can be used to avoid this.
-   When writing unit tests, if you have import a large percentage of the rest of the system's code, then you found a module that is not well decoupled from the rest of the system.
-   When fixing bugs, assess how localized the fix is. Are the changes scattered throughout the entire system.

## Reversibility principle

Critical decisions aren't easily reversible, like what database to use, or that architectural patterns, or a certain deployment model. This cannot be undone, except at great expense.

-   Hide third-party APIs behind your own abstraction layer.
-   Break code into components, even if you end up deploying on a single server. This is easier than creating a monolithic application and splitting it.
-   No one knows what the future is gonna be. So when you see a new shiny thing, integrate it in a way, that it is easier to swap out with the new shiny thing that will come after that.

## Tracer bullet development for novel projects

When working on novel projects, don't spend a month producing 1000 pages describing the system. Use tracer code to know how the application as a whole hangs together, and show the users how the interactions will work in practice, and you want to give your developers an architectural skeleton on which to hang code.

-   Look for important requirements, the ones that define the system.
-   Look for areas where you have doubts, and where you see the biggest risks.
-   Prioritize development so that these are the first areas you code.
-   Build a "hello, world" equivalent. Get the system working for a simple use case, and then add stuff on top of that.
    -   It includes error checking, structuring, documentation, and putting thing in production.
    -   Then evaluate how close are you to the target, and readjust accordingly. Once you're on target, adding functionality is easy.

This is different from prototyping. A prototype is meant to be thrown away, while tracer system is going to be used as the final system.

## How to create prototypes

The code can ignore details, unimportant at the moment. Prototype things that carry risk, anything that hasn't been tried before, or that is absolutely critical to the final system. Details to ignore

-   Correctness - Use dummy data.
-   Completeness - You can use preselected input data and one menu item.
-   Robustness - Error checking is probably missing.
-   Style - No need to comments or documentation.

Goal of prototype is to learn lessons, instead of producing code.

You can prototype these things

-   Architecture
-   New functionality in an existing system
-   Structure or contents of external data
-   Third-party tools or components
-   Performance issues
-   user interface design

Things to learn after creating prototype

-   Are the responsibilities of the major areas well defined and appropriate?
-   Are the collaborations between major components well defined?
-   Is coupling minimized?
-   Can you identify potential sources of duplication?
-   Are interface definitions and constraints acceptable?
-   Does every module have an access path to the data it needs during execution? Does it have access when it needs it?

## How to do estimates

When giving someone as estimate, first figure out how accurate of an estimate does the other person want. 130 days and about 6 months have a different meaning.

| Duration   | Quote estimate in |
| ---------- | ----------------- |
| 1-15 days  | Days              |
| 3-6 weeks  | Weeks             |
| 8-20 weeks | Months            |
| 20+ weeks  | Do not estimate   |

Tips on estimating

-   Ask someone who has already done the thing you are trying to estimate.
-   Understand the scope before the estimate. And give the estimate stating the scope, for example "Assuming there is no traffic, I should be in 20 minutes."
-   From your understanding of the topic, build a rough-and-ready bare-bones mental model. And from that guess the estimate or say "You asked for an estimate to do X. However, it looks like Y, a variant of X, could be done in about half the time, and you lose only one feature."
-   Break the model into components, and do an estimate for each component. Each component will have parameters, which will contribute to the final estimate. And this is what will introduce the most inaccuracies as well.
-   After the project is over, do a retrospect and see where in the model/components/parameters you made mistakes, that got you an incorrect estimate.

Here is how you can present your estimate "Will, if everything goes right, and this paint has the coverage they claim, it might be as few as 10 hours. But that's unlikely: I'd guess a more realistic figure if closer to 18 hours. And, of course, if the weather turns bad, that could push it out to 30 or more."

And when management forces you for an estimate say "I'll get back to you." Make them understand that the team, their productivity, and the environment will determine the schedule.

To estimate when using tracer bullet approach - Complete the first iteration, and refine the initial guess on the number of iterations and what can be included in each.
