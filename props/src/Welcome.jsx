import React from 'react';
import Age from './Age';

class Welcome extends React.Component {

    // Props - 02
    // What happens if no name prop is passed to the Welcome component ? Can you set a default value for the name prop ?

    static defaultProps = {
        name: '...'
    };

    render() {
        return (
            <>
                {/* Props - 01
                Create a Welcome class component that receives a name prop and renders the Welcome, {name}! message within a p tag. Render this component to you App component, passing it a name prop of your choosing. */}
                <p>Welcome, {this.props.name}!</p>

                {/* Props - 03
                Modify the Welcome component so that it receives a second prop called age and renders it below the 'welcome' message, within a p tag after the message "Your age is ". */}
                {/* <p>Your age is {this.props.age}</p> */}

                {/* Props - 05
                Extract the "Your age is " message into a new component called Age and render it within the Welcome component. Pass to the Age component the age prop that Welcome is receiving from the App component. */}
                <Age age={this.props.age} />
            </>
        );
    }
}

export default Welcome;
