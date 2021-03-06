import * as React from "react";
import Layout from "../layouts/default";
import Meta from "../components/meta";

const contributors = [
  {
    name: "橘。",
    value: "DiscordBot「みぃ様」のアイコンイラストレーター",
  },
  {
    name: "Kesigomon",
    value: "MinecraftServer「みぃクラフト」のホスト",
  },
  {
    name: "chun37",
    value: "「みぃ様」のコードレビュー/リファクタリング",
  },
  {
    name: "Hirosuke",
    value: "DiscordBot「Wikipedian」の発案/監督",
  },
  {
    name: "AttoCat",
    value: "「みぃ様」にPoll機能を実装",
  },
];

const CreditsPage = () => {
  return (
    <Layout>
      <Meta title="クレジット" desc="クレジットタイトル,貢献者一覧" />
      <main class="container mx-auto px-4 md:text-xl">
        <h1 class="border-b border-gray-500 text-center pb-4 text-2xl">
          Credits
        </h1>
        <h2 class="my-4">当サイトや「みぃ」に貢献してくださった方々</h2>
        <ul class="mx-8 space-y-2 list-disc">
          {contributors.map((contributor) => (
            <li>
              <b>{contributor.name}</b> - {contributor.value}
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default CreditsPage;
