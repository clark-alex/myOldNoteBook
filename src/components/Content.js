import React, { Component } from 'react';

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
                <div className="content"></div>
            </div>

        )
    }
}

