import type { ChipDataType } from './TagTypes';

export interface CardPropType {
    uid: number;
    tagDataObject: Array<ChipDataType>;
    title: string;
    content: string;
    img: string | null | undefined;
}
