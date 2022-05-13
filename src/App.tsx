import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { SentenceChallengeScreen } from "./screens/sentence-challenge/sentence-challenge";
import { SentenceManagementScreen } from "./screens/sentence-management/sentence-management.screen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="sentence-challenge"
            element={<SentenceChallengeScreen />}
          />
          <Route
            path="sentence-management"
            element={<SentenceManagementScreen />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
