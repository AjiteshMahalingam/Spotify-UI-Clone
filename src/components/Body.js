import React from 'react'
import './Body.css';
import Header from './Header';
import SongRow from './SongRow';
import { useStateValue } from './StateProvider';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Body = ({ spotify }) => {
    const [{ currentPlaylist }, dispatch] = useStateValue();
    return (
        <div className='body'>
            <Header spotify={spotify} />
            <div className="body__info">
                <img src={currentPlaylist?.images[0].url} alt="" />
                <div className="body__info-text">
                    <strong>PLAYLIST</strong>
                    <h2>{currentPlaylist?.name}</h2>
                    <p>{currentPlaylist?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className='body__shuffle' />
                    <FavoriteIcon fontSize='large' />
                    <MoreHorizIcon />
                </div>
                {currentPlaylist?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body