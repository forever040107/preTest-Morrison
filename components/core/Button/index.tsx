import { ButtonHTMLAttributes } from 'react'

export type Props = {
  /** 按鈕內文字 */
  text?: string | React.ReactNode
  /** 按鈕children。text為true，則無作用 */
  children?: React.ReactNode
  /** 按鈕active狀態 */
  isActive?: boolean
  /** 按鈕disabled */
  disabled?: boolean
}

export default function Button({
  text,
  children,
  isActive = false,
  disabled = false,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & Props) {
  return (
    <button
      {...rest}
      className={`${disabled ? 'bg-[#DDDDDD]' : 'bg-[#4C9EEA]'} ${
        isActive ? 'text-white' : 'text-cyan-800'
      } tw-layout-center h-11 w-full rounded border-none font-normal`}
    >
      {text || children}
    </button>
  )
}
