"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import FormInput from "../../components/FormInput";
import PDFButton from "../../components/PDFButton";

export default function ResumeBuilder() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [objective, setObjective] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");

  const generatePDF = () => {
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      alert("Please fill in all required fields: Full Name, Email, and Phone");
      return;
    }

    const doc = new jsPDF({ unit: "pt", format: "a4" });

    // Header - Name & Contact
    doc.setFontSize(22);
    doc.text(fullName, 40, 50);

    doc.setFontSize(12);
    doc.text(`Email: ${email}`, 40, 70);
    doc.text(`Phone: ${phone}`, 40, 85);
    if (address.trim()) {
      doc.text(`Address: ${address}`, 40, 100, { maxWidth: 510 });
    }

    // Divider line
    doc.setLineWidth(0.5);
    doc.line(40, 110, 555, 110);

    // Objective
    if (objective.trim()) {
      doc.setFontSize(14);
      doc.text("Career Objective", 40, 130);
      doc.setFontSize(12);
      doc.text(objective, 40, 150, { maxWidth: 510 });
    }

    // Education
    if (education.trim()) {
      doc.setFontSize(14);
      doc.text("Education", 40, objective.trim() ? 200 : 130);
      doc.setFontSize(12);
      doc.text(education, 40, objective.trim() ? 220 : 150, { maxWidth: 510 });
    }

    // Experience
    if (experience.trim()) {
      const y = education.trim() ? (objective.trim() ? 270 : 200) : (objective.trim() ? 270 : 130);
      doc.setFontSize(14);
      doc.text("Work Experience", 40, y);
      doc.setFontSize(12);
      doc.text(experience, 40, y + 20, { maxWidth: 510 });
    }

    // Skills
    if (skills.trim()) {
      let y =
        experience.trim() ? (education.trim() ? (objective.trim() ? 340 : 270) : (objective.trim() ? 340 : 270)) : (education.trim() ? (objective.trim() ? 270 : 200) : (objective.trim() ? 270 : 130));
      doc.setFontSize(14);
      doc.text("Skills", 40, y);
      doc.setFontSize(12);
      doc.text(skills, 40, y + 20, { maxWidth: 510 });
    }

    // Save/download the PDF
    doc.save("resume.pdf");
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-lg mt-12">
      <h1 className="text-2xl font-semibold mb-6 text-center">Resume Builder</h1>

      <div className="flex flex-col gap-6">
        <FormInput label="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <FormInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormInput label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <FormInput label="Address (optional)" value={address} onChange={(e) => setAddress(e.target.value)} />
        <FormInput label="Career Objective (optional)" value={objective} onChange={(e) => setObjective(e.target.value)} />
        <FormInput label="Education (optional)" value={education} onChange={(e) => setEducation(e.target.value)} />
        <FormInput label="Work Experience (optional)" value={experience} onChange={(e) => setExperience(e.target.value)} />
        <FormInput label="Skills (optional)" value={skills} onChange={(e) => setSkills(e.target.value)} />

        <PDFButton onClick={generatePDF} />
      </div>
    </div>
  );
}
