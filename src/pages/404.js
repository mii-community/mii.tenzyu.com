import * as React from "react"
import Layout from "../layouts/default"
import Meta from "../components/meta"
import { Link } from "gatsby"


export default () => (
    <Layout>
        <Meta title="404" />
        <main class="text-center">
          <h2 class="my-16 text-4xl">Page Not Found</h2>
          <h3 class="text-blue-500 text-xl"><Link to="/">Go Back</Link></h3>
        </main>
    </Layout>
);
