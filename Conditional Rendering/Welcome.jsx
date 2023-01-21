import React from 'react';
import Age from './Age';

class Welcome extends React.Component {

    static defaultProps = {
        name: '...'
    };

    render() {
        return (
            <>
                <p>Welcome, {this.props.name}!</p>

                {/* Conditional Rendering - 01
                Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18. */}
                {/* {this.props.age > 18 ? <Age age={this.props.age} /> : null} */}

                {/* Conditional Rendering - 02
                Modify the Welcome component so that the Age component is rendered only if the age prop is present. */}
                {/* {this.props.age != null ? <Age age={this.props.age} /> : null} */}

                {/* Conditional Rendering - 03
                Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18 and less than 65. */}
                {this.props.age > 18 && this.props.age < 65 ? <Age age={this.props.age} /> : null}

                {/* Conditional Rendering - 04
                Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18 and less than 65 and the name prop is equal to "John". */}
                {this.props.age > 18 && this.props.age < 65 && this.props.name === "John" ? <Age age={this.props.age} /> : null}

                {/* Conditional Rendering - 05
                Modify the Age component so that the "Your age is " message is rendered only if the age prop is greater than 18. Otherwise render the "You are very young!" message. */}
                

            </>
        );
    }
}

export default Welcome;
