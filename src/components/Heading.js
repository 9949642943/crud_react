import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import '../components/Heading.css';
const { Header } = Layout;

const Heading = () => {
    return (
        <Layout className="layout">
            <Header className="rows">
            <Menu>
                <a className="a"href="/">Student Info</a>
                <Link className="btn btn-primary" to="/create">Create User</Link>
            </Menu>
            </Header>
        </Layout>
    );
}

export default Heading;
