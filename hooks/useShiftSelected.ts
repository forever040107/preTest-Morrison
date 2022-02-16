import { ChangeEvent, useCallback, useState } from 'react'

function useShiftSelected<P>(initialState: Array<P>, change: (addOrRemove: boolean, items: Array<P>) => void) {
  const [previousSelected, setPreviousSelected] = useState<P | null>(null) // shiftKey: start
  const [isPreviousChecked, setIsPreviousChecked] = useState<boolean>(false) // add or remove
  const [nextSelected, setNextSelected] = useState<P | null>(null) // shiftKey: end

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, item: P) => {
      // @ts-ignore shiftKey is defined for click events
      if (event.nativeEvent.shiftKey) {
        const current = initialState.findIndex((x) => x === item)
        const previous = initialState.findIndex((x) => x === previousSelected)
        const previousEnd = initialState.findIndex((x) => x === nextSelected) // change select with shiftKey
        const start = Math.min(current, previous)
        const end = Math.max(current, previous)
        console.log("🚀 ~ start:", start, 'end:', end, 'current:', current, 'previous:', previous)
        if (start > -1 && end > -1) {
          change(isPreviousChecked, initialState.slice(start, end + 1)) // end value changed after click
          if (previousEnd > end) { // new end value & remove item
            console.log('previousEnd > end', previousEnd, end)
            change(!isPreviousChecked, initialState.slice(end + 1, previousEnd + 1))
          }
          if (previousEnd < start) { // 由下往上選, start 跟 end 交換位置, remove start item
            console.log('previousEnd < start', previousEnd, start)
            change(!isPreviousChecked, initialState.slice(previousEnd, start))
          }
          setNextSelected(item)
          return
        }
      } else {
        setPreviousSelected(item)
        setNextSelected(null)
        setIsPreviousChecked(event.target.checked)
      }
      change(event.target.checked, [item])
    },
    [
      change,
      initialState,
      previousSelected,
      setPreviousSelected,
      isPreviousChecked,
      setIsPreviousChecked,
      nextSelected,
      setNextSelected,
    ]
  )

  return onChange
}

export default useShiftSelected
