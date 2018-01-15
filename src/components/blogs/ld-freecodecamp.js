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
            a single project. But alas, one sometimes does what one is told and quickly 
            forgets soon thereafter.

            
          </p>
        </div>
      </div>
    )
  }
}
