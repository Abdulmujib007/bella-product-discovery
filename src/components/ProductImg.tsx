import HeartIcon from "./icons/HeartIcon";

function ProductImg({
  color,
  productName,
}: {
  color: string;
  productName: string;
}) {
  return (
    <div
      className={`w-40 h-48 rounded-2xl bg-gradient-to-br ${color} shadow-lg flex flex-col justify-center items-center gap-y-1.5 `}
    >
      <span className="text-[#fff] text-[0.8rem] ">BELLA OTER</span>
      <div className="h-28 w-20 bg-white/20 backdrop-blur-sm flex items-center justify-center rounded-xl">
        <HeartIcon />
      </div>
      <span className="text-[#fff] text-[0.7rem] ">
        {productName.split(" ")[0]}
      </span>
    </div>
  );
}

export default ProductImg;
