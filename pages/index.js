import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Sou desenvolvedor React.js, amo meu trabalho,
          tenho 22 anos e atualmente estou trabalhando em uma empresa na área de tecnologia, 
          atuando como desenvolvador React.js,
          estou sempre buscando novas experiências, você pode me encontrar pelo meu{' '}
          <a href="https://www.linkedin.com/in/tiago-mota-4690591a8/" target="_blank">LinkedIn</a>.
        </p>
        <p>
          (Este é um site de exemplo - você criará um site como este em{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
