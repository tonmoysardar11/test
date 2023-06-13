import React, { useEffect, useState } from 'react'
import Item from './Item'
import InfiniteScroll from "react-infinite-scroll-component";
import jsonData from '../defaultData';

const Content = () => {
    const [data, setdata] = useState([]);
    const [articles, setArticles] = useState([]);
    const [select, setselect] = useState('All');
    const itemNo = 10;


    const getfulldata = () => {
        setdata(jsonData.data)
    }
    const getlimiteddata = () => {
        setArticles([...articles,data.slice(articles.length, articles.length + itemNo)])
        console.log(articles)
    }
    

    useEffect(() => {
        getfulldata();
        // eslint-disable-next-line
        getlimiteddata();
        // eslint-disable-next-line
    }, []);
    


    

    return (
        <>
            <h2 classNameName='text-center' style={{ marginTop: '90px' }}>Items</h2>
            <select className="form-select" aria-label="Default select example" style={{ width: '90px',margin:'0px auto' }}>
                <option value="All" selected onSelect={setselect("All")}>All</option>
                <option value="burner" onSelect={setselect("burner")}>Burner</option>
                <option value="subscription" onSelect={setselect("subscription")}>Subscription</option>
            </select>

            <InfiniteScroll
                dataLength={articles.length}
                next={
                    getlimiteddata()
}
                hasMore={true}
                endMessage={<p>No More Content</p>}>
                <div classNameName="container">
                    <div classNameName="container row mx-auto" >
                        {select==="subscription"?articles.filter(element=>element.card_type="subscription").map((element, index) => {
                            return <Item key={index} name={element.name} card_type={element.card_type} />
                        }):select==="burner"?articles.filter(element=>element.card_type="burner").map((element, index) => {
                            return <Item key={index} name={element.name} card_type={element.card_type} />
                        }):articles.map((element, index) => {
                            return <Item key={index} name={element.name} card_type={element.card_type} />
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
export default Content
