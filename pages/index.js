import { useState } from 'react';
import styled from 'styled-components';

import config from '../config.json';

import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline';
import Favourites from '../src/components/Favourites';


const HomePage = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <>
            <div>
                <Menu setSearchValue={setSearchValue} />
                <Header />
                <Timeline searchValue={searchValue} playlist={config.playlist} />
                <Favourites favourites={config.favourites} />
            </div>
        </>
    )
}

export default HomePage

const StyledHeader = styled.div`
    margin-top: 50px;
    background-color: ${({ theme }) => theme.backgroundLevel1};

    .banner {
        height: 230px;
        background-image: url(${config.bannerUrl});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        img {
            height: fit-content;
        }
    }

    .userPhoto {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .userInfo {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px;
    }
`;
const Header = () => {
    return (
        <StyledHeader>
            <section className='banner' />
            <section className='userInfo'>
                <img className='userPhoto' src={`https://github.com/${config.github}.png`} alt="My photo" />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}