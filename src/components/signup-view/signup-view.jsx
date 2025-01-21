import { useState } from 'react';
import { Form, Card } from 'react-bootstrap';
import './signup-view.scss';

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
      birthday: birthday,
    };
    fetch('https://appflixcf-d4726ef19667.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        alert('signup successful');
        window.location.reload();
      } else {
        alert('signup failed');
      }
    });
  };
  return (
    <Card className='d-flex justify-content-center bg-dark radius-10'>
      <Form onSubmit={handleSubmit} className='signupForm text-light'>
        <Form.Group controlId='formBasicUsername'>
          <Form.Label> username :</Form.Label>
          <Form.Control
            type='text'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
            minLength='3'
          />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>password :</Form.Label>
          <Form.Control
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength='3'
          />
        </Form.Group>

        <Form.Group controlId='formBirthday'>
          <Form.Label>birthday (yyyy-mm-dd) :</Form.Label>
          <Form.Control
            type='text'
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
            minLength='3'
          />
        </Form.Group>
        <Form.Group controlId='formEmail'>
          <Form.Label>email :</Form.Label>
          <Form.Control
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            minLength='3'
          />
        </Form.Group>
        <button type='submit'> Submit </button>
      </Form>
    </Card>
  );
};
