import type { Tactivity } from "../types/index"


export type ActivityActiones = 
    { type: 'save-activity', payload:{newActivity: Tactivity} }

type ActivityState = {
    activities: Tactivity[]
}


export const initialState: ActivityState = {
    activities: []
}

export const activityReducer = (state: ActivityState = initialState, action: ActivityActiones) => {

    if(action.type === 'save-activity'){
        console.log("Guardando desde el type save-activity")
    }
}