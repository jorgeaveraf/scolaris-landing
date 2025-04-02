// submitContact.ts
export interface ContactPayload {
    colegio: string;
    nombre: string;
    correo: string;
    telefono: string;
  }
  
  export const submitContact = async (data: ContactPayload): Promise<void> => {
    try {
      await fetch("https://n8n.scolaris.com.mx/webhook/90cfb170-506b-4a57-885a-ec5db808888e", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      throw error;
    }
  };
  