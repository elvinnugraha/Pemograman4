import React from 'react';

import Notelist from '../components/notelist';

export default class IndexPage extends React.Component {
    render(){
        return(
            <div>
                <Notelist notes={this.props.notes} />
            </div>
        )
    }
}