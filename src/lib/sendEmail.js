export const sendEmail = async (formData) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send the message. Please try again.");
      }
  
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };