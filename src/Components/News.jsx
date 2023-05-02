import React, { useEffect, useState } from 'react'
import { Apifetch } from './FetchAPI'
import '../index.css'
import Spinner from './Spinner'


const News = (props) => {

    const [news, setNews] = useState([])
    const [page, setPage] = useState(2)
    const [loading, setLoading] = useState(true)
    const ApiData = async () => {
        const a = await Apifetch(props.catagory, 1)
        setNews(a.data.articles)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }

    useEffect(() => {
        ApiData()
    }, [])

    const handelPre = async () => {
        setPage(page - 1)
        setLoading(true)
        const a = await Apifetch(props.catagory, page)
        setNews(a.data.articles)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }

    const CapitalF = (string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }

    const handelNext = async () => {
        setPage(page + 1)
        setLoading(true)
        const a = await Apifetch(props.catagory, page)
        setNews(a.data.articles)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }

    return (
        <>
            <div className="container my-3">
                <h2 className="text-center" style={{marginTop: '90px'}}>NewsMonkey - {CapitalF(props.catagory)} Headlines</h2>
                {
                    loading === true ? <Spinner /> :
                        <>
                            <div className="row">
                                {
                                    news?.map((newses) => {
                                        return(
                                        < div className="col-md-4" >
                                            <div className="my-3">
                                                <div className="card">
                                                    <div className="image">
                                                        <img src={newses.urlToImage == null ? 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg' : newses.urlToImage} className="card-img-top" alt="..." style={{ height: "15rem" }} />
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{newses.title.slice(0, 25)}...</h5>
                                                        <p className="card-text">{newses.description && newses.description.slice(0, 70)}...</p>
                                                        <h6 className="card-text">By {newses.author == null ? "Unknown Author" : newses.author}</h6>
                                                        <a href={newses.url} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div >
                                        )
                                    })
                                }

                            </div>
                        </>
                }
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={page===1} class="btn btn-dark" onClick={handelPre}>Previous</button>
                    <button type="button" disabled={page===100} class="btn btn-dark" onClick={handelNext}>Next</button>
                </div>

            </div >
        </>
    )
}

export default News
