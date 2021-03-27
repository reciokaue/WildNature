import styled from 'styled-components';
import { BsPlayFill } from 'react-icons/bs'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;

    width: 100vw;
    height: 100vh;
    padding: 48px 0 0 102px;

    position: relative;
    z-index: 1;
    background-image: url("https://images.unsplash.com/photo-1596393415484-b217915718af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80");
    background-size: 100%;
    background-position: center top;
    background-repeat: no-repeat;

    > img{
        position: absolute;
        top: 0;
        left: 0; 
        width: 100%;
    }
`;
export const Presentation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    margin-top: 150px;
    width: 240px;

    > h2{
        font-size: 14px;
        color: var(--white);
        text-transform: uppercase;
    }
    > h1{
        font-size: 50px;
        color: var(--white);
        text-transform: uppercase;
        margin-bottom: 10px;
        font-weight: bold;
        white-space: 200px;
        letter-spacing: 2px;
        line-height: 50px;
    }
    > p{
        font-size: 14px;
        color: var(--white);
        margin-bottom: 24px;
    }
    > div{
        display: flex;
        align-items: center;
        font-size: 14px;
        > span {
            margin-left: 47px;
        }
        > button{
            background: var(--primary);
            border-radius: 50%;
            margin-right: 10px;

            width: 40px;
            height: 40px;

            display: flex;
            justify-content: center;
            align-items: center;

            flex-shrink: 0;
            transition: .3s;
            cursor: pointer;

            &:hover{
                opacity: .5;
                transition: .3s;
            }
        }
    }
    position: relative;
    /* animation-name: Presentation;
    animation-duration: 1s;  
    animation-fill-mode: forwards;
    opacity: 0; */

    /* @keyframes Presentation {
    from {top: -100px;}
    to {top: 0px; opacity: 1;}
    } */
`;
export const PlayIcon = styled(BsPlayFill)`
    width: 15px;
    height: 15px;
    fill: var(--white);
    cursor: pointer;
`;
export const SpecieCharacteristics = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    position: absolute;
    bottom: 25px;
    

    > div+div{margin-left: 57px;}
    > div:last-child div{
        display: flex;
        flex-direction: row;
    }
    > div{
        > img{
            position: absolute;
            width: 121px;
            height: auto;
        }
        >h1{
            font-size: 13px;
            color: var(--primary);
            margin-bottom: 8px;
        }
        > p{
            margin-bottom: 32px;
        }
    }
`;
export const Point = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid var(--white);
    width: 22px;
    height: 22px;
    border-radius: 50%;

    font-size: 12px;
    padding-bottom: 2px;

    &+&{
        margin-left: 6px;
    }
    &.marked{
        background: var(--primary);
        border: 1px solid var(--primary);
    }
`;
export const Lections = styled.div`
    display: flex;

    position: absolute;
    right: 0;
    bottom: 26px;

    >div:first-child{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        width: 100px;
        >h1{
            font-size: 13px;
            color: var(--primary);
            margin-bottom: 8px;
        }
        > p{
            font-size: 13px;
            margin-bottom: 17px;
        }
        >svg{
            cursor: pointer;
        }
    }

    > div:last-child{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 205px;
        height: 150px;
        margin-left: 70px;

        background-color: var(--black);
        opacity: .7;
        >svg{
            width: 25px;
            height: 25px;
        }
    }
`;
