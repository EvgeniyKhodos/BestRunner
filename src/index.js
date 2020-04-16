import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainComponent from './componets/MainComponent';
import * as serviceWorker from './serviceWorker';
import {connect, Provider} from "react-redux";
// import store from "./redux/redux-store";
import {createStore} from "redux";

const initialState = {
    idTraining: [1, 2, 3, 4],
    dateTrainings: [100, 200, 400, 500],
    typeTrainings: ["a", "b", "c", "d"],
    distanceTrainings: [1000, 2000, 1500, 3000],
    commentTrainings: ["1com", "2com", "3com", "4com"]
}

console.log(initialState.idTraining[3])

const ACTION_CHANGE_DATE = 'ACTION_CHANGE_DATE';

const changeDate = (newDate) => {
    return {
        type: ACTION_CHANGE_DATE,
        payload: newDate
    }
}

const rootReducer = (state = initialState, action) => {
    return state;
    /*switch (action.type) {
        case ACTION_CHANGE_DATE:
            return {... state, dateTrainings: action.payload}
    }*/
}

const store = createStore(rootReducer);

console.log(store.getState());

class MainComponentPlus extends React.Component {
    render() {
        let idTrainingElements = this.props.map(i => <IdTraining idTraining={i.idTraining}/>);
        return <div>
            <div>
                {idTrainingElements}
                <input value={this.props}/>
            </div>

            <div><input
                type="text"
                value={this.props.idTraining}
                placeholder="idTraining"
            /></div>
        </div>
    }
}

const mapStateToProps = (state) => {
    console.log (state);
    return {
        idTraining: state.idTraining,
        dateTrainings: state.dateTrainings,
        typeTrainings: state.typeTrainings,
        distanceTrainings: state.distanceTrainings,
        commentTrainings: state.commentTrainings
    }
}

const WrappedMainComponent = connect(mapStateToProps)(MainComponentPlus)

serviceWorker.unregister();

ReactDOM.render(
    <Provider store={store}>
        <WrappedMainComponent />
    </Provider>, document.getElementById('root'));
