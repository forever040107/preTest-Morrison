import Main from '@/components/pages/home/index'
import LeftMenu from '@/components/pages/shared/LeftMenu'

export default function Home() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <header className="h-[30px] w-full border text-center">Home, Layout 1, 使用 flex</header>
      <div className="flex w-full" style={{ height: 'calc(100% - 60px)' }}>
        <div className="w-[60px] border p-1 text-sm">
          <LeftMenu />
        </div>
        <div className="align-center flex flex-auto justify-center overflow-auto overscroll-contain p-2">
          <Main />
        </div>
      </div>
      <footer className="fixed bottom-0 h-[30px] w-full border">footer</footer>
    </div>
  )
}
