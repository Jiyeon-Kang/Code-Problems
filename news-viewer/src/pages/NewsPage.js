import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import { useParams } from 'react-router-dom'

const NewsPage = () => {
    //カテゴリが選択されていない場合は基本'all'
    const parms = useParams() 
    const category = parms.category || 'all'

    return (
        <> 
            <Categories/>
            <NewsList category={category}/>
        </>
    );
};

export default NewsPage;
