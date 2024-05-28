import React, { useState } from "react";
import axios from "axios";
import { PokemonTrainer } from "../interfaces/PokemonTrainer";
import { useNavigate } from "react-router-dom";
import { validateTrainer } from "../utils/validation";

/**
 * AddTrainer Component
 *
 * Componente que muestra la pagina para agregar un nuevo entrenador con los datos proporcionados
 * funcionalidad de agregar, validar y guardar los datos del nuevo entrenador
 */

const AddTrainer: React.FC = () => {
  // Hook para navegar a diferentes rutas
  const navigate = useNavigate();

  // Estado inicial del entrenador
  const [trainer, setTrainer] = useState<PokemonTrainer>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gymBadges: 0,
  });

  // Estado para manejar errores de validación
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrainer({
      ...trainer,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar cambios en los campos del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateTrainer(trainer); // Valida el formulario
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    try {
      // Solicitud POST para agregar un nuevo entrenador
      await axios.post(
        "https://trainers-backend.onrender.com/api/trainers",
        trainer
      );
      navigate("/"); // Navega a la página principal después de agregar el entrenador
    } catch (error) {
      console.error("Error adding trainer", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Agregar Entrenador Pokémon
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            name="firstName"
            value={trainer.firstName}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.firstName ? "border-red-500" : ""
            }`}
            required
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs italic">{errors.firstName}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Apellidos
          </label>
          <input
            type="text"
            name="lastName"
            value={trainer.lastName}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.lastName ? "border-red-500" : ""
            }`}
            required
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs italic">{errors.lastName}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Teléfono
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={trainer.phoneNumber}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.phoneNumber ? "border-red-500" : ""
            }`}
            required
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs italic">{errors.phoneNumber}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Medallas de Gimnasio
          </label>
          <input
            type="number"
            name="gymBadges"
            value={trainer.gymBadges}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.gymBadges ? "border-red-500" : ""
            }`}
            required
          />
          {errors.gymBadges && (
            <p className="text-red-500 text-xs italic">{errors.gymBadges}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default AddTrainer;
