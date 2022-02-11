import { ChangeEvent, useCallback, useState } from 'react'

function useShiftSelected<P>(initialState: Array<P>, change: (addOrRemove: boolean, items: Array<P>) => void) {
  const [previousSelected, setPreviousSelected] = useState<P | null>(null)
  const [previousChecked, setPreviousChecked] = useState<boolean>(false)
  const [selectedOnShiftKey, setSelectedOnShiftKey] = useState<P | null>(null)

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, item: P) => {
      // @ts-ignore shiftKey is defined for click events
      if (event.nativeEvent.shiftKey) {
        const current = initialState.findIndex((x) => x === item)
        const previous = initialState.findIndex((x) => x === previousSelected)
        const newEndValue = initialState.findIndex((x) => x === selectedOnShiftKey) // change select with shiftKey
        const start = Math.min(current, previous)
        const end = Math.max(current, previous)
        if (start > -1 && end > -1) {
          change(previousChecked, initialState.slice(start, end + 1))
          if (newEndValue > end) {
            change(!previousChecked, initialState.slice(end + 1, newEndValue + 1))
          }
          if (newEndValue < start) {
            change(!previousChecked, initialState.slice(newEndValue, start))
          }
          setSelectedOnShiftKey(item)
          return
        }
      } else {
        setPreviousSelected(item)
        setSelectedOnShiftKey(null)
        setPreviousChecked(event.target.checked)
      }
      change(event.target.checked, [item])
    },
    [
      change,
      initialState,
      previousSelected,
      setPreviousSelected,
      previousChecked,
      setPreviousChecked,
      selectedOnShiftKey,
      setSelectedOnShiftKey,
    ]
  )

  return onChange
}

export default useShiftSelected
