import React, { useState } from "react";
import UIButton from "..//components/UIButton";
import Footer from '../components/footer';
import Header from '../components/header';

const AuthWindow = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Perform authentication logic (e.g., call an authentication API)
    console.log("Авторизация:", email, password);
    // Clear form fields after login
    setEmail("");
    setPassword("");
  };

  const handleRegister = () => {
    // Perform registration logic (e.g., call a registration API)
    console.log("Регистрация:", email, password);
    // Clear form fields after registration
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header /> {/* If you have a header, you can include it here */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-400 p-20 border-2 border-solid border-ccc rounded-10 shadow-md text-center mb-8">
          <h1 className="text-base mb-20">Вход</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-10 mb-10 border-1 border-solid border-ccc rounded-5 text-base"
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-10 mb-10 border-1 border-solid border-ccc rounded-5 text-base"
          />
          <button
            className="mt-100 mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-80 lg:px-80 lg:mt-100 duration-200 transition-colors mb-6 lg:mb-0 rounded-10 shadow-md"
            onClick={handleLogin}
          >
            Войти
          </button>
          <UIButton
            type="outline"
            onClick={handleRegister}
            className="w-full p-10 border-none rounded-5 bg-transparent border border-blue-900 text-blue-900 text-base cursor-pointer m-5 hover:bg-black active:bg-950"
          >
            <a href="/">Регистрация</a>
          </UIButton>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthWindow;