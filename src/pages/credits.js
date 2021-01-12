import * as React from "react"
import Layout from "../layouts/default"
import Meta from "../components/meta"

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
]

const CreditsPage = () => {
  return(
    <Layout>
      <Meta title="クレジット" desc="クレジットタイトルがあるよ。" />
      <main class="container mx-auto px-4 md:text-xl">
        <h1 class="border-b border-gray-500 text-center pb-4 text-2xl">Credits</h1>
        <h2 class="my-4">当サイトや「みぃ」に何らかの形で貢献してくださった方は以下の通りです。</h2>
        <ul class="mx-8 space-y-2 list-disc">
          {contributors.map(contributor => (
            <li><b>{contributor.name}</b> - {contributor.value}</li>
          ))}
        </ul>
      </main>
  </Layout>
  )
}

export default CreditsPage