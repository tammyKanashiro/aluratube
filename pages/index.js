import config from '../config.json';
import styled from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';

const HomePage = () => {
    return (
        <>
            <CSSReset />
            <div>
                <Menu />
                <Header />
                <Timeline playlist={config.playlist} />
            </div>
        </>
    )
}

export default HomePage

const StyledHeader = styled.div`
    img {
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
            {/* <img src="banner" alt="Banner" /> */}
            <section className='userInfo'>
                <img src={`https://github.com/${config.github}.png`} alt="My photo" />
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
                            {videos.map(video => {
                                return (
                                    <a href={video.url}>
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