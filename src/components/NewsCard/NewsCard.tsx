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
    "events": Array<Object>
}

const NewsCard: React.FC<Article> = ({ id, featured, title, url, imageUrl, newsSite, summary, publishedAt, launches, events }) => {

    return (
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
                    <img src={timetable} alt="" className='cardContent__date-timetable' /> {publishedAt}
                </Typography>
                <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat, sans-serif" }}>
                    {title}
                </Typography>
                <Typography sx={{ fontSize: "16px", fontFamily: "Montserrat, sans-serif" }}>
                    {summary.length > 130 ? summary.substring(0, 130) : summary}...
                </Typography>
                <Link href="/" className='link' sx={{
                    textDecoration: "none", color: "black", fontSize: "14px", fontWeight: "700",
                    fontFamily: "Montserrat, sans-serif",
                }}>
                    Read more <img src={rightArrow} alt="" className='linkArrow' />
                </Link>
            </CardContent>

        </Card>
    )
}

export default NewsCard