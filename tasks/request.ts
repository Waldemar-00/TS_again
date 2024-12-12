interface OurRequest
{
    "topicId": number,
	"status": string
}
// const request: OurRequest = {
// 	"topicId": 5,
// 	"status": "published"
// }
const _URL: string = 'https://jsonplaceholder.typicode.com/comments/1'
// async function getFAQs<T extends OurRequest>(req: T): Promise<unknown> | never {
// 	const res = await fetch(_URL, {
// 		method: 'POST',
// 		body: JSON.stringify(req)
// 	});
//     const data: unknown = await res.json()
//     if(typeof data === 'object' && data?.hasOwnProperty('body')) return data as Post
// 	else throw new Error('Request was failed')
// }
// getFAQs<OurRequest>( request )
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
getFAQs( request )
interface OurResponse
{
    "question": string,
    "answer": string,
    "tags": string[],
    "likes": number,
    "status": string
}

// "question": "Как осуществляется доставка?",
//     "answer": "быстро!",
//     "tags": [
//         "popular",
//         "new"
//     ],
//     "likes": 3,
//     "status": "published"


    //    "postId": 1,
    //     "id": 1,
    //     "name": "id labore ex et quam laborum",
    //     "email": "Eliseo@gardner.biz",
    //     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"