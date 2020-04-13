import React from 'react';

class FetchRandomUser extends React.Component {

state = {
    loading: null,
    person: null,

};

async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    }

    render() {

        if (this.state.loading) {
            return <div>loading...</div>
        }

        if (!this.state.person) {
            return <div>didn't get a person</div>
        }

        return (
        <div>
            <h1>Here is your new friend!</h1>
            <div>Their name is {this.state.person.name.title + ' '}
            {this.state.person.name.first + ' '} 
            {this.state.person.name.last + ' '}</div>
            <div><img src={this.state.person.picture.large} /></div>
            <div>I hoped you liked meeting your new friend</div>
            <button onClick={() => window.location.reload(false)}>Click to meet another</button>
        </div>
        );
    }
}
export default FetchRandomUser;
