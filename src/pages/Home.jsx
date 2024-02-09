import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // we are creating function here because we cant use async in useEffect
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/videos/${type}`, {
          withCredentials: true,
        });
        setVideos(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
