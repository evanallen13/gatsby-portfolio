import React from 'react'

export default function form() {
    return (
        <form name="contact" netlify netlify-honeypot="bot-field" 
            style={{textAlign:"center"}}
        >
            <p>Name</p>
            <input type="text" name="name"></input>
            <p>Email</p>
            <input type="email" name="email"></input>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}
