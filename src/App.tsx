import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { store } from "./redux/store";
import { SentenceChallengeScreen } from "./screens/sentence-challenge/sentence-challenge";
import { SentenceManagementScreen } from "./screens/sentence-management/sentence-management.screen";

const AppNavigator = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="sentence-challenge"
            element={<SentenceChallengeScreen />}
          />
          <Route path="sentences" element={<SentenceManagementScreen />} />
        </Route>
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
