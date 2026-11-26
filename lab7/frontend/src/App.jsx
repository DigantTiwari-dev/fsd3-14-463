// import Book from "./components/Book";
// import Fruit from "./components/Fruit";
// import Pen from "./components/Pen";
// import { books } from "./data/books";
// import { pens } from "./data/pen";
// import fruit from "./components/Fruit";
// import Event from "./components/Event";

const MyButton = ()=>{
  let count = 1;
  const handleSubmit = ()=>{
    console.log("button clicked", count);
    count++
  };
  return(
    <button 
    className ="bg-black text-white
    text-x1 rounded-md
    m-4 px-4 py-2" onClick={handleSubmit}>
      clicked{count} times
    </button>
  )
}

export default function App(){
  return (
  <>
  <MyButton/>
  </>
  );
}