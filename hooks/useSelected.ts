import { useCallback, useEffect, useState } from 'react'
import uniq from 'lodash/uniq'
import difference from 'lodash/difference'

function useSelected<P>(initialState: Array<P>, isSelectAll: boolean = false) {
  const [selected, setSelected] = useState([])

  useEffect(() => {
    const dataList = isSelectAll ? initialState : []
    setSelected(dataList)
  }, [isSelectAll])

  const add = useCallback(
    (items: Array<P>) => {
      setSelected((oldList) => uniq([...oldList, ...items]))
    },
    [setSelected]
  )

  const remove = useCallback(
    (items: Array<P>) => {
      setSelected((oldList) => difference(oldList, items))
    },
    [setSelected]
  )

  const change = useCallback(
    (addOrRemove: boolean, items: Array<P>) => {
      if (addOrRemove) {
        add(items)
      } else {
        remove(items)
      }
    },
    [add, remove]
  )

  const clear = useCallback(() => setSelected([]), [setSelected])

  return { selected, add, remove, clear, change }
}

export default useSelected
