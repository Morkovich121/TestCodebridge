import React, { useCallback, useState } from 'react'

import { Typography } from "@mui/material";
import { useAppSelector } from '../../app/hooks';
import useDebounce from '../../services/hooks';

import NewsList from '../../components/NewsList/NewsList';

import './Homepage.scss';

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

const Homepage = () => {

    const articles = useAppSelector(state => state.articles.list);

    const [search, setSearch] = useState<string>('');
    const debouncedSearch = useDebounce<string>(search, 500)

    let result: Article[] = [];
    let titleWords: Array<string> = [];
    let summaryWords: Array<string> = [];
    let resultPriority: number[] = [];
    if (search !== '') {
        articles.forEach((elem, index) => {
            resultPriority.push(0);
            titleWords = elem.title.replace('.', '').replace(',', '').split(' ');
            summaryWords = elem.summary.replace('.', '').replace(',', '').split(' ');
            titleWords = elem.title.replace('.', '').replace(',', '').split(' ');
            summaryWords = elem.summary.replace('.', '').replace(',', '').split(' ');
            search.split(' ').forEach(queryWord => {
                titleWords.forEach(titleWord => {
                    if (queryWord === titleWord) resultPriority[index] += 1.01;
                })
            });
            search.split(' ').forEach(queryWord => {
                summaryWords.forEach(summaryWords => {
                    if (queryWord === summaryWords) resultPriority[index] += 1;
                })
            })

            if (resultPriority[index] > 0) result.push(elem);
        })
    }

    const onSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }, [])

    return (
        <div className='containerHomepage'>
            <div className="header">
                <Typography sx={{ fontSize: "16px", fontWeight: "600", fontFamily: "Montserrat, sans-serif" }}>Filter by keywords</Typography>
                <div className='header__input'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7832 14.3911L20 18.6069L18.6069 20L14.3911 15.7832C12.8224 17.0407 10.8713 17.7246 8.86088 17.7218C3.96968 17.7218 0 13.7521 0 8.86088C0 3.96968 3.96968 0 8.86088 0C13.7521 0 17.7218 3.96968 17.7218 8.86088C17.7246 10.8713 17.0407 12.8224 15.7832 14.3911ZM13.8082 13.6605C15.0577 12.3756 15.7555 10.6532 15.7527 8.86088C15.7527 5.05267 12.6681 1.96909 8.86088 1.96909C5.05267 1.96909 1.96909 5.05267 1.96909 8.86088C1.96909 12.6681 5.05267 15.7527 8.86088 15.7527C10.6532 15.7555 12.3756 15.0577 13.6605 13.8082L13.8082 13.6605Z" fill="#575757" />
                    </svg>
                    <input type="text" className="header__input-search" placeholder='Search...' value={search} onChange={onSearchChange} />
                </div>
            </div>
            <div className='results'>
                <Typography sx={{ fontSize: "16px", fontWeight: "600", fontFamily: "Montserrat, sans-serif" }}>Results: {debouncedSearch ? result.length : articles.length}</Typography>
                <hr />
            </div>
            <NewsList query={debouncedSearch} />
        </div>
    )
}

export default Homepage