import React from 'react';

import ReactDom from 'react-dom';

// function Name() {
//     return (
//     <h4>
//         My name is Lanre
//     </h4>);
// }

function App () {
    return (
        <div>
            <Name/>
            <Message/>
        </div>
    );
}

const Name = () => <h2>Lanre</h2>;
const Message = () => { return <p>Lorem ipsum dolor, 
                sit amet consectetur adipisicing elit. Ex molestiae aliquid soluta dolorem a dolorum necessitatibus 
                et suscipit dolor aut.
            </p>};


ReactDom.render(<App />, document.getElementById('root'));

