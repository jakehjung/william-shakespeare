import { useRef, useCallback } from 'react'

function useRefCallback(refCallback) {
  const cleanUpRef = useRef(null)

  const nextCallback = useCallback(
    (node) => {
      if (cleanUpRef.current) {
        cleanUpRef.current()
        cleanUpRef.current = null
      }

      if (node) {
        cleanUpRef.current = refCallback(node)
      }
    },
    [refCallback]
  )

  return nextCallback
}

export default useRefCallback
