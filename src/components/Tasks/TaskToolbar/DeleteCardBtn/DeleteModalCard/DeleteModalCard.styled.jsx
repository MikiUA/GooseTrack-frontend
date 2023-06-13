import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-height: 300px;
`

export const Title = styled.h1`
    margin: 0;
    text-align: center;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #3E85F3;
`

export const ContainerBtn = styled.div`
    display: flex;
    gap: 14px;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px 8px 20px;
    border: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;
    transition: linear 0.3s;
`

export const DeleteBtn = styled(Button)`
    color: #ffffff;
    background-color: #3e85f3;

    &:hover {
        box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .6),
            23px 0 20px -23px rgba(0, 0, 0, .6),
            inset 0 0 40px rgba(0, 0, 0, .1);
    }
`

export const CancelBtn = styled(Button)`
    color: #111111;
    background-color: #efefef;
    border: 1px solid #3e85f3;

    &:hover {
        box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .6),
            23px 0 20px -23px rgba(0, 0, 0, .6),
            inset 0 0 40px rgba(0, 0, 0, .1);   
    }
`
