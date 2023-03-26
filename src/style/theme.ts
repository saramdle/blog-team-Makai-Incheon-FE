import { Theme } from '@emotion/react';

export const size = {
    largest: '75em',
    large: '56.25em',
    medium: '37.5em',
    small: '31.25em',
    smallest: '25em',
};

export const globalTheme :Theme = {
    mainColor: '#5BC6F3',
    mq: {
        laptop: `@media only screen and (min-width: ${size.largest})`,
        tablet: `@media only screen and (min-width: ${size.large})`,
        mobile: `@media only screen and (min-width: ${size.small})`,
        fold: `@media only screen and (min-width: ${size.smallest})`,
    }
};