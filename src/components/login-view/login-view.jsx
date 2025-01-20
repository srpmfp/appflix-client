import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


export const LoginView = ({ onLoggedIn }) => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleEvent = (e) => {
        e.preventDefault();
        console.log(e.target);
        const data = {
            Username: username,
            Password: password
        }

        fetch("https://appflixcf-d4726ef19667.herokuapp.com/login",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then((data) => {
                console.log("Response: ", data);
                if (data.user) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    onLoggedIn(data.user, data.token);

                } else {
                    alert("Incorrect username or password");
                }
            })

            .catch((e) => { alert("Error logging in") });


    }
    return (

        <Form onSubmit={handleEvent}>
            <Form.Label>
                Username:
                <Form.Control type="text"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
            </Form.Label>
            <Form.Label>
                Password:
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Label>
            <button type="submit">Submit</button>
        </Form>
    )
}


