// function must return single element 
// <></> : fragment is used to group instead of div(only in javascript)
//components : any js function returns html dicrectly
// component can be called as html tag
//the tag must be closed
//component first letter must be capital

import BookList from "./components/BookList";


export default function App(){
  
  return (
    <div>
      <h1>Hello React</h1>
        <BookList/>            
    </div>
  )
}


// export const app= ()=>{
//   return <h1>Hello React</h1>
// }