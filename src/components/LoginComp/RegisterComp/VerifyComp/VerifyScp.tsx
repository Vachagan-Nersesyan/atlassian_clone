import React from 'react';
import styles from '../../LoginStl.module.css'

import { FaAtlassian, FaCircle } from "react-icons/fa6";

import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';


const VerifyComp: React.FC<OwnProps> = () => {

    let verifyNumArr = [0, 1, 2, 3, 4, 5].map((val) => {
        return (
            <div className={styles.verify_inp}>
                <input type='number' />
            </div>
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
                <div className={styles.login_content_item_vrf_2}>
                    We've emailed you a code
                </div>
                <div className={styles.login_content_item_vrf_3}>
                    To complete your account setup, enter the code we've sent to:
                </div>
                <div className={styles.login_content_item_vrf_4}>
                    vach.nersesyan@bk.ru
                </div>
                <div className={styles.login_content_item_vrf_4sqr}>
                    {verifyNumArr}
                </div>
                <div className={styles.login_content_item_vrf_5}>
                    <Button variant="primary" className='w-100 p-2'>Verify</Button>
                </div>
                <div className={styles.login_content_item_6_in_item_2}>
                    <NavLink to='/'>
                        Didn't get the code? Resend it
                    </NavLink>
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


export default VerifyComp

type OwnProps = {}