import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  // const trailer = "https://vod-progressive.akamaized.net/exp=1674432115~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=275fbbca5fda2456e41babb0a73f413239179c1e3dcb3eb0e1fc33c090403340/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4"
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDdkMmNkMmJhODZlOTFiY2QzY2JhYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjIyNTk2NywiZXhwIjoxNjgyNjU3OTY3fQ.6MhAbsqVnG4c2Gyknmq_2rRAy5k_0VDypH1FNhF6-tM"

          },
        });
        setMovie(res.data); 
      } catch (err) { 
        console.log(err);
      }
    };
    getMovie()
  }, [item]);
   
  

  return (
    <Link to="/Watch" state={{ movie }}>

      
      <div className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} >
        <img src={movie.img} alt=""/>
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
                <ThumbUpOutlinedIcon className="icon" />
                <ThumbDownOffAltOutlinedIcon className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>

              </div>
              <div className="desc">
                {movie.desc}
              </div>
              <div className="genre">
                {movie.genre}
              </div>
            </div>
          </>
        )}

      </div>
    </Link>
  );
}

export default ListItem

