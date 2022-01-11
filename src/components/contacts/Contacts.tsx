import React from 'react';
import classes from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={classes.contactsBlock}>
            <div className={classes.container}>
                <h2 className={classes.title}>Contacts</h2>
                <div>
                    <form method="post" className={classes.form}>
                        <div className={classes.formWrapper}>
                            <input type="text" name="name" placeholder={"Name"}/>
                            <input type="email" name="email" placeholder={"Email"}/>
                            <textarea name="message" placeholder={"Type your message"}/>
                        </div>
                        <input type="submit" value="Send" className={classes.sendBtn}/>
                    </form>
                </div>
            </div>
        </div>
    )
}