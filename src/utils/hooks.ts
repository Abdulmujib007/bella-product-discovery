import { useState, useEffect } from "react";

type SelectedProps = "Grounding" | "Softness" | "Energy" | "Freedom";

export const useSavedSelection = () => {
  const [selected, setSelected] = useState<SelectedProps | null>(null);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const savedSelection = localStorage.getItem("bellaOlterSelection");
    const parsedSelection =
      savedSelection !== null ? JSON.parse(savedSelection) : savedSelection;

    if (savedSelection) {
      setShowWelcome(true);
      setTimeout(() => setShowWelcome(false), 3000);
      setSelected(parsedSelection as SelectedProps);
    }
  }, []);

  const handleBtnClick = (label: SelectedProps) => {
    setSelected(label);
    localStorage.setItem("bellaOlterSelection", JSON.stringify(label));
  };

  const handleStartOver = () => {
    setSelected(null);
    localStorage.removeItem("bellaOlterSelection");
  };
  return {
    selected,
    showWelcome,
    handleBtnClick,
    handleStartOver,
  };
};
