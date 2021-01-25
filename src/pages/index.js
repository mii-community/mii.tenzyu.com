import * as React from "react";
import Layout from "../layouts/default";
import Meta from "../components/meta";

import { TwitterTimelineEmbed } from "react-twitter-embed";

const repositories = [
  {
    href: "https://github.com/mii-community/mii",
    name: "mii",
    alt: "GitHubのリポジトリー: mii",
  },
  {
    href: "https://github.com/mii-community/mii.tenzyu.com",
    name: "mii.tenzyu.com",
    alt: "GitHubのリポジトリ: mii.tenzyu.com",
  },
  {
    href: "https://github.com/mii-community/Wikipedian",
    name: "Wikipedian",
    alt: "GitHubのリポジトリー: Wikipedian",
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <Meta title="ホーム" desc="リポジトリやGoogleカレンダーなど" />
      <main class="container mx-auto px-4">
        <h1 class="border-b border-gray-500 text-center pb-4 text-2xl">
          みぃコミュニティ
        </h1>
        <div class="lg:flex">
          <div class="mb-3 sm:space-y-4 sm:gap-x-2 sm:grid sm:grid-cols-2 lg:w-2/3 lg:mr-2">
            <section class="my-8 sm:my-4">
              <h2 class="text-xl">Tweets</h2>
              <div class="w-full">
                <TwitterTimelineEmbed
                  sourceType="list"
                  id={1293148576634114049n}
                  theme="dark"
                  options={{ height: 600 }}
                />
              </div>
            </section>
            <section class="my-8">
              <h2 class="text-xl">Discord</h2>
              <div class="w-full">
                <iframe
                  title="DiscordWidget"
                  src="https://discord.com/widget?id=608634154019586059&theme=dark"
                  width="100%"
                  height="600"
                  allowtransparency="true"
                  frameborder="0"
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                ></iframe>
              </div>
            </section>
          </div>
          <section class="my-8">
            <h2 class="text-xl">Repositories</h2>
            <ul class="space-y-2 mb-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-2 lg:grid-cols-1">
              {repositories.map((repository) => (
                <li>
                  <a href={repository.href} target="_brank">
                    <img
                      class="w-full"
                      src={`https://github-readme-stats.vercel.app/api/pin/?username=mii-community&repo=${repository.name}`}
                      alt={repository.alt}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <section class="my-8">
          <h2 class="text-xl">Calendar</h2>
          <iframe
            title="googleCalendar"
            class="w-full h-screen border border-solid border-gray-500"
            src="https://calendar.google.com/calendar/embed?height=640&amp;wkst=1&amp;bgcolor=%23039BE5&amp;ctz=Asia%2FTokyo&amp;src=N25mZW1hc3Z2OXBncjJlbmVtOGw0MDVmZmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23A79B8E&amp;color=%230B8043&amp;showTitle=1&amp;showPrint=0&amp;mode=MONTH"
            frameborder="0"
            scrolling="no"
          ></iframe>
          <p class="text-lg">NOTE</p>
          <p>
            このカレンダーは一般公開して誰でも利用できるようにしており、全ての予定の詳細までを表示するように設定しています。
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
