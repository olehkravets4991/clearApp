import logo from './logo.svg';
import './App.css';

const BooksWithAuthor = (props) => {
  return (
    <>
      <h3>{props.bookTitle}</h3>
      <h3>{props.author}</h3>
    </>
  )
}

const Books = (props) => {
  return (
    <>
      <h1>{props.bookTitle}</h1>
      {props.children}
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Books bookTitle='Goosebumps'>
      </Books>
      <Books bookTitle='Twilight' />
      <Books author='jkrawling' bookTitle='Harry Potter' >
        <h1>test</h1>
        <p>p tag</p>
        <BooksWithAuthor author='jkrawling' bookTitle='Harry Potter'/>
      </Books>
    </div>
  );
}

export default App;

