import React from 'react'
import { Card, CardContent, Typography, Link } from "@mui/material";
import { useParams } from 'react-router';

import { useAppSelector } from '../../app/hooks';

import newsImage from '../../images/newsImage.png';
import rightArrow from '../../images/rightArrow.png';

import './ArticlePage.scss';



const ArticlePage = () => {

    const articles = useAppSelector(state => state.articles.list);

    const {id} = useParams();

    const articleById = articles.length > 0 ? articles.find((elem) => elem.id === Number(id)) : null;

    return (
        <>
            <div className='containerArticle'>
                <img src={articleById !== null ? articleById?.imageUrl : newsImage} alt="" className='articleImage' />
                <Card className="articleCard" sx={{
                    width: "90%", minHeight: "500px", height: "fit-content",
                    border: "1px solid #EAEAEA",
                    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
                    borderRadius: "5px"
                }}>
                    <CardContent className='articleCard__content' sx={{ padding: "35px 75px" }}>
                        <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat" }}>{articleById !== null ? articleById?.title : ""}</Typography>
                        <Typography sx={{ fontSize: "18px", fontFamily: "Montserrat" }}>{articleById !== null ? articleById?.summary : ""}</Typography>
                    </CardContent>
                </Card>
            </div>
            <Link href="/" className='link' sx={{
                textDecoration: "none", color: "black", fontSize: "14px", fontWeight: "700",
                fontFamily: "Montserrat, sans-serif", marginLeft: "75px", marginTop: "35px", marginBottom: "45px"
            }}>
                <img src={rightArrow} className="articleArrow" alt="" /> Back to homepage</Link>
        </>
    )
}

export default ArticlePage