import { lazy, Suspense } from "react";
import "./App.css";
const ClickCounter = lazy(() => import("./ClickCounter"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <ClickCounter />
      </Suspense>
    </div>
  );
}

export default App;
