'use server'

import { redirect } from "next/navigation";
import { db } from "./database/connect"

export async function createPID(formData) {
    let count = await db.pID.count() + 20240001
    count = 'PID' + count

    await db.pID.create({
        data: {
            Pid: count || 0, 
            Name: formData.get('Name') || '',
            RollNo: (formData.get('Rollno')) || '',
            Mobile: formData.get('Mobileno')|| '',
            Branch: formData.get('Branch') || '',
            Course: formData.get('Course') || '',
            College: formData.get('college') || '',
            Gender: formData.get('Gender') || '',
            Event: {
                create: {
                    EventID: count,
                    Event1: formData.get('scavenger_hunt') === 'on' || false,
                    Event2: formData.get('tech_whiz') === 'on' || false,
                    Event3: formData.get('innovative_mind') === 'on' || false,
                    Event4: formData.get('web_battle') === 'on' || false,
                    Event5: formData.get('Media_master') === 'on' || false,
                    Event6: formData.get('codesense') === 'on' || false,
                    Event7: false,
                }
            }
        },
    });
    redirect('/home/PID')
}
export async function fetchPidData(PID) {
    // Ensure this function runs server-side only
    return await db.pID.findUnique({
        where: { Pid: (PID) },
        include: { Event: true, id: false, tidId: false }
    });
}


export async function squard(selectedEvents) {

    let tidcount = await db.tID.count() + 20240001
    tidcount = 'TID' + tidcount

    await db.tID.create({
        data: {
            Event : selectedEvents[0],
            PIDs: {
                connect: [
                    { Pid: selectedEvents[1] },
                    { Pid: selectedEvents[2] },
                    { Pid: selectedEvents[3] },
                    { Pid: selectedEvents[4] },
                ]
            },
            tid: tidcount
        }
    })
    redirect('/home/TID')
}


export async function duo(formdata) {
    let tidcount = await db.tID.count() + 20240001
    tidcount = 'TID' + tidcount

    await db.tID.create({
        data: {
            Event: formdata.get('event'),
            PIDs: {
                connect: [
                    { Pid: (formdata.get('p1')) },
                    { Pid: (formdata.get('p2')) },
                ]
            },
            tid: tidcount
        }
    })
    redirect('/home/TID')
}