import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useStateValue } from './StateProvider';

const Sidebar = ({ spotify }) => {
    const [{ playlists }, dispatch] = useStateValue();
    const openPlaylist = (id) => {
        console.log('onclick', id);
        spotify.getPlaylist(id).then(response => {
            dispatch({
                type: "SET_PLAYLIST_ITEMS",
                playlist: response
            })
        })
    }
    return (
        <div className='sidebar'>
            <img className='sidebar__logo'
                src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
                alt='Spotify Logo' />
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            <br />

            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr />

            {playlists.length > 0 && playlists.map(playlist => (
                <SidebarOption title={playlist.name} key={playlist.id} pid={playlist.id} onOpen={openPlaylist} />
            ))}
        </div>
    )
}

export default Sidebar