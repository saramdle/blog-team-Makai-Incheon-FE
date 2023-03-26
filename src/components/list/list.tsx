import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Pagination } from '@mui/material';
import { useNavigate } from 'react-router';
import BoardRow from '../common/atoms/boardRow/boardRow';

const SubTitle = styled.h4`
    margin: 0 0 15px 0;
`;
const List = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const onPageChange = (val: number) => {
        setPage(val);
    };
    const gotoWrite = () => {
        navigate('/edit');
    };
    return (
        <div style={{ maxWidth: '1200px', margin: '100px auto' }}>
            <Button variant="outlined" onClick={gotoWrite}>
                글쓰기
            </Button>
            <SubTitle>게시글</SubTitle>
            <div>
                {Array(10)
                    .fill(0)
                    .map((t, i: number) => (
                        <BoardRow
                            // eslint-disable-next-line react/no-array-index-key
                            key={i + 1}
                            uid={i + 1}
                            title={`더미${i + (page - 1) * 10}`}
                            content="더미더미"
                            date="2023-02-23"
                        />
                    ))}
            </div>
            <div>
                <Pagination
                    count={10}
                    defaultPage={1}
                    onChange={(e, val) => {
                        onPageChange(val);
                    }}
                />
            </div>
        </div>
    );
};

export default List;
