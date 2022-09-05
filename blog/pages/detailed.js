import Head from 'next/head'
import { Row, Col, Breadcrumb,Affix } from 'antd'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

import styles from '../styles/pages/Detail.module.css'

import Header from '../components/Header/Header.js'
import Author from '../components/Author/Author.js'
import Advert from '../components/Advert/Advert.js'
import Footer from '../components/Footer/Footer.js'

import { CalendarOutlined, FolderOutlined, FireOutlined, ConsoleSqlOutlined } from '@ant-design/icons';

export default function Detailed() {
    let markdown='# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'
    return (
        <div>
            <Head>
                <title>博客详细页</title>
            </Head>
            <Header></Header>

            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                    <div>
                        <div className={styles.breadDiv}>
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div>
                            <div className={styles.detailedTitle}>
                                React实战视频教程-技术胖Blog开发(更新08集)
                            </div>
                            <div className={styles.listIcon}>
                                <span><CalendarOutlined /> 2019-06-28</span>
                                <span><FolderOutlined /> 视频教程</span>
                                <span><FireOutlined /> 5498人</span>
                            </div>

                            <div className={styles.detailedContent} >
                               <ReactMarkdown children={markdown}  />
                            </div>
                        </div>
                    </div>
                </Col>

                <Col className="comm-box" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advert />
                    <Affix offsetTop={5}>
                    <div className="detailedNav comm-box">
                        <div className={styles.navTitle}>文章目录</div>
                        <MarkNav
                            className="article-menu"
                            source={markdown}
                            ordered={false}
                        />
                    </div>
                    </Affix>
                </Col>
            </Row>

            <Footer></Footer>
        </div>
    )
}

Detailed.getInitialProps = async(content)=>{
    console.log(content.query.id)
    let { id }=content.query;
    const promise = new Promise((resolve)=>{
      axios('http://127.0.0.1:7001/default/getArticleById/'+id).then(
        (res)=>{
          console.log('远程获取数据结果:',res.data.data)
          resolve(res.data)
        }
      )
    })
    return await promise
  }

