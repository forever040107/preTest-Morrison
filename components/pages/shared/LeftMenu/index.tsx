import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '@/components/core/Button'

export default function LeftMenu() {
  const MENU_LIST = [
    { name: 'home', path: '/' },
    { name: 'page 2', path: '/second-page' },
    { name: 'page 3', path: '/third-page' },
  ]

  const router = useRouter()

  return (
    <>
      {MENU_LIST?.map((menu, index) => {
        return (
          <div className="my-1">
            <Button key={index.toString()} isActive={router.pathname === menu.path}>
              <Link href={menu.path}>{menu.name}</Link>
            </Button>
          </div>
        )
      })}
    </>
  )
}
