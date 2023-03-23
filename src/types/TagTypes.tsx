export interface ChipDataType {
    key: number;
    label: string;
}

export interface TagListProps {
    deletable: boolean;
    dataObject: Array<ChipDataType>;
}
