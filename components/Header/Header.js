import React from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import style from './Header.module.css'
const Header = () =>(
    <div className={style.header}>
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <span className="header-logo">技术胖</span>
                <span className="header-txt">专注前端开发,每年100集免费视频。</span>
            </Col>
        </Row>
    </div>
)
export default Header;