import React, {useState} from 'react';
import './App.css';
import books from './assets/books.json';

import DisplayBooks from './displayBooks';
import ChosenBook from './ChosenBook';



function App() {
  const [allBooks] = useState(books)
  const [chosenBook, setChosenBook] = useState('')
  const [images] = useState(['https://prodimage.images-bn.com/pimages/9780064430173_p0_v1_s1200x630.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg', 'https://thumbs-prod.si-cdn.com/j9Jj-jXD6B6s7UF_XeinKFf5Spg=/800x600/filters:no_upscale():focal(1523x1495:1524x1496)/https://public-media.si-cdn.com/filer/fe/fa/fefa7633-31a9-4b38-b273-3ddae2b9ecc2/janfeb2018_a03_prologue.jpg', 'https://www.mobilemuseumofart.com/wp-content/uploads/2020/04/Harold-and-the-Purple-Crayon-book-cover-1504880608.jpg', 'https://images-na.ssl-images-amazon.com/images/I/A1GD4QsxwBL.jpg', 'https://images.fun.com/products/55259/1-1/madeline-by-ludwig-bemelmans-childrens-book.jpg', 'https://images-na.ssl-images-amazon.com/images/I/A1KzHvAir+L.jpg', 'https://images-na.ssl-images-amazon.com/images/I/916JW20V3yL.jpg'])

  function chooseBook(books){
    setChosenBook(books)
  }

  function clearChosenBook(books){
    setChosenBook('')
  }


  return (
    <div className="App">
      <section className="library">
        {chosenBook == '' ? allBooks.map(book => {
          return <DisplayBooks update={chooseBook} bookObj={book} key={book.id}/>}) : <ChosenBook images={images} book={chosenBook} remove={clearChosenBook} /> }
      </section>
    </div>
  );
}

export default App;
