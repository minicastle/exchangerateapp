import {createStore,combineReducers} from "redux";
import { persistReducer,persistStore } from "redux-persist";
import session from "redux-persist/lib/storage/session";

const persistConfig = {
    key:"root",
    storage:session
};

function reducer(state,action){
    if(state === undefined){
        return {count:0};
    }
    else if(action.type === "INCREMENT"){
        return Object.assign({},state,{count:state.count+1});
    }
    else{
        return state;
    }
};

const rootreducer = combineReducers({reducer});
const store = createStore(persistReducer(persistConfig,rootreducer));
const persistor = persistStore(store);

export {store,persistor};