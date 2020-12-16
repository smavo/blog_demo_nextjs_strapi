import React from 'react';
import styled from '@emotion/styled';

const Grid = styled.div`

    row-gap:20px;
    column-gap:10px;


    h3 {
        text-align:left;
        margin:10px 10px;
        font-family: 'Roboto', sans-serif;
        font-weight:bold;
        font-size:30px
    }

    p {
        text-align:justify;
        margin: 0 10px;
        font-family:Roboto;
    }

    @media (min-width: 400px){
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    }

    @media (min-width:600px){
        grid-template-columns: repeat(2, 1fr) ;
    }

    @media (min-width: 900px){
        grid-template-columns: repeat(3, 1fr) ;
    }

    @media (min-width: 1200){
        grid-template-columns: repeat(3, 1fr) ;
    }

`;

const Card = styled.div`
    /*border: 1px solid #B5B5B5;*/
    background-color: #eef0ee;
    
    padding:10px 10px 20px 10px;

    img{
        max-width: 100%
    }
`

const usePosts = (blogs) => {

    const API = process.env.NEXT_PUBLIC_API_REST;


    console.log(blogs)

    const Posts = () => (
        <Grid >
            {
                blogs.map(blog => (
                    <Card key={blog.id} >

                        <img src={`${API}${blog.imagen[0].url}`} alt={blog.titulo} />
                        <div>
                            <h3>{blog.titulo}</h3>
                            <p>{blog.descripcion}</p>
                        </div>
                    </Card>
                ))
            }
        </Grid>
    )
    return {
        Posts
    }
}

export default usePosts;