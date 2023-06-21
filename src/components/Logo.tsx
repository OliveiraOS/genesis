import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export const Logo = (props: LogoProps) => {
  let size: string;

  switch (props.size) {
    case "sm":
      size = "w-10 h-16 sm:w-16 sm:h-24";
      break;

    case "md":
      size = "w-14 h-20 sm:w-20 sm:h-28";
      break;

    case "lg":
      size = "w-18 h-24 sm:w-24 sm:h-32";
      break;

    default:
      size = "w-14 h-20 sm:w-20 sm:h-28";
      break;
  }

  return (
    <div className={`relative ${size}`}>
      <Image src="/images/logo.png" alt="Gênesis logo" fill={true} />
    </div>
  );
};
