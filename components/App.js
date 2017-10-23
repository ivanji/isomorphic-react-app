import React from 'react';
import moment from 'moment';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            time: null
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const time = this.state.time;
        const timeString = time && moment (time).format('h:mm:ss a');
        return(
            <div>
                <h1>Sample Application</h1>
                <p>Current time is: {timeString}</p>
            </div>
        )
    }
}

export default App;
