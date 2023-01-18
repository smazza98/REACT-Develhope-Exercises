import React from 'react';
import Welcome from './Welcome';

class App extends React.Component {
    render() {

        // Props - 04
        // What happens if the name prop is a JSX expression instead of a string? How do you pass a prop that contains a JSX expression? Modify the value passed to the name prop so that it's contained within a strong tag.
        return <Welcome name={<strong>Simo</strong>} age={24} />;
    }
}

export default App;