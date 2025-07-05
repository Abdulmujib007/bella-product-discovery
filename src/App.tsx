import BellaIcon from "./components/icons/BellaIcon";
import DiscoveryPage from "./components/DiscoveryPage";
import Product from "./components/Product";
import WelcomeMessage from "./components/WelcomeMessage";
import { useSavedSelection } from "./utils/hooks";

function App() {
  const { handleBtnClick, handleStartOver, selected, showWelcome } =
    useSavedSelection();

  return (
    <div className=" sm:px-0 px-[1rem] w-screen h-screen bg-[#F9F5FF] flex flex-col  items-center justify-center gap-y-3">
      {showWelcome && <WelcomeMessage />}
      <main className=" bg-[#fff] shadow-lg rounded-xl w-[100%]  mobile:w-[30rem]  min-h-[60%] px-[1rem] mobile:px-10 py-5 ">
        <BellaIcon />
        <>
          {!selected ? (
            <DiscoveryPage handleBtnClick={handleBtnClick} />
          ) : (
            <Product selected={selected} handleStartOver={handleStartOver} />
          )}
        </>
      </main>
    </div>
  );
}

export default App;
