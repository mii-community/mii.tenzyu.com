import * as React from "react";
import Layout from "../layouts/default";
import Meta from "../components/meta";
import Img from "../components/image";

const contacts = [
  {
    href: "https://twitter.com/tenzyumasuda",
    image: "icon-twitter.png",
    alt: "Twitterのロゴの画像",
    name: "Twitter",
    value: "@tenzyumasuda",
  },
  {
    href: "https://discord.gg/Jqsd7VcDur",
    image: "icon-discord.png",
    alt: "Discordのロゴの画像",
    name: "Discord",
    value: "みぃサーバーに参加する",
  },
  {
    href: "https://tenzyu.com/#Links",
    image: "icon-homepage.png",
    alt: "ホームページのアイコン画像",
    name: "tenzyu.com",
    value: "tenzyu.comのLinksに飛ぶ",
  },
];

const ContactPage = () => {
  return (
    <Layout>
      <Meta title="コンタクト" desc="アクセス先一覧" />
      <main class="container mx-auto px-4 md:text-xl">
        <h1 class="border-b border-gray-500 text-center pb-4 text-2xl">
          Contact
        </h1>
        <section class="my-4">
          <h2>アクセス先一覧</h2>
          <ul class="space-y-1 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {contacts.map((contact) => (
              <li class="border rounded-lg border-gray-300 hover:bg-gray-100">
                <a
                  class="flex"
                  href={contact.href}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <div class="p-2.5 w-16">
                    <Img filename={contact.image} alt={contact.alt} />
                  </div>
                  <div class="w-4/5 my-auto">
                    <h3 class="text-lg text-gray-800">{contact.name}</h3>
                    <div class="text-md font-light text-gray-600">
                      {contact.value}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
};

export default ContactPage;
