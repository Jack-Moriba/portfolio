import { lazy, Suspense, useState } from "react";
import "./App.css";
import "./components/styles/micro-interactions.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";
import GuineaPayPlatform from "./components/guineapay/GuineaPayPlatform";

const App = () => {
  const [showGuineaPay, setShowGuineaPay] = useState(false);

  if (showGuineaPay) {
    return <GuineaPayPlatform onBackToPortfolio={() => setShowGuineaPay(false)} />;
  }

  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer onOpenGuineaPay={() => setShowGuineaPay(true)}>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
