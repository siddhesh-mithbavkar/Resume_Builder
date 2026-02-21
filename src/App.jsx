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
    education: [],
    experience: []
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

  const [experienceInput, setExperienceInput] = useState({
    company: "",
    role: "",
    duration: ""
  });

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;

    setExperienceInput({
      ...experienceInput,
      [name]: value
    });
  };

  const addExperience = () => {
    if (
      !experienceInput.company ||
      !experienceInput.role ||
      !experienceInput.duration
    ) return;

    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, experienceInput]
    });

    setExperienceInput({
      company: "",
      role: "",
      duration: ""
    });
  };

  const removeExperience = (indexToRemove) => {
    const updatedExperience = resumeData.experience.filter(
      (_, index) => index !== indexToRemove
    );

    setResumeData({
      ...resumeData,
      experience: updatedExperience
    });
  };

  const handleSkillDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(resumeData.skills);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setResumeData({
      ...resumeData,
      skills: items
    });
  };

  const handleEducationDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(resumeData.education);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setResumeData({
      ...resumeData,
      education: items
    });
  };

  const handleExperienceDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(resumeData.experience);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setResumeData({
      ...resumeData,
      experience: items
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
          experienceInput={experienceInput}
          handleExperienceChange={handleExperienceChange}
          addExperience={addExperience}
          removeSkill={removeSkill}
          handleSkillDragEnd={handleSkillDragEnd}
          removeEducation={removeEducation}
          handleEducationDragEnd={handleEducationDragEnd}
          removeExperience={removeExperience}              
          handleExperienceDragEnd={handleExperienceDragEnd}
        />



        {/* Right Side - Preview */}
        <PreviewSection
          resumeData={resumeData}
          removeSkill={removeSkill}
          removeEducation={removeEducation}
          removeExperience={removeExperience}
        />


      </div>
    </div>
  );
}

export default App;
