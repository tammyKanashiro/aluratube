import config from '../config.json';
import styled from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';
import Favourites from '../src/components/Favourites';

const HomePage = () => {
    return (
        <>
            <CSSReset />
            <div>
                <Menu />
                <Header />
                <Timeline playlist={config.playlist} />
                <Favourites favourites={config.favourites} />
            </div>
        </>
    )
}

export default HomePage

const StyledHeader = styled.div`
    margin-top: 54px;

    .banner {
        height: 150px;
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

const Timeline = props => {
    const { playlist } = props;
    const playlistNames = Object.keys(playlist);

    return (
        <StyledTimeline>
            {playlistNames && playlistNames.map(playlistName => {
                const videos = playlist[playlistName];

                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>

                        <div>
                            {videos.map((video, index) => {
                                return (
                                    <a key={index} href={video.url}>
                                        <img src={video.thumb} alt={video.title} />
                                        <span>{video.title}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </section>
                );
            })}
        </StyledTimeline>
    )
}