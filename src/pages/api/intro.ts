import { NextApiRequest, NextApiResponse } from "next";

export default (_: NextApiRequest, res: NextApiResponse) => {
	const data = [
		"你好，我是陳子涵，之前是前端網頁實習生，現在的目標是成為前端工程師。",
		"我目前使用 Next.js, React, Bootstrap, SCSS 等前端工具，完成實習、接案、新創的多項專案與任務。",
		"之前有接觸過介面設計、使用者體驗、後端開發，現在仍有持續利用這些經歷，與負責這些職位的夥伴討論、溝通與合作。",
		"我是一個冷靜、理性的人，遵循流程的同時保有調整的彈性。",
		"如果你想找我聊聊新的合作機會，請聯繫我！"
	];
	const i = Math.floor(Math.random() * 5);
	const result = {
		number: i,
		text: data[i]
	};
	res.status(200).json(result);
}