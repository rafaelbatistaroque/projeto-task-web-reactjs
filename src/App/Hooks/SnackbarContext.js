import React from "react";

export const SnackbarContext = React.createContext();

export const SnackbarProvider = ({ children }) => {
  const [abrirSnackbar, setAbrirSnackbar] = React.useState(false);
  const [snackBarFactory, setSnackBarFactory] = React.useState({});

  return (
    <SnackbarContext.Provider value={{ abrirSnackbar, setAbrirSnackbar, snackBarFactory, setSnackBarFactory }}>
      {children}
    </SnackbarContext.Provider>
  );
};
