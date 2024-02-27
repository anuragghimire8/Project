import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Import Container, Row, and Col
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
          <Routes>
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp/>}/>
    
          </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
