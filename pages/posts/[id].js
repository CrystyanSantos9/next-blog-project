//Dynamic Routes
//Content : https://nextjs.org/learn/basics/dynamic-routes/page-path-external-data

//global layout 
import Layout from '../../components/layout'

//detalhes de layout
import utilStyles from '../../styles/utils.module.css'

//adding title para os posts
import Head from 'next/head'
//lida com o formato das datas
import Date from '../../components/date'

import Image from 'next/image'

//pegar id dos paths urls dinamicas / files de cada arquivo
import { getAllPostIds, getPostData } from '../../lib/post'

//representa cada página que será renderizada - já com os dados
export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
  }

  //gera os caminhos dinamicos
  export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
  }

  //pega os dados que cada arquivo do caminho vai mostrar
  export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = await getPostData(params.id)
    return {
    props: {
      postData
    }
  }
  }