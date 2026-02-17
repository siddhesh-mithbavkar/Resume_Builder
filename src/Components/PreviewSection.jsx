import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


function PreviewSection({
    resumeData,
    removeSkill,
    removeEducation,
    removeExperience
}) {

    const resumeRef = useRef();

    const downloadPDF = async () => {
        const element = resumeRef.current;

        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");

        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("resume.pdf");
    };


    return (
        <div className="col-md-6 p-4 bg-secondary bg-opacity-10 d-flex flex-column align-items-center">

            <div ref={resumeRef} className="bg-white shadow p-4"
                style={{
                    width: "794px",
                    minHeight: "1123px"
                }}>

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

                    <hr />
                    <h4>Experience</h4>

                    {resumeData.experience.map((exp, index) => (
                        <div
                            key={index}
                            className="mb-3 p-2 border rounded d-flex justify-content-between align-items-start"
                        >
                            <div>
                                <strong>{exp.role}</strong>
                                <div>{exp.company}</div>
                                <small className="text-muted">{exp.duration}</small>
                            </div>

                            <button
                                className="btn btn-sm btn-danger"
                                onClick={() => removeExperience(index)}
                            >
                                X
                            </button>
                        </div>
                    ))}


                </div>

            </div>

            <button className="btn btn-primary mt-3" onClick={downloadPDF}>
                Download PDF
            </button>

        </div>
    );
}

export default PreviewSection;
