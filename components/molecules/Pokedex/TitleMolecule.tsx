import { PageTitleAtom } from "../../atoms/PageTitleAtom";

export const TitleMolecule = () => {
  return (
    <>
      <PageTitleAtom
        margin="my-3"
        textColor="text-gray-600"
        textPosition="text-center"
        textSize="text-2xl"
        textSizeMd="text-3xl"
      >
        ポケモンずかん
      </PageTitleAtom>
    </>
  );
};
