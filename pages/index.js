import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'



export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello</p>
        <p>
          This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
              <a>{title}</a>
              </Link> 
              <br />
              <small className={utilStyles.lightText}>
              <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}


//This function runs before the HTML is built, in order to fetch whatever data is necessary to render the HTML. In getStaticProps you can fetch from external APIs, query your database, etc...
//getStaticProps runs on the server side, not the client. Because of this, you can write direct database queries and they won't be sent to browsers.
//getStaticProps can only be exported from a page, you cannot export it from non-page files.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  console.log(allPostsData)
  return {
    props: {
      allPostsData
    }
  }
}
