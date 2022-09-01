import React from 'react'
import { Row, Col, Menu } from 'antd'
import style from './Header.module.css'
import { HomeOutlined,YoutubeOutlined,SmileOutlined } from '@ant-design/icons';
const Header = () => (
    <div className={style.header}>
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className={style.headerLogo}>技术胖</span>
                <span className={style.headerTxt}>专注前端开发,每年100集免费视频。</span>
            </Col>
            <Col  xs={0} sm={0} md={14} lg={8} xl={6}>
               <Menu mode="horizontal">
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                        首页
                    </Menu.Item>
                   <Menu.Item key="video" icon={<YoutubeOutlined />}>
                        视频
                    </Menu.Item>
                     <Menu.Item key="life" icon={<SmileOutlined />}>
                        生活
                    </Menu.Item>
                </Menu> 
            </Col>
        </Row>
    </div>
)
export default Header;