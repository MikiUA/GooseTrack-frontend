import styled from 'styled-components';


export const Item = styled.li`
    padding: 14px 12px 18px 15px;
    margin-bottom: 14px;
    margin-right: 6px;
    border-radius: 8px;
    border: 1px solid rgba(220, 227, 229, 0.8);
    background-color: #F7F6F9;

    @media screen and (min-width: 768px) {
        margin-bottom: 18px;
    }
`;

export const Title = styled.h3`
    /* width: 100%; */
    padding: 0;
    margin: 0 0 28px 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media screen and (min-width: 768px) {
        margin: 0 0 32px 0;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const ContainerInfo = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const ContainerUser = styled.div`
    display: flex;
    margin-right: 8px;
    border: 1.8px solid #3E85F3;
    border-radius: 50%;
    object-fit: cover;
`;

export const Priority = styled.span`
    color: #F7F6F9;
    border-radius: 4px;
    font-weight: 600;
    font-size: 10px;
    line-height: 1.2;
    padding: 4px 12px;
    background-color: ${props => props.backgroundColor};
`;

export const Img = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`
