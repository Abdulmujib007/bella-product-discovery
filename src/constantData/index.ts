export const products = {
  Grounding: {
    archetype: "The Rooted One",
    productName: "Terra Embrace Bodysuit",
    description:
      "A grounding piece that connects you to your inner strength and supports your nervous system through mindful design.",
    fabric: "Organic Bamboo Blend",
    color: "from-stone-200 to-amber-300",
  },
  Softness: {
    archetype: "The Gentle Soul",
    productName: "Cloud Nine Lounge Set",
    description:
      "Envelop yourself in luxurious softness designed to soothe sensitivity and nurture your body's needs.",
    fabric: "TENCEL Modal",
    color: "from-rose-200 to-pink-300",
  },
  Energy: {
    archetype: "The Radiant Force",
    productName: "Vitality Bralette",
    description:
      "Ignite your inner fire with supportive pieces that move with your dynamic energy and honor your body's rhythm.",
    fabric: "Cooling Mesh",
    color: "from-yellow-200 to-orange-300",
  },
  Freedom: {
    archetype: "The Unbound",
    productName: "Liberation Sleep Dress",
    description:
      "Experience limitless comfort in designs that celebrate your authentic self and support unrestricted movement.",
    fabric: "Breathable Linen",
    color: "from-blue-200 to-slate-300",
  },
};

interface BtnDataProp {
  label: "Grounding" | "Softness" | "Energy" | "Freedom";

  gradient: string;
}

export const btnData: BtnDataProp[] = [
  { label: "Grounding", gradient: "from-amber-200 to-orange-300" },
  { label: "Softness", gradient: "from-pink-200 to-rose-300" },
  { label: "Energy", gradient: "from-yellow-200 to-amber-300" },
  { label: "Freedom", gradient: "from-blue-200 to-indigo-300" },
];
