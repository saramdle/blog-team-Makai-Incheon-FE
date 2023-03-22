import React, { useState } from 'react';
import { Chip } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { Simulate } from 'react-dom/test-utils';
import click = Simulate.click;

interface ChipData {
    key: number;
    label: string;
}

interface TagListProps {
    deletable: boolean;
    clickable: boolean;
    dataObject: Array<ChipData>;
}

const TagList: React.FC<TagListProps> = (props: TagListProps) => {
    const { clickable, deletable, dataObject } = props;

    const [selected, setSelected] = useState<ChipData[]>([]);
    const [tags, setTags] = useState<ChipData[]>(dataObject);

    const handleDelete = (chipToDelete: ChipData) => () => {
        setTags(() => tags.filter((chip) => chip.key !== chipToDelete.key));
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
                        label={`#${data.label}`}
                        onClick={() => {
                            handleClick(data);
                        }}
                        variant={isInclude && clickable ? undefined : 'outlined'}
                        color={isInclude && clickable ? 'primary' : 'success'}
                        onDelete={deletable ? handleDelete(data) : undefined}
                    />
                );
            })}
        </div>
    );
};
export default TagList;
