const INITIAL_STATE = {
    changeData:''
}

export default (state=INITIAL_STATE,action) => {
    console.log(action);
    switch(action.type){
            case 'request':
            return {...state,changeData:action.payload};
            default:
                return state;
    }
};