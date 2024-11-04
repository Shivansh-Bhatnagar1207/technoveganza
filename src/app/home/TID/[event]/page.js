// /app/page.jsx

import { duo, squard } from "@/app/action";
import React from "react";

export default function Page({ params }) {
  const { event } = React.use(params)

  return (
    <>
      <div className="text-3xl font-bold text-center">
        Genrate TID for {event}
      </div>
      {event === "Event1" || event === "Event2" || event === "Event3" ?
        (<form className="grid gap-5 px-10 grid-cols-2 place-items-center" action={squard}>
          <div>Participant 1: &nbsp;
            <input type="text" className='border-2 border-solid border-gray-500' name="p1" />
          </div>
          <div>Participant 2: &nbsp;
            <input type="text" className='border-2 border-solid border-gray-500' name="p2" />
          </div>
          <div>Participant 3: &nbsp;
            <input type="text" className='border-2 border-solid border-gray-500' name="p3" />
          </div>
          <div>Participant 4: &nbsp;
            <input type="text" className='border-2 border-solid border-gray-500' name="p4" />
          </div>
          {/* Other checkboxes */}
          <button className='col-span-2 bg-red-500 text-white font-bold px-10 py-4 rounded-xl  cursor-pointer' type='submit'>Generate Team</button>
        </form>)
        : (<form className="grid gap-5 px-10 grid-cols-2 place-items-center" action={duo}>
          <div>Participant 1: &nbsp;
            <input type="text" className='border-2 border-solid border-gray-500' name="p1" />
          </div>
          <div>Participant 2: &nbsp;
            <input type="text" className='border-2 border-solid border-gray-500' name="p2" />
          </div>
          
          {/* Other checkboxes */}
          <button className='col-span-2 bg-red-500 text-white font-bold px-10 py-4 rounded-xl  cursor-pointer' type='submit'>Generate Team</button>
        </form>)}
    </>
  )
}
