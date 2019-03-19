import React,{ Component } from 'react';
import TodoListUI from './TodoListUI';
import store from './store'; //(index可以不写，默认引入) 引入store
import { getInitList, getInputChangeAction,getAddItemAction,getDeleteItemAction } from './store/actionCreators';

//容器组件
class TodoList extends Component {
    constructor(props){
        super(props);//调用父类Component中的构造函数，这是js继承经常做的事情
        this.state = store.getState();//获取store中的数据

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    //在组件即将被挂载到页面的时刻自动执行(只会在第一次被执行)
    // componentWillMount() {
    //     console.log('componentWillMount')
    // }

    render(){
        // console.log('render')
        return (
            <TodoListUI 
                inputValue = {this.state.inputValue}
                list = {this.state.list}
                handleInputChange = {this.handleInputChange}
                handleBtnClick = {this.handleBtnClick}
                handleItemDelete = {this.handleItemDelete}
            />
        )
    }

    //组件被挂载到页面之后，自动被执行(只会在第一次时被执行)
    componentDidMount(){
        const action = getInitList();
        store.dispatch(action);
    }

    //组件被更新之前，他会自动被执行，如果返回true，
    //下面方法将继续执行，返回false，下面方法将不会被执行。
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true;
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        //store提供了dispatch方法
        store.dispatch(action);
    }
    
    //感知到store数据变化时，从store中重新获取数据，然后调用setState替换掉数据
    handleStoreChange() {
        this.setState(store.getState());
    }

    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index){
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;