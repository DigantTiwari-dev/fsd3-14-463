import Book from "./components/Book";
import Pen from "./components/Pen"
import { Books } from "./Data/books";
import { pens } from "./Data/pens";
import fruit from "./components/fruit";

export default function App(){
  return (
  <>
  <h1>Online Bookstore</h1>
  <div className="container">
  <Book book={Books[0]} />
  <Book book={Books[1]} />
  <Book book={Books[0]} />
  <Book book={Books[1]} />
  <Pen pen={pens[0]}/>
  <Pen pen={pens[1]}/>
  <Fruit fruit = {fruit[0]}/>
  </div>
  </>
  );
}