import React from 'react';
import classes from './Contacts.module.css'

export const Contacts = () => {
    return (
        <section className={classes.contactsBlock}>
            <div className={classes.containerContacts}>
                <h2 className={classes.titleContacts}>Contacts</h2>
                <form method="post" className={classes.formContacts}>
                    <input type="text" name="name" placeholder={"Name"}/>
                    <input type="email" name="email" placeholder={"Email"}/>
                    <textarea name="message" placeholder={"Type your message"}/>
                    <button type="submit" value="Send" className={classes.sendBtn}>Send</button>
                </form>
            </div>
        </section>
    )
}