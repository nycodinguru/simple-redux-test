const { createStore } = require('redux');

const initialState = {
    age: 21
};

const myReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type){
        case 'ADD':
            newState.age += action.val;
            return newState;
        case 'SUBTRACT':
            newState.age -= action.val;
            return newState;
        default:
            break;
    }    
}

const store = createStore(myReducer);

store.subscribe( () => {
    console.log('State has changed ' + JSON.stringify(store.getState()));
})


store.dispatch({type: 'ADD', val: 2});
store.dispatch({type: 'ADD', val: 3});
store.dispatch({type: 'ADD', val: 11});
store.dispatch({type: 'SUBTRACT', val: 13});