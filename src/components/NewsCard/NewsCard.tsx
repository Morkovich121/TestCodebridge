import React from 'react';

import { Card, CardMedia, CardContent, Typography, CardActions, Link } from "@mui/material";

import timetable from '../../images/timetable.png';
import newsImage from '../../images/newsImage.png';
import rightArrow from '../../images/rightArrow.png';

import './NewsCard.scss';

const NewsCard = () => {
    return (
        <Card
            className="card"
            sx={{
                border: "1px solid #EAEAEA", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
                borderRadius: "5px", width: 400, maxWidth: 400, minHeight: 480, height: "fit-content"
            }}>
            <CardMedia
                sx={{ height: 217 }}
                image={newsImage}
                title="newsImage"
            />
            <CardContent className="cardContent" sx={{ paddingLeft: "20px" }}>
                <Typography className="cardContent__date" sx={{ fontSize: "14px", opacity: "60%", fontFamily: "Montserrat, sans-serif" }}>
                    <img src={timetable} alt="" className='cardContent__date-timetable' /> June 29th, 2021
                </Typography>
                <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat, sans-serif" }}>
                    Lizard
                </Typography>
                <Typography sx={{ fontSize: "16px", fontFamily: "Montserrat, sans-serif" }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Link href="/" className='link' sx={{
                    textDecoration: "none", color: "black", fontSize: "14px", fontWeight: "700",
                    fontFamily: "Montserrat, sans-serif",
                    marginLeft: "12px"
                }}>
                    Read more <img src={rightArrow} alt="" className='linkArrow' />
                </Link>
            </CardActions>
        </Card>
    )
}

export default NewsCard