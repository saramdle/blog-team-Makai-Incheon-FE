import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import Showdown from 'showdown';

const ContextContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
});

const dummy = `# 테스트 마크다운

이것은 더미 텍스트입니다

마크다운을 테스트하기 위해 만들었습니다.

- 노랑 ~ 노랑 ~
- 파랑 ~ 파랑~

\`코드는 이렇게 저렇게?\`

# 헤더1

## 헤더2

### 헤더3

*이탤릭*

**볼드**`;
const Viewer = () => {
    const params = useParams();
    const context = useRef<HTMLDivElement>();
    useEffect(() => {
        context.current.innerHTML = converter.makeHtml(dummy);
    }, []);
    return (
        <div>
            <hr/>
            <ContextContainer ref={context} />
        </div>
    );
};

export default Viewer;
