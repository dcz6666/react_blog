import {Avatar,Divider} from 'antd'
import styles from './Author.module.css'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';

const Author =()=>{
    return (
        <div className={styles.authorDiv}>
            <div><Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg" /></div>
            <div className={styles.authorIntroduction}>
                光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28}  className={styles.account}  icon={<GithubOutlined />}/>
                <Avatar size={28}  className={styles.account}  icon={<QqOutlined />}/>
                <Avatar size={28}  className={styles.account}  icon={<WechatOutlined />}/>
            </div>
        </div>
    )

}

export default Author