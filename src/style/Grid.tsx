import styled from '@emotion/styled';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(300px, 2fr));
    row-gap: 25px;
    column-gap: 20px;
    margin: 40px 0 40px 0;
`;

export default Grid;
