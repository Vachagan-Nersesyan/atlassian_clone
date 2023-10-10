import React from 'react';
import styles from './LoginStl.module.css';

import { FaAtlassian, FaPen, FaRegEye, FaCircle } from "react-icons/fa6";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import firstPic from './images/3.png'
import secondPic from './images/4.png'
import thirdPic from './images/2.png'
import forthPic from './images/5.png'
import { NavLink } from 'react-router-dom';



const LoginComp: React.FC<OwnProps> = () => {

  const linkArr = [
    {
      id: 0,
      text: 'Google',
      pic: firstPic
    },
    {
      id: 1,
      text: 'Microsoft',
      pic: secondPic
    },
    {
      id: 2,
      text: 'Apple',
      pic: thirdPic
    },
    {
      id: 3,
      text: 'Slack',
      pic: forthPic
    }
  ].map((val) => {
    return (
      <Button className='p-2 d-flex bg-transparent justify-content-center align-items-center mb-3 w-100 border-1 rounded-1 border-secondary' variant="light">
        <div className={styles.login_content_item_4_pic_itm}>
          <Image className='w-100' src={val.pic} />
        </div>
        <div className={styles.login_content_item_4_pic_txt}>
          {val.text}
        </div>
      </Button>
    )
  })



  return (
    <div className={styles.login_content}>
      <div className={styles.login_content_container}>
        <div className={styles.login_content_item_1}>
          <div className={styles.login_content_item_1_in_item_1}>
            <FaAtlassian />
          </div>
          <div className={styles.login_content_item_1_in_item_2}>
            ATLASSIAN
          </div>
        </div>
        <div className={styles.login_content_item_2}>
          Log in to continue
        </div>
        <div className={styles.login_content_item_3}>
          <InputGroup className='mb-3 border border-secondary rounded-1'>
            <Form.Control placeholder='Please enter you email' className='border-0' />
            <InputGroup.Text className='border-0 bg-transparent' ><FaPen /></InputGroup.Text>
          </InputGroup>
          <InputGroup className='mb-3 border border-secondary rounded-1'>
            <Form.Control placeholder='Please enter your password' className='border-0' />
            <InputGroup.Text className='border-0 bg-transparent'><FaRegEye /></InputGroup.Text>
          </InputGroup>
          <NavLink to='/'>
            <Button variant="primary" className='w-100 p-2'>Log in</Button>

          </NavLink>
        </div>
        <div className={styles.login_content_item_4}>
          <div className={styles.login_content_item_4_title}>
            Or continue with:
          </div>
          {linkArr}
        </div>
        <div className={styles.login_content_item_5}>
          <div className={styles.login_content_item_5_in_item}>
            <NavLink to="/login/resetpassword">Can't log in?</NavLink>
          </div>
          <div className={styles.login_content_item_5_in_item_ic}>
            <FaCircle />
          </div>
          <div className={styles.login_content_item_5_in_item}>
            <NavLink to="/register">Create an account</NavLink>
          </div>
        </div>
        <div className={styles.login_content_item_6}>
          <div className={styles.login_content_item_6_in_item_1}>
            <div className={styles.login_content_item_6_in_item_1_in_item_1}>
              <FaAtlassian />
            </div>
            <div className={styles.login_content_item_6_in_item_1_in_item_2}>
              ATLASSIAN
            </div>
          </div>
          <div className={styles.login_content_item_6_in_item_2}>
            One account for Jira, Confluence, Trello and <NavLink to="/">more</NavLink>.
          </div>
          <div className={styles.login_content_item_6_in_item_3}>
            <NavLink to="/">Privacy Policy</NavLink>
            <FaCircle />
            <NavLink to="/">User Notice</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComp;


type OwnProps = {}