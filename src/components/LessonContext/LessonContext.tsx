import React from 'react';
import { baseArray } from '../../baseArray';
import { State, Dispatch, Action, ProviderProps } from "../../types/types";


const initialState = {
    shown: baseArray,
    favorites: JSON.parse(localStorage.getItem('favorites') || '{}')?.favorites
}

const LessonsStateContext = React.createContext<State | undefined>(undefined);
const LessonsDispatchContext = React.createContext<Dispatch | undefined>(undefined);

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'reset':
            return initialState;
        case 'reset_filters':
            return {
                shown: baseArray,
                favorites: state.favorites
            }
        case 'add_favorite': {
            const lesson = baseArray.find((el) => el.id === action.id);
            const newFavorites = [...state.favorites, lesson];
            return {
                shown: state.shown,
                favorites: newFavorites
            };
        }
        case 'remove_favorite': {
            const newFavorites = state.favorites.filter((el) => el.id !== action.id);
            return {
                shown: state.shown,
                favorites: newFavorites
            };
        }
        case 'filter_name': {
            const filtered = baseArray.filter((el) =>
                el.title.toLowerCase().includes(action.searchQuery?.toLowerCase() || '')
            );
            return {
                shown: filtered,
                favorites: state.favorites
            };
        }
        case 'filter_tag': {
            const filtered = baseArray.filter((el) => el.tags.includes(action.searchQuery || ''));
            return {
                shown: filtered,
                favorites: state.favorites
            };
        }
        default:
            return state;
    }
};

export const LessonsProvider = ({children}: ProviderProps) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <LessonsStateContext.Provider value={state}>
            <LessonsDispatchContext.Provider value={dispatch}>
                {children}
            </LessonsDispatchContext.Provider>
        </LessonsStateContext.Provider>
    );
};

const useLessonsState = () => {
    const context = React.useContext(LessonsStateContext);
    if (!context)
        throw new Error('useLessonsState must be used inside LessonsProvider');
    return context;
};

const useLessonsDispatch = () => {
    const context = React.useContext(LessonsDispatchContext);
    if (!context)
        throw new Error('useLessonsDispatch must be used inside LessonsProvider');
    return context;
};

export const useLessons = () => {
    return { state: useLessonsState(), dispatch: useLessonsDispatch() };
};