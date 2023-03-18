import React, { useState } from 'react';
import { Chip } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

interface ChipData {
    key: number;
    label: string;
}

interface TagListProps {
    deletable: boolean;
    dataObject: Array<ChipData>;
}

const TagList: React.FC<TagListProps> = (props: TagListProps) => {
    const { deletable, dataObject } = props;

    const [selected, setSelected] = useState<ChipData[]>([]);
    const [tags, setTags] = useState<ChipData[]>([
        { key: 0, label: 'a' },
        { key: 1, label: 'b' },
        { key: 2, label: 'c' },
    ]);

    const handleDelete = (chipToDelete: ChipData) => () => {
        setTags(() => tags.filter((chip) => chip.key !== chipToDelete.key));
        console.log(chipToDelete, 'delete');
    };

    const handleClick = (chip: ChipData) => {
        if (selected.includes(chip)) {
            setSelected(() => selected.filter((data) => data.key !== chip.key));
        } else {
            setSelected([chip, ...selected]);
        }
    };

    return (
        <div>
            {tags.map((data) => {
                const isInclude = selected.includes(data);
                return (
                    <Chip
                        key={data.key}
                        label={data.label}
                        onClick={() => {
                            handleClick(data);
                        }}
                        variant={isInclude ? undefined : 'outlined'}
                        color={isInclude ? 'primary' : 'success'}
                        onDelete={deletable ? handleDelete(data) : undefined}
                    />
                );
            })}
        </div>
    );
};
export default TagList;
