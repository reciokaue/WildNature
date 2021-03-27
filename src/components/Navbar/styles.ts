import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi'
export const Container = styled.div`
    > div{ 
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    
    position: fixed;
    top: 0;
    left: 55px;
    right: 0;
    height: 48px;
    padding: 0 50px;

    z-index: 3;
    >h1{
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 12px;
        cursor: pointer;
        
        >span{
            color: var(--primary);
        }
    }
    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white);
        
        > span + span{margin-left: 10px;}
        /* > span:hover{opacity: .7;transition: .3s;}     */
        > span{cursor: pointer;}
        > div{
            display: flex;
            justify-content: center;
            align-items: center;
            
            margin-left: 20px;
            &:hover > input, input:focus{
                transition: .3s;
                width: 150px;
                color: var(--black);
                background: var(--white);
            }
            > input{
                margin-right: 10px;
                border-radius: 100px;
                background: transparent;
                
                padding: 2px 10px;
                width:0;

                transition: .3s;
                display: flex;
            }
        }
    }
    }
`;
export const SearchIcon = styled(HiSearch)`
    width: 22px;
    height: 22px;
    color: var(--white);
    cursor: pointer;
    &:hover{
        opacity: .7;
        transition: .3s;

    }
`;