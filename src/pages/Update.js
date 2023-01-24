import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import supabase from "../config/supabaseClient"

const Update = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [methods, setMethods] = useState('')
  const [rating, setRating] = useState('')

  useEffect(() => {
    const fetchSmoothie = async () => {
      const { data, error } = await supabase 
      .from('smoothies')
      .select()
      .eq('id', id)
      .single()

      if (error) {
        navigate('/', { replace: true})
      }

      if (data) {
        setName(data.name)
        setMethods(data.methods)
        setRating(data.rating)
        console.log(data)
      }
    }

    fetchSmoothie()
  }, [id, navigate])

  return (
    <div className="page update">
      <form>
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

        <button>Update Smoothie Recipe</button>

        {/*formError && <p className="error">{formError}</p>*/}
      </form>
    </div>
  )
}

export default Update