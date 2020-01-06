import React, { Component, Fragment } from 'react'
import Like from './components/like'

const styles = {
    text: {
        color: 'purple',
        fontSize: 35
    }
}

class App extends Component {

    state = {
        name: 'kodehack.com',
        fruits: ['apple', 'mango', 'banana'],
        love: false
    }

    _hello = () => {
        alert('hello')
    }

    _whoLove = (p) => {
        return 'I Love ' + p
    }

    render() {
        let { name, fruits, love } = this.state

        return (
            <Fragment>
                {/* embed variable */}
                <div>hello world - {name}</div>

                {/* expression */}
                <h2>Js Expression 5*5+2 = {5 * 5 + 2}</h2>

                {/* FUNCTION */}
                <h2 onClick={this._hello}>Click me now!</h2>
                <h2>
                    Who your love ? {this._whoLove('kodehack')}
                </h2>

                {/* attribute */}
                <h2 style={styles.text}>Fruits : </h2>

                {/* looping */}
                <ul>
                    {
                        fruits.map((fruit, i) =>
                            <li key={i}> {fruit} </li>
                        )
                    }
                </ul>

                {/* no child, with child */}
                <Fragment>
                    <input placeholder='username' />
                    <button>send</button>
                </Fragment>

                {/* components handle */}
                <br /><br />
                <Like love={love} onClick={() => this.setState({ love: !love })} />

            </Fragment>
        )
    }
}

export default App