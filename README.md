# React + TypeScript + Vite

# Pokémon Trainer Management System

## Descripción

Este proyecto es un sistema de gestión de entrenadores Pokémon. Permite a los usuarios agregar, editar, eliminar y ver una lista de entrenadores Pokémon. También proporciona la funcionalidad para descargar la lista de entrenadores en formato CSV. El frontend de la aplicación está desarrollado utilizando React y React Router, mientras que el backend utiliza Node.js y Express.

## Características

- **Agregar Entrenadores**: Permite a los usuarios agregar nuevos entrenadores Pokémon.
- **Editar Entrenadores**: Permite a los usuarios editar la información existente de los entrenadores.
- **Eliminar Entrenadores**: Permite a los usuarios eliminar entrenadores de la lista.
- **Ver Lista de Entrenadores**: Muestra una lista de todos los entrenadores Pokémon registrados.
- **Descargar Lista en CSV**: Permite a los usuarios descargar la lista completa de entrenadores en formato CSV.

## Estructura del Proyecto

```plaintext
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── AddTrainer.tsx
│   │   ├── EditTrainer.tsx
│   │   ├── TrainerList.tsx
│   │   └── ...
│   ├── interfaces
│   │   └── PokemonTrainer.ts
│   ├── utils
│   │   └── validation.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
├── tsconfig.json
└── README.md
```



## Dependencias

- axios: ^1.7.2
- react: ^18.2.0
- react-router-dom: ^6.23.1
- postcss: ^8.4.38
- tailwindcss: ^3.4.3
- typescript: ^5.2.2
- vite: ^5.2.0


```bash
git clone https://github.com/eduardoLOEZ/Trainers-Frontend.git

```

```bash
cd Trainers-Frontend
npm install

npm run dev


```


![Screenshot](https://res.cloudinary.com/dyhpbqaht/image/upload/v1716878594/Screenshot_2024-05-28_at_0.42.18_1_hfqpco.png)
![Screenshot](https://res.cloudinary.com/dyhpbqaht/image/upload/v1716878618/Screenshot_2024-05-28_at_0.43.25_akg0z8.png)

![Screenshot](https://res.cloudinary.com/dyhpbqaht/image/upload/v1716878679/Screenshot_2024-05-28_at_0.44.26_dlonlt.png)

