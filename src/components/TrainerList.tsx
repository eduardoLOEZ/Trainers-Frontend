import { useEffect, useState } from "react";
import { PokemonTrainer } from "../interfaces/PokemonTrainer";
import axios from "axios";
import { Link } from "react-router-dom";

/**
 * TrainerList Component
 *
 * Componente que muestra una lista de entrenadores Pokémon y proporciona
 * funcionalidad para agregar, editar, eliminar y descargar la lista en formato CSV.
 */

export default function TrainerList() {
  // Estado para almacenar la lista de entrenadores
  const [trainers, setTrainers] = useState<PokemonTrainer[]>([]);
  // Estado para manejar la carga de datos
  const [loading, setLoading] = useState(true);

  /**
   * useEffect hook
   *
   * Se ejecuta al montar el componente y obtiene la lista de entrenadores desde el backend.
   */

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get<PokemonTrainer[]>(
          "https://trainers-backend.onrender.com/api/trainers"
        );
        setTrainers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trainers", error);
        setLoading(false);
      }
    };

    fetchTrainers();
  }, []);

  /**
   * deleteTrainer
   *
   * Función para eliminar un entrenador por ID.
   *
   * @param id - ID del entrenador a eliminar
   */
  const deleteTrainer = async (id: string) => {
    try {
      await axios.delete(
        `https://trainers-backend.onrender.com/api/trainers/${id}`
      );
      setTrainers(trainers.filter((trainer) => trainer._id !== id));
    } catch (error) {
      console.error("Error deleting trainer", error);
    }
  };

  /**
   * downloadCSV
   *
   * Función para descargar la lista de entrenadores en formato CSV.
   */
  const downloadCSV = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/trainers/download/csv",
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "trainers.csv");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error downloading CSV", error);
    }
  };

  if (loading) return <div>Loading Trainers...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Entrenadores Pokémon
      </h2>
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <Link
          to="/add-trainer"
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700 mb-2 md:mb-0"
        >
          Agregar Entrenador
        </Link>
        <button
          onClick={downloadCSV}
          className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-700"
        >
          Generar Reporte CSV
        </button>
      </div>
      <div className="overflow-x-auto">
        {trainers.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">Nombre</th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Apellidos
                </th>
                <th className="py-2 px-4 border-b border-gray-200">Teléfono</th>
                <th className="py-2 px-4 border-b border-gray-200">Medallas</th>
                <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {trainers.map((trainer) => (
                <tr key={trainer._id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-200">
                    {trainer.firstName}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {trainer.lastName}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {trainer.phoneNumber}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {trainer.gymBadges}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 flex flex-col md:flex-row">
                    <Link
                      to={`/edit-trainer/${trainer._id}`}
                      className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-700 mb-2 md:mb-0 md:mr-2"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteTrainer(trainer._id!)}
                      className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-700"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-gray-500">
            No hay entrenadores Pokémon en la tabla de registros.
          </div>
        )}
      </div>
    </div>
  );
}
