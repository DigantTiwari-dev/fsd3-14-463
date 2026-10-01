import Book from "./components/Book";
const b1 = {
  picurl: "https://m.media-amazon.com/images/I/514PDnLfatL._SX342_SY445_FMwebp_.jpg",
  bname:"React Design Pattern",
  price: 3741,
  quantity: 10,
  rating: 4.3,
}
const b2 = {
  picurl: "https://m.media-amazon.com/images/I/91uFdkCJmAL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"Learning React",
  price: 3500,
  quantity: 12,
  rating: 4.5,
}

export default function App(){
  return (
  <>
  <h1>Online Bookstore</h1>
  <div className="container">
  <Book book={b1} />
  <Book book={b2} />
  <Book book={b1} />
  <Book book={b2} />
  </div>
  </>
  );
}