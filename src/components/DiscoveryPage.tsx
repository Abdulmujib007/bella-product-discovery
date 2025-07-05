import { btnData } from "../constantData";
import AppButton from "./AppButton";

type SelectedProps = "Grounding" | "Softness" | "Energy" | "Freedom";

function DiscoveryPage({
  handleBtnClick,
}: {
  handleBtnClick: (option: SelectedProps) => void;
}) {
  return (
    <div>
      <header className="text-center text-[1.5rem]">
        What does your body crave today?
      </header>
      <div className="my-10 flex flex-col gap-y-7">
        {btnData.map((option, ind) => (
          <AppButton
            key={ind}
            text={option.label}
            handleBtnClick={() => handleBtnClick(option.label)}
            className={`bg-gradient-to-r ${option.gradient} hover:shadow-lg hover:scale-103 transition-all duration-300 ease-out`}
          />
        ))}
      </div>
      <footer className="text-center font-light text-sm">
        Fashion as support for your nervous system
      </footer>
    </div>
  );
}

export default DiscoveryPage;
