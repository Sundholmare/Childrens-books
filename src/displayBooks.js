import React from 'react';

function DisplayBooks(props){
    const classes = `book book-${props.bookObj.id}`

    function handleClick(){
        props.update((props.bookObj))
    }

    return(
        <section onClick={handleClick} style={{background: props.bookObj.color}} className={classes}>
            <article className='bookFront'>
                <h3 className='title'>{props.bookObj.title}</h3>
                <p>{props.bookObj.author}</p>
            </article>
        </section>
    )
}

export default DisplayBooks;