import React, { useState, useEffect, useContext, useCallback, useRef, useMemo } from 'react';
import { h, b, r, e, s, t } from './incoming';

export const Hero = () => {
    const S = s.home;
    const { state_settings, set_settings } = h.Mother();
    const [activeSlider, set_activeSlider] = useState<number>(1);

    const navlinks = [
        {
            label: 'Home',
        },
        {
            label: 'About Us',
        },
        {
            label: 'Plants and Pricing',
        },
        {
            label: 'Case Studies',
        },
        {
            label: 'Blog',
        },
        {
            label: 'Contact Us',
        },
    ];

    const bacground_image = 'https://rough-keyes343.s3.amazonaws.com/hero+background.jpg';

    const infos = {
        header: 'We help people trade fearlessly, with time tested strategies',
        line1: 'We understand your market anxiety',
        line2: 'We work with you till you get profits you expected',
        line3: 'We send actionable trade calls to your phone by SMS',
        buttonText: 'View plans and pricing',
    };

    const ref_scroll = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (state_settings.scroll_to_top === true) {
            set_settings({
                scroll_to_top: false,
            });
            ref_scroll.current?.scrollIntoView();
        }
    }, [set_settings, state_settings.scroll_to_top]);

    return (
        <S.Hero>
            <S.NavArea ref={ref_scroll}>
                <S.LogoArea>Some logo {activeSlider} </S.LogoArea>
                <S.Filler />
                <S.NavTextArea>
                    {navlinks.map((nav, i) => {
                        return <S.NavText key={i}>{nav.label}</S.NavText>;
                    })}
                </S.NavTextArea>
            </S.NavArea>

            <S.InfoArea>
                <S.Heading>{infos.header}</S.Heading>
                {[infos.line1, infos.line2, infos.line3].map((line, i) => {
                    return (
                        <S.Line1 key={i}>
                            <S.Ticked />
                            <S.Text>{line}</S.Text>
                        </S.Line1>
                    );
                })}
                <S.Button>{infos.buttonText}</S.Button>
            </S.InfoArea>

            <S.ThreeDotArea>
                <S.Filler />
                <S.DotBackground onClick={() => set_activeSlider(1)} isActive={activeSlider === 1}>
                    <S.Dot />
                </S.DotBackground>
                <S.DotBackground onClick={() => set_activeSlider(2)} isActive={activeSlider === 2}>
                    <S.Dot />
                </S.DotBackground>
                <S.DotBackground onClick={() => set_activeSlider(3)} isActive={activeSlider === 3}>
                    <S.Dot />
                </S.DotBackground>
                <S.Filler />
            </S.ThreeDotArea>
        </S.Hero>
    );
};

export const Acheivements = () => {
    const S = s.home;

    const bundle = [
        {
            label: 'Successful years',
            icon: <S.Year />,
            count: 6,
        },
        {
            label: 'Reliable Predictions',
            icon: <S.Thumbsup />,
            count: 1200,
        },
        {
            label: 'Satisfied Customers',
            icon: <S.Smiley />,
            count: 500,
        },
        {
            label: 'Expert Advisors',
            icon: <S.Person />,
            count: 25,
        },
    ];

    return (
        <S.Acheivements>
            {bundle.map((col, i) => {
                return (
                    <S.Acheivement key={i}>
                        <S.Line1>{col.icon}</S.Line1>
                        <S.Line2>{col.count}</S.Line2>
                        <S.Line3 />
                        <S.Line4>{col.label}</S.Line4>
                    </S.Acheivement>
                );
            })}
        </S.Acheivements>
    );
};

export const AboutArea = () => {
    const S = s.home;
    const unsplash = 'https://source.unsplash.com/random';
    const bulk = {
        heading1: 'About Rocket',
        heading2: 'SEBI Certified Market Analyst',
        description1: 'We aim to make stock market trading more reliable, convenient and profitable for people',
        description2: `We're a team of passionate, research driven professionals, analysing the market to generate maximum profit opportunities for people.`,
        tie: <S.Tie />,
    };

    const pic_infos = {
        left: {
            heading: 'Gold is swinging upwards starting today!',
            caption: 'Gold trend',
        },
        center: {
            heading: 'Great time to sell and exit if  you have adidas shares',
            caption: 'Sensex, Sell timings, Exit',
        },
        right: {
            heading: 'New to stock market? Start with 3 simple steps',
            caption: 'Getting started',
        },
    };

    return (
        <S.AboutArea>
            <S.Heading>{bulk.heading1}</S.Heading>
            <S.Filler bd="blue" />
            <S.Description1>{bulk.description1}</S.Description1>
            <S.Pic1 bgimg={unsplash}></S.Pic1>
            <S.Description2>{bulk.description2}</S.Description2>
            <S.Pic2 bgimg={unsplash} />
            {bulk.tie}
            <S.Heading2>{bulk.heading2}eee</S.Heading2>

            <S.Pic_left bgimg={unsplash}>
                <S.Heading>{pic_infos.left.heading}</S.Heading>
                <S.Tag>dddd</S.Tag>
                <S.Caption>{pic_infos.left.caption}</S.Caption>
                <S.Filler />
            </S.Pic_left>

            <S.Pic_center bgimg={unsplash}>
                <S.Heading>{pic_infos.center.heading}</S.Heading>
                <S.Tag />
                <S.Caption>{pic_infos.center.caption}</S.Caption>
                <S.Filler />
            </S.Pic_center>

            <S.Pic_right bgimg={unsplash}>
                <S.Heading>{pic_infos.right.heading}</S.Heading>
                <S.Tag />
                <S.Caption>{pic_infos.right.caption}</S.Caption>
                <S.Filler />
            </S.Pic_right>
        </S.AboutArea>
    );
};

export const CaseStudies = () => {
    const S = s.home;
    const description = `Market lows are normal, make the moves we suggest, right after you get our message. Here are some success stories.`;
    const unsplash = 'https://source.unsplash.com/random';

    const cards = [
        {
            heading: `We helped Nirav a businessman from Bangalore, a customer since 2010, make money for his new factory.`,
            image: unsplash,
        },
        {
            heading: `We helped Nirav make money for his new factory.`,
            image: unsplash,
        },
        {
            heading: `We helped Malini save enough for her retired life.`,
            image: unsplash,
        },
        {
            heading: `We helped Sid go for his masters abroad`,
            image: unsplash,
        },
    ];
    return (
        <S.CaseStudyArea>
            <S.Heading>About Rocket</S.Heading>
            <S.Description1>{description}</S.Description1>
            <S.Filler bd="red" />

            <S.HeaderCard bgimg={unsplash}>
                <S.Filler />
                <S.Text>{cards[0].heading}</S.Text>
            </S.HeaderCard>
            <S.Card1 bgimg={unsplash}>
                <S.Filler />
                <S.Text>{cards[1].heading}</S.Text>
            </S.Card1>
            <S.Card2 bgimg={unsplash}>
                <S.Filler />
                <S.Text>{cards[2].heading}</S.Text>
            </S.Card2>
            <S.Card3 bgimg={unsplash}>
                <S.Filler />
                <S.Text>{cards[3].heading}</S.Text>
            </S.Card3>
        </S.CaseStudyArea>
    );
};

export const HowItWorks = () => {
    const S = s.home;
    const [pagination, set_pagination] = useState<number>(1);

    return (
        <S.HowItWorks>
            <S.Heading>How it works</S.Heading>
            <S.Filler bd="red" />
            <S.PaginationWrapper>
                {[1, 2, 3, 4].map((num, i) => {
                    return (
                        <S.Pagination
                            key={i}
                            isOn={num === pagination}
                            onClick={() => {
                                set_pagination(num);
                            }}
                        >
                            {num}
                        </S.Pagination>
                    );
                })}
            </S.PaginationWrapper>

            <S.IconHolder>
                {/* hhh */}
                <S.Computer />
            </S.IconHolder>

            <S.Line1>Register</S.Line1>
            <S.Description1>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was po
            </S.Description1>
        </S.HowItWorks>
    );
};

export const ReadyToInvest = () => {
    const S = s.home;

    return (
        <S.ReadyToInvest>
            <S.Line1>Ready to invest some money?</S.Line1>
            <S.Line2>Laern more about our services, plans and pricing</S.Line2>
            <S.Button>View Packages</S.Button>
        </S.ReadyToInvest>
    );
};
export const FromTheFounder = () => {
    const S = s.home;
    const unsplash = 'https://source.unsplash.com/random';

    const bulk = {
        pic: unsplash,
        title: `Nilesh, Stock Market Enthusiast`,
        description: `Profits will happen, make the right moves. Market has tremendous opportunities for all, make the most out of the highs and intelligently deal with lows.`,
    };
    return (
        <S.FromTheFounder>
            <S.Heading>From The Founder</S.Heading>
            <S.Filler bd="red" />
            <S.NileshHolder>
                <S.Pic1 bgimg={bulk.pic} />
                <S.Line1>{bulk.title}</S.Line1>
            </S.NileshHolder>
            <S.Description1>"{bulk.description}"</S.Description1>
            <S.IconHolder>
                <S.Facebook />
                <S.Twitter />
                <S.Google />
                <S.Blogg />
            </S.IconHolder>
            <S.IframeHolder>
                <iframe src={'https://www.youtube.com/watch?v=yRh-dzrI4Z4'} height="100%" width="100%" title="random" />
            </S.IframeHolder>
        </S.FromTheFounder>
    );
};

export const Testimonials = () => {
    const S = s.home;
    const unsplash = 'https://source.unsplash.com/random';

    const cards = [
        {
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was po`,
            pic: unsplash,
            firstName: 'Darshan Odeyar',
            caption: 'IT professional',
        },
        {
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was po`,
            pic: unsplash,
            firstName: 'Vidya Raghavan',
            caption: 'Home maker',
        },
        {
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was po`,
            pic: unsplash,
            firstName: 'Darshan Odeyar',
            caption: 'Doctor',
        },
    ];

    return (
        <S.Testimonials>
            <S.Heading>Testimonials</S.Heading>
            <S.Filler bd="red" />

            <S.CardArea>
                {cards.map((card, i) => {
                    return (
                        <S.Card1>
                            <S.Line1>{card.text}</S.Line1>
                            <S.UserInfo>
                                <S.Pic2 bgimg={card.pic} />
                                <S.Line2>{card.firstName}</S.Line2>
                                <S.Line3>{card.caption}</S.Line3>
                            </S.UserInfo>
                        </S.Card1>
                    );
                })}
            </S.CardArea>
        </S.Testimonials>
    );
};

export const GetInTouch = () => {
    const S = s.home;
    return (
        <S.GetInTouch>
            {/* <S.Filler /> */}
            <S.Heading>Have questions on stock market?</S.Heading>
            <S.Filler />
            <S.Button>Get in touch</S.Button>
            {/* <S.Filler /> */}
        </S.GetInTouch>
    );
};

export const Footer = () => {
    const S = s.home;
    const unsplash = 'https://source.unsplash.com/random';

    const links = ['About Us', 'Plans and pricing', 'Case studies', 'Free trial'];
    return (
        <S.Footer>
            <S.LogoArea bgimg={unsplash} />
            {/* CONTACT */}
            <S.Col1>
                <S.Heading>Contact</S.Heading>
                <S.Filler bd="#b89173" />
                <S.Address>
                    NAT, St, Gandhi Bazaar, Basavanagudi,
                    <br />
                    Bangaluru, Karnataka 560004
                    <br />
                    emai: rocket@rockettrades.com
                    <br />
                    Phone: +91 990330558
                    <br />
                </S.Address>
                <S.IconHolder>
                    <S.Facebook />
                    <S.Google />
                    <S.Twitter />
                </S.IconHolder>
            </S.Col1>
            {/* QUICK LINKS */}
            <S.Col2>
                <S.Heading>Quick Links</S.Heading>
                <S.Filler bd="#b89173" />
                <S.Bullets>
                    {links.map((link, i) => {
                        return <S.Bullet key={i}>{link}</S.Bullet>;
                    })}
                </S.Bullets>
            </S.Col2>

            <S.Pic1 bgimg={unsplash} />
        </S.Footer>
    );
};

export const Copyright = () => {
    const S = s.home;
    const { state_settings, set_settings } = h.Mother();
    return (
        <S.Copyright>
            <S.Col1> ?? Copyright 2015, RocketTraders</S.Col1>
            <S.Filler />

            <S.AngleUp
                onClick={() => {
                    set_settings({
                        scroll_to_top: true,
                    });
                }}
            />
        </S.Copyright>
    );
};
