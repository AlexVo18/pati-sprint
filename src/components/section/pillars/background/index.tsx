import "./styles.css";

type Props = {
  isEssentials: boolean;
};

const Background = ({ isEssentials }: Props) => {
  return (
    <>
      {isEssentials ? (
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none z-0"
          aria-hidden="true"
        >
          <img
            src="https://im8health.com/cdn/shop/files/Screenshot_2025-12-22_at_7.44.31_PM.png?v=1766404140&width=1200"
            srcSet="//im8health.com/cdn/shop/files/Screenshot_2025-12-22_at_7.44.31_PM.png?v=1766404140&width=600 600w, //im8health.com/cdn/shop/files/Screenshot_2025-12-22_at_7.44.31_PM.png?v=1766404140&width=900 900w, //im8health.com/cdn/shop/files/Screenshot_2025-12-22_at_7.44.31_PM.png?v=1766404140&width=1200 1200w"
            sizes="100vw"
            alt=""
            loading="eager"
            className="w-full h-full object-cover object-[center_top]"
          />
        </div>
      ) : (
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none z-0"
          aria-hidden="true"
        >
          <img
            src="//im8health.com/cdn/shop/files/Screenshot_2025-12-22_at_7.45.28_PM.png?v=1766404140&width=1200"
            srcSet="//im8health.com/cdn/shop/files/Screenshot_2025-12-22_at_7.45.28_PM.png?v=1766404140&width=600 600w, //im8health.com/cdn/shop/files/Screenshot_2025-12-22_at_7.45.28_PM.png?v=1766404140&width=900 900w, //im8health.com/cdn/shop/files/Screenshot_2025-12-22_at_7.45.28_PM.png?v=1766404140&width=1200 1200w"
            sizes="100vw"
            alt=""
            loading="eager"
            className="w-full h-full object-cover object-[center_top]"
          />
        </div>
      )}

      <div
        className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div
          className="absolute rounded-full blur-3xl opacity-20 transition-colors duration-700"
          style={{
            width: "600px",
            height: "600px",
            top: "-10%",
            left: "10%",
            background: isEssentials
              ? "radial-gradient(circle, rgba(164, 0, 17, 0.3) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(231, 141, 45, 0.35) 0%, transparent 70%)",
            animation: "float 20s ease-in-out infinite",
          }}
        />

        <div
          className="absolute rounded-full blur-3xl opacity-15 transition-colors duration-700"
          style={{
            width: "500px",
            height: "500px",
            bottom: "-5%",
            right: "15%",
            background: isEssentials
              ? "radial-gradient(circle, rgba(255, 150, 147, 0.25) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(245, 168, 85, 0.3) 0%, transparent 70%)",
            animation: "float 25s ease-in-out infinite reverse",
          }}
        />

        <div
          className="absolute rounded-full blur-2xl opacity-15 transition-colors duration-700"
          style={{
            width: "400px",
            height: "400px",
            top: "40%",
            right: "5%",
            background: isEssentials
              ? "radial-gradient(circle, rgba(80, 0, 11, 0.25) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(231, 141, 45, 0.3) 0%, transparent 70%)",
            animation: "float 18s ease-in-out infinite 5s",
          }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none z-1 transition-opacity duration-700"
        style={{
          background: isEssentials
            ? "linear-gradient(180deg, rgba(245, 234, 234, 0.4) 0%, rgba(245, 234, 234, 0.3) 10%, rgba(245, 234, 234, 0.15) 20%, rgba(245, 234, 234, 0.05) 30%, transparent 50%)"
            : "linear-gradient(180deg, rgba(250, 247, 238, 0.4) 0%, rgba(250, 247, 238, 0.3) 10%, rgba(250, 247, 238, 0.15) 20%, rgba(250, 247, 238, 0.05) 30%, transparent 50%)",
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default Background;
