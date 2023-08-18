import React from "react";
import styled from "styled-components";
import NewsItem from "../NewsItem"
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsItemBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({category} ) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
        `https://newsapi.org/v2/top-headlines?country=jp${query}&apiKey=912eb5849b2448f4ba8bd2254bdde456`,
    )       
    }, [category])


    // 待機中
    if (loading) {
        return <NewsItemBlock>Loading...</NewsItemBlock>
    }
    // articlesが設定されていない場合 (nullエラー防止)
    if (!response) {
        return null;
    }
    // エラーが発生した場合
    if (error) {
        return <NewsItemBlock>Error!</NewsItemBlock>;
    }

    const { articles } = response.data;
    return (
        <NewsItemBlock>
            {articles.map(v =>  (
                <NewsItem key={v.url} article={v} />
            ))}
        </NewsItemBlock>
    );
};

export default React.memo(NewsList);
