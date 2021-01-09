import * as React from "react"
import Layout from "../layouts/default"
import Meta from "../components/meta"

const IndexPage = () => {
  return (
    <Layout>
      <Meta title="Home" desc="Googleカレンダーがあるよ。"/>
      <main class="container mx-auto px-5">
        <iframe title="googleCalendar" class="w-full h-screen my-5 border border-solid border-gray-500 " src="https://calendar.google.com/calendar/embed?height=640&amp;wkst=1&amp;bgcolor=%23039BE5&amp;ctz=Asia%2FTokyo&amp;src=N25mZW1hc3Z2OXBncjJlbmVtOGw0MDVmZmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23A79B8E&amp;color=%230B8043&amp;showTitle=1&amp;showPrint=0&amp;mode=MONTH" frameborder="0" scrolling="no"></iframe>
        <h2 class="text-xl">NOTE</h2>
        <p>このカレンダーは一般公開して誰でも利用できるようにしており、全ての予定の詳細までを表示するように設定しています。</p>
       </main>
    </Layout>
  )
}

export default IndexPage
