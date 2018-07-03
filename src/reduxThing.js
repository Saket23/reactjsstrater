import React,{Component} from 'react';

import {connect} from 'react-redux';

class ReduxThing extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                {this.props.changeData}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
return {
    changeData:state.changeData.changeData
}
}

export default connect(mapStateToProps)(ReduxThing);