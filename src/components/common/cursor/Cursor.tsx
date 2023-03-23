import React, { MutableRefObject, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const CursorStyle = styled.div`
    pointer-events: none;
    display: inline-block;
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    z-index: 999;
    //transition: 0.s ease;
    background: #fff;
    mix-blend-mode: difference;
    transition: transform 0.1s ease-out;
`;

const Cursor = () => {
    const dot = useRef() as MutableRefObject<HTMLDivElement>;
    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(false);

    const endX = useRef(window.innerWidth / 2);
    const endY = useRef(window.innerHeight / 2);

    const toggleCursorVisibillity = () => {
        if (cursorVisible.current) {
            dot.current.style.opacity = '1';
        } else {
            dot.current.style.opacity = '0';
        }
    };

    const toggleCursorSize = () => {
        if (cursorEnlarged.current) {
            dot.current.style.transform = 'translate(-50%, calc(-50% - 100px)) scale(1)';
        } else {
            dot.current.style.transform = 'translate(-50%,  calc(-50% - 100px)) scale(3)';
        }
    };

    const mouseOverEvent = () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
    };

    const mouseOutEvent = () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
    };

    const mouseEnterEvent = () => {
        cursorVisible.current = false;
        toggleCursorVisibillity();
    };

    const mouseLeaveEvent = () => {
        cursorVisible.current = true;
    };

    // const animateDotOutline = () => {
    //     x.current += endX.current - x.current;
    //     y.current += endY.current - y.current;
    // };

    const mouseMoveEvent = (e: MouseEvent) => {
        cursorVisible.current = true;
        toggleCursorVisibillity();

        endX.current = e.pageX;
        endY.current = e.pageY;

        dot.current.style.left = `${endX.current}px`;
        dot.current.style.top = `${endY.current}px`;
    };

    useEffect(() => {
        document.addEventListener('mousedown', mouseOverEvent);
        document.addEventListener('mouseup', mouseOutEvent);
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseenter', mouseEnterEvent);
        document.addEventListener('mouseleave', mouseLeaveEvent);

        return () => {
            document.removeEventListener('mousedown', mouseOverEvent);
            document.removeEventListener('mouseup', mouseOutEvent);
            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseenter', mouseEnterEvent);
            document.removeEventListener('mouseleave', mouseLeaveEvent);
        };
    });
    return (
        // <>
        <CursorStyle ref={dot} />
        // </>
    );
};

export default Cursor;
