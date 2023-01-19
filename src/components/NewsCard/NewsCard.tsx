import React from 'react';

import { Card, CardMedia, CardContent, Typography, Link } from "@mui/material";

import timetable from '../../images/timetable.png';
import rightArrow from '../../images/rightArrow.png';

import './NewsCard.scss';

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
    "events": Array<Object>,
    "query": string,
}

const NewsCard: React.FC<Article> = ({ id, title, imageUrl, summary, publishedAt, query }) => {

    const link = "article/" + id;

    const queryWords = query.replace('.', '').replace(',', '').split(' ');
    const titleWords = title.split(' ');
    const newSummary = summary.length > 130 ? summary.substring(0, 130) : summary;
    const summaryWords = newSummary.split(' ');

    return (
        <Link href={link} sx={{
            textDecoration: "none", color: "black", fontSize: "14px", fontWeight: "700",
            fontFamily: "Montserrat, sans-serif",
        }}>
            <Card
                className="card"
                sx={{
                    border: "1px solid #EAEAEA", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
                    borderRadius: "5px", width: 400, maxWidth: 400, minHeight: 480, height: "fit-content"
                }}>
                <CardMedia
                    sx={{ height: 217 }}
                    image={imageUrl}
                    title="newsImage"
                />
                <CardContent className="cardContent" sx={{ paddingLeft: "20px" }}>
                    <Typography className="cardContent__date" sx={{ fontSize: "14px", opacity: "60%", fontFamily: "Montserrat, sans-serif" }}>
                        <img src={timetable} alt="" className='cardContent__date-timetable' /> {publishedAt.substring(0, 10)}
                    </Typography>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
                        {title.replace('.', '').replace(',', '').split(' ').map((elem, index) => (
                            queryWords.includes(elem) ?
                                <Typography key={index} sx={{ fontSize: "24px", backgroundColor: "yellow", fontFamily: "Montserrat, sans-serif" }}>
                                    {titleWords[index]}
                                </Typography> :
                                <Typography key={index} sx={{ fontSize: "24px", fontFamily: "Montserrat, sans-serif" }}>
                                    {titleWords[index]}
                                </Typography>
                        ))}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
                        {newSummary.replace('.', '').replace(',', '').split(' ').map((elem, index) => (
                            queryWords.includes(elem) ?
                                <Typography key={index} sx={{ fontSize: "16px", backgroundColor: "yellow", fontFamily: "Montserrat, sans-serif" }}>
                                    {summaryWords[index]}
                                </Typography> :
                                <Typography key={index} sx={{ fontSize: "16px", fontFamily: "Montserrat, sans-serif" }}>
                                    {summaryWords[index]}
                                </Typography>
                        ))}
                        <Typography sx={{ fontSize: "16px", fontFamily: "Montserrat, sans-serif" }}>
                            ...
                        </Typography>
                    </div>
                    <Typography className='link' sx={{
                        textDecoration: "none", color: "black", fontSize: "14px", fontWeight: "700",
                        fontFamily: "Montserrat, sans-serif",
                    }}>
                        Read more <img src={rightArrow} alt="" className='linkArrow' />
                    </Typography>
                </CardContent>

            </Card>
        </Link>
    )
}

export default NewsCard