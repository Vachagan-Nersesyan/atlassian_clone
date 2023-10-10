import React from 'react';
import styles from '../LoginStl.module.css';

import { FaAtlassian, FaPen, FaRegEye, FaCircle } from "react-icons/fa6";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


import { NavLink } from 'react-router-dom';



const CantLoginComp: React.FC<OwnProps> = () => {
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
                    Can't log in?
                </div>
                <div className={styles.login_content_item_3}>
                    <div className={styles.login_content_item_3_in_txt_in_rst}>
                        We'll send a recovery link to
                    </div>
                    <InputGroup className='mb-3 border border-secondary rounded-1'>

                        <Form.Control placeholder='Please enter you email' className='border-0' />
                        <InputGroup.Text className='border-0 bg-transparent' ><FaPen /></InputGroup.Text>
                    </InputGroup>
                    <NavLink to='/'>
                        <Button variant="primary" className='w-100 p-2'>Log in</Button>

                    </NavLink>
                </div>

                <div className={styles.login_content_item_5}>
                    <div className={styles.login_content_item_5_in_item}>
                        <NavLink to="/login/register">Send recovery link</NavLink>
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
    )
}

export default CantLoginComp

type OwnProps = {}