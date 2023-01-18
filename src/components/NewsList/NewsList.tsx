import { Typography } from '@mui/material';
import React from 'react'

import { useAppSelector } from '../../app/hooks';
import NewsCard from '../NewsCard/NewsCard';

import './NewsList.scss';

const NewsList = () => {

    const articles = useAppSelector(state => state.articles.list);

    return (
        <>
            <div className="newsList">
                {articles.length === 0 ? <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>Loading...</Typography> :
                    articles.map((elem) => (
                        <NewsCard key={elem.id} {...elem} />
                    ))}
            </div>
        </>
    )
}

export default NewsList