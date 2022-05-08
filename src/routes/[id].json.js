import { createClient } from 'newt-client-js';
import dotenv from 'dotenv';
dotenv.config();
export async function get({ params }) {
    let newsContent = {
        "tags": [],
        "title": "",
        "day": "",
        "thumbnail": {
            "_id": "",
            "src": ""
        },
        "main_text": ""
    };
    console.log(params.id)
    const client = createClient({
        spaceUid: process.env['NEWT_SPACE_ID'],
        token: process.env['NEWT_TOKEN'],
        apiType: 'cdn'
    });

    const content = await client.getContents({
        appUid: process.env['NEWT_APP_ID'],
        modelUid: 'redirect',
        query:  {
            'redirect_url' : params.id,
        }
    });
    return {
        body: content
    }
}