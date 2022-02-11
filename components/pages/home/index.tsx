import { useState } from 'react'
import useSelected from '@/hooks/useSelected'
import useShiftSelected from '@/hooks/useShiftSelected'

const DATA_LIST = [
  {
    id: 0,
    text: '00-未派車',
    disabled: false,
  },
  {
    id: 1,
    text: '00-未派車',
    disabled: true,
  },
  {
    id: 2,
    text: '00-未派車',
    disabled: false,
  },
  {
    id: 3,
    text: '00-未派車',
    disabled: false,
  },
  {
    id: 4,
    text: '00-未派車',
    disabled: false,
  },
  {
    id: 5,
    text: '00-未派車',
    disabled: false,
  },
  {
    id: 6,
    text: '00-未派車',
    disabled: true,
  },
  {
    id: 7,
    text: '00-未派車',
    disabled: true,
  },
  {
    id: 8,
    text: '00-未派車',
    disabled: true,
  },
  {
    id: 9,
    text: '00-未派車',
    disabled: false,
  },
  {
    id: 10,
    text: '00-未派車',
    disabled: false,
  },
]

export default function Home() {
  const [isSelectAll, setIsSelectAll] = useState(false)

  const { selected, change } = useSelected(DATA_LIST, isSelectAll)
  const onChange = useShiftSelected(DATA_LIST, change)

  return (
    <div className="relative h-max w-max rounded-xl ">
      <div>
        <table className="table-auto border-separate text-center" style={{ borderSpacing: 0 }}>
          <thead className="bg-slate-100">
            <tr className="bg-platinum-300">
              <th className="border-b p-4 pb-3 text-center font-medium text-slate-400">
                <label className="hover:cursor-pointer">
                  全選 <input type="checkbox" onClick={() => setIsSelectAll(!isSelectAll)} />
                </label>
              </th>
              <th className="border-b p-4 pb-3 text-center font-medium text-slate-400">狀態</th>
            </tr>
          </thead>
          <tbody>
            {DATA_LIST?.map((item, key) => {
              return (
                <tr key={key.toString()}>
                  <td className="border-b border-slate-100 p-4 text-slate-500">
                    <div>
                      {item.disabled && (
                        <input
                          type="checkbox"
                          id={item.id.toString()}
                          checked={selected.includes(item)}
                          onChange={(event) => onChange(event, item)}
                        />
                      )}
                    </div>
                  </td>
                  <td className="border-b border-slate-100 p-4 text-slate-500">
                    <label className="hover:cursor-pointer" htmlFor={item.id.toString()}>
                      {item.text}
                    </label>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="pointer-events-none absolute inset-0 rounded-xl border border-black/5"></div>
      </div>
    </div>
  )
}
