//记录数据信息，怎么存怎么处理，都是由reducer来管理
import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}

//必须返回一个函数    state是上次store中的数据
//reducer可以接收state，绝对不能修改state
//reducer必须是一个纯函数
export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    if(action.type === INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    return state;
}