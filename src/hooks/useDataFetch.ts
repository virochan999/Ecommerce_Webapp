import { useState } from "react"
import { apiUrl } from "../api/apiUrl"

type DispatchPropTypes = {
  apiEndpoint: string
  method?: string
  onSuccess?: (data: any) => void
  onError?: (error: string) => void
}

const useDataFetch = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async ({
    apiEndpoint,
    method = "GET",
    onSuccess,
  }: DispatchPropTypes) => {
    try {
      setLoading(true)
      const response = await fetch(`${apiUrl.base_url}/${apiEndpoint}`, {
        method: method,
      })
      const data = await response.json()
      if (onSuccess) {
        onSuccess(data)
      }
      setLoading(false)
    } catch (error) {
      let errorMessage = ""
      if (error instanceof Error) {
        errorMessage = error.message
      }
      setError(errorMessage)
    }
  }

  return { loading, error, fetchData }
}

export default useDataFetch
