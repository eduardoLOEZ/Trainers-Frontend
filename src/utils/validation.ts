import { PokemonTrainer } from "../interfaces/PokemonTrainer";

/**
 * validateTrainer Function
 *
 * Función que valida los datos de un entrenador Pokémon.
 * Se asegura de que los campos cumplan con los requisitos mínimos de longitud y formato.
 *
 * @param {PokemonTrainer} trainer - Objeto que representa los datos del entrenador a validar.
 * @returns {Object} errors - Objeto que contiene los mensajes de error para cada campo no válido.
 */

export const validateTrainer = (trainer: PokemonTrainer) => {
  const errors: { [key: string]: string } = {};

  // Validación del campo 'firstName'
  if (!trainer.firstName || trainer.firstName.length < 2) {
    errors.firstName = "El nombre debe tener al menos 2 caracteres";
  }

  // Validación del campo 'lastName'
  if (!trainer.lastName || trainer.lastName.length < 2) {
    errors.lastName = "Los apellidos deben tener al menos 2 caracteres";
  }

  // Validación del campo 'phoneNumber'
  // El número de teléfono debe tener 10 dígitos
  if (!trainer.phoneNumber || !/^\d{10}$/.test(trainer.phoneNumber)) {
    errors.phoneNumber = "El número de teléfono debe tener 10 dígitos";
  }

  // Validación del campo 'gymBadges'
  // El número de medallas debe estar entre 0 y 8
  if (trainer.gymBadges < 0 || trainer.gymBadges > 8) {
    errors.gymBadges = "El número de medallas debe estar entre 0 y 8";
  }
  return errors;
};
