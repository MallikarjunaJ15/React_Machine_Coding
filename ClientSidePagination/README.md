# React Client-Side Pagination

A lightweight, dependency-free implementation of client-side pagination built with React. This project demonstrates how to handle large datasets natively using JavaScript array methods and React state management without relying on external component libraries.

## Features
- **Dynamic Slicing:** Uses `Array.prototype.slice()` to chunk data locally based on the active page.
- **Derived State:** Total pages and current data chunks are calculated on the fly, preventing stale state bugs.
- **Boundary Handling:** Pagination controls automatically disable at the beginning (Page 1) and end of the dataset.
- **Responsive CSS Grid:** Products are displayed in a clean, modern card layout that adapts to screen size.

## The Core Logic
The application fetches a dataset of 500 products and paginates them efficiently using the following logic:

```javascript
const perPageContent = 30;
const totalPage = Math.ceil(data.length / perPageContent);

const startIndex = (currentPage - 1) * perPageContent;
const endIndex = currentPage * perPageContent;

const currentData = data.slice(startIndex, endIndex);
