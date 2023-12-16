import { Button } from '@mui/material'
import React, { Fragment, useState } from 'react'

interface YouTubeButtonProps {
  value: string
}

export const YouTubeButton = ({ value }: YouTubeButtonProps) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchYouTubeData = async () => {
    setLoading(true)
    setError(null)

    try {
      const params = new URLSearchParams({
        part: 'snippet',
        q: value,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      })
      const apiUrl = `https://www.googleapis.com/youtube/v3/search?${params}`
      const response = await fetch(apiUrl)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      setData(data)
    } catch (error) {
      setError('Failed to fetch data: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Fragment>
      <Button
        onClick={fetchYouTubeData}
        disabled={loading}
        variant='contained'
        color='secondary'
      >
        {loading ? 'Loading...' : 'Learn More'}
      </Button>
      {error && <p>Error: {error}</p>}
      {data && <div>// Display data here</div>}
    </Fragment>
  )
}
