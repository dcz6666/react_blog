import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header.js'
import {Button} from 'antd'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>home</title>
      </Head>
      <Header></Header>
    </div>
  )
}
