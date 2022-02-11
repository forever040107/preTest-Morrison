import Main from '@/components/pages/home/index'
import LeftMenu from '@/components/pages/shared/LeftMenu'

export default function SecondPage() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <header className="h-[30px] w-full border text-center">SecondPage, Layout 2, 使用float</header>
      <div style={{ height: 'calc(100% - 60px)' }}>
        <div className="float-left h-full w-[60px] border p-1 text-sm">
          <LeftMenu />
        </div>
        <div className="flex h-full justify-center overflow-auto overscroll-contain p-2">
          <Main />
        </div>
      </div>
      <footer className="fixed bottom-0 h-[30px] w-full border">footer</footer>
    </div>
  )
}
