import fs from 'fs'
import path from 'path'

export const buildFeedbackPath = () => {
    return path.join(process.cwd(), 'data', 'feedback.json');
}

export const extractFeedback = (filePath) => {
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData);
    return data;
}
const handler = (req, res) => {
    if (req.method === 'POST') {
        const {email, message} = req.body;
        const newFeedback = {id: new Date().toISOString(), email, message}
        const filePath = buildFeedbackPath();
        const fileData = fs.readFileSync(filePath)
        const data = JSON.parse(fileData)
        data.push(newFeedback);
        fs.writeFileSync(filePath, JSON.stringify(data))
        res.status(201).json({data: newFeedback})
    } else {
        const filePath = buildFeedbackPath()
        const fileData = extractFeedback(filePath)
        res.status(200).json({data: fileData})
    }
}


export default handler;
