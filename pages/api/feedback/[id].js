import {buildFeedbackPath, extractFeedback} from "./index";

const handler = (req, res) => {
    const id = req.query.id;
    const filePath = buildFeedbackPath();
    const fileData = extractFeedback(filePath)
    const feedback = fileData.find(item => item.id === id);
    res.status(200).json({data: feedback})
}
export default handler;
