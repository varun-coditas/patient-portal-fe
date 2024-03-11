import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as marked from 'marked';

@Pipe({
	name: 'markdownToHtml',
	standalone: true,
})
export class MarkdownToHtmlPipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) {}
	transform(
		value: string | null | undefined,
		pipelineId: string | undefined
	): SafeHtml {
		if (!value) return '';
		if (pipelineId) {
			value = value.replace('pipelineId', pipelineId);
		}
		const html = marked.parse(value);
		return this.sanitizer.bypassSecurityTrustHtml(html.toString());
	}
}
