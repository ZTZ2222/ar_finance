import { useEffect, useState } from "react"
import type { CalculatorFields } from "@/types/calculator.schema"

type FetchDataHook<T> = {
  data: T[] | null
  loading: boolean
  error: string | null
}

export function useFetchData<T>(
  fetchFunction: () => Promise<T[] | null>,
): FetchDataHook<T> {
  const [data, setData] = useState<T[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFunction()
        if (result) {
          setData(result)
        } else {
          setData(null)
        }
      } catch (err) {
        setError("Failed to fetch data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [fetchFunction])

  return { data, loading, error }
}

type FetchCalculatorFieldsHook = {
  data: CalculatorFields | null
  loading: boolean
  error: string | null
}

export function useGetCalculatorFields(
  fetchFunction: () => Promise<CalculatorFields>,
): FetchCalculatorFieldsHook {
  const [data, setData] = useState<CalculatorFields | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFunction()
        setData(result)
      } catch (err) {
        setError("Failed to fetch calculator fields")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [fetchFunction])

  return { data, loading, error }
}
