import Head from 'next/head'
import { Row, Col, Menu } from 'antd'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header.js'
export default function Detailed() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header></Header>

      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          左侧
        </Col>

        <Col className="comm-box" xs={0} sm={0} md={7} lg={5} xl={4}>
          右侧
        </Col>
      </Row>
    </div>
  )
}
