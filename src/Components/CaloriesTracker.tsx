import { useMemo } from "react"
import type { Tactivity } from "../types"
import CalorieDisplay from "./CalorieDisplay"


type CalorieTrackerProps = {
    activities: Tactivity[]
}



const CaloriesTracker = ({activities}:CalorieTrackerProps) => {

    const caloriesConsumed = useMemo(()=>activities.reduce((total, activity)=> 
                activity.category === 1 ? total + activity.calories : total, 0),[activities])
    const caloriesBurned = useMemo(()=>activities.reduce((total, activity)=> 
        activity.category === 2 ? total + activity.calories : total, 0),[activities])
    const caloriesDiference = useMemo(()=>caloriesConsumed - caloriesBurned,[activities])

  return (
    <>
        <h2 className="text-4xl font-black text-white text-center">Resumen de Calorias</h2>

        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5">
            <CalorieDisplay calories={caloriesConsumed} text="Consumidas"/>
            <CalorieDisplay calories={caloriesBurned} text="Quemadas"/>
            <CalorieDisplay calories={caloriesDiference} text="Diferencia"/>
        </div>
    </>
  )
}

export default CaloriesTracker