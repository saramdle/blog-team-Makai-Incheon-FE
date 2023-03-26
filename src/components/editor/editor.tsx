import * as React from 'react';
import ReactMde, { Suggestion, SaveImageHandler } from 'react-mde';
import Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

const EditorContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const WriterFooter = styled.div`
    width: 100vw;
    height: 35px;
    margin: 10px;
    position: fixed;
    display: flex;
    bottom: 0;
    right: 0;
    gap: 10px;
    justify-content: right;
`;
const loadSuggestions = async (text: string) => {
    return new Promise<Suggestion[]>((accept, reject) => {
        setTimeout(() => {
            const suggestions: Suggestion[] = [
                {
                    preview: 'Andre',
                    value: '@andre',
                },
                {
                    preview: 'Angela',
                    value: '@angela',
                },
                {
                    preview: 'David',
                    value: '@david',
                },
                {
                    preview: 'Louise',
                    value: '@louise',
                },
            ].filter((i) => i.preview.toLowerCase().includes(text.toLowerCase()));
            accept(suggestions);
        }, 250);
    });
};

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
});

const Editor = () => {
    const [value, setValue] = React.useState('**이곳에 텍스트를 입력해주세요.**');
    const [selectedTab, setSelectedTab] = React.useState<'write' | 'preview'>('write');

    const save: SaveImageHandler = async function* (data: ArrayBuffer) {
        // Promise that waits for "time" milliseconds
        const wait = function (time: number) {
            return new Promise<void>((a, r) => {
                setTimeout(() => a(), time);
            });
        };

        // Upload "data" to your server
        // Use XMLHttpRequest.send to send a FormData object containing
        // "data"
        // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest

        await wait(2000);
        // yields the URL that should be inserted in the markdown
        yield 'https://picsum.photos/300';
        await wait(2000);

        // returns true meaning that the save was successful
        return true;
    };
    const onSumbitClick = () => {
        console.log(value);
    }
    return (
        <>
            <EditorContainer>
                <ReactMde
                    value={value}
                    onChange={setValue}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}
                    loadSuggestions={loadSuggestions}
                    childProps={{
                        writeButton: {
                            tabIndex: -1,
                        },
                    }}
                />
            </EditorContainer>
            <WriterFooter>
                <Button variant="outlined">취소</Button>
                <Button variant="contained" onClick={onSumbitClick}>글쓰기</Button>
            </WriterFooter>
        </>
    );
};

export default Editor;
