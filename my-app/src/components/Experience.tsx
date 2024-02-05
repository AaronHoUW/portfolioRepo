import styled from "styled-components";

export const Container = styled.div`
    background-color: #EAEAEA;
    border-radius: 10px;
    width: 1500px;
    height: fit-content;
    margin: 25px auto 25px;
    padding: 10px;
    position: relative;
    max-height: 525px
`;

export const Info = styled.div`
    display: flex;
    overflow: hidden;
    background-color: #262227;
    border-radius: 10px;
    flex-direction: row;
`;

export const CompanyImage =  styled.img`
    height: 200px;
    width: 200px;
    margin: 30px 0 0 30px;
`

export const TextContainer = styled.div`
    width: 100%;
    margin: 2rem 2rem; 
    font-size: 20px;
    color: white;
    top: 10%
`

export const Header = styled.h2`
    font-size: 28px;
    font-weight: bold;
    margin-block: 0 0.5rem;
`

export const Date = styled.p`
    font-size: 18px;
    margin-block-start: 0;
    // color: #EAEAEA;
    color: rgb(169, 169, 169);;
`

export const BulletPoint = styled.li`
    padding: 0.5rem 0;
    line-height: 1.3;
`

export const ListContainer = styled.ul`
    margin: 0
`

export const Text = styled.p`
    margin-block: 0;
`