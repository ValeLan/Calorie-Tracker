import type { Tactivity } from "../types/index"


export type ActivityActiones =
    { type: 'save-activity', payload: { newActivity: Tactivity } } |
    { type: 'set-activeId', payload: { id: Tactivity['id'] } } |
    { type: 'delete-activity', payload: { id: Tactivity['id'] } } |
    { type: 'restart-app'}

export type ActivityState = {
    activities: Tactivity[]
    activeId: Tactivity['id']
}

const localStorageActivities = (): Tactivity[] => {
    const activitiesSaved = localStorage.getItem('activities')
    return activitiesSaved ? JSON.parse(activitiesSaved) : []
}

export const initialState: ActivityState = {
    activities: localStorageActivities(),
    activeId: ''
}

export const activityReducer = (state: ActivityState = initialState, action: ActivityActiones) => {

    if (action.type === 'save-activity') {

        let updatedActivities: Tactivity[] = []

        if (state.activeId) {
            updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
        } else {
            updatedActivities = [...state.activities, action.payload.newActivity]
        }

        return {
            ...state,
            activities: updatedActivities,
            activeId: ''
        }
    }

    if (action.type === 'set-activeId') {

        return {
            ...state,
            activeId: action.payload.id
        }
    }

    if (action.type === 'delete-activity') {
        return {
            ...state,
            activities: state.activities.filter(activity => activity.id != action.payload.id)
        }
    }

    if(action.type === 'restart-app'){
        return {
            activities: [],
            activeId: ''
        }
    }

    return state
}