import { db } from "@/app/database/connect";


export async function GET(req) {
    try{    
        const pids = await db.tID.findMany({
            include: {
                PID: true
            }
        })
        return new Response(JSON.stringify(pids), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }catch(err){
        console.error(err)
        return new Response(
            JSON.stringify({error : 'failed to fetch Pid'})
        )
    }
}


