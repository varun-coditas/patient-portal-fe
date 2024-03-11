import { ComponentRef, Injectable } from '@angular/core';
import { v4 as uuid4 } from 'uuid';
import { AuthService } from '../../../common-services/auth/auth.service';
import { HttpService } from '../../../common-services/http/http.service';
import { ChatBotComponent } from '../../../shared/components/chat-bot/chat-bot.component';
import { initialChatBotMessage } from './chat-bot-service.data';

@Injectable({
	providedIn: 'root',
})
export class ChatBotService {
	constructor(
		private httpService: HttpService,
		private authService: AuthService
	) {}
	uuid!: string;
	postChat(message: string, pipelineId: string | number) {
		const body = {
			human_message: message,
			pipeline_id: pipelineId,
			session_id: uuid4()
		};
		return this.httpService.post<any>(
			`/pipeline/${pipelineId}/private-gpt/`,
			body
		);
	}

	postAssistantChat(message: string, pipelineId: string | number) {
		const body = {
			human_message: message,
			session_id: this.uuid,
		};
		return this.httpService.post<string>(
			`/pipeline/${pipelineId}/private-gpt/`,
			body
		);
	}

	chatToAi(
		componetRef: ComponentRef<ChatBotComponent>,
		pipelineId: string | number,
		type: 'Assistant' | 'Chat'
	) {
		this.uuid = uuid4();

		this.authService.getUserApi().subscribe(res => {
			componetRef.instance.chats = [
				initialChatBotMessage(res.name, Date.now(), type),
			];
			componetRef.instance.send.subscribe((message: string) => {
				componetRef.instance.chats.push({
					message: message,
					type: 'user',
					timeStamp: Date.now(),
				});
				componetRef.instance.isLoading = true;
				if (type == 'Chat') {
					this.postChat(message, pipelineId).subscribe({
						next: response => {
							componetRef.instance.chats.push({
								message: response.input,
								type: 'user',
								timeStamp: Date.now(),
							});
							componetRef.instance.chats.push({
								message: response.response,
								type: 'ai',
								timeStamp: Date.now(),
							});
						},
						error(err) {
							console.log(err);
						},
						complete: () => {
							componetRef.instance.isLoading = false;
						},
					});
				} else {
					this.postAssistantChat(message, pipelineId).subscribe({
						next: response => {
							componetRef.instance.chats.push({
								message: response,
								type: 'ai',
								timeStamp: Date.now(),
							});
						},
						error(err) {
							console.log(err);
						},
						complete: () => {
							componetRef.instance.isLoading = false;
						},
					});
				}
			});
		});
	}
}
