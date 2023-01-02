import { PageTitleAtom } from "../../atoms/PageTitleAtom";

export const TitleMolecule = () => {
  return (
    <>
      <PageTitleAtom
        margin="mb-4"
        textColor="text-gray-600"
        textSize="text-xl"
        textSizeMd="md:text-2xl"
      >
        とうろくが完了しました。
      </PageTitleAtom>
    </>
  );
};
