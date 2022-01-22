import React from 'react';

import ReactDom from 'react-dom';

//CSS
import './style.css';


//this is the boolist main application.
function BooklistApp () {
    return (
        <section className='bookList'>
            <BookDesc/>
        </section>
    );
}

//this component contains the book's total description
const BookDesc = () => {
    return (
        <article>
            <BookImg/>
            <BookTitle/>
            <BookAuthor/>
        </article>
    );
};

//this is the book's image coomponent
const BookImg = () => {
    return <img src="https://images-na.ssl-images-amazon.com/images/I/51mN3bY0JjL._SX332_BO1,204,203,200_.jpg" alt="" />;
}

//this is the book's title coomponent
const BookTitle = () => {
    return <h1>The Subtle Art Of Not Giving A F*ck</h1>;
};

//this is the book's author component
const BookAuthor = () => {
    return <h4>Mark Manson</h4>
};

ReactDom.render(<BooklistApp/>, document.getElementById('root'));


