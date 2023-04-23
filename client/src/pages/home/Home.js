import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Featured from "../../components/featured/Featured";
import List from '../../components/list/List';
import "./home.scss"

import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDdkMmNkMmJhODZlOTFiY2QzY2JhYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjIyNTk2NywiZXhwIjoxNjgyNjU3OTY3fQ.6MhAbsqVnG4c2Gyknmq_2rRAy5k_0VDypH1FNhF6-tM "

          },
        }
        );
        setLists(res.data);
      } catch (err) { 
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className='home'>

      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (<List list={list} />))}




    </div>
  )
}

export default Home
