import React ,{ Component,Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List  } from 'antd';

//UI组件负责页面渲染
class TodoListUI extends Component {
    render() {
        return (
            <Fragment>
                <div style={{marginTop:'10px',marginLeft:'10px'}}>
                    <div>
                        <Input 
                            value={this.props.inputValue} 
                            placeholder="todo info"
                            style={{width:'300px',marginRight:'10px'}}
                            onChange = {this.props.handleInputChange}
                        />
                        <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
                    </div>
                    <List
                        style={{marginTop:'10px',width:'300px'}}
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item,index) => (<List.Item onClick = {()=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
                    />
                </div>
            </Fragment>
        )
    }
}

export default TodoListUI;