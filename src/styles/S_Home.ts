import styled from 'styled-components';
import { t, e } from './incoming';
import { Box, Grid } from './index';
import { TiTick } from 'react-icons/ti';
import { GiCalendarHalfYear } from 'react-icons/gi';
import { RiThumbUpLine } from 'react-icons/ri';
import { VscSmiley } from 'react-icons/vsc';
import { MdPersonOutline } from 'react-icons/md';
import { GiTie } from 'react-icons/gi';
import { AiOutlineTags } from 'react-icons/ai';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FaFacebookF, FaBlogger, FaAngleUp } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineGooglePlus } from 'react-icons/ai';

// icons
export const AngleUp = styled(FaAngleUp)`
    cursor: pointer;
`;
export const Facebook = styled(FaFacebookF)`
    font-size: 2rem;
    background-color: #3b589a;
    color: white;
    border-radius: 50%;
    padding: 0.3rem;
    cursor: pointer;
`;
export const Google = styled(AiOutlineGooglePlus)`
    font-size: 2rem;
    background-color: #cf412e;
    color: white;
    border-radius: 50%;
    padding: 0.3rem;
    cursor: pointer;
`;
export const Twitter = styled(AiOutlineTwitter)`
    font-size: 2rem;
    background-color: #2fb1ed;
    color: white;
    border-radius: 50%;
    padding: 0.3rem;
    cursor: pointer;
`;
export const Blogg = styled(FaBlogger)`
    font-size: 2rem;
    color: white;
    background-color: #f1921a;
    border-radius: 50%;
    padding: 0.3rem;
    cursor: pointer;
`;

export const Computer = styled(HiOutlineDesktopComputer)`
    color: inherit;
    font-size: inherit;
`;
export const Tag = styled(AiOutlineTags)`
    color: inherit;
    font-size: inherit;
`;
export const Tie = styled(GiTie)`
    color: inherit;
    font-size: inherit;
`;
export const Person = styled(MdPersonOutline)`
    color: inherit;
    font-size: inherit;
`;
export const Smiley = styled(VscSmiley)`
    color: inherit;
    font-size: inherit;
`;
export const Thumbsup = styled(RiThumbUpLine)`
    color: inherit;
    font-size: inherit;
`;
export const Year = styled(GiCalendarHalfYear)`
    color: inherit;
    font-size: inherit;
`;
export const Ticked = styled(TiTick)`
    color: inherit;
    font-size: inherit;
`;

export const BackgroundPic = styled(Grid)``;
export const HeroWrapper = styled(Grid)``;
export const Hero = styled(Grid)``;
export const NavArea = styled(Grid)``;
export const InfoArea = styled(Grid)``;
export const ThreeDotArea = styled(Grid)``;
export const DotBackground = styled(Grid)<{ isActive?: boolean }>`
    border: ${(p) => (p.isActive ? '2px solid white' : '')};
`;
export const Dot = styled(Grid)<{ isActive?: boolean }>`
    /* border: ${(p) => (p.isActive ? '2px solid red' : '')}; */
    /* border: 2px solid red; */
`;
export const LogoArea = styled(Grid)``;
export const NavTextArea = styled(Grid)``;
export const NavText = styled(Grid)``;
export const Filler = styled(Grid)``;
export const Heading = styled(Box)`
    text-align: center;
    font-size: 1.5rem;
    text-transform: uppercase;
`;
export const Heading2 = styled(Heading)``;
export const Description1 = styled(Box)``;
export const Description2 = styled(Box)``;
export const Text = styled(Box)``;
export const Caption = styled(Box)``;
export const Line1 = styled(Grid)``;
export const Line2 = styled(Line1)``;
export const Line3 = styled(Line2)``;
export const Line4 = styled(Line3)``;
export const Button = styled(Grid)``;

export const Pic1 = styled(Grid)``;
export const Pic2 = styled(Pic1)``;
export const Pic3 = styled(Pic1)``;
export const Pic_left = styled(Pic1)``;
export const Pic_center = styled(Pic_left)``;
export const Pic_right = styled(Pic_left)``;
export const IconHolder = styled(Pic_left)``;
export const IframeHolder = styled(Grid)``;
export const NileshHolder = styled(Grid)``;

export const UserInfo = styled(Grid)``;
export const HeaderCard = styled(Grid)``;
export const CardArea = styled(Grid)``;
export const Card1 = styled(HeaderCard)``;
export const Card2 = styled(Card1)``;
export const Card3 = styled(Card1)``;
export const Col1 = styled(Card1)``;
export const Col2 = styled(Col1)``;
export const Row1 = styled(Grid)``;
export const Row2 = styled(Row1)``;
export const Address = styled(Col1)``;

export const PaginationWrapper = styled(Card1)``;
export const Pagination = styled(Card1)<{ isOn: boolean }>`
    font-weight: ${(p) => (p.isOn ? 'bold' : 'normal')};
    font-size: ${(p) => (p.isOn ? '1.5rem' : '')};
    color: ${(p) => (p.isOn ? '' : 'grey')};
    cursor: pointer;
`;
export const Bullets = styled(Grid)``;
export const Bullet = styled(Box)``;

// ----------
export const Acheivements = styled(Grid)``;
export const Acheivement = styled(Grid)``;

// ---------
export const AboutArea = styled(Grid)``;
export const CaseStudyArea = styled(Grid)``;
export const HowItWorks = styled(Grid)``;
export const ReadyToInvest = styled(Grid)``;
export const FromTheFounder = styled(Grid)``;
export const GetInTouch = styled(Grid)``;
export const Testimonials = styled(Grid)``;
export const Footer = styled(Grid)``;
export const Copyright = styled(Grid)``;

// ------------------------------

export const Home = styled(Grid)`
    ${HeroWrapper} {
        position: relative;
        overflow: hidden;
        ${Hero} {
            height: 35rem;
            color: white;
            grid-template-rows: auto 1fr auto;
            grid-template-areas:
                '_NavArea'
                '_InfoArea'
                '_ThreeDotArea';

            ${NavArea} {
                padding: 1rem 2rem;
                grid-area: _NavArea;
                grid-template-columns: auto 1fr auto;
                ${LogoArea} {
                }
                ${Filler} {
                    width: auto;
                }
                ${NavTextArea} {
                    grid-template-columns: repeat(6, auto);
                    gap: 2rem;
                    ${NavText} {
                        text-transform: uppercase;
                        font-size: 0.8rem;
                    }
                }
            }
            ${InfoArea} {
                grid-area: _InfoArea;
                padding: 0 3rem;
                gap: 1.5rem;
                place-items: center start;
                ${Heading} {
                    font-size: 1.5rem;
                    width: auto;
                    text-transform: none;
                }
                ${Line1} {
                    gap: 1.4rem;
                    grid-template-columns: auto 1fr;
                    ${Ticked} {
                        border-radius: 50%;
                        font-size: 1.5rem;
                        color: #ff8686;
                        border: 1px solid #ff8686;
                        opacity: 0.7;
                    }
                    ${Text} {
                    }
                }
                ${Button} {
                    background-color: #de4e36;
                    padding: 0.5rem 1rem;
                    width: auto;
                }
            }
            ${ThreeDotArea} {
                height: 3rem;
                grid-area: _ThreeDotArea;
                grid-template-columns: 1fr repeat(3, auto) 1fr;
                gap: 0.8rem;
                // NOTE has props
                ${DotBackground}{
                    padding: 3px;
                    /* border: 2px solid white; */
                    border-radius: 50%;
                    ${Dot} {
                        border-radius: 50%; 
                        background-color: white;
                        width: 0.8rem;
                        height: 0.8rem;
                    }

                }
            }
        }
        ${BackgroundPic} {
            /* height: 100%;
            width: 100%; */
            z-index: -10;
            position: absolute;
            margin: auto;
            top: 0;
            left: 0;
            img {
                object-fit: cover;
                z-index: -10;
            }
            ${Filler} {
                position: absolute;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 10;
                height: 100%;
            }
        }
    }
    ${Acheivements} {
        grid-template-columns: repeat(4, 1fr);
        padding: 3rem 0;
        ${Acheivement} {
            padding: 5rem 0;
            gap: 0.5rem;
            ${Line1} {
                height: 4rem;
                font-size: 4rem;
            }
            ${Line2} {
                font-size: 2rem;
                font-size: 1rem;
                height: auto;
            }
            ${Line3} {
                width: 1rem;
                border: 2px solid;
            }
            ${Line4} {
                border: none;
                width: auto;
            }
        }
    }
    ${AboutArea} {
        background-color: #f1f1f1;
        padding: 3rem 5rem;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(10, auto);
        gap: 1rem 2rem;
        ${Heading} {
            grid-area: 1/5/1/9;
            text-align: center;
            font-size: 2rem;
        }
        ${Filler} {
            grid-area: 2/6/2/8;
            width: 2rem;
        }
        ${Description1} {
            grid-area: 3/5/3/9;
            /* display: none; */
            text-align: center;
            margin: 0 0 1rem;
            /* grid-area: 3/5/3/6; */
        }
        ${Pic1} {
            grid-area: 5/1/8/6;
            height: 100%;
        }
        ${Description2} {
            grid-area: 5/6/5/13;
            z-index: 100;
        }
        ${Pic2} {
            height: 12rem;
            grid-area: 6/6/6/13;
            /* display: none; */
        }
        ${Heading2} {
            grid-area: 7/7/7/13;
            text-align: start;
            font-size: 2rem;
        }
        ${Tie} {
            grid-area: 7/6/7/7;
            font-size: 6rem;
            /* display: none; */
        }
        ${Pic_left} {
            grid-area: 8/1/8/5;
            height: 18rem;
            position: relative;
            color: white;
            ${Heading} {
                position: absolute;
                width: auto;
                left: 1rem;
                bottom: 4rem;
                text-align: left;
                text-transform: none;
                z-index: 10;
                font-size: 1.2rem;
                /* font-weight: bold; */
            }
            ${Caption} {
                position: absolute;
                left: 3rem;
                bottom: 2rem;
                z-index: 10;
                opacity: 0.5;
            }
            ${Tag} {
                opacity: 0.5;
                position: absolute;
                left: 1rem;
                bottom: 2rem;
                z-index: 10;
                font-size: 1.5rem;
            }
            ${Filler} {
                position: absolute;
                /* top: 0; */
                bottom: 0;
                left: 0;
                height: 100%;
                width: 100%;
                height: 8rem;
                background: rgb(140, 114, 161);
                background: linear-gradient(180deg, rgba(140, 114, 161, 0) 0%, rgba(6, 21, 38, 1) 100%);
            }
        }
        ${Pic_center} {
            grid-area: 8/5/8/9;
        }
        ${Pic_right} {
            grid-area: 8/9/8/13;
        }
    }
    ${CaseStudyArea} {
        grid-template-columns: repeat(12, 1fr);
        /* gap: 1rem; */
        padding: 3rem 0;
        ${Heading} {
            grid-area: 1/6/1/8;
            text-transform: uppercase;
            font-size: 2rem;
            text-align: center;
            padding: 1rem 0;
        }
        ${Filler} {
            grid-area: 2/6/2/8;
            width: 2rem;
        }
        ${Description1} {
            padding: 1rem 0;
            grid-area: 3/5/3/9;
        }
        ${HeaderCard} {
            position: relative;
            grid-area: 4/1/4/4;
            height: 18rem;
            text-align: center;
            color: white;
            ${Text} {
                z-index: 20;
            }
            ${Filler} {
                position: absolute;
                z-index: 10;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 18rem;
                background: linear-gradient(180deg, rgba(21, 3, 36, 0.5) 0%, rgba(6, 21, 38, 1) 100%);
            }
        }
        ${Card1} {
            grid-area: 4/4/4/7;
            position: relative;
            ${Filler} {
                height: 8rem;
                background: linear-gradient(180deg, rgba(140, 114, 161, 0) 0%, rgba(6, 21, 38, 1) 100%);
                position: absolute;
                /* top: 0; */
                bottom: 0;
                left: 0;
            }
            ${Text} {
                position: absolute;
                text-align: start;
                bottom: 1rem;
                left: 0.5rem;
                max-width: 15rem;
            }
        }
        ${Card2} {
            grid-area: 4/7/4/10;
        }
        ${Card3} {
            grid-area: 4/10/4/13;
        }
    }
    ${HowItWorks} {
        padding: 1rem;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(6, auto);
        gap: 1rem;
        place-items: start center;
        ${Heading} {
            grid-area: 1/6/1/8;
            text-align: center;
            font-size: 1.5rem;
            text-transform: uppercase;
        }
        ${Filler} {
            grid-area: 2/6/2/8;
            width: 2rem;
        }
        ${PaginationWrapper} {
            grid-area: 3/6/3/8;
            grid-template-columns: repeat(4, auto);
            padding: 0 0 2rem;
            // NOTE - has props
            ${Pagination} {
                /* border: 2px solid blue; */
            }
        }
        ${IconHolder} {
            grid-area: 4/5/6/7;
            font-size: 10rem;
            ${Computer} {
            }
        }
        ${Line1} {
            grid-area: 4/7/5/12;
            margin: 0;
            place-items: center start;
            text-transform: uppercase;
            font-size: 1.5rem;
            font-weight: bold;
        }
        ${Description1} {
            grid-area: 5/7/6/12;
            margin: 0;
            height: 100%;
        }
    }
    ${ReadyToInvest} {
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(6, auto);
        background-color: #2e2e2e;
        padding: 2rem 0;
        ${Line1} {
            grid-area: 1/3/2/7;
            font-size: 1.5rem;
            color: white;
            place-items: center start;
        }
        ${Line2} {
            grid-area: 3/3/4/7;
            color: rgba(255, 255, 255, 0.5);
            text-transform: none;
            font-size: 1rem;
            padding: 1rem 0;
        }
        ${Button} {
            grid-area: 1/6/4/12;
            background-color: #dd4d35;
            color: white;
            text-transform: uppercase;
            width: auto;
            padding: 0.7rem 3rem;
        }
    }
    ${FromTheFounder} {
        grid-template-columns: repeat(24, 1fr);
        grid-template-rows: repeat(8, auto);
        padding: 3rem 1rem;
        ${Heading} {
            grid-area: 1/10/1/16;
        }
        ${Filler} {
            grid-area: 2/10/2/16;
            width: 2rem;
            margin: 1rem 0 3rem;
        }
        ${NileshHolder} {
            grid-area: 4/4/4/7;
            grid-template-columns: auto 1fr;
            ${Pic1} {
                height: 4rem;
                width: 4rem;
                border-radius: 50%;
            }
            ${Line1} {
                // Nilesh, Stock Market Enthusiast
                /* grid-area: 4/5/4/9; */
                place-items: center start;
                padding: 0 1rem;
                font-weight: bold;
            }
        }
        ${Description1} {
            font-style: italic;
            padding: 1rem 0;
            grid-area: 5/4/5/9;
        }
        ${IconHolder} {
            padding: 1rem 0;
            width: auto;
            grid-area: 6/4/6/5;
            border-radius: 0;
            grid-template-columns: repeat(4, auto);
            gap: 0.5rem;
            ${Facebook} {
            }
            ${Twitter} {
                /* grid-area: 6/5/6/6; */
                f
            }
            ${Google} {
                /* grid-area: 6/6/6/7; */
                
            }
            ${Blogg} {
                /* grid-area: 6/7/6/8; */
                
            }
        }
        ${IframeHolder} {
            grid-area: 4/13/7/24;
            height: 100%;
        }
    }
    ${Testimonials} {
        background-color: #f1f1f1;
        padding: 4rem;
        ${Heading} {
            /* padding: 1rem; */
        }
        ${Filler} {
            width: 2rem;
            margin: 1rem;
        }
        ${CardArea} {
            gap: 1rem;
            grid-template-columns: repeat(3, 1fr);
            ${Card1} {
                padding: 2rem;
                background-color: white;
                grid-template-columns: repeat(4, 1fr);
                ${Line1} {
                    grid-area: 1/1/1/5;
                }
                ${UserInfo} {
                    grid-area: 2/1/4/5;
                    padding: 1rem 0;
                    grid-template-columns: auto 1fr;
                    gap: 0 1rem;
                    ${Pic2} {
                        grid-area: 1/1/3/2;
                        height: 4rem;
                        width: 4rem;
                        border-radius: 50%;
                    }
                    ${Line2} {
                        grid-area: 1/2/1/4;
                        font-weight: bold;
                        /* border: 2px solid blue; */
                        place-items: center start;
                    }
                    ${Line3} {
                        grid-area: 2/2/2/4;
                        font-weight: normal;
                        /* border: 2px solid blue; */
                        /* grid-area: 3/2/3/3; */
                    }
                }
            }
        }
    }
    ${GetInTouch} {
        background-color: #2fa084;
        text-transform: uppercase;
        grid-template-columns: auto 1fr auto;
        color: white;
        padding: 2rem 6rem;
        ${Heading} {
        }
        ${Filler} {
        }
        ${Button} {
            background-color: #ffffff;
            padding: 0.5rem 1.5rem;
            color: black;
            font-size: 1.2rem;
        }
    }
    ${Footer} {
        grid-template-columns: repeat(4, auto);
        background-color: #2e2e2e;
        color: white;
        padding: 3rem 5rem;
        place-items: start center;
        ${LogoArea} { 
            height: 100%;
        }
        ${Col1} {
            place-items: center start;
            width:auto;
            gap:1rem;
            color: rgba(255, 255, 255, 0.6);
            ${Heading} {
                color:white;
                text-align:start;
            }
            ${Filler}{
                width:2rem;
            }
            ${Address} {
                width:auto;
            }
            ${IconHolder}{
                grid-template-columns: repeat(4,auto);
                width:auto;
                gap:0.8rem;
                ${Facebook}{
                    color: inherit;
                    background-color: transparent;
                    font-size: 1.8rem;
                    :hover{
                        color:red;
                    }
                }
                ${Google}{
                    color: inherit;
                    background-color: transparent;
                    :hover{
                        color:red;
                    }
                }
                ${Twitter}{ 
                    color: inherit;
                    background-color: transparent;
                    :hover{
                        color:red;
                    }
                }
            }
        }
        ${Col2} {
            ${Heading} {
            }
            ${Bullets} {
                color: rgba(255, 255, 255, 0.6);
                gap:0.5rem;
                ${Bullet}{
                    font-size: 1.1rem;
                    cursor:pointer;
                    :hover{
                        color: #e2ff83;
                    }
                }
            }
        }
        ${Pic1} {
            height: 100%;
        }
    }
    ${Copyright}{
        background-color: #252525;
        padding: 1rem 2rem;
        color:white;
        grid-template-columns: auto 1fr auto;
        ${Col1}{
            opacity:0.5;
        }
        ${AngleUp}{
            opacity:0.5;
            font-size: 3rem;
            background-color: #555555;
            padding: 0.3rem;
        }
    }
`;
