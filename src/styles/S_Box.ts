import styled, { css } from 'styled-components';
import { t, e } from './incoming';
// import * as CSS from 'csstype';
// import * as sty from '../types/index';

export const Box = styled.div<t.box.BoxProps>`
    white-space: ${(p) => (p.prewrap ? 'pre-wrap' : p.nowrap ? 'nowrap' : '')};
    cursor: ${(p) => (p.pointer ? 'pointer' : '')};
    //font styling
    box-shadow: ${(p) => p.shadow ?? ''};
    color: ${(p) => p.clr ?? 'inherit'};
    ${(p) =>
        p.bgimg &&
        css`
            background-position: center;
            background-image: url(${p.bgimg});
        `};
    background-color: ${(p) => p.bgcl ?? ''};

    // positioning
    position: ${(p) => {
        if (p.absolute) return 'absolute';
        else if (p.relative) return 'relative';
        else if (p.fixed) return 'fixed';
        else return '';
    }};
    z-index: ${(p) => p.zIndex ?? ''};
    top: ${(p) => p.top ?? ''};
    bottom: ${(p) => p.bottom ?? ''};
    left: ${(p) => p.left ?? ''};
    right: ${(p) => p.right ?? ''};
    margin: ${(p) => p.mg ?? ''};
    text-align: ${(p) => p.text ?? ''};
    opacity: ${(p) => p.opacity ?? ''};
    // dimensions
    height: ${(p) => p.ht ?? 'auto'};
    width: ${(p) => p.wd ?? '100%'};
    padding: ${(p) => p.pd ?? ''};
    border: ${(p) => (p.bd ? `2px solid ${p.bd}` : '')};
    border-radius: ${(p) => p.radius ?? ''};
    font-family: ${(p) => p.font ?? 'var(--inter)'};
    font-weight: ${(p) => (p.bold ? 'bold' : '')};
    font-size: ${(p) => {
        if (p.large) {
            return '1.4rem';
        } else if (p.small) {
            return '0.9rem';
        } else if (p.smallest) {
            return '0.7rem';
        } else if (p.larger) {
            return '1.8rem';
        } else if (p.largest) {
            return '2.2rem';
        } else return '';
    }};
    //flex properties
    flex-direction: ${(p) => (p.row ? 'row' : p.column ? 'column' : null)};
    justify-content: ${(p) => {
        if (p.start) {
            return 'flex-start';
        } else if (p.last) {
            return 'flex-end';
        } else if (p.center) {
            return 'center';
        } else if (p.between) {
            return 'space-between';
        }
    }};
    /* align-items: stretch; */
    align-items: ${(p) => (p.stretch ? 'stretch' : p.align ?? '')};
    flex: ${(p) => (p.fillup ? '1' : '')};
    // grid properties
    gap: ${(p) => p.gap ?? ''};
    display: ${(p) => {
        if (p.off) {
            return 'none';
        } else if (p.grid) {
            return 'grid';
        } else if (p.flex) {
            return 'flex';
        }
    }};
    grid-template-columns: ${(p) => p.columns ?? ''};
    grid-template-rows: ${(p) => p.rows ?? ''};
    overflow: ${(p) => p.flow ?? ''};
    place-items: ${(p) => {
        switch (p.aim) {
            case 'center':
                return 'center';
            case 'horizontal':
                return 'center start';
            case 'horizontal-end':
                return 'center end';
            case 'vertical':
                return 'start center';
            default:
                break;
        }
    }};
    :hover {
        background-color: ${(p) => p.hoverBackground ?? ''};
        color: ${(p) => p.hoverColor ?? ''};
    }
    @media ${e.device.mobileL} {
        height: ${(p) => p.ht_mob ?? ''};
        width: ${(p) => p.wd_mob ?? '100%'};
        padding: ${(p) => p.pd_mob ?? ''};
        bottom: ${(p) => p.bottom_mob ?? ''};
    }
`;

export const Grid = styled(Box)`
    display: ${(p) => {
        if (p.none) {
            return 'none';
        } else {
            return 'grid';
        }
    }};
    place-items: ${(p) => {
        switch (p.aim) {
            case 'horizontal':
                return 'center start';
            case 'horizontal-end':
                return 'center end';
            case 'vertical':
                return 'start center';
            default:
                return 'center';
        }
    }};
`;
