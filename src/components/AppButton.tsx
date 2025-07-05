interface Props {
  handleBtnClick: () => void;
  text: string;
  className?: string;
}

function AppButton({ handleBtnClick, text, className }: Props) {
  return (
    <button
      onClick={handleBtnClick}
      className={`${className} font-medium text-[1rem] py-4 w-full rounded-xl cursor-pointer  `}
    >
      {text}
    </button>
  );
}

export default AppButton;
