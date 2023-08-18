import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

// 카테고리 배열생성
const categories = [
    {
        name: 'all',
        text: '全体'
    },
    {
        name: 'business',
        text: 'ビジネス'
    },
    {
        name: 'science',
        text: '科学'
    },
    {
        name: 'entertainment',
        text: 'エンターテイメント'
    },
    {
        name: 'sports',
        text: 'スポーツ'
    },
    {
        name: 'health',
        text: '健康'
    },
    {
        name: 'technology',
        text: '技術'
    }
]

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color; #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    }

    & + & {
        margin-left: 1rem;
    }
`;

const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map(v => (

                <Category 
                    key={v.name}
                    activeClassName="active"
                    exact={v.name === 'all'}
                    to={v.name === 'all' ? '/' : `${v.name}`}
                >
                    {v.text}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;
