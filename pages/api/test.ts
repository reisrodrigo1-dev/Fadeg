// import { appendFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
// import type { NextApiRequest, NextApiResponse } from "next";
// import path from "node:path";

// type ResponseData = {
// 	message: string;
// };

// export default async function handler(
// 	req: NextApiRequest,
// 	res: NextApiResponse<ResponseData>,
// ) {

//     console.log(req)
// 	if (req.method === "POST") {
// 		const ip = req.body();

//         console.log('teste')

// 		const logDirectory = path.join(process.cwd(), "log_tel");
// 		if (!existsSync(logDirectory)) {
// 			mkdirSync(logDirectory, { recursive: true });
// 		}

// 		const logFileName = `${new Date().toISOString().split("T")[0]}-logs.txt`;
// 		const logFilePath = path.join(logDirectory, logFileName);
// 		const logEntry = `[${new Date().toISOString()}] ${ip}\n`;
// 		appendFileSync(logFilePath, logEntry);

// 		res.end();
// 	}
// }
