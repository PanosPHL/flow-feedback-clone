<p align=center>
<a href="https://flownotes.herokuapp.com">
<img width="40%;" src='client/public/images/readmeLogo.png'>
</a>
</p>

<h2 align="center">The notetaking app built for gamers</h2>
<div align="center">
<img src="https://img.shields.io/badge/Status-Live-brightgreen">
<img src="https://img.shields.io/badge/Front End-React / Redux-blueviolet">
<img src="https://img.shields.io/badge/Back End-Express-blue">
<img src="https://img.shields.io/badge/Will Help You Improve-Debatable-orange">
</div>
<hr></hr>

## Table of Contents
* ### [About](#about)
* ### [Features & Demo](#featuresanddemo)
* ### [Code Snippets](#codesnippets)
* ### [Future Features](#futurefeatures)
* ### [Credits](#credits)

<h2 id="about">About</h2>
---
<a class="logoLink" href="https://flownotes.herokuapp.com"><strong>flowNotes</strong></a> is a fullstack video / notetaking application built in **React / Redux, Express, and PostgreSQL** that aims to give gamers a _**single hub**_ for analyzing esports footage.

It is a community-driven site which allows a user to interact with other users' content making it a great tool not only for _**self-analysis**_, but also for _**collaborative learning**_ and _**coaching**_.

<h2 id="featuresanddemo">Features And Demo</h2>

### Auth
---
Users can:
* Sign in as a demo user if they don't have an account
* Create an account
* Sign into an existing account

### Flows
---
Users can:
* Create a flow
  * Must be a valid YouTube URL
  * Must be assigned a category
  * Can be assigned an optional description
* Rename a flow
* Delete a flow they own
* Not modify or delete a flow they do not own in any way

### Notes
---
<li>When a video's timestamp matches a notes, the video for the flow will pause</li>
<li>Clicking on a note will navigate to its timestamp in the video</li>
<br/>
Users can:
<ul>
<li>Add a timestamped note to a flow</li>
<li>Update a note's content</li>
<li>Delete a note</li>
</ul>

### Categories
---
* Users can browse flows by category

<h2 id="codesnippets">Code Snippets</h2>

<h2 id="futurefeatures">Future Features</h2>
<hr></hr>

...notes pausing automatically
...validating youtube video
...sidebar code

<h2 id="credits">Credits</h2>
