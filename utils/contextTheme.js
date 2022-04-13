import React, { createContext, useReducer } from "react";

let initialState = {
  theme: '',
};

const ThemeContext = createContext({
  theme: '',
  changeTheme: () => {},
});

function themeReducer(state, action) {
  switch (action.type) {
    case "THEME":
      return { theme: action.payload };
    default:
      return state;
  }
}


function ThemeProvider(props){
    const [state, dispatch ] = useReducer(themeReducer, initialState)

    function changeTheme(theme){
        dispatch({
            type: 'THEME',
            payload: theme
        })
    }
    return(
        <ThemeContext.Provider value={{themeName: state.theme, changeTheme}}
         {...props}
        />
    )
} 


export {ThemeProvider, ThemeContext}