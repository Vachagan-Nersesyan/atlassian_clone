import React from 'react';
import styles from '../LoginStl.module.css'

import { FaAtlassian, FaPen } from "react-icons/fa6";


import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { NavLink } from 'react-router-dom';

import firstPic from '../images/3.png'
import secondPic from '../images/4.png'
import thirdPic from '../images/2.png'
import forthPic from '../images/5.png'


const RegisterComp: React.FC<OwnProps> = () => {
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
                    Sign up to continue
                </div>
                <div className={styles.login_content_item_3}>
                    <InputGroup className='mb-3 border border-secondary rounded-1'>
                        <Form.Control placeholder='Please enter you email' className='border-0' />
                        <InputGroup.Text className='border-0 bg-transparent' ><FaPen /></InputGroup.Text>
                    </InputGroup>
                    <div className={styles.login_content_item_3_in_txt}>
                        By signing up, I accept the Atlassian <NavLink to='/'>Cloud Terms of Service</NavLink> and acknowledge the <NavLink to='/'>Privacy Policy</NavLink>.
                    </div>
                    <NavLink to='/register/verify'>
                        <Button variant="primary" className='w-100 p-2'>
                            Sign up
                        </Button>
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
                        <NavLink to="/login">Already have an Atlassian account? Log in</NavLink>
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
                    <div className={styles.login_content_item_6_in_item_3_bt_tp}>
                        This page is protected by reCAPTCHA and the Google Privacy <span><NavLink to="/">Privacy</NavLink></span> and <NavLink to="/">Terms of Service</NavLink> apply.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterComp

type OwnProps = {}