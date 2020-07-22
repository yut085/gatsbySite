import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button'

export default function Popup(props) {
    const {
        children
    } = props;

    return (
        <>
            <Popupfiled>
                <PopupInner>
                    {children}
                    <Position>
                        <Margin>
                            <Button
                                disabled={false}
                                style={{ paddingRight: "8px", fontWeight: "bold" }}
                                variant="outlined"
                                onClick={() => {

                                }}>
                                閉じる
                            </Button>
                        </Margin>
                        <Margin>
                            <Button
                                style={{ fontWeight: "bold", backgroundColor: `#ffff` }}
                                disabled={false}
                                variant="outlined"
                                onClick={() => {

                                }}
                            >入金</Button>
                        </Margin>
                    </Position>
                </PopupInner>
            </Popupfiled>
        </>
    )
}

const Position = styled.div`
    display: flex;
    margin-right; 32px;
    justify-content: flex-end;
    margin-bottom: 50px;
`

const Margin = styled.div`
    margin left: 10px;
    display: inline-block;
`

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