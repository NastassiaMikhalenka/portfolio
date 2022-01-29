import React from 'react';
import classes from './Contacts.module.css'

export const Contacts = () => {
    return (
        <section className={classes.contactsBlock} id={'contacts'}>
            <div className={classes.containerContacts}>
                <h2 className={classes.titleContacts}>Contact with me</h2>
                <form method="post" className={classes.formContacts}>
                    <div className={classes.group}>
                        <input type="text" name="name" required/>
                        <span className={classes.highlight}></span>
                        <span className={classes.bar}></span>
                        <label>Name</label>
                    </div>
                    <div className={classes.group}>
                        <input type="email" name="email" required/>
                        <span className={classes.highlight}></span>
                        <span className={classes.bar}></span>
                        <label>Email</label>
                    </div>
                    <textarea name="message" placeholder={"Type your message"}/>
                    <button type="submit" value="Send" className={classes.sendBtn}>Send</button>
                </form>
            </div>
        </section>
    )
}