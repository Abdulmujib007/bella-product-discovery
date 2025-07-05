import AppButton from "./AppButton";
import ProductImg from "./ProductImg";
import { products } from "../constantData";

interface ProductProps {
  selected: "Grounding" | "Softness" | "Energy" | "Freedom";
  handleStartOver: () => void;
}

function Product({ selected, handleStartOver }: ProductProps) {
  return (
    <div className="  mb-5 flex flex-col gap-y-2.5 items-center">
      <header className="text-slate-500 text-center text-[1.1rem]">
        Your Archetype
      </header>

      <span className="text-[1.6rem] font-extralight text-slate-800 ">
        {products[selected].archetype}
      </span>
      <ProductImg
        color={products[selected].color}
        productName={products[selected].productName}
      />
      <span className="text-[1.25rem] font-medium text-slate-700">
        {products[selected].productName}
      </span>
      <h4 className="text-center leading-relaxed text-slate-600">
        {products[selected].description}
      </h4>
      <div className=" bg-slate-100 px-4 py-2 rounded-full">
        <span className="text-sm font-medium text-slate-600">
          {products[selected].fabric}
        </span>
      </div>

      <AppButton
        text="Start Over"
        handleBtnClick={handleStartOver}
        className="bg-slate-700 text-[#fff]"
      />
    </div>
  );
}

export default Product;
