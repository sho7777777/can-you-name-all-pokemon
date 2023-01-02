import { HeaderOrganism } from "../components/organisms/LayoutOrgs/HeaderOrganism";

export default function RankingUnavailable() {
  return (
    <div>
      <div className="sticky z-10 top-0 bg-green-200">
        <HeaderOrganism />
      </div>
      <div className="flex justify-center mt-20">
        <div className="w-1/3 h-1/3">
          <img src="/sorry.png" alt="sorry" />
        </div>
      </div>
      <p className="text-center mt-4 text-2xl text-gray-600">停止中</p>
    </div>
  );
}
