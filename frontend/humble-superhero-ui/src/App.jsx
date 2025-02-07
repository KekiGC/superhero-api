import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import './App.css';

export default function App() {
  const API_URL = "http://localhost:3000/superheroes";
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({ name: "", superpower: "", humilityScore: "" });

  // Fetch superheroes
  const { data: superheroes = [], isLoading } = useQuery({
    queryKey: ["superheroes"],
    queryFn: async () => {
      const response = await axios.get(API_URL);
      return response.data;
    },
  });

  // Mutation to add a superhero
  const mutation = useMutation({
    mutationFn: async (newHero) => await axios.post(API_URL, newHero),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["superheroes"] }),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHero = { 
      ...formData, 
      humilityScore: Number(formData.humilityScore) // ✅ Convertir a número
    };
    mutation.mutate(newHero);
    setFormData({ name: "", superpower: "", humilityScore: "" });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Humble Superheroes</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input 
          className="border p-2 w-full mb-2" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Name" 
          required 
        />
        <input 
          className="border p-2 w-full mb-2" 
          name="superpower" 
          value={formData.superpower} 
          onChange={handleChange} 
          placeholder="Superpower" 
          required 
        />
        <input 
          className="border p-2 w-full mb-2" 
          name="humilityScore" 
          type="number" 
          min="1" 
          max="10" 
          value={formData.humilityScore} 
          onChange={handleChange} 
          placeholder="Humility (1-10)" 
          required 
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Add Superhero
        </button>
      </form>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="border p-4">
          {superheroes.map((hero) => (
            <li key={`${hero.name}-${hero.superpower}`} className="p-2 border-b">
              {hero.name} ({hero.superpower}) - Humility: {hero.humilityScore}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
