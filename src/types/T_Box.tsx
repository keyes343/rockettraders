import { e } from '../styles/incoming';

export type dev_style_Props = {
    off?: boolean;
    ht?: string; // height
    ht_mob?: string; // height
    wd?: string; // width
    wd_mob?: string; // width
    bgimg?: string; //
    gradient?: string;
    cl?: string; // color
    pd?: string; // padding
    pd_mob?: string; // padding
    bd?: string; // border
    bd_mob?: string; // border
    dp?: 'grid' | 'flex' | 'block' | 'none';
    mg?: string; // margin
    clr?: e.clr | string;
    left?: string;
    shadow?: string;
    zIndex?: number;
    align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
    stretch?: boolean;
    right?: string;
    top?: string;
    radius?: string;
    font?: string;
    flow?: 'visible' | 'hidden' | 'auto';
    bottom?: string;
    bottom_mob?: string;
    absolute?: boolean;
    relative?: boolean;
    fixed?: boolean;
    column?: boolean;
    columns?: string;
    row?: boolean;
    rows?: string;
    gap?: string;
    red?: boolean;
    blue?: string;
    green?: string;
    orange?: string;
    cyan?: string;
    bold?: boolean;
    small?: boolean;
    smallest?: boolean;
    large?: boolean;
    larger?: boolean;
    largest?: boolean;
    pointer?: boolean;
};
export interface BoxProps extends dev_style_Props {
    aim?: 'center' | 'horizontal' | 'vertical' | 'horizontal-end';
    grid?: boolean;
    none?: boolean;
    flex?: boolean;
    gap?: string;
    start?: boolean; // flex-start
    last?: boolean; // flex-end
    center?: boolean;
    between?: boolean; // space-between
    around?: boolean; // space-around
    fillup?: boolean; // flex grow stuff
    hoverColor?: string;
    hoverBackground?: string;
    bgcl?: string;
    text?: 'left' | 'right' | 'center';
    opacity?: string;
    prewrap?: boolean;
    nowrap?: boolean;
    area?: string;
}
