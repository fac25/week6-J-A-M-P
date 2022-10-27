# JAMP on a Book

It's a store that displays a list of books for purchase

# Project roles
Scrum - Patrick
DevOps - Manoela
UX - Abdullah
QA - Joe

# Set up 
Make sure you have Git and Node (v18) installed.

1. Use this template, clone your copy, `cd` into it
2. Run `npm install` to install all the dependencies
3. Run `npm run dev` to start the local dev server


## User stories

- [X] As a user I would like to browse books.
- [X] As a user I would like to have more details about a specific book.

## stretch goals

- [X] As a user I would like to filter by category.



## What we learnt so far

- You can't query the database in the Front-end. To query sqlite in nextjs you need to use  getStaticProps method as it operate in the Back-end.
- How to copy from the console to the clipboard. Use the command copy(varName) and that would copy the content to the clipboard.
- More about useState.
- Understanding Next.js workflow a little bit better.


## What we struggled with

- type: module in package.json (Importing and exporting from database files).
- Folder structure as a path.
- Writing pseudu code.
- Using single or double qutoes in the database.
- Accessing image source code from an external link.



## Acceptance Criteria 


- [X] Server-rendered with Next.js
- [X] Homepage with product listings
- [X] Individual product pages, containing quantity pickers
- [X] Data stored in a SQLite database

## Stretch criteria

- [X] “Add to basket” button on product pages
- [X] Basket showing all saved items
- [X] Basket contents persisted for future visits
- [X] Filter products by author



## Problem Solving approach
We split our issues into multiple small issues, created a list of tasks to work on in order and used pseudo-code before tackling the challenge.
No line of code was written without prior planning

## Tools Used
Discord
VS Code Live Share extension
Github Project Board
Font Awesome
Next.js


## Software Methodologies
During our planning stage, we identified there were functions and components that would be reused in the project. As a result, we decided to include modularization and attempted to follow the DRY principle.
We did our best to focus on the the learning process rather than the output of the project.

