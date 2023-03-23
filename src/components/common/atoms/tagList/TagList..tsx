import React, { useState } from 'react';
import { Chip } from '@mui/material';
import type { ChipDataType, TagListProps } from 'types/TagTypes';
import styled from '@emotion/styled';

const TagContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const TagList: React.FC<TagListProps> = (props: TagListProps) => {
    const { clickable, deletable, dataObject } = props;

    const [selected, setSelected] = useState<ChipDataType[]>([]);
    const [tags, setTags] = useState<ChipDataType[]>(dataObject);

    const handleDelete = (chipToDelete: ChipDataType) => () => {
        setTags(() => tags.filter((chip) => chip.key !== chipToDelete.key));
    };

    const handleClick = (chip: ChipDataType) => {
        if (selected.includes(chip)) {
            setSelected(() => selected.filter((data) => data.key !== chip.key));
        } else {
            setSelected([chip, ...selected]);
        }
    };

    return (
        <TagContainer>
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
        </TagContainer>
    );
};
export default TagList;
