import React from 'react'
import { Row, Col, Menu } from 'antd'
import style from './Header.module.css'
import { HomeOutlined, YoutubeOutlined, SmileOutlined } from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
    return { key, icon, children,  label,  type, };
  }
let MenuList = [
    getItem('首页', 'home', <HomeOutlined />),
    getItem('视频', 'video', <YoutubeOutlined />),
    getItem('生活', 'life', <SmileOutlined />),
]

const Header = () => (
    <div className={style.header}>
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className={style.headerLogo}>技术胖</span>
                <span className={style.headerTxt}>专注前端开发,每年100集免费视频。</span>
            </Col>
            <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal" items={MenuList}></Menu>
            </Col>
        </Row>
    </div>
)
export default Header;