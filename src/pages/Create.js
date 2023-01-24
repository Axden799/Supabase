import { useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient"

const Create = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [methods, setMethods] = useState('')
  const [rating, setRating] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !methods || !rating) {
      setFormError('Please fill in all the fields correctly.')
      return
    }

    const { data, error } = await supabase
      .from('smoothies')
      .insert([{name, methods, rating}])
      .select()

      if (error) {
        console.log(error)
        setFormError('Please fill in all the fields correctly.')
      }

      if (data) {
        console.log(data)
        setFormError(null)
        navigate('/')
      }

  }

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="methods">Methods:</label>
        <textarea 
          id="methods"
          value={methods}
          onChange={(e) => setMethods(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <input 
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button>Create Smoothie Recipe</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Create