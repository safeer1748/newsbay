import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import InfiniteScroll from "react-infinite-scroll-component";
import DotsLoader from './dotsLoader';
function News(props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(true)
    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&page=${page}&apiKey=ddd0076ba64e4c879bbd99cd71aa853e`
        setLoading(true);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)}-Newsbay Top Headlines`;
        updateNews();
    }, [])
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&page=${page+1}&apiKey=ddd0076ba64e4c879bbd99cd71aa853e`
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    return (
        <>
        <h1 className=' text-center font-bold text-4xl mt-28 md:'>Newsbay - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <DotsLoader />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<DotsLoader />}
            >
                <div className='mt-24 grid lg:grid-cols-3 md:grid-cols-2 gap-y-12 justify-items-center'>
                    {articles.map((element,index) => {
                        return <Newsitem key={index} title={element.title} description={element.description} newsUrl={element.url} imageUrl={element.urlToImage} publisher={element.source.name} author={element.author} date={element.publishedAt} />
                    })}
                </div>
            </InfiniteScroll>
        </>
    )
}

export default News
