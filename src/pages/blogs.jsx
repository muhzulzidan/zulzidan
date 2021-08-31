import React from 'react'
import Layout from '../components/layout'
import { StaticImage, GatsbyImage, getSrc } from "gatsby-plugin-image"
import { Link } from 'gatsby'
// import search svg from svg
import Search from '../svg/search.svg'
const BlogsPages = () => {
    // make a 5 looping function for post
    const post = [
        {
            title: 'Peletakan batu pertama mesjid alfalah',
                        content: 'peletakan batu pertama mesjid alfalah adalah sebuah momen bersejarah',
            date: 'September 20, 2019',
            image: 'https://muhzulzidan.com/static/8c5734c4facec73bb8421fd396e38d1b/b4193/60f0b7ccaf372agnostik-apakah-menentang-fitrah-bertuhan-manusiaWeb-Site.webp'
        },
        {
            title: 'Peletakan batu pertama mesjid alfalah 2',
            content: 'peletakan batu pertama mesjid alfalah adalah sebuah momen bersejarah',
            date: 'September 20, 2019',
            image: 'https://muhzulzidan.com/static/8c5734c4facec73bb8421fd396e38d1b/b4193/60f0b7ccaf372agnostik-apakah-menentang-fitrah-bertuhan-manusiaWeb-Site.webp'
        },
        {
            title: 'Peletakan batu pertama mesjid alfalah 3',
            content: 'peletakan batu pertama mesjid alfalah adalah sebuah momen bersejarah',
            date: 'September 20, 2019',
            image: 'https://muhzulzidan.com/static/8c5734c4facec73bb8421fd396e38d1b/b4193/60f0b7ccaf372agnostik-apakah-menentang-fitrah-bertuhan-manusiaWeb-Site.webp'
        },
        {
            title: 'Peletakan batu pertama mesjid alfalah 4',
            content: 'peletakan batu pertama mesjid alfalah adalah sebuah momen bersejarah',
            date: 'September 20, 2019',
            image: 'https://muhzulzidan.com/static/8c5734c4facec73bb8421fd396e38d1b/b4193/60f0b7ccaf372agnostik-apakah-menentang-fitrah-bertuhan-manusiaWeb-Site.webp'
        },
        {   
            title: 'Peletakan batu pertama mesjid alfalah 5',
            content: 'peletakan batu pertama mesjid alfalah adalah sebuah momen bersejarah',
            date: 'September 20, 2019',
            image: 'https://muhzulzidan.com/static/8c5734c4facec73bb8421fd396e38d1b/b4193/60f0b7ccaf372agnostik-apakah-menentang-fitrah-bertuhan-manusiaWeb-Site.webp'
        }
    ]

    return (
        <Layout>
            <div className="blogsPages">
                <title>blogs | zulzidan</title>
                <h1>Blogs</h1>
                <p className="p">This is where i write about Tech</p>
                {/* search box with svg icon inside input*/}
                <div className="searchBox">
                    <input type="text" placeholder="Search" />
                    <Search />
                </div>
                <div className="posts">
                    <br />
                    {/* mapping post */}
                    {post.map((item, index) => {
                        return (
                            <div className="post" key={index}>
                                <Link to="/">
                                    <div className="post-image">
                                        {/* <h2>{item.title}</h2> */}
                                        <img src={item.image} alt="An image" className="img" />
                                    </div>
                                    <div className="post-content">
                                        <p className="date">{item.date}</p>
                                        <h2>{item.title}</h2>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                    <button className="loadMore">
                        Load More
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default BlogsPages

