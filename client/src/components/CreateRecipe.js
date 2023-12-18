import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const CreateRecipePage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const createRecipe = async (data) => {
    try {
      console.log(data)

      const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY')
      console.log(token)

      const requestOptions = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(token)}`
        },
        body: JSON.stringify(data)
      }

      const response = await fetch('/recipe/recipes', requestOptions)
      const responseData = await response.json()

      console.log(responseData)
      reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container">
      <h1>Create A Recipe</h1>
      <form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" {...register('title', { required: true, maxLength: 25 })} />
        </Form.Group>
        {errors.title && <p style={{ color: 'red' }}><small>Title is required</small></p>}
        {errors.title?.type === "maxLength" && <p style={{ color: 'red' }}>
          <small>Title should be less than 25 characters</small>
        </p>}
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={5} {...register('description', { required: true, maxLength: 255 })} />
        </Form.Group>
        {errors.description && <p style={{ color: 'red' }}><small>Description is required</small></p>}
        {errors.description?.type === "maxLength" && <p style={{ color: 'red' }}>
          <small>Description should be less than 255 characters</small>
        </p>}
        <br />
        <Form.Group>
          <Button variant="primary" onClick={handleSubmit(createRecipe)}>
            Save
          </Button>
        </Form.Group>
      </form>
    </div>
  )
}

export default CreateRecipePage

