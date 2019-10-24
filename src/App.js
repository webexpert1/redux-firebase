import React, { Component } from 'react';
import { Form, Icon, Input, Button, DatePicker } from 'antd';
import { Row, Col , Table } from 'antd';
import './App.css';

import firebase from './firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      birthday: '',
      age: '',
      hobby: '',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          firstname: items[item].firstname,
          lastname: items[item].lastname,
          birthday: items[item].birthday,
          age: items[item].age,
          hobby: items[item].hobby
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: [event.target.value]
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      birthday: this.state.birthday,
      age: this.state.age,
      hobby: this.state.hobby
    }
    itemsRef.push(item);
    this.setState({
      firstname: '',
      lastname: '',
      birthday: '',
      age: '',
      hobby: ''
    })

  }


  render() {
    return (
      <div className="App">
        <header className="">
          <div className='wrapper'>
            <h1>React Firebase App</h1>

          </div>
        </header>

        <div className='container'>
          <section className='add-item'>
            <Form layout="inline" onSubmit={this.handleSubmit} className="">

              <Row type="flex" justify="start">
                <Col span={4}>
                  <Form.Item label="First Name" className="labelWidth">
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      name="firstname" placeholder="First Name"
                      onChange={this.handleChange} value={this.state.firstname}
                    />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item label="Last Name" className="labelWidth">
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      name="lastname" placeholder="Last Name"
                      onChange={this.handleChange} value={this.state.lastname}
                    />
                  </Form.Item>
                </Col>

              </Row>

              <Row type="flex" justify="start">
                <Col span={3}>
                  <Form.Item label="Birthday" className="labelWidth">
                    <DatePicker />
                  </Form.Item>
                </Col>
                <Col span={1}></Col>
                <Col span={3}>
                  <Form.Item label="Hobby" className="labelWidth">
                    <Input
                      prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      name="hobby" placeholder="Hobby"
                      onChange={this.handleChange} value={this.state.hobby}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row type="flex" justify="start">
                <Col span={3}>
                  <Form.Item label="Age">
                    <Input
                      prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="number" name="age" placeholder="Age"
                      onChange={this.handleChange} value={this.state.age}
                    />
                  </Form.Item>
                </Col>
               
              </Row><br/>

              <Button icon="user-add" type="primary" htmlType="submit">Add User</Button>
            </Form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <table className="">
                <thead>
                  <tr>
                    <th className="tdWidth">First Name</th>
                    <th className="tdWidth">Last Name</th>
                    <th className="tdWidth">Age</th>
                    <th className="tdWidth">Hobby</th>
                  </tr>
                </thead>
                <tbody>

                  {this.state.items.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td className="tdWidth">{item.firstname}</td>
                        <td className="tdWidth">{item.lastname}</td>
                        <td className="tdWidth">{item.age}</td>
                        <td className="tdWidth">{item.hobby}</td>
                      </tr>
                    )
                  })}

                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    );
  }

}

export default App;
