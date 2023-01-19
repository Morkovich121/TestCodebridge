import { Typography } from '@mui/material';
import React from 'react'

import { useAppSelector } from '../../app/hooks';
import NewsCard from '../NewsCard/NewsCard';

import './NewsList.scss';

interface PropTypes {
    query: string,
}


type Article = {
    "id": number,
    "featured": boolean,
    "title": string,
    "url": string,
    "imageUrl": string,
    "newsSite": string,
    "summary": string,
    "publishedAt": string,
    "launches": Array<Object>,
    "events": Array<Object>
}


const NewsList: React.FC<PropTypes> = ({ query }) => {

    const articles = useAppSelector(state => state.articles.list);
    let result: Article[];
    result = [];
    if (query !== '') {
        result = articles.filter(elem => elem.title.includes(query));
    }

    return (
        <>
            <div className="newsList">
                {articles.length === 0 ? <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>Loading...</Typography> :
                    query !== '' ? result.map(elem => (
                        <NewsCard key={elem.id} {...elem} />
                    )) :
                        articles.map((elem) => (
                            <NewsCard key={elem.id} {...elem} />
                        ))}
            </div>
        </>
    )
}

export default NewsList