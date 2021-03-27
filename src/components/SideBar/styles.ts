import styled from 'styled-components';

import { GiBearHead } from 'react-icons/gi'
import { BsArrowRight } from "react-icons/bs";
export const Container = styled.div`
    >div{
      display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    width: 55px;
    height: 100%;
    background: var(--primary);

    position: fixed;
    top: 0;
    z-index: 3;  
    }
`;
export const Logo = styled(GiBearHead)`
    width: 45px;
    height: 45px;
    cursor: pointer;
`;
export const Scroll = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    margin-bottom: 150px;
    > div{
        width: 8px;
        height: 8px;
        border-radius: 50%;

        background: var(--white);
        margin-bottom: 10px;
        opacity: .5;
        cursor: pointer;
    }
`;
export const ScrollDown = styled.div`
    > div {
    display: flex;
    justify-content: start;
    align-items: center;

    width: 150px;
    height: 55px;

    transform: rotate(90deg);
    margin-bottom: 50px;
    cursor: pointer;
    }
`;
export const Arrow = styled(BsArrowRight)`
    width: 25px;
    height: 25px;
    margin-left: 10px;
    margin-top: 5px;
`;