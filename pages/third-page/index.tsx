import LeftMenu from '@/components/pages/shared/LeftMenu'

export default function ThirdPage() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <header className="h-[30px] w-full border text-center">ThirdPage, Question</header>
      <div style={{ height: 'calc(100% - 60px)' }}>
        <div className="float-left h-full w-[60px] border p-1 text-sm">
          <LeftMenu />
        </div>
        <div className="flex h-full justify-center overflow-auto overscroll-contain p-2">
          <article className="prose lg:prose-xl">
            <h1>請概述通常前端 CRUD 會用到的後端 API 有哪些，規格是甚麼</h1>
            <p>
              Read 查詢使用者：GET /users/1
              <br />
              Create 新增使用者：POST /users/1
              <br />
              Update 修改/更新使用者：PUT/PATCH /users/1
              <br />
              Delete 刪除使用者：DELETE /users/1
            </p>
            <h4>流程如下：</h4>
            <ul className="leading-5">
              <li className="list-decimal">需要一個 API endpoint</li>
              <li className="list-decimal">對 server 送出 http request</li>
              <li className="list-decimal">
                使用 HTTP Methods 來對 db 做 CRUD 的操作，比如建立使用者資料： POST /user/1
              </li>
              <li className="list-decimal">Server 收到 Request後，回應 Response</li>
            </ul>
          </article>
        </div>
      </div>
      <footer className="fixed bottom-0 h-[30px] w-full border">footer</footer>
    </div>
  )
}
