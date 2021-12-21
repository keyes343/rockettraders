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
import { FaFacebookF, FaBlogger } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineGooglePlus } from 'react-icons/ai';

// icons
export const Facebook = styled(FaFacebookF)``;
export const Google = styled(AiOutlineGooglePlus)``;
export const Twitter = styled(AiOutlineTwitter)``;
export const Blogg = styled(FaBlogger)``;

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
export const Dot = styled(Grid)``;
export const LogoArea = styled(Grid)``;
export const NavTextArea = styled(Grid)``;
export const NavText = styled(Grid)``;
export const Filler = styled(Grid)``;
export const Heading = styled(Box)``;
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

export const HeaderCard = styled(Grid)``;
export const Card1 = styled(HeaderCard)``;
export const Card2 = styled(Card1)``;
export const Card3 = styled(Card1)``;
export const PaginationWrapper = styled(Card1)``;
export const Pagination = styled(Card1)<{ isOn: boolean }>`
    font-weight: ${(p) => (p.isOn ? 'bold' : 'normal')};
    font-size: ${(p) => (p.isOn ? '1.5rem' : '')};
    color: ${(p) => (p.isOn ? '' : 'grey')};
    cursor: pointer;
`;

// ----------
export const Acheivements = styled(Grid)``;
export const Acheivement = styled(Grid)``;

// ---------
export const AboutArea = styled(Grid)``;
export const CaseStudyArea = styled(Grid)``;
export const HowItWorks = styled(Grid)``;
export const ReadyToInvest = styled(Grid)``;
export const FromTheFounder = styled(Grid)``;

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
                gap: 1rem;
                place-items: center start;
                ${Heading} {
                    font-size: 1.5rem;
                }
                ${Line1} {
                    gap: 1rem;
                    grid-template-columns: auto 1fr;
                    ${Ticked} {
                        border-radius: 50%;
                        font-size: 1.5rem;
                        color: red;
                    }
                    ${Text} {
                    }
                }
                ${Button} {
                    background-color: #de4e36;
                    padding: 0.5rem;
                    width: auto;
                }
            }
            ${ThreeDotArea} {
                height: 3rem;
                grid-area: _ThreeDotArea;
                grid-template-columns: 1fr repeat(3, auto) 1fr;
                gap: 0.8rem;
                ${Dot} {
                    border-radius: 50%;
                    background-color: white;
                    border: 2px solid;
                    width: 1rem;
                    height: 1rem;
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
            grid-area: 1/6/1/8;
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
                /* border: 2px solid red; */
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
            /* border: 2px solid red; */
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
            grid-area: 1/4/2/7;
            font-size: 1.5rem;
            color: white;
            place-items: center start;
        }
        ${Line2} {
            color: rgba(255, 255, 255, 0.5);
            grid-area: 3/4/4/7;
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
            padding: 0.7rem;
        }
    }
    ${FromTheFounder} {
        grid-template-columns: repeat(24, 1fr);
        grid-template-rows: repeat(6, auto);
        padding: 3rem 1rem;
        ${Heading} {
            grid-area: 1/10/1/16;
            text-align: center;
            font-size: 1.5rem;
            text-transform: uppercase;
        }
        ${Filler} {
            grid-area: 2/10/2/16;
            width: 2rem;
            margin: 1rem 0;
        }
        ${Pic1} {
            grid-area: 4/2/4/3;
            height: 4rem;
            /* width: 4rem; */
            border-radius: 50%;
        }
        ${Line1} {
            grid-area: 4/3/4/8;
            place-items: center start;
            padding: 0 1rem;
            font-weight: bold;
        }
        ${Description1} {
            padding: 1rem 0;
            grid-area: 5/2/5/6;
        }
        ${Facebook} {
            grid-area: 6/2/6/3;
            font-size: 2rem;
            background-color: #3b589a;
            color: white;
            border-radius: 50%;
            padding: 0.3rem;
        }
        ${Twitter} {
            grid-area: 6/3/6/4;
            font-size: 2rem;
            background-color: #2fb1ed;
            color: white;
            border-radius: 50%;
            padding: 0.3rem;
        }
        ${Google} {
            grid-area: 6/4/6/5;
            font-size: 2rem;
            background-color: #cf412e;
            color: white;
            border-radius: 50%;
            padding: 0.3rem;
        }
        ${Blogg} {
            grid-area: 6/5/6/6;
            font-size: 2rem;
            color: white;
            background-color: #f1921a;
            border-radius: 50%;
            padding: 0.3rem;
        }
    }
`;
