export async function parseJSONBody(req) {
    let body = ''
    // req by default (without specifying) is the body
    for await (const chunk of req) {
        body += chunk
    }
    try {
        return JSON.parse(body)
    } catch (err) {
        throw new Error(`Invalid JSON Format: ${err}`)
    }
}