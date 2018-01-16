import React, { Component } from 'react'

class freeCodeBlog extends Component {
  render() {
    return (
      <div className='blog-entry'>
        <h4 className='blog-title'>
          3: reflect.get('experience with freeCodeCamp')
        </h4>
        <div className='blog-body'>
          <p>
            In the previous entry I described a couple of projects I had recently completed.
            I did not mention at the time that these were the final two project assignments
            in freeCodeCamp's Front End Development Certification program. Having earned 
            said certificate, the time has come to reflect on the experience and offer some
            advice to future self-taught programmmers.
          </p>
          <p>
            The curriculum is divided into twelve sections, starting with HTML/CSS basics 
            and concluding with advanced projects. I will attempt to summarize each as
            succinctly as possible.
          </p>
          <h5 className='blog-section-heading'>HTML/CSS Basics</h5>
          <p>
            I've known the rudiments of HTML and CSS for years, so this was not new
            information. freeCodeCamp gently guides students through a series of 
            examples, showing how to use tags, comments, change colors/sizes/fonts,
            create input fields and buttons, set class names and IDs, and so on. This
            is not going to confer upon students a level of HTML5 mastery, but will help
            them get up and running quickly. Still, I would recommend the use of 
            supplementary resources to deepen one's understanding of HTML5 and CSS3's newer 
            features.
          </p>
          <h5 className='blog-section-heading'>Responsive Design and Bootstrap</h5>
          <p>
            freeCodeCamp moves quickly into a primer on responsive design, introducing
            students to Bootstrap's grid-style layout system. I don't know why freeCodeCamp
            is pushing students toward Bootstrap when native CSS features like Flexbox, CSS
            Grid, and best practices such as using percent values for dynamic sizing rather 
            than set pixel amounts. I think freeCodeCamp did a pretty poor job designing
            this section of the curriculum and again recommend usage of supplemental
            resources. To be fair, responsive design is a complicated topic and freeCodeCamp
            provides a quality platform for exploration. Be prepared to seek further
            information elsewhere.
          </p>
          <h5 className='blog-section-heading'>jQuery</h5>
          <p>
            Wait a second... jQuery before JavaScript? This seems weird, and maybe it is. But
            freeCodeCamp wants students to learn basic DOM manipulation as early as possible.
            This gives students the ability to see tangible results quickly, increasing
            confidence and giving a taste of that powerful 'it works!' feeling. That might be
            a wise choice as the programmer's journey is front-loaded with frustration and
            self-doubt, discouraging further pursuit. freeCodeCamp walks students through
            eighteen jQuery lessons, using query selectors, removing/adding classes, and 
            targeting parent and child elements. Basic stuff, but basic stuff that enables
            the neophyte to create a crappy Geocities-style page.
          </p>
          <h5 className='blog-section-heading'>Basic Front End Development Projects</h5>
          <p>
            After three sections of basic lessons, students are assigned two projects: a 
            tribute page (link) and a personal portfolio. I decided to make my tribute page 
            in honor of Shane MacGowan of the Pogues, in part to celebrate his new teeth 
            (link) and partly in recognition of a life fully-lived. Making a portfolio page 
            felt like a presumptive assignment at the time, when students had only completed 
            a single project. I get that the idea is to populate the portfolio with future
            projects as they are completed, but by that time the quality of work improves 
            drastically, the portfolio itself pales in comparison and will need to be 
            redone anyway. Alas, one sometimes does the assigned work and quickly 
            forgets soon thereafter.             
          </p>
          <h5 className='blog-section-heading'>Basic Javascript</h5>
          <p>
            Two small projects and 106 lessons later, freeCodeCamp starts to bring on the
            JavaScript, a drop at a time. The Basic JavaScript section houses 104 lessons
            with titles such as 'Multiply Two Numbers', 'Declare String Variables', 'Access 
            Array Data with Indexes' (isn't that suppopsed to say indices?), 'Nesting For 
            Loops' and 'Sift Through Text with Regular Expressions'. A drop at a time, and
            often without the larger context required to truly comprehend an issue. The
            human element, if you will. All the micro detail in the world is effectively
            useless if it can't find it's place in the macro. What is offered here is
            helpful, albeit limited.
          </p>
          <h5 className='blog-section-heading'>Object-Oriented and Functional Programming'</h5>
          <p>
            Here the student is introduced to constructor functions and essentially told
            nothing else about object-oriented programming. I'm sure if they tried to
            explain the 'this' keyword to newcomers then they wouldn't produce many
            graduates. It would be more accurate to describe this as an exceedingly
            brief introduction to objects in JavaScript. Then freeCodeCamp shows the 
            student how methods like map, filter, reduce, sort, reverse, concat, split and
            join. This is, I guess, considered Functional Programming? But more accurately 
            I would call this an introduction to JavaScript's built-in methods, Yes, they
            enable programming in the functional style but they themselves are not the 
            paradigm. I would not show a student a hammer and a chisel and then purport
            to have educated them in stone masonry. 
          </p>
          <h5 className='blog-section-heading'>Basic Algorithm Scripting</h5>
          <p>
            This is the first set of algorithm challenges on freeCodeCamp. The student is 
            asked to perform tasks like reverse a string, check for palindromes, remove 
            duplicates from an array, and create a Caesar's cipher. There are seventeen 
            of these so I won't list them all. Although these challenges are relatively 
            simple, if a student relies solely on freeCodeCamp to provide the requisite 
            understanding, then the student might perhaps misattribute blame and conclude 
            programming to be unnecessarily frustrating and difficult. But more on that later.
          </p>
          <h5 className='blog-section-heading'>JSON APIs and AJAX</h5>
          <p>
            After basic algorithm scripting, students learn how to get JSON data from APIs 
            using jQuery's getJSON function. A lot of buzzwords here. As with the jQuery 
            lessons earlier, I'm not sure if it better to introduce these topics through 
            jQuery rather than plain ol' Javascript. I assume that a programmer benefits 
            more from understanding the core of a language before turning to frameworks 
            that abstract the core away, but like everything else I could be wrong about 
            that.
          </p>
          <h5 className='blog-section-heading'>Intermediate Front-End Projects</h5>
          <p>
            So many hours into this thing and students are still told to be using CodePen 
            (link) to develop their projects. CodePen describes itself as an "online 
            community for testing and showcasing user-created HTML, CSS and JavaScript code 
            snippets," which "functions as an online code editor and open-source learning 
            environment, where developers can create code snippets... and test them." I 
            like CodePen, don't get me wrong. But I also think using CodePen in lieu of a 
            normal dev environment postpones the aqcuisition of fundamentals like hosting 
            and SFTP. Every aspiring developer should purchase their own domain as a rite 
            of passage. I have been hosting HTML/CSS websites for five plus years so I 
            dropped CodePen like a dirty diaper when starting the intermediate projects.
          </p>
          <p>
            Anyway, the student is assigned four intermediate projects: a random quote 
            generator (which I turned into an insult generator (link)), a local weather 
            app (link), a Wikipedia search interface (link), and a twitch.tv user list 
            (link). These were reasonable assignments given where they fit into the larger 
            curriculum. Fair enough.
          </p>
          <h5 className='blog-section-heading'>Intermediate Algorithm Scripting</h5>
          <p>
            Upon completion of the intermediate projects, the student is ushered into a 
            gauntlet of 21 intermediate algorithm challenges. These include tranglating 
            strings into pig latin, search and replace, sum all odd fibonacci numbers, 
            convert arabic numerals into roman numberals, and translate binary strings 
            into English. Some of theese challenges caused heaps of frustration that could 
            only be dispelled by going v e r y s l o w l y, breaking the problem into the 
            smallest pieces possible and taking them one at a time. I had to develop a 
            process for getting unstuck, and that process has aided my in every subsequent
            endeavor.
          </p>
          <p>
            The way freeCodeCamp is designed sacrifices actual instruction for its 
            REPL-like features and interactive user interface. To put it another way, 
            freeCodeCamp offers a relatively unique platform that guides users through a 
            series of increasingly difficult challenges. However, it provides little to no
            instruction on how to use the techniques/features needed to solve the challenge. 
            This has both positive and negative consequences. It compels some users to dig 
            through the documentation, experiment, and learn to debug. Teaching the 
            programmer how to fish rather than feeding him for a day, if you will. On the   
            other hand, I'm sure it also compels some users to break things in frustration.
          </p>
          <h5 className='blog-section-heading'>Advanced Algorithm Scripting</h5>
          <p> 
            A battery of nine advanced algorithm challenges, making 47 in total. Students 
            must validate phone numbers using regular expressions, update JSON data in a 
            collection, merge inventory lists, dynamically return coinage for exact change
            (one nickel and two pennies), return the symmetric difference of any two 
            arrays, take a given string and return all possible permutations without 
            repeated consecutive letters (aa, bb, et cetera). These were definitely more 
            complicated than the intermediate set, however the experience previously 
            gained gave the advanced algorithms a lower relative difficulty. In other words,
            having learned how to become unstuck results in less time spent stuck, which 
            results in fewer urges to hulk-smash a nearby object.
          </p>
          <h5 className='body-section-heading'>Advanced Front-End Projects</h5>
          <p>
            I have already written about the final two advanced projects, so I won't repeat
            myself here. Before 'Tic Tac Torment' and 'Simon Joe, Memory Cat' I made a 
            colorful calculator using jQuery (link). After that, I started experimenting with
            the React framework and concocted a little tool I call the 'Hypno-Timer'(link).
          </p>
          <h5 className='blog-section-heading'>The Gestalt</h5>
          <p>
            freeCodeCamp offers an interactive platform where newcomers can JavaScript, and 
            HTML/CSS to a lesser extent. And freeCodeCamp offers a sense of direction, a map 
            to serve as a guide toward progress. These are what freeCodeCamp does well. It 
            repeatedly explains what must be done and says little about how to do it. One 
            must find their own way. freeCodeCamp is not a platform designed to impart passive
            knowledge; there is no A/V lecture content in this course. If one approaches 
            freeCodeCamp expecting a 'coding bootcamp' experience, they surely will not find 
            it here. Meanwhile 'coding bootcamps' are steadily going out of business, having 
            so much additional overhead having to maintain physical locations and pay the 
            faculty.
          </p>
          <p>
            The broader context and education that freeCodeCamp lacks is readily and freely 
            available across the web. For self-taught programmers there is no shortage of 
            information but rather a dearth of meaningufl guidance. freeCodeCamp offers that 
            and a digital sandbox to flop around in, little else. And it works fairly well. 
            If one is willing to get stuck and build a knowledge base from sources found 
            elsewhere, freeCodeCamp can be a useful angle in an autodidactic approach. If one 
            simmply wishes to goof arund with JS for a while, freeCodeCamp is good for that 
            too. No admission fees, no financial risk in the event one loses interest.
          </p>
          <p>
            Having said all that, it seems freeCodeCamp would have students rely on CodePen 
            for much longer than is truly helpful. Students are allowed to remain in the 
            safe confines of CodePen for all of the front-end projects. I think that insulates
            the student from a lot of inevitabilities: becoming one with a chosen text editor, 
            setting up a development environment, modular approaches to JavaScript, using build 
            tools like Webpack, and getting servers to actually serve one's crappy code.
          </p>
          <p>
            What ultimately matters is not what school or institution a person may pass through.
            A dedicated person is bound to achieve competency sooner or later, a point which I
            think is too often left out of the conversation. Quoting Nietzsche, "He who has a 
            why can bear almost any how". If one is resolved toward a goal or purpose, one 
            becomes immersed and can traverse great distance by momentum alone.
          </p>
          <p>
            Here are a few sources of information I have found helpful.</br></br>
            JSbooks</br>
            Stack Overflow</br>
            MDN</br>
            Coding Train</br>
            r/learnprogramming FAQ</br>
            jonas magic resources</br>
            Udemy Colt</br>
            Udemy Workflow</br>
          </p>
        </div>
      </div>
    )
  }
}