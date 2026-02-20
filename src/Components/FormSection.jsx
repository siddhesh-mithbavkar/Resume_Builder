import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";


function FormSection({
    resumeData,
    handlePersonalInfoChange,
    skillInput,
    setSkillInput,
    addSkill,
    removeSkill,
    educationInput,
    handleEducationChange,
    addEducation,
    experienceInput,
    handleExperienceChange,
    addExperience,
    handleSkillDragEnd,
    removeEducation,            // ✅
    handleEducationDragEnd
}) {
    return (
        <div className="col-md-6 p-4 border-end">
            <div className="form-section">
                <h2 className="mb-4">Personal Information</h2>

                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={resumeData.personalInfo.name}
                        onChange={handlePersonalInfoChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={resumeData.personalInfo.email}
                        onChange={handlePersonalInfoChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={resumeData.personalInfo.phone}
                        onChange={handlePersonalInfoChange}
                    />
                </div>

                <hr />
                <h4 className="mt-4">Skills</h4>

                <div className="row g-2 align-items-center">
                    <div className="col-8">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter skill"
                            value={skillInput}
                            onChange={(e) => setSkillInput(e.target.value)}
                        />
                    </div>

                    <div className="col-4">
                        <button
                            className="btn btn-primary w-100"
                            onClick={addSkill}
                        >
                            Add
                        </button>
                    </div>
                    <DragDropContext onDragEnd={handleSkillDragEnd}>
                        <Droppable droppableId="skills">
                            {(provided) => (
                                <ul
                                    className="list-group mt-3"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {resumeData.skills.map((skill, index) => (
                                        <Draggable
                                            key={skill + index}
                                            draggableId={skill + index}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <li
                                                    className="list-group-item d-flex justify-content-between align-items-center"
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    {skill}
                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => removeSkill(index)}
                                                    >
                                                        X
                                                    </button>
                                                </li>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>


                </div>

                <hr />
                <h4 className="mt-4">Education</h4>

                <div className="mb-3">
                    <label className="form-label">Degree</label>
                    <input
                        type="text"
                        name="degree"
                        className="form-control"
                        value={educationInput.degree}
                        onChange={handleEducationChange}
                    />

                </div>

                <div className="mb-3">
                    <label className="form-label">College</label>
                    <input
                        type="text"
                        name="college"
                        className="form-control"
                        value={educationInput.college}
                        onChange={handleEducationChange}
                    />

                    <DragDropContext onDragEnd={handleEducationDragEnd}>
                        <Droppable droppableId="education">
                            {(provided) => (
                                <ul
                                    className="list-group mt-3"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {resumeData.education.map((edu, index) => (
                                        <Draggable
                                            key={edu.degree + index}
                                            draggableId={edu.degree + index}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <li
                                                    className="list-group-item d-flex justify-content-between align-items-center"
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <div>
                                                        <strong>{edu.degree}</strong>
                                                        <div className="small">{edu.college}</div>
                                                    </div>

                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => removeEducation(index)}
                                                    >
                                                        X
                                                    </button>
                                                </li>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>



                <button className="btn btn-success" onClick={addEducation}>
                    Add Education
                </button>

                <hr />
                <h4 className="mt-4">Experience</h4>

                <div className="mb-3">
                    <label className="form-label">Company</label>
                    <input
                        type="text"
                        name="company"
                        className="form-control"
                        value={experienceInput.company}
                        onChange={handleExperienceChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Role</label>
                    <input
                        type="text"
                        name="role"
                        className="form-control"
                        value={experienceInput.role}
                        onChange={handleExperienceChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Duration</label>
                    <input
                        type="text"
                        name="duration"
                        className="form-control"
                        value={experienceInput.duration}
                        onChange={handleExperienceChange}
                    />
                </div>

                <button className="btn btn-success" onClick={addExperience}>
                    Add Experience
                </button>

            </div>
        </div>
    );
}

export default FormSection;