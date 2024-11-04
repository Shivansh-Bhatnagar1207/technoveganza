'use client'

import React from 'react';
import { createPID } from '@/app/action';
export default function Page() {





    return (
        <>
            <div className='text-center font-bold text-3xl py-2 my-2'>Generating Pid</div>
            <form className="grid gap-5 px-10 grid-cols-2 place-items-center" action={createPID}>
                <div>Name: &nbsp;
                    <input type="text" className='border-2 border-solid border-gray-500' name="Name" />
                </div>
                <div>Roll_no: &nbsp;
                    <input type="text" className='border-2 border-solid border-gray-500' name="Rollno" />
                </div>
                <div>Mobile: &nbsp;
                    <input type="text" className='border-2 border-solid border-gray-500' name="Mobileno" />
                </div>
                <div>Branch: &nbsp;
                    <input type="text" className='border-2 border-solid border-gray-500' name="Branch" />
                </div>
                <div>Course: &nbsp;
                    <select name="Course" className='border-2 border-solid border-gray-500'>
                        <option value="BTECH">BTECH</option>
                        <option value="MTECH">MTECH</option>
                        <option value="PHARMA">PHARMA</option>
                    </select>
                </div>
                <div>College: &nbsp;
                    <input type="text" className='border-2 border-solid border-gray-500' name="college" />
                </div>
                <div>Gender: &nbsp;
                    <label>
                        <input
                            type="radio"
                            name="Gender"
                            value="male"
                        />&nbsp;Male
                    </label> &nbsp;
                    <label>
                        <input
                            type="radio"
                            name="Gender"
                            value="female"
                        />
                        &nbsp;Female
                    </label>

                </div>
                <label>
                    Codesense: &nbsp;
                    <input type="checkbox" name="codesense" />
                </label>
                <label>
                    Media_master:&nbsp;
                    <input type="checkbox" name="Media_master" />
                </label>
                <label>
                    web_battle:&nbsp;
                    <input type="checkbox" name="web_battle" />
                </label>
                <label>
                    Aptec:&nbsp;
                    <input type="checkbox" name="aptec" />
                </label>
                <label>
                    innovative_mind:&nbsp;
                    <input type="checkbox" name="innovative_mind" />
                </label>
                <label>
                    tech_whiz:&nbsp;
                    <input type="checkbox" name="tech_whiz" />
                </label>
                <label>
                    scavenger_hunt:&nbsp;
                    <input type="checkbox" name="scavenger_hunt" />
                </label>

                {/* Other checkboxes */}
                <button className='col-span-2 bg-red-500 text-white font-bold px-10 py-4 rounded-xl  cursor-pointer' type='submit' onClick={() => { alert('Form Submitted') }}>Generate Pid</button>
            </form>
        </>
    )
}
