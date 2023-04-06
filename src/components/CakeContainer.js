import React from 'react';
import {buyCake} from '../redux';
import {connect} from 'react-redux';

function CakeContainer(props){
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            {/* Step 2: Sending control to /redux/index when button is clicked */}
            <button onClick={props.buyCake} >Buy cake</button>
        </div>
    )
}


// mapping state to props in CakeContainer
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

// mapping dispatch(reducer in cake/cakeReducer) to props in CakeContainer
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => {
            dispatch(buyCake())
        }
    }
}

// Connecting CakeContainer to Redux
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )
 (CakeContainer);