import React from 'react';
import styled from 'styled-components';

const Main = () => {

    return (
        <Wrap>
            <p>Hello World !</p>
        </Wrap>
    );
};

export default Main;

const Wrap = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    width : 100%;
    height: 100vh;
`;