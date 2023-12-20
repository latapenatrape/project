import React, { useState } from "react";
import Footer from '../components/footer';
import Header from '../components/header';

const Project = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.value);
  };

  const handleSubmit = () => {
    
    console.log("Project Name:", projectName);
    console.log("Project Description:", projectDescription);
    console.log("Photo:", photo);

   
    setSubmitted(true);

   
    setProjectName("");
    setProjectDescription("");
    setPhoto("");
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
        
      <Header />
        <div><h3 className="text-base mb-10">Предложите свой проект!</h3></div>
      <div className="flex-grow flex items-center justify-center">
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-400 p-20 border-2 border-solid border-ccc rounded-10 shadow-md text-center mb-8">
        
          
          <div className="mb-4">
            <label className="text-base mb-2 block">Загрузить фотографию:</label>
            <input
              type="file"
              placeholder="Фотография проекта"
              onChange={handlePhotoChange}
              className="w-full p-4 border-1 border-solid border-ccc rounded-5 text-base"
            />
          </div>

          <div>
            <label className="text-base mb-2 block">Название Вашего проекта:</label>
            <input
              type="text"
              placeholder="Название проекта"
              value={projectName}
              onChange={handleProjectNameChange}
              className="w-full p-4 mb-4 border-1 border-solid border-ccc rounded-5 text-base"
            />
            <label className="text-base mb-2 block">Опишите идею Вашего проекта:</label>
            <input
              type="text"
              placeholder="Описание проекта"
              value={projectDescription}
              onChange={handleProjectDescriptionChange}
              className="w-full p-4 border-1 border-solid border-ccc rounded-5 text-base"
            />
          </div>
       

        
        <div className="buttons">
          <button
            onClick={handleSubmit}
            className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-80 lg:px-80 duration-200 transition-colors mb-6 lg:mb-0 rounded-10 shadow-md">
            Отправить
          </button>
          {submitted && (
            <div className="flex text-green-600 mt-2">
              Спасибо за Ваш ответ!
            </div>
          )}
        </div> 
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
