import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

import { Question } from "./models/QAModels.js";
import QuestionDescription from "./components/QuestionDescription.jsx";
import Answers from "./components/Answers";
import { Routes, Route, Navigate } from "react-router";
import DefaultLayout from "./components/DefaultLayout.jsx";
import { AnswerForm, EditAnswerForm } from "./components/AnswerForm.jsx";
import { LoginForm } from "./components/AuthComponents.jsx";
import Questions from "./components/Questions.jsx";
import NotFound from "./components/NotFound.jsx";
import API from "./API/API.js";

function App() {
  const [questions, setQuestions] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const getQuestions = async () => {
      const questions = await API.getQuestions();
      setQuestions(questions);
    }
    getQuestions();
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await API.getUserInfo();
        setLoggedIn(true);
        setUser(user);
      } catch(error) {
        console.warn(error);
      }
    };
    checkAuth();
  }, []);

  const handleLogin = async (credentials) => {
    try {
      const user = await API.logIn(credentials);
      setLoggedIn(true);
      setMessage({msg: `Welcome, ${user.name}!`, type: "success"});
      setUser(user);
    } catch(err) {
      setMessage({msg: err, type: "danger"});
    }
  };

  const handleLogout = async () => {
    await API.logOut();
    setLoggedIn(false);
    setMessage("");
    setUser(undefined);
  };

  return (
    <Routes>
      <Route element={ <DefaultLayout loggedIn={loggedIn} handleLogout={handleLogout} message={message} setMessage={setMessage} />}>
        <Route path="/" element={ <Questions questions={questions}/> } />
        <Route path="/questions/:questionId" element={ <QuestionDescription questions={questions} /> }>
          <Route index element={ <Answers user={user} /> } ></Route>
          <Route path="answers/new" element={loggedIn ? <AnswerForm addAnswer={true} user={user} /> : <Navigate replace to="/" />}></Route>
          <Route path="answers/:answerId/edit" element={loggedIn ? <EditAnswerForm editAnswer={true} user={user} /> : <Navigate replace to="/" />}></Route>
        </Route>
        <Route path="/login" element={loggedIn ? <Navigate replace to="/" /> : <LoginForm handleLogin={handleLogin} />} />
        <Route path="*" element={ <NotFound /> } />
      </Route>
  </Routes>
  )

}

export default App;
