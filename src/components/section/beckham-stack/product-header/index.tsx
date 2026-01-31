type Props = {
  productImg: string;
  title: string;
};

const ProductHeader = ({ productImg, title }: Props) => {
  return (
    <div className="flex items-center max-md:flex-col">
      <div className="shrink-0 w-35 h-27.5 max-lg:w-30 max-lg:h-23.75 max-md:w-27.5 max-md:h-21.25 flex items-center justify-center -mt-5 max-lg:-mt-4 max-md:-mt-3.5 ">
        <img
          src={productImg}
          alt={title}
          className="w-[120%] h-full object-center object-contain"
        />
      </div>
      <p className="tracking-wider leading-[1.3] max-lg:text-sm max-md:text-xs max-md:text-center">
        {title}
      </p>
    </div>
  );
};

export default ProductHeader;
