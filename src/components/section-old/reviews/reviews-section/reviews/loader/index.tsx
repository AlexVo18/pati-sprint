import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2
          className="size-12 text-black/10 animate-spin"
          strokeWidth={0.5}
        />
      </div>
    </div>
  );
};

export default Loader;
