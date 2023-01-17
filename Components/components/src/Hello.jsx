import React from 'react';
import Message from './Message';

// Components - 02
// Write a Hello class components that renders the "Hello, World!" message within an h1 tag.

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>

                {/* Components - 06
                Modify the Hello component so that it shows a p tag below the h1 tag with the message "What a beautiful day!". */}
                {/* <p>What a beautiful day!</p> */}

                {/* Components - 07
                Extract the "What a beautiful day!" message into a new component called Message and render it within the Hello component. */}
                <Message />
            </div>
        );
    }
}

export default Hello;
