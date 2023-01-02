import { ImgMolecule } from "../../molecules/Loading/ImgMolecule";

export const LoadingOrganism = () => {
  return (
    <div className="absolute bg-black inset-0 h-full bg-opacity-60 flex justify-center items-center z-10">
      <ImgMolecule />
    </div>
  );
};
