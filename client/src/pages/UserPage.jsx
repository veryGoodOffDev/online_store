import React, { useContext } from 'react'
import { Context } from '..';
import { Container } from 'react-bootstrap';

const UserPage = () => {
    const {user} = useContext(Context)
    console.log(user.user)
  return (
    <Container>
        <div><h2>Ваш email: {user.user.email}, ваш id: {user.user.id}</h2></div>
    </Container>
    
  )
}

export default UserPage;
