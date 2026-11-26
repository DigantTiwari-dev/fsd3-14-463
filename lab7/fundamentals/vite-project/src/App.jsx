// function must return single element 
// <></> : fragment is used to group instead of div(only in javascript)
//components : any js function returns html dicrectly
// component can be called as html tag
//the tag must be closed
//component first letter must be capital
function Hello(args){
  return (
    <>
    <h1>{args.name}</h1>
    <img src={args.imageUrl} alt={args.name}/>
    <h2>Rs.{args.price}</h2>
    <h3>Author {args.author}</h3>
    <h4>Rating: {args.rating}</h4>
    </>
    
  )
};

export default function App(){
  const books = [
    
  {
    "name": "The Midnight Library",
    "author": "Matt Haig",
    "price": 14.99,
    "rating": 4.2,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780525559474-L.jpg"
  },
  {
    "name": "Atomic Habits",
    "author": "James Clear",
    "price": 16.99,
    "rating": 4.8,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
  },
  {
    "name": "Project Hail Mary",
    "author": "Andy Weir",
    "price": 18.50,
    "rating": 4.7,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg"
  },
  {
    "name": "Dune",
    "author": "Frank Herbert",
    "price": 12.99,
    "rating": 4.6,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg"
  },
  {
    "name": "1984",
    "author": "George Orwell",
    "price": 9.99,
    "rating": 4.7,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg"
  },
  {
    "name": "The Psychology of Money",
    "author": "Morgan Housel",
    "price": 15.49,
    "rating": 4.6,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"
  },
  {
    "name": "Sapiens: A Brief History of Humankind",
    "author": "Yuval Noah Harari",
    "price": 19.99,
    "rating": 4.5,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg"
  },
  {
    "name": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "price": 11.99,
    "rating": 4.8,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg"
  },
  {
    "name": "Thinking, Fast and Slow",
    "author": "Daniel Kahneman",
    "price": 17.50,
    "rating": 4.3,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg"
  },
  {
    "name": "The Alchemist",
    "author": "Paulo Coelho",
    "price": 13.49,
    "rating": 4.4,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg"
  }

  ];
  return (
    <div>
      <h1>Hello React</h1>
      <Hello name="let us c" price = "355" author="me"/> 
      <Hello name="python" price="345678" author="digant"/>    
     
      {
        books.map((item)=><Hello {...item}/>)
      }                
    </div>
  )
}


// export const app= ()=>{
//   return <h1>Hello React</h1>
// }