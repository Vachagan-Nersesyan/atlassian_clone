import {Action, applyMiddleware, combineReducers,legacy_createStore as createStore} from 'redux'

import thunkMiddleware ,{ ThunkAction } from 'redux-thunk'
 
let reducers = combineReducers({
})


type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>


type PropertiesTypes<T> = T extends {[key : string] : infer U} ? U : never
export type InferActionsTypes<T extends {[key : string] : (...args : Array<any>) => any }> = ReturnType<PropertiesTypes<T>>



export type BaseThunkType<AT extends Action = Action,R = Promise<void>> = ThunkAction<R,AppStateType,unknown,AT>



let store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store