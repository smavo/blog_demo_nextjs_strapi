import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import usePosts from '../hooks/useBlog';
import axios from 'axios';
import styled from '@emotion/styled';


const Contenedor = styled.div`
    margin: 0 auto;
    width: 95%;
    max-width:1200px;
`;

const Home = () => {

  const API = process.env.NEXT_PUBLIC_API_REST;

  const [blogs, guardarPosts] = useState([]);
  const { Posts } = usePosts(blogs);

  // Llamado a la API
  useEffect(() => {
    const obtenerPosts = async () => {
      const resul = await axios.get(`${API}/blogs`)
      // console.log(resul.data)
      guardarPosts(resul.data)
    }
    obtenerPosts();
  }, []);


  return (
    <Contenedor>
      <Head>
        <title>Strapi + Next.JS</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,700;1,400;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
          integrity="sha512-Yu3tDzlofwBycOX5qb6K4tGJKGD72LA/9ckyioo8plGOdLwIeESQgo+KY4M+gvBJvDguqYeweLVTIn+S/9ZC/Q=="
          crossorigin="anonymous"
        />
      </Head>

      <h2> Post de Ejemplo</h2>
      <Posts />
    </Contenedor>

  )

}

export default Home;
