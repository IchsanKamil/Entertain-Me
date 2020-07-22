import React, { useState, useEffect } from 'react';
import { Form, Col, Button, Container } from 'react-bootstrap';
import { UPDATE_MOVIE, GET_MOVIE, GET_MOVIES } from '../query/Movie';
import { useMutation, useQuery } from '@apollo/client';
import { useParams, useHistory } from 'react-router-dom';


export default () => {
  const { id } = useParams()
  const { loading, error, data: movie } = useQuery(GET_MOVIE, {
    variables: { movieId: id }
  })
  // console.log(movie, '<<<<');
  

  const [dataMovie, setDataMovie] = useState({})
  const [updateMovie, { data }] = useMutation(UPDATE_MOVIE, {
    refetchQueries: [{ query: GET_MOVIES }]
  })
  const history = useHistory()

  useEffect(() => {
    movie && setDataMovie({
      title: movie.movie.title,
      overview: movie.movie.overview,
      poster_path: movie.movie.poster_path,
      popularity: movie.movie.popularity,
      tags: movie.movie.tags
    })
  }, [movie])

  if (loading) {
    return <p>Loading ....</p>
  }

  if (error) {
    return <p>Error ....</p>
  }

  const onChange = (e) => {
    let { name, value } = e.target
    const newMovie = { ...dataMovie, [name]: value }
    setDataMovie(newMovie)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    updateMovie({
      variables: {
        movieId: id,
        editMovie: { ...dataMovie, popularity: +dataMovie.popularity }
      }
    })
    history.push('/')
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formGridTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={onChange} value={dataMovie.title} name="title" type="text" placeholder="title movie" />
        </Form.Group>

        <Form.Group controlId="formGridOverview">
          <Form.Label>Overview</Form.Label>
          <Form.Control onChange={onChange} value={dataMovie.overview} name="overview" placeholder="overview movie" />
        </Form.Group>

        <Form.Group controlId="formGridPosterPath">
          <Form.Label>Poster Path</Form.Label>
          <Form.Control onChange={onChange} value={dataMovie.poster_path} name="poster_path" placeholder="http://poster-path.com" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPopularity">
            <Form.Label>Popularity</Form.Label>
            <Form.Control onChange={onChange} value={dataMovie.popularity} name="popularity" type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTags">
            <Form.Label>Tags</Form.Label>
            <Form.Control onChange={onChange} value={dataMovie.tags} name="tags" placeholder="tag1 tag2"/>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}