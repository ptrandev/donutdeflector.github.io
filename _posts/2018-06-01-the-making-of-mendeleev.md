---
layout: post
title:  "The Making of Mendeleev"
date:   2018-06-01
categories:
- Projects
tags: [chemistry, css, html, javascript, mendeleev, science, vue.js]
---

Around November of 2017, I thought about embarking on a new project in order to
sharpen my web development skills. I wanted to create a useful and interesting
weekend project.

Because I was taking chemistry in school and had a life-long love of science, I
decided to create an
[interactive periodic table](https://donutdeflector.me/mendeleev).

At first I was using vanilla HTML/CSS and jQuery. However, I soon realized that
this was beyond sub-optimal. In an effort to maximize development speed and pick
up Javascript framework, I decided to learn Vue.js.

{% include toc.html %}

### Game Plan

Instead of diving headfirst into my endeavor, I watched Traversy Media's
["Vue.js 2.0 in 60 Minutes"](https://www.youtube.com/watch?v=z6hQqgvGI4Y) to
gain a working knowledge of Vue.js.

I also found a
[great JSON file](https://github.com/Bowserinator/Periodic-Table-JSON) that
contained information about all of the elements. I planned to use this to
display my information.

Later in the development of my web app, I would find a few more open-source
projects that graciously did the grunt work for me. I used
[Periodic Table](https://github.com/andrejewski/periodic-table), another data
set for elements, to display additional information that the JSON file did not
include. I also leveraged
[atomic-bohr-model](https://github.com/ACollectionOfAtoms/atomic-bohr-model) to
display an atomic model of selected elements. I'm planning on implementing my
own atomic models in the future but this project serves its purpose well.

In honor of Dmitri Mendeleev, Russian chemist and creator of the original
periodic table, I decided to name my project "Mendeleev."

### Development Experience

While developing my web app, I heavily relied on the
[official documentation](https://vuejs.org/v2/guide/). For a few more esoteric
problems, I used StackOverflow.

The creation of Mendeleev was not always smooth sailing. Sometimes I would run
into issues that took multiple days to solve. Eventually, I would be able to
solve my issue and gain a better understand of how Vue.js operated. Running into
roadblocks is always a little bit frustrating. However, I knew that I would
eventually be able to understand how to approach the problem and solve it.

At times during the development process, I felt like I wasn't making very good
process or forgetting to implement certain features. I had to figure out a
method of keeping organized so I decided to use Trello to track my tasks. Trello
greatly improved my perceived and actual productivity. It allowed me to keep
track of features I needed to implement, bugs I needed to fix, and changes
I needed to consider.

Because the scope of my project was much bigger than anything I had undertaken
in the past, it forced me to find a way to track tasks. This was a very positive
change in my development workflow and will allow me to tackle even larger
projects in an orderly, methodical fashion.

While in the beginning stages of the project I used jQuery to handle some
animation and DOM lookup. I decided to fully embrace modern Javascript and
quickly refactored all of my jQuery-dependent code. I was using Flexbox and CSS
Grid anyhow so support for older browsers wasn't a big concern. jQuery was just
extra bloat that I didn't need to ship.

<figure>
  <a href="/assets/images/posts/2018-06-01-mendeleev-720.png" class="progressive
  replace">
    <img src="/assets/images/posts/2018-06-01-mendeleev-thumbnail.png"
    class="preview" alt="mendeleev">
  </a>
  <figcaption>A view of the periodic table at the time of writing.</figcaption>
</figure>

### Features

Feature wise, the periodic table is very simple. Hover over an element to reveal
a card containing general information about the element and an atomic model of
the element. Click on an element to be taken to a comprehensive profile of the
selected element.

{% include figure.html src="mendeleev-element-hover-720.png"
caption="Hovering over an element reveals a card containing general
information." %}

{% include figure.html src="mendeleev-element-profile-1080.png"
caption="Silicon's profile." %}

Hover over an element category in the navigation bar to emphasize elements of
the selected type of element on the periodic table. Click on an element category
to be taken to a profile of the selected element category.

{% include figure.html src="mendeleev-element-category-hover-720.png"
caption="Hovering over an element category emphasizes it on the periodic
table."
%}

{% include figure.html src="mendeleev-element-category-profile-720.png"
caption="The noble gases' profile." %}

### Design

I'm not completely happy with the look of Mendeleev just yet. Disregarding some
design inconsistencies, I would consider the aesthetic of Mendeleev passible.
There's plenty of room to improve in this regard. I'm satisfied with the font
selection and color pallette, though.

I chose to use Roboto Condensed for its modern design and capability to cram a
bunch of information into small amounts of space. It's a condensed font after
all.

{% include figure.html src="roboto-condensed-sample-720.png"
caption="Samples of Roboto Condensed." %}

I selected colors from the Tailwind CSS color pallette for its vibrant, friendly
colors.

{% assign colors="#1b2126|#22292f|#2a353a|#f8fafc|#90caf9|#80deea|#e57373|
#ffb74d|#fff176|#aed581|#80cbc4|#ce93d8|#9fa8da|#f48fb1" | split: "|" %}
{% assign colorNames="black|gray|gray 2|white|blue|cyan|red|orange|yellow|green|
teal|purple|lavender|pink" | split: "|" %}
{% include color-pallette.html projectName="Mendeleev" %}

### Future Considerations

As a progress in my journey as a web developer, I intend Mendeleev to progress
with me. In the future, I would like add search functionality to the periodic
table, find or create a more performant atomic model library, and improve the
design of the project.

### Conclusion

The creation of Mendeleev was an incredible learning experience for me. It
allowed me to learn Vue.js, which makes the creation of web apps much easier.
Additionally, the breadth of the project forced me to organize my tasks and
plan features using Trello. The creation of my web app also allowed me to
make a few small contributions to open-source projects that were immensely
useful.
