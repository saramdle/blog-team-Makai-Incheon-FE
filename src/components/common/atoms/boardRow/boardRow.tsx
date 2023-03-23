import React from 'react';
import styled from '@emotion/styled';
import TagList from '../tagList/TagList.';

interface RowDataType {
    title: string;
    content: string;
    date: string;
}

const RowHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 10px 0;
`;

const RowContainer = styled.div`
    border-top: gray solid 1px;
    border-bottom: gray solid 1px;

    &:hover {
        cursor: pointer;
        background: linear-gradient(90deg, #def4ff 0%, rgba(222, 244, 255, 0) 100%);
    }
`;

const RowMargin = styled.div`
    width: inherit;
    margin: 0 10px 0 10px;
`;

const RowContentWrapper = styled.div`
    height: 120px;
`;

const RowContent = styled.div`
    width: 100%;
    margin-top: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-height: 24px;
    height: 72px;
`;
const BoardRow: React.FC<RowDataType> = (props: RowDataType) => {
    const { title, content, date } = props;
    return (
        <RowContainer>
            <RowMargin>
                <RowHeader>
                    <h5>{title}</h5>
                    <p>{date}</p>
                </RowHeader>
                <hr />
                <RowContentWrapper>
                    <TagList
                        deletable={false}
                        clickable={false}
                        dataObject={[
                            { key: 0, label: '태그' },
                            { key: 1, label: '그태' },
                            { key: 2, label: '그그태' },
                        ]}
                    />
                    <RowContent>{content}</RowContent>
                </RowContentWrapper>
            </RowMargin>
        </RowContainer>
    );
};

export default BoardRow;
