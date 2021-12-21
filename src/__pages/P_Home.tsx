import React, { useState, useEffect, useContext, useCallback, useRef, useMemo } from 'react';
import { r, e, s, t, b } from './incoming';
// import { useParams, useHistory } from 'react-router-dom';

const Home = () => {
    const S = s.home;
    const bacground_image = 'https://rough-keyes343.s3.amazonaws.com/hero+background.jpg';

    return (
        <S.Home>
            <S.HeroWrapper>
                <S.BackgroundPic>
                    <S.Filler />
                    <img src={bacground_image} alt="savings" />
                </S.BackgroundPic>

                <b.home.Hero />
            </S.HeroWrapper>

            <b.home.Acheivements />
            <b.home.AboutArea />
            <b.home.CaseStudies />
            <b.home.HowItWorks />
            <b.home.ReadyToInvest />
            <b.home.FromTheFounder />
        </S.Home>
    );
};

export default Home;
