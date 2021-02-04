import { useState, useEffect } from 'react'
import axios from 'axios'

function useApi(options) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios(options).then((d) => {
          setData(d.data)
          setLoading(false)
        })
      } catch (err) {
        setError(err)
      }
    }
    fetchData()
  }, [])

  return { data, loading, error }
}

export default useApi
