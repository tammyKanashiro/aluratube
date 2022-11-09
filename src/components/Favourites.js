import styled from "styled-components";

const StyledFavourites = styled.div`
    flex: 1;
    width: 100%;
    padding: 16px;
    overflow: hidden;

    h2 {
        font-size: 16px;
    }

    .favourites-wrapper {
        display: flex;
    }

    .favourite-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 16px 8px;
        cursor: pointer;
    }

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
    }

    .favourite-channel {
        color: #000;
        font-size: 14px;
        margin-top: 8px;
    }
`;

const Favourites = props => {
    const { favourites } = props;

    return (
        <StyledFavourites>
            <h2>AluraTuber Favourites</h2>
            <div className="favourites-wrapper">
                {favourites.length > 0 && favourites.map((favourite, index) => {
                    return (
                        <a className="favourite-card" key={index} href={favourite.url}>
                            <img src={favourite.photo} alt={favourite.channel} />
                            <p className="favourite-channel">{favourite.channel}</p>
                        </a>
                    );
                })}
            </div>
        </StyledFavourites>
    );
}

export default Favourites;