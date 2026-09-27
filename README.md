# Vanilla JavaScript CRUD Application

A small learning project built to strengthen JavaScript fundamentals through a simple student-record CRUD interface without using a frontend framework.

## Features

- Add student records
- Edit existing records
- Delete records
- Validate required form fields
- Display success and error notifications
- Dynamically update the HTML table using JavaScript
- Responsive styling with Tailwind CSS

## Technologies

- HTML
- Vanilla JavaScript
- DOM API
- Tailwind CSS

## What I Practiced

This project focuses on core browser and JavaScript concepts, including:

- DOM selection and manipulation
- Event listeners
- Form submission handling
- Input validation
- Conditional logic
- Dynamic element creation
- Event delegation
- Editing existing DOM content
- Removing elements from the DOM
- Basic UI feedback and transitions

## How It Works

Student information is entered through a form containing:

- First name
- Last name
- Roll number

Submitting the form dynamically adds the record to the table.

Each record provides:

- **Edit** — loads the selected record back into the form and updates the row after submission
- **Delete** — removes the selected record from the table

The application also displays temporary success or error notifications after CRUD operations.

## Running the Project

No build process is required.

Clone or download the repository and open:

```text
index.html
```

in a web browser.

Tailwind CSS is loaded through a CDN.

## Current Limitation

The project does not currently use a backend or persistent storage. Records created or modified in the browser are not permanently saved after the page is reloaded.

## Purpose

This project was created as a learning exercise to strengthen my understanding of JavaScript fundamentals before relying on frameworks such as React.

## Status

Learning project focused on foundational JavaScript and DOM-based CRUD operations.
