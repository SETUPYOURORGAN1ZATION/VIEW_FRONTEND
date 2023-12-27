import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  PassTicket,
  Register,
  StudentRegister,
  Login,
  SignUp,
} from "pages";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/:studentId" element={<StudentRegister />} />
          <Route path="/passticket" element={<PassTicket />} />
          <Route path="/login" element={<Login />} />
          <Route path="/siginup" element={<SignUp />} />
        </Routes>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 12vw;
`;

export default App;
