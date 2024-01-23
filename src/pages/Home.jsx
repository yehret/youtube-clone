import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // we are creating function here because we cant use async in useEffect
    const fetchVideos = async () => {
      try {
        const res = await axios.get('http://localhost:8800/api/videos/random');
        setVideos(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchVideos();
  }, []);

  return (
    <Container>
      {videos.map((video) => (
        <Card />
      ))}
    </Container>
  );
};

export default Home;
