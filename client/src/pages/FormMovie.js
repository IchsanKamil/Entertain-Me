import React, { useState } from 'react';
import { Form, Col, Button, Container } from 'react-bootstrap';
import { ADD_MOVIE } from '../query/Movie';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

export default () => {
  const [movieInput, setMovieInput] = useState({
    title: '',
    overview: '',
    poster_path: '',
    popularity: 0,
    tags: []
  })
  const [addMovie, { data }] = useMutation(ADD_MOVIE)
  const history = useHistory()

  const onChange = (e) => {
    let { name, value } = e.target
    const newMovie = { ...movieInput, [name]: value }
    setMovieInput(newMovie)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addMovie({
      variables: {
        newMovie: {
          title: movieInput.title,
          overview: movieInput.overview,
          poster_path: movieInput.poster_path,
          popularity: +movieInput.popularity,
          tags: movieInput.tags
        }
      }
    })
    history.push('/')
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formGridTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={onChange} value={movieInput.title} name="title" type="text" placeholder="title movie" />
        </Form.Group>

        <Form.Group controlId="formGridOverview">
          <Form.Label>Overview</Form.Label>
          <Form.Control onChange={onChange} value={movieInput.overview} name="overview" placeholder="overview movie" />
        </Form.Group>

        <Form.Group controlId="formGridPosterPath">
          <Form.Label>Poster Path</Form.Label>
          <Form.Control onChange={onChange} value={movieInput.poster_path} name="poster_path" placeholder="http://poster-path.com" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPopularity">
            <Form.Label>Popularity</Form.Label>
            <Form.Control onChange={onChange} value={movieInput.popularity} name="popularity" type="number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTags">
            <Form.Label>Tags</Form.Label>
            <Form.Control onChange={onChange} value={movieInput.tags} name="tags" placeholder="tag1 tag2"/>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}