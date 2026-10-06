# Frontend - Backend
1. create project folder (lab7)
2. create two folder fontend and backend
3. open terminal and split it into two
4. open frontend into left side terminal
5. open backend into right side terminal
6. in backend

   a. intialize backend by `npm intit -y`

   b. install nodemon by `npm i nodemon`

   c. open package.json from backend, update `type to module` and script

   d. create app.js
7. in frontend

   a. npm create vite@latest

   b. enter . as project name

   c. select framework as react from arrow key

   d. select variant as javascript from arrow key
   
   f. selct install and start the frontend
## Components
1. simple js functions return html directory
2. it must starts with capital letter
3. it should be treated as html tag
4. it must be closed
## Object destructure
const {bname,price,quantity,rating,picurl} = props.book;
- does not depends on order, if property is not available then it intialize with null

const {price,picurl} = props.book;
- it only takes price and picurl from the book 

const{price,...rest} = props.book;

## any components include styles
1. external css - create class in index.css and use in component
2. internal css - create property as object like
```
const qtyStyle = {
    fontSize:"1rem",
    color:"blue",
    textAlign:"center",
    backgroundColor:"Yellow",
    padding:"10px"
  }
  ```
  then apply with style attribute and pass the object
  
3. inline - in this method we use 2 curly bracket with style attribute. All the CSS property must be sinlge word. for ex: text-align becomes textAlign(camel case)

rafce - arrow
rfce - function