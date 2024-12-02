import "./App.css";
import ThemeProvider from "./theme";
import Home from "/src/components/home/Home";
function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
