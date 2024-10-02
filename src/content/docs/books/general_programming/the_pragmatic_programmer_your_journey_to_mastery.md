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

## How to write comments

-   For non-API things, restrict the commenting to discussing why something is done, its purpose and its goal, as the code already shows how it is done.
-   This can include engineering trade-offs, why decisions were made, what other alternatives were discarded.

## ETC (Easier to change) principle

-   Make the code that you write easily replaceable.
-   All the design principles discussed in the book are a special case of ETC.
-   If there are multiple paths to solve a problem, identify the one which is easiest to change in the future.

## DRY (Don't repeat yourself) principle

Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.

-   Duplicating knowledge in the specification, processes, and programs are bad from a maintenance perspective, as a single change has to be made at multiple places.
-
