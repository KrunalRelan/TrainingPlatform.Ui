import React from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import AppRoutes from "./routes/AppRoutes";
import { CustomThemeProvider } from "./theme/ThemeContext";

const App = () => {
  return (
    <CustomThemeProvider>
      <ThemeToggle />
      <AppRoutes />
    </CustomThemeProvider>
  );
};

export default App;
