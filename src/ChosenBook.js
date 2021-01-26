import React from 'react';

function ChosenBook(props){

    function handleClick(){
        props.remove();
    }

    return (
        <article className="chosenBook">
            <img className="image" src={props.images[props.book.id-1]} alt=""/>
            <section className='information'>
            <h2>{props.book.title}</h2>
                <p>{props.book.author}</p>
                <p className="plot">{props.book.plot}</p>
                <br/>
                <p className="bold">For ages: {props.book.audience}</p>
                <p className="bold">Length: {props.book.pages} pages</p>
                <p className="bold">Published in: {props.book.year}</p>
                <p className="bold">From publisher: {props.book.publisher}</p>
                <button className="btn" onClick={handleClick}>Go back</button>
            </section>
        </article>
    )
}

export default ChosenBook;