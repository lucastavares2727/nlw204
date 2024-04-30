import { AttendeeList } from "./components/attendee-list"
import { Header } from "./components/header"


export function App() {

  return (
   // <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 align-middle">
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header />

      <AttendeeList />
    </div>
 //   </form>
  )
}
