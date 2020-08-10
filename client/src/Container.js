import React, { Component } from 'react'
import { connect } from 'react-redux';
import store from './store';
import axios from 'axios';
class Container extends Component {
    // state = []
    // state = store.getState();
    // apiUrl = 'http://localhost:2023/api/users'
    // fetching = async () => {
    //     const get = await axios.post('http://localhost:2023/api/users')
    //     return get;
    // }
    // response = k()
    state = {
        response: ''
    };


    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('url');
        // method: 'POST', headers: {
        //     'Content-Type': 'application/json;charset=utf-8'
        // },
        // body: JSON.stringify({ "response": '' })
        const result = await response.json();
        // if (response.status !== 200) throw Error(body.message);

        return result;
    };


    render() {
        return (
            <div>
                <h1>fetching data from redux store in react component by connect function</h1>
                <p>message{this.props.countr}</p>
                <h1>fetching from api</h1>
                <p>{this.state.response}</p>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        countr: state.multidivreducer.counter
    }
}
export default connect(mapStateToProps)(Container); 
