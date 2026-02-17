
function PreviewSection({
    resumeData,
    removeSkill,
    removeEducation
}) {
    return (
        <div className="col-md-6 p-4 bg-light">
            <div className="preview-section">
                <h2 className="mb-4">Resume Preview</h2>

                <h3>{resumeData.personalInfo.name}</h3>
                <p>{resumeData.personalInfo.email}</p>
                <p>{resumeData.personalInfo.phone}</p>
                <hr />
                <h4>Skills</h4>

                <ul className="list-group">
                    {resumeData.skills.map((skill, index) => (
                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            {skill}
                            <button
                                className="btn btn-sm btn-danger"
                                onClick={() => removeSkill(index)}
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>

                <hr />
                <h4>Education</h4>

                {resumeData.education.map((edu, index) => (
                    <div
                        key={index}
                        className="mb-2 p-2 border rounded d-flex justify-content-between align-items-center"
                    >
                        <div>
                            <strong>{edu.degree}</strong>
                            <div>{edu.college}</div>
                        </div>

                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => removeEducation(index)}
                        >
                            X
                        </button>
                    </div>
                ))}


            </div>
        </div>
    );
}

export default PreviewSection;
