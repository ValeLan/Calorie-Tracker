import { useState, ChangeEvent, FormEvent } from "react"
import { categories } from "../Data/categories"
import type {Tactivity} from "../types/index"


export default function Form() {

    const [activity, setActivity] = useState<Tactivity>({
        category: 1,
        name: '',
        calories: 0
    })

    const handleChange = (e : ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const isANumber = ['category','calories'].includes(e.target.id)

        setActivity({
            ...activity,
            [e.target.id] : isANumber ? +e.target.value : e.target.value
        })
    }


    const isValid = () =>{
        const {name, calories} = activity

        return name.trim() !== '' && calories > 0
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        
    }



  return (
    <form 
        className="space-y-5 bg-white shadow p-10 rounded-lg"
        onSubmit={handleSubmit}
    >
        <p>Formulario</p>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">
                Categoría
            </label>
            <select 
                className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                id="category"
                value={activity.category}
                onChange={handleChange}
            >
                {categories.map(category => (
                    <option
                        key={category.id}
                        value={category.id}
                    >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="activity" className="font-bold">
                Actividad:
            </label>
            <input 
                id="name" 
                type="text"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
                value={activity.name}
                onChange={handleChange}
            />
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">
                Calorias:
            </label>
            <input 
                id="calories" 
                type="number"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Calorias. ej. 300 o 500"
                value={activity.calories}
                onChange={handleChange}
            />
        </div>
        <input 
            type="submit" 
            id="" 
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white 
            cursor-pointer disabled:opacity-10"
            value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
            disabled={!isValid()}
        />
    </form>
  )
}
