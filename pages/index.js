import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'

import { getSortedPostsData } from '../lib/post'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      
        <p>
          Desenvolvedor Web Junior, Analista de Sistemas e atualmente trabalhando como Analista de Ti Junior na empresa <code><a href="https://www.alliedbrasil.com.br/" alt="Allied Brasil">Allied</a></code></p>
        {/* <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className="text-2xl  mt-8  text-center">Últimas postagens</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <div className={utilStyles.card}>
              <div className="mb-8 md:mb-16 sm:mx-0">
                <Image  src="/images/background-header.jpg" height={620} width={1240} />
              </div>
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            </div>
          ))}
        </ul>
      </section>
    </Layout>
  )
}