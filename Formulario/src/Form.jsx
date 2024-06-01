import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/form",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      setMessage(response.data.message); // Actualiza el estado del mensaje con la respuesta del servidor
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      setMessage("Error al enviar los datos"); // Muestra un mensaje de error si ocurre un problema
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <div>
            <label>
              Telefono:
              <input
                type=""
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Pais:
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <button type="submit">Enviar</button>
        {message && <p>{message}</p>} {/* Muestra el mensaje del servidor */}
      </form>
    </div>
  );
};
export default Form;
