import * as React from "react"
import Layout from "../layouts/default"
import Meta from "../components/meta"
import { Link } from "gatsby"


export default () => (
    <Layout>
        <Meta title="404" />
        <main class="text-center space-y-8 my-8">
          <h2 class="text-3xl">ページが見つかりませんでした。</h2>
          <h3 class="text-2xl text-blue-500"><Link to="/">ホームに戻る</Link></h3>
        </main>
    </Layout>
);
