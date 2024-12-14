//! TASK 1
const _URL: string = 'https://example.com'
enum FAQsStatus
{
    PUBLISHED = 'PUBLISHED',
    DRAFT = 'DRAFT',
    DELETED = 'DELETED',
}
const request: {"topicId": number, "status": FAQsStatus } = {
	"topicId": 5,
	"status": FAQsStatus.PUBLISHED
}
interface Answer
{
    "postId": number,
    "id": number,
    "name": string,
    "email": string,
    "body": string
}
async function getFAQs (
    req: {
    "topicId": number,
	"status": FAQsStatus
    }
): Promise<{
    "postId": number,
    "id": number,
    "name": string,
    "email": string,
    "body": string
    }[]> | never
{
	const res = await fetch(_URL, {
		method: 'POST',
		body: JSON.stringify(req)
	});
    const data: Answer[] = await res.json()
    if(typeof data === 'object' && data?.hasOwnProperty('body')) return data
	else throw new Error('Request was failed')
}
// getFAQs( request )
interface OurResponse
{
    "question": string,
    "answer": string,
    "tags": string[],
    "likes": number,
    "status": string
}

//! TASK 2
interface PostData {
	"sum": number,
	"from": number,
	"to": number
}
const postData: PostData = {
    "sum": 10000,
	"from": 2,
    "to": 4
}
enum Status {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILD'
}
interface Resp {
	"status": Status.SUCCESS,
	"data": {
		"databaseId": number,
		"sum": number,
		"from": number,
		"to": number
	}
}
interface Failed
{
  "status": Status.FAILED,
	"data": {
		"errorMessage": string,
		"errorCode": number
	}
}
async function postAmount (url: string, data: PostData ): Promise<Resp | Failed>
{
    const response = await fetch( url, {
        method: 'POST',
        body: JSON.stringify(data)
    } )
    const result: Resp | Failed = await response.json()
    return result
}

postAmount(_URL, postData)