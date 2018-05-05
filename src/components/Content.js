import React, { Component } from 'react';
import Header from './Header'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export default class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            test: 'Content'
        }
    }
    render() {
        return (
            <div>
                <Header name='bob' />
                <div className="content">
                    <TextField
                        hintText="Hint Text"
                        floatingLabelText="Floating Label Text"
                    />
                </div>
                <RaisedButton label="Default" />
            </div>

        )
    }
}

