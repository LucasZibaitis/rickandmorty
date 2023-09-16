import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: [], 
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            // return {
            //     ...state,
            //     allCharacters: [...state.allCharacters, action.payload], // Agregar al arreglo allCharacters
            //     myFavorites: [...state.myFavorites, action.payload],
            // };
            return { ...state, myFavorites: action.payload, allCharacters: action.payload }
        case 'REMOVE_FAV':
            // return {
            //     ...state,
            //     myFavorites: state.myFavorites.filter(character => character.id !== action.payload),
            //     allCharacters: state.allCharacters.filter(character => character.id !== action.payload),
            // };
            return { ...state, myFavorites: action.payload, allCharacters: action.payload }
            case FILTER:
                if (action.payload !== "Todos") {
                  const filteredCharacters = state.allCharacters.filter(
                    (character) => character.gender === action.payload
                  );
                  return {
                    ...state,
                    myFavorites: filteredCharacters,
                  };
                } else {
                  return {
                    ...state,
                    myFavorites: [...state.allCharacters],
                  };
                }
        case ORDER:
            let orderedCharacters = [...state.allCharacters];
            if (action.payload === "A") {
                orderedCharacters.sort((a, b) => a.id - b.id);
            } else if (action.payload === "D") {
                orderedCharacters.sort((a, b) => b.id - a.id);
            }
            return {
                ...state,
                myFavorites: orderedCharacters,
            };
        default:
            return state;
    }
};

export default rootReducer;