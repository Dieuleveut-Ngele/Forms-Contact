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
import {useState} from "react";
import {useForm} from "react-hook-form";
function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: 18,
    gender: "",
  });
  const {register, handleSubmit, formState:{errors}} = useForm({defaultValues: formData});
  const onSubmit = (data) => {
    console.log(data);
    alert("Très bien, vous avez été envoyé avec succès !" + data.name);
  }

  return (    
    <div class="display-flex items-center justify-center isolate bg-Beige px-6 py-24 sm:py-32 lg:px-8">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900">Nom</label>
            <input 
              type="text" 
              name="name"
              id="name"
              placeholder="Votre nom"
              {...register("name", {
                required: "Le champ est obligatoire",
              })} />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900">Telephone</label>
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
                }

            })} />
             {errors.phone && <p>{errors.phone.message}</p>}
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <input 
                type="email" 
                name="email"
                {...register("email", {
                required: "Ce champ est obligatoire",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Ce champ n'est pas au bon format",
                          },
                  })}
              />
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Age</label>
              <div class="mt-2">
              <input 
                type="number" 
                name="age" {...register("age", {
                required: "Ce champ est obligatoire",
                min: {
                  value: 18,
                  message: "Vous devez avoir au moins 18 ans",
                      },
                 })}
                 />
          {errors.age && (
          <span style={{ color: "red" }}>{errors.age.message}</span>
           )}                                                
           </div> 
          </div> 
            
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Genre</label>
              <div class="mt-2">
              <select class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" {...register("gender")} >
                <option value="femme">Femme</option>
                <option value="homme">Homme</option>
                <option value="autres">Autres</option>
              </select>
            </div>
          </div>

             <div class="sm:col-span-3">
            <button  
              type="submit" class="rounded-md bg-indigo-600 my-6 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enregistrer</button>
             </div>
          </div>
        </form>
      </div>
    </div>
     
  );
}
export default App;







