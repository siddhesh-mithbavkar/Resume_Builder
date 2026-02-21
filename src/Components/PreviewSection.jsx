import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function PreviewSection({ resumeData }) {
  const resumeRef = useRef();

  const downloadPDF = async () => {
    const element = resumeRef.current;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf");
  };

  return (
    <div className="col-md-6 p-4 bg-secondary bg-opacity-10 d-flex flex-column align-items-center">

      <div
        ref={resumeRef}
        className="bg-white shadow"
        style={{
          width: "794px",
          minHeight: "1123px",
          padding: "50px 60px",
          fontFamily: "Calibri, Arial, sans-serif",
          fontSize: "14px",
          lineHeight: "1.6",
          color: "#333"
        }}
      >

        {/* HEADER */}
        <div className="text-center mb-5">
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "700",
              letterSpacing: "1px",
              marginBottom: "5px"
            }}
          >
            {resumeData.personalInfo.name}
          </h1>

          <div style={{ fontSize: "14px", color: "#555" }}>
            {resumeData.personalInfo.email} | {resumeData.personalInfo.phone}
          </div>
        </div>

        {/* SKILLS */}
        <SectionTitle title="SKILLS" />

        <ul style={{ paddingLeft: "18px", marginTop: "5px" }}>
          {resumeData.skills.map((skill, index) => (
            <li key={index} style={{ marginBottom: "4px", fontSize: "13px" }}>
              {skill}
            </li>
          ))}
        </ul>

        {/* EDUCATION */}
        <SectionTitle title="EDUCATION" />

        {resumeData.education.map((edu, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <div style={{ fontWeight: "600" }}>
              {edu.degree}
            </div>
            <div style={{ fontSize: "13px", color: "#555" }}>
              {edu.college}
            </div>
          </div>
        ))}

        {/* EXPERIENCE */}
        <SectionTitle title="EXPERIENCE" />

        {resumeData.experience.map((exp, index) => (
          <div key={index} style={{ marginBottom: "14px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "600"
              }}
            >
              <span>{exp.role}</span>
              <span style={{ fontWeight: "400", color: "#555" }}>
                {exp.duration}
              </span>
            </div>

            <div
              style={{
                fontStyle: "italic",
                fontSize: "13px",
                marginTop: "3px",
                color: "#444"
              }}
            >
              {exp.company}
            </div>
          </div>
        ))}

      </div>

      <button className="btn btn-primary mt-3" onClick={downloadPDF}>
        Download PDF
      </button>

    </div>
  );
}

/* Reusable Section Title Component */
function SectionTitle({ title }) {
  return (
    <h6
      style={{
        fontSize: "13px",
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: "1px",
        marginTop: "25px",
        marginBottom: "8px",
        color: "#222",
        borderBottom: "1px solid #ccc",
        paddingBottom: "6px"
      }}
    >
      {title}
    </h6>
  );
}

export default PreviewSection;