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

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime'

export default function Detailed() {
    const render = new marked.Renderer()
    marked.setOptions({
        renderer: renderer, //这个是必须填写的，你可以通过自定义的Renderer渲染出自定义的格式
        gfm: true, //启动类似Github样式的Markdown,填写true或者false
        pedantic: false,//只解析符合Markdown定义的，不修正Markdown的错误。填写true或者false
        sanitize: false, // 原始输出，忽略HTML标签，这个作为一个开发人员，一定要写flase
        tables: true, //支持Github形式的表格，必须打开gfm选项
        breaks: false, //支持Github换行符，必须打开gfm选项，填写true或者false
        smartLists: true, //优化列表输出，这个填写ture之后，你的样式会好看很多，所以建议设置成ture
        smartypants: false,//高亮显示规则 ，这里我们将使用highlight.js来完成
        highlight: function (code) {
                return hljs.highlightAuto(code).value;
        }
      });
      let html = marked(props.article_content) 
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

