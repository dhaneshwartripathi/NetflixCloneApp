import React, { useEffect, useState } from 'react'
import "./featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from 'axios';

function Featured({ type,setGenre }) {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`,{
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDdkMmNkMmJhODZlOTFiY2QzY2JhYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjIyNTk2NywiZXhwIjoxNjgyNjU3OTY3fQ.6MhAbsqVnG4c2Gyknmq_2rRAy5k_0VDypH1FNhF6-tM"

                    },
                });
                setContent(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomContent();
    }, [type]);
    console.log(content);
    return (

        <div className='featured'>
            {type && (
                <div className='category'>
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name='genre' id='genre' onChange={e=>setGenre(e.target.value)}>
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantacy">Fantacy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentry">Documentry</option>
                    </select>
                </div>
            )}
            <img src={content.img} alt='...' />
            <div className='info'>
                <img src={content.imgTitle} alt='' />
                <span className='desc'>{content.desc}</span>
                <div className='buttons'>
                    <button className='play'>
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className='more'>
                        <InfoOutlinedIcon />
                        <span>Info</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Featured;
