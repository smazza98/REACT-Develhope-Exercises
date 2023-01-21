import React from 'react';

class Age extends React.Component {
    render() {
        
        // Conditional Rendering - 05
        // Modify the Age component so that the "Your age is " message is rendered only if the age prop is greater than 18. Otherwise render the "You are very young!" message.
        return this.props.age > 18 ? <p>Your age is {this.props.age}</p> : <p>You are very young!</p>;
    }
}

export default Age;