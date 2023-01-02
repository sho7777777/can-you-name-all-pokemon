import { PageTitleAtom } from "../../atoms/PageTitleAtom";

export const TitleMolecule = () => {
  return (
    <>
      <PageTitleAtom
        margin="m-4"
        textColor="text-gray-600"
        textPosition="text-center"
        textSize="text-2xl"
        textSizeMd="md:text-3xl"
      >
        ポケモン（英語で）言えるかな？
      </PageTitleAtom>
    </>
  );
};
