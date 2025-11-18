"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import FormInput from "../../components/FormInput";
import PDFButton from "../../components/PDFButton";

export default function EWSCertificate() {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [address, setAddress] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [reason, setReason] = useState("");

  const generatePDF = () => {
    if (
      !name.trim() ||
      !fatherName.trim() ||
      !address.trim() ||
      !annualIncome.trim()
    ) {
      alert("Please fill in all required fields");
      return;
    }

    const doc = new jsPDF({
      unit: "pt",
      format: "a4",
    });

    // Title
    doc.setFontSize(24);
    doc.text("ECONOMICALLY WEAKER SECTION (EWS) CERTIFICATE", 297.5, 80, null, null, "center");

    // Institution/Header info
    doc.setFontSize(14);
    doc.text("Government of [State/Union Territory]", 297.5, 110, null, null, "center");
    doc.text(`Date of Issue: ${new Date().toLocaleDateString()}`, 460, 140);

    // Body content
    doc.setFontSize(16);
    doc.text("This is to certify that", 60, 180);

    doc.setFontSize(18);
    doc.text(name, 60, 210);

    doc.setFontSize(16);
    doc.text(`Son/Daughter/Wife of ${fatherName},`, 60, 240);

    doc.setFontSize(14);
    doc.text("permanent resident of", 60, 270);

    doc.text(address, 60, 300, { maxWidth: 480 });

    doc.setFontSize(16);
    doc.text(
      `belongs to the Economically Weaker Section (EWS) category with an annual income not exceeding ₹${annualIncome}.`,
      60,
      340,
      { maxWidth: 480 }
    );

    if (reason.trim()) {
      doc.setFontSize(14);
      doc.text(
        `Reason for issuing this certificate: ${reason}`,
        60,
        370,
        { maxWidth: 480 }
      );
    }

    // Footer with signature placeholders
    doc.setFontSize(14);
    doc.text("Authorized Signatory", 60, 450);
    doc.text("_______________________", 55, 445);
    doc.text("Signature & Seal", 60, 465);

    doc.setFontSize(12);
    doc.text("Office Address: Government Office, City, State - PIN", 60, 500);
    doc.text("Contact: +91 12345 67890", 60, 520);

    // Save/download the PDF
    doc.save("ews-certificate.pdf");
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-lg mt-12">

      <h1 className="text-2xl font-semibold mb-6 text-center">EWS Certificate</h1>

      <div className="flex flex-col gap-6">
        <FormInput label="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
        <FormInput label="Father's/Husband's Name" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
        <FormInput label="Permanent Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <FormInput label="Annual Family Income (in INR)" value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)} />
        <FormInput label="Reason for Issuing Certificate (optional)" value={reason} onChange={(e) => setReason(e.target.value)} />

        <PDFButton onClick={generatePDF} />
      </div>
    </div>
  );
}
