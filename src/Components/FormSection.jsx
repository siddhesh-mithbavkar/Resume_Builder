function FormSection({
    resumeData,
    handlePersonalInfoChange,
    skillInput,
    setSkillInput,
    addSkill,
    educationInput,
    handleEducationChange,
    addEducation
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

                <div className="d-flex gap-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter skill"
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={addSkill}>
                        Add
                    </button>
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
                </div>

                <button className="btn btn-success" onClick={addEducation}>
                    Add Education
                </button>

            </div>
        </div>
    );
}

export default FormSection;