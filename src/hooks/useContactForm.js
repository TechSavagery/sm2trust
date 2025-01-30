import { useState } from "react";
import { sendEmail } from "@/lib/sendEmail";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const response = await sendEmail(formData);

    if (response.success) {
      setSent(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 2200);
    } else {
      alert(response.message);
    }

    setIsSending(false);
  };

  return {
    formData,
    sent,
    isSending,
    handleInputChange,
    handleSubmit,
  };
};
