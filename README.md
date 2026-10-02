# Web Projects

Web pages I am building while preparing for software engineering internships.

This repository is a public record of how I learn HTML, CSS, and JavaScript: small pages I wrote, opened in a browser, and can explain from the markup to the script.

The pages here were built over the past two months. I am publishing them together so the repo is a clear picture of that practice.

## Why this repo exists

I want recruiters and interviewers to see more than a list of topics. Each project here is something I wrote and can walk through: the page structure, the styling, and the JavaScript that responds to the user.

This README is the index: what each project does, which web ideas it uses, and how to open it.

## How to open

Most of these are static pages. From the repo root on macOS:

```bash
open to_do_list_project/index.html
open temperature_converter/converter.html
open contact_form_project/index.html
open travel_site/index.html
```

On another system, open the same file from the browser.

The bookstore page reads `catalog.json`, so the browser has to load it from a local server:

```bash
cd bookstore-project
python3 -m http.server 8000
```

Then open `http://localhost:8000/catalog.html`.

## Project index

| Project | What it does | Web concepts |
| --- | --- | --- |
| [To-Do List](to_do_list_project/index.html) | Add a task, mark it complete, edit it in place, or remove it. Blank input is ignored, and the list stays after a refresh | separate HTML, CSS, and JavaScript; creating elements; event delegation; `localStorage` |
| [Temperature Converter](temperature_converter/converter.html) | Convert a number between Celsius and Fahrenheit, and reject input that is not a number | functions, `Number`, `toFixed`, updating the page from a button click |
| [Contact Form](contact_form_project/index.html) | Check name, email, a 10-digit phone number, and message. Preview shows what was typed. Submit stays on the page | form events, regular expressions, `preventDefault`, reading the query string |
| [Travel Site](travel_site/index.html) | Home page lists countries and cities in four regions and jumps to each section. [Stories](travel_site/stories.html) shows three photos that jump to a short description | anchor links, nested lists, tables, images |
| [Bookstore](bookstore-project/catalog.html) | Inventory page reads [catalog.json](bookstore-project/catalog.json) and lists title, author, year, publisher, page count, and whether each book is available. [catalog.xml](bookstore-project/catalog.xml) is the XML Schema for a book | `fetch`, rendering a list, JSON, XML Schema |

## Skills this repo shows

- HTML documents, forms, lists, tables, and links
- CSS for layout, color, and hover
- Selecting elements and listening for clicks
- Building page content from data instead of typing every row by hand
- Checking form input before it is sent
- Saving the to-do list in `localStorage`
- Loading the bookstore catalog from a JSON file
- Describing that same catalog with an XML Schema

## How to browse this repository

1. Start with this README for the project list.
2. Open a project folder and read the HTML, then the CSS and JavaScript.
3. Open the starting file in a browser and try the buttons, links, and form.

I keep each project small enough to read in one sitting, with comments that explain the important steps the same way I would in an interview.

## About me

I am a Computer Science bachelor's student graduating in 2027, with a current GPA of 4.0. I am applying for internships and using this repository to show practice in HTML, CSS, and JavaScript. If you are reviewing my application, these pages are the picture of that work.

Java is my main preferred language. I am using it now to learn data structures and algorithms, and I am finishing Database I. That work is in [java-learning-projects](https://github.com/NouraAly1/java-learning-projects). I also know Python at an intermediate level; that work is in [My_Journey_Learning_Python](https://github.com/NouraAly1/My_Journey_Learning_Python). I write SQL in SQLite: tables, primary and foreign keys, joins, and insert, update, and delete. That work is in [SQL-PROJECTS](https://github.com/NouraAly1/SQL-PROJECTS). I am also studying communications and networking.
