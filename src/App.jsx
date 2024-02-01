/*import './App.css'
import React, { useState } from 'react';

export default function AppForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    // Traitement des données du formulaire

    // ...

    // Envoi des données du formulaire

    // ...
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
         <button type="submit">Envoyer</button>
      </div>
    </form>
  );
} */

import "./App.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SelectAvatar from "./components/select-avatar";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: 18,
    gender: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });
  const onSubmit = (data) => {
    console.log(data);
    alert("Très bien, vous avez été envoyé avec succès !" + data.name);
  };

  return (
      <div className="mt-10 lg:mx-auto lg:w-full lg:max-w-lg">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-gray flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="size-40 mx-auto"
                src="https://kda-certificats.ams3.digitaloceanspaces.com/kadea-acdemy.png"
                alt="img Kadea Academy"
              />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight flex w-full justify-center mt-8 rounded-md bg-red-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Enregistrement dev-web-c2
                </h2>
            </div>
        </div> 

          <div class='border-form'>
           <SelectAvatar />
          <div class="sm:col-span-3">
            <label className="block text-sm font-medium mt-6 leading-6 text-gray-900">
              Nom
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Votre nom"
              {...register("name", {
                required: "Le champ est obligatoire",
              })}
              className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
        
            
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium mt-6 leading-6 text-gray-900">
              Telephone
            </label>
            <input
              type="text"
              name="phone"
              id="telephone"
              placeholder="Votre numéro de téléphone"
              {...register("phone", {
                required: "Ce champ est obligatoire",
                pattern: {
                  value: /^[0-9]{10}$/i,
                  message: "Le numéro de téléphone doit contenir 10 chiffres",
                },
              })}
              className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>
            
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium mt-6 leading-6 text-gray-900">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                {...register("email", {
                  required: "Ce champ est obligatoire",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Ce champ n'est pas au bon format",
                  },
                })}
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium mt-6 leading-6 text-gray-900">
                Age
              </label>
                <input
                  type="number"
                  name="age"
                  {...register("age", {
                    required: "Ce champ est obligatoire",
                    min: {
                      value: 18,
                      message: "Vous devez avoir au moins 18 ans",
                    },
                  })}
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.age && (
                  <span style={{ color: "red" }}>{errors.age.message}</span>
                )}
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium mt-6 leading-6 text-gray-900">
                Genre
              </label>
                <select
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("gender")}
                >
                
                  <option value="">Deroulez et selectionnez votre genre</option>
                  <option value="femme">Femme</option>
                  <option value="homme">Homme</option>
                  <option value="autres">Autres</option>
                </select>
            </div>
            
            <div class="sm:col-span-3">
              <button
                type="submit"
                className="flex w-full justify-center mt-8 rounded-md bg-red-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Enregistrer
              </button>
            </div>
          </div>
       </form>
    </div>
   
  );
}
export default App;
