import React, { useState } from "react"

const AddNovelForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "publishedYear" || name === "rating" ? parseInt(value) : value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formData)
    try {
      const response = await fetch("http://localhost:3000/novels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        throw "Failed to add novel."
      }
      const data = await response.json()

      console.log("Added Novel", data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Add New Novel</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <br />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Author:</label>
        <br />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Published Year:</label>
        <br />
        <input
          type="number"
          name="publishedYear"
          value={formData.publishedYear}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Genre:</label>
        <br />
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Language:</label>
        <br />
        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Country:</label>
        <br />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Rating:</label>
        <br />
        <input
          type="text"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Summary:</label>
        <br />
        <input
          type="text"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Cover Image URL:</label>
        <br />
        <input
          type="text"
          name="coverImageUrl"
          value={formData.coverImageUrl}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Add Novel</button>
      </form>
    </div>
  )
}

export default AddNovelForm
