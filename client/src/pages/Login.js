import React from 'react'
import {Row, Col, Form, Input} from 'antd'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {userLogin} from '../redux/actions/userActions'
import AOS from 'aos';
import Spinner from '../components/Spinner';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
//https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'

function Login() {
  const dispatch = useDispatch()
  const {loading} = useSelector(state=>state.alertsReducer)
  function onFinish(values)
  {
    dispatch(userLogin(values))
    console.log(values)
  }
  return (
    <div className='login'>
      {loading && (<Spinner />)}
      <Row gutter={16} className='d-flex align-items-center'>
        <Col lg = {16} style={{position: 'relative'}}>
          <img 
          data-aos='slide-right'
          data-aos-duration = '1500'
          src='https://img.freepik.com/free-vector/city-driver-concept-illustration_114360-1666.jpg?t=st=1652595286~exp=1652595886~hmac=39859580115b19df20c88cf7b89678c2b07a38b0b3ce07fe1b7d004fe0984d6d&w=680' />
          
          <h1 className='login-logo'>HireMyWheels</h1>
        </Col>
        <Col lg = {8} className = 'text-left p-5'>
          <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
            <h1>Login</h1>
            <hr />
            <Form.Item name='username' label='Username' rules={[{required: true}]}>
              <Input />
            </Form.Item>
            <Form.Item name='password' label='Password' rules={[{required: true}]}>
              <Input />
            </Form.Item>

            <button className='btn1 mt-2'>Login</button>
            <hr />
            <Link to='/register'>Click Here to Register</Link>
          </Form>
        </Col>
      </Row>

    </div>
  )
}

export default Login