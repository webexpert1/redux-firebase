import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { Card, Form, Input, DatePicker, Button, Table, Typography } from 'antd';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';


import { getUsers, registerUser } from "../actions/userActions";
const { Text, Title } = Typography;

const Register = (props) => {

    const users = useSelector(state => state.user.users);

    useEffect(() => {
        props.getUsers();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                const formData = {
                    ...values,
                    'birthDate': values['birthDate'].format('YYYY-MM-DD')
                }

                // delete formData.birthDate;
                props.registerUser(formData);
                props.form.resetFields();
            }
        });
    };



    const { getFieldDecorator } = props.form;

    let locale = {
        emptyText: 'No record found',
    };
    const columns = [
        {
            title: 'S/N',
            key: 'sn',
            dataIndex: 'sn',
            render: (text, record, index) => index + 1

        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName'
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Birth Date',
            dataIndex: 'birthDate',
            key: 'birthDate',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Hobby',
            dataIndex: 'hobby',
            key: 'hobby',
        },

    ];


    return (
        <div className="App">
          
            <div>
            <Row>
                <Col span={4}></Col>
                <Col span={12}>
                    <h3>Add Users</h3>
                </Col>
            </Row>
                <Card style={{ width: "100%" }}>
                    <Form style={{ width: "70%", margin: "0 auto" }} onSubmit={handleSubmit} className="login-form">
                        <Form.Item >
                            {getFieldDecorator('firstName', {
                                rules: [{ required: true, message: 'Please enter your first name' }],
                            })(
                                <Input
                                    name="firstName"
                                    placeholder="First Name"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('lastName', {
                                rules: [{ required: true, message: 'Please enter your last name' }],
                            })(
                                <Input
                                    name="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                />,
                            )}
                        </Form.Item>

                        <Form.Item style={{ float: "left" }}>
                            {getFieldDecorator('birthDate', {
                                rules: [{ required: true, message: 'Please enter your date of birth' }],
                            })(
                                <DatePicker placeholder="Select birth date" name="birthDate" />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('age', {
                                rules: [{ required: true, message: 'Please enter your age' }],
                            })(
                                <Input
                                    name="age"
                                    type="number"
                                    placeholder="Age"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('hobby', {
                                rules: [{ required: true, message: 'Please enter your hobby' }],
                            })(
                                <Input
                                    name="hobby"
                                    type="text"
                                    placeholder="Hobby"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Submit
                                </Button>
                        </Form.Item>
                    </Form>
                    <Row>
                        <Col span={3}></Col>
                        <Col span={17}>
                            <h4>Registered Users</h4>
                            {
                                users.length > 0 ? <Table locale={locale} columns={columns} rowKey="id" dataSource={users} /> : <em>no record found.</em>
                            }
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                    <hr />
                   
                    
                </Card>


            </div>
        </div>
    );

}


const mapStateToProps = (state) => ({
    users: state.user.users
});

export default connect(mapStateToProps, { getUsers, registerUser })(Form.create()(Register));