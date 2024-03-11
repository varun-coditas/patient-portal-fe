export const initialChatBotMessage = (
	username: string,
	timeStamp: number,
	type: 'Assistant' | 'Chat'
): {
	message: string;
	type: 'user' | 'ai';
	timeStamp: number;
} => {
	if (type == 'Chat') {
		return {
			message: `Hello ${username}, how can I help you?`,
			type: 'ai',
			timeStamp: timeStamp,
		};
	} else {
		return {
			message: `Hello ${username}, Please say 'hi' to activate the Assistant.`,
			type: 'ai',
			timeStamp: timeStamp,
		};
	}
};
