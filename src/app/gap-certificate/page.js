"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import FormInput from "../../components/FormInput";
import PDFButton from "../../components/PDFButton";

export default function GapCertificate() {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");

  const generatePDF = () => {
    if (!name.trim() || !fatherName.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const doc = new jsPDF({
      unit: "pt",
      format: "a4",
    });

    // Title
    doc.setFontSize(22);
    doc.text("Gap Certificate", 210, 80, null, null, "center");

    // Body text
    doc.setFontSize(14);
    doc.text(`This is to certify that ${name},`, 60, 150);
    doc.text(`Son/Daughter of ${fatherName},`, 60, 180);
    doc.text("has taken a gap period.", 60, 210);

    // Footer or signature placeholder
    doc.text("Authorized Signature", 60, 300);

    // Save/download the PDF
    doc.save("gap-certificate.pdf");
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-lg mt-12">
      <h1 className="text-2xl font-semibold mb-6 text-center">Gap Certificate</h1>

      <div className="flex flex-col gap-6">
        <FormInput label="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
        <FormInput label="Father's Name" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />

        <PDFButton onClick={generatePDF} />
      </div>
    </div>
  );
}
