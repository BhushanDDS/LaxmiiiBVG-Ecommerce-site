import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <div>
                    <meta name="description" content={description} />
                    <meta name="keywords" content={keywords} />
                    <meta name="author" content={author} />
                </div>

                <title>{title}</title>

            </Helmet>

            <Header />
            <main style={{ minHeight: "70vh" }}>
                <ToastContainer />
                {children}</main>
            <Footer />
        </div>
    );
};

Layout.defaultProps = {
    title: 'shop now',
    description: 'good one',
    keywords: 'mern,react,js',
    author: 'bhushanDDS'
};

export default Layout;