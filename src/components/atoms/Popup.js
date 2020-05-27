import React from 'react';
import styled from 'styled-components';

export default function Popup(props) {
    const {
        children
    } = props;

    return (
        <>
            <Popupfiled>
                <PopupInner>
                    {children}
                </PopupInner>
            </Popupfiled>
        </>
    )
}

const Popupfiled = styled.div`
    position: fixed;
    z-index: 1200;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    over-flow-y: auto;
    over-flow-x: hidden;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
`

const PopupInner = styled.div`
    position: absolute;
    left: 5%;
    right: 5%;
    top: 10%;
    bottom: 5%;
    over-flow-y: auto;
    over-flow-x: hidden;
    background: white;
    max-width: 700px;
    border-radius: 20px;
`

