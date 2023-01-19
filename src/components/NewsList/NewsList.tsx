/* eslint-disable @typescript-eslint/no-unused-vars */
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
    let result: Article[] = [];
    let titleWords: Array<string> = [];
    let summaryWords: Array<string> = [];
    let resultPriority: number[] = [];
    let tempArticle: Article;
    let checker: boolean = false;
    if (query !== '') {
        articles.forEach((elem, index) => {
            titleWords = elem.title.replace('.', '').replace(',', '').split(' ');
            summaryWords = elem.summary.replace('.', '').replace(',', '').split(' ');
            query.split(' ').forEach(queryWord => {
                titleWords.forEach(titleWord => {
                    if (queryWord === titleWord) {
                        if (checker === false)
                            resultPriority.push(1.01);
                        else
                            resultPriority[resultPriority.length - 1] += 1.01;
                        checker = true;
                    }
                })
            });
            query.split(' ').forEach(queryWord => {
                summaryWords.forEach(summaryWords => {
                    if (queryWord === summaryWords) {
                        if (checker === false)
                            resultPriority.push(1);
                        else
                            resultPriority[resultPriority.length - 1] += 1;
                        checker = true;
                    }
                })
            })
            if (checker === true) result.push(elem);
            checker = false;
        })

        for (let j = result.length - 1; j > 0; j--) {
            for (let i = 0; i < j; i++) {
                if (resultPriority[i] < resultPriority[i + 1]) {
                    let tempArticle = result[i];
                    result[i] = result[i + 1];
                    result[i + 1] = tempArticle;
                    let temp = resultPriority[i];
                    resultPriority[i] = resultPriority[i + 1];
                    resultPriority[i + 1] = temp;
                }
            }
        }
    }

    return (
        <>
            <div className="newsList">
                {articles.length === 0 ? <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>Loading...</Typography> :
                    query !== '' ? result.map(elem => (
                        <NewsCard key={elem.id} {...elem} query={query} />
                    )) :
                        articles.map((elem) => (
                            <NewsCard key={elem.id} {...elem} query={query} />
                        ))}
            </div>
        </>
    )
}

export default NewsList