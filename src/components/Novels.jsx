import { useState } from "react"
import useFetch from "../useFetch"

const Novels = () => {
  const [successMessage, setSuccessMessage] = useState("")
  const { data, loading } = useFetch("http://localhost:3000/novels")

  const handleDelete = async (novelId) => {
    try {
      const response = await fetch(`http://localhost:3000/novels/${novelId}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete novel.")
      }

      const result = await response.json() // Changed data to result
      if (result) {
        setSuccessMessage("Novel deleted successfully")
        window.location.reload()
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {data?.error && <p>{data.error}</p>}
      <ul>
        {data?.map((novel) => (
          <li key={novel._id}>
            {" "}
            {novel.title}
            <button onClick={() => handleDelete(novel._id)}>Delete</button>{" "}
          </li>
        ))}
      </ul>
      <p>{successMessage}</p>
    </div>
  )
}

export default Novels
