import { useState } from "react";
import FormSection from "./Components/FormSection";
import PreviewSection from "./Components/PreviewSection";
import "./index.css";

function App() {

  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: ""
    },
    skills: [],
    education: []
  });


  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;

    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [name]: value
      }
    });
  };

  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {
    if (skillInput.trim() === "") return;

    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, skillInput]
    });

    setSkillInput("");
  };


  const removeSkill = (indexToRemove) => {
    const updatedSkills = resumeData.skills.filter(
      (_, index) => index !== indexToRemove
    );

    setResumeData({
      ...resumeData,
      skills: updatedSkills
    });
  };

  const [educationInput, setEducationInput] = useState({
    degree: "",
    college: ""
  });

  const handleEducationChange = (e) => {
    const { name, value } = e.target;

    setEducationInput({
      ...educationInput,
      [name]: value
    });
  };

  const addEducation = () => {
    if (!educationInput.degree || !educationInput.college) return;

    setResumeData({
      ...resumeData,
      education: [...resumeData.education, educationInput]
    });

    setEducationInput({
      degree: "",
      college: ""
    });
  };

  const removeEducation = (indexToRemove) => {
    const updatedEducation = resumeData.education.filter(
      (_, index) => index !== indexToRemove
    );

    setResumeData({
      ...resumeData,
      education: updatedEducation
    });
  };



  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">

        {/* Left Side - Form */}

        <FormSection
          resumeData={resumeData}
          handlePersonalInfoChange={handlePersonalInfoChange}
          skillInput={skillInput}
          setSkillInput={setSkillInput}
          addSkill={addSkill}
          educationInput={educationInput}
          handleEducationChange={handleEducationChange}
          addEducation={addEducation}
        />



        {/* Right Side - Preview */}
        <PreviewSection
          resumeData={resumeData}
          removeSkill={removeSkill}
          removeEducation={removeEducation}
        />


      </div>
    </div>
  );
}

export default App;
