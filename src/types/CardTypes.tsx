import type { ChipDataType } from './TagTypes';

export interface CardPropType {
    tagDataObject: Array<ChipDataType>;
    title: string;
    content: string;
    img: string | null | undefined;
}
