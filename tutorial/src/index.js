import React from 'react';

import ReactDom from 'react-dom';

// function Name() {
//     return (
//     <h4>
//         My name is Lanre
//     </h4>);
// }

function BooklistApp () {
    return (
        <section>
            <BookName/>
        </section>
    );
}

const BookName = () => {
    return <article>This is a booklist application.</article>
};

const BookImg = () => {
    return <img src="" alt="" />;
}

ReactDom.render(<BooklistApp/>, document.getElementById('root'));


