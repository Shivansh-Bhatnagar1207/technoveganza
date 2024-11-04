'use server'

import { db } from "./database/connect"

export async function createPID(formData) {
    const count = await db.pID.count() + 20240001

    await db.pID.create({
        data: {
            Pid: (count).toString() || 0, // Default to 0 if PID is not provided
            Name: formData.get('Name') || '',
            RollNo: (formData.get('Rollno')) || '',
            Mobile: formData.get('Mobileno'),// Ensure RollNo is a string
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
}
export async function fetchPidData(PID) {
    // Ensure this function runs server-side only
    return await db.pID.findUnique({
        where: { Pid: (PID) },
        include: { Event: true, id: false, tidId: false }
    });
}


export async function squard(formdata) {


    await db.tID.create({
        data: {
            Event: "Event",
            PIDs: {
                connect: [
                    { Pid: (formdata.get('p1')) },
                    { Pid: (formdata.get('p2')) },
                    { Pid: (formdata.get('p3')) },
                    { Pid: (formdata.get('p4')) },
                ]
            },
            tid: 'test'
        }
    })
}


export async function duo(formdata) {

    await db.tID.create({
        data: {
            Event: "Event",
            PIDs: {
                connect: [
                    { Pid: (formdata.get('p1')) },
                    { Pid: (formdata.get('p2')) },
                ]
            },
            tid: 'test'
        }
    })
}