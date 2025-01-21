import { useState } from "react";

export const SignupView = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');



    const handleSubmit = (e) => {
        event.preventDefault();
        const data = {
            Username: username,
            Password: password,
            email: email,
            birthday: birthday
        }
        fetch("https://appflixcf-d4726ef19667.herokuapp.com/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((response) => {
            if (response.ok) {
                alert('signup successful');
                window.location.reload()
            } else {
                alert('signup failed');
            }
        })
    }
    return (<form onSubmit={handleSubmit}>
        <label>
            username :
            <input
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
                minLength="3"
            />
        </label>
        <label>
            password :
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="3"
            />
        </label>
        <label>
            birthday (yyyy-mm-dd) :
            <input
                type="text"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
                minLength="3"
            />
        </label>
        <label>
            email :
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                minLength="3"
            />
        </label>
        <button type="submit"> Submit </button>
    </form>
    )
}