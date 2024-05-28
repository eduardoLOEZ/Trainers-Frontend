import { PokemonTrainer } from "../interfaces/PokemonTrainer";

export const validateTrainer = (trainer: PokemonTrainer) => {
  const errors: { [key: string]: string } = {};
  if (!trainer.firstName || trainer.firstName.length < 2) {
    errors.firstName = "El nombre debe tener al menos 2 caracteres";
  }
  if (!trainer.lastName || trainer.lastName.length < 2) {
    errors.lastName = "Los apellidos deben tener al menos 2 caracteres";
  }
  if (!trainer.phoneNumber || !/^\d{10}$/.test(trainer.phoneNumber)) {
    errors.phoneNumber = "El número de teléfono debe tener 10 dígitos";
  }
  if (trainer.gymBadges < 0 || trainer.gymBadges > 8) {
    errors.gymBadges = "El número de medallas debe estar entre 0 y 8";
  }
  return errors;
};
