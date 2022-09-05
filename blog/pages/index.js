import Head from 'next/head'
import Link from 'next/link'
import { Row, Col, List,Breadcrumb } from 'antd'
import React, { useState } from 'react'
import axios from 'axios'

import Header from '../components/Header/Header.js'
import Author from '../components/Author/Author.js'
import Advert from '../components/Advert/Advert.js'
import Footer from '../components/Footer/Footer.js'

import styles from '../styles/pages/Index.module.css'

import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons';

export default function Home(list) {
  console.log("list",list);
  const [mylist, setMylist] = useState(list.data)
  return (
    <div>
      <Head>
        <title>home</title>
      </Head>
      <Header></Header>

      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <div className={styles.breadDiv}>
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item => (
                <List.Item>
                  <div className={styles.listTitle}>
                  <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                    <a>{item.title}</a>
                  </Link>
                  </div>
                  <div className={styles.listIcon}>
                    <span><CalendarOutlined /> {item.title}</span>
                    <span><FolderOutlined /> {item.addTime}</span>
                    <span><FireOutlined /> {item.view_count}人</span>
                  </div>
                  <div className={styles.listContext}>{item.introduce}</div>
                </List.Item>
              )}
            />
          </div>
        </Col>

        <Col className="comm-box" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer></Footer>
    </div>
  )
}
Home.getInitialProps = async()=>{
  const promise = new Promise((resolve)=>{
    axios('http://127.0.0.1:7001/default/getArticleList').then(
      (res)=>{
        console.log('远程获取数据结果:',res.data.data)
        resolve(res.data)
      }
    )
  })
  return await promise
}
