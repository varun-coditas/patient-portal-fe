import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
	AlignCellContentDirective,
	ButtonComponent,
	CheckboxComponent,
	ChipsComponent,
	DialogService,
	HeaderComponent,
	InputComponent,
	ListComponent,
	PaginationComponent,
	PaginationOptions,
	PaginationOutputParams,
	TableBodyDirective,
	TableComponent,
	TableDataDirective,
	TableHeaderDirective,
	TableHeadingCellDirective,
	TableRowDirective,
	TableStyleDirective,
} from '@coditashq/ng-ada-components';
import { AuthService } from '../../../common-services/auth/auth.service';
import { ChatBotComponent } from '../../../shared/components/chat-bot/chat-bot.component';
import { ChipComponent } from '../../../shared/components/chip/chip.component';
import { DrawerService } from '../../../shared/components/drawer/drawer.service';
import { SortIconComponent } from '../../../shared/components/sort-icon/sort-icon.component';
import { IPipelineTableData } from '../interface/pipeline-history';
import { ChatBotService } from '../services/chat-bot.service';
import { PipelineService } from '../services/pipeline.service';
import { CreatePipelinePopupComponent } from './create-pipeline-popup/create-pipeline-popup.component';
import {
	createPopupTitle,
	deletePopupTitle,
	paginationConfig,
	paginationParams,
	piplineTableDataRefractor,
	setRandomMessage,
} from './dashboard.data';
import { DeletePipelinePopupComponent } from './delete-pipeline-popup/delete-pipeline-popup.component';
import { PatientService } from '../services/patient.service';

@Component({
	selector: 'app-dashboard-page',
	standalone: true,
	imports: [
		TableComponent,
		ChipsComponent,
		AlignCellContentDirective,
		TableHeadingCellDirective,
		TableHeaderDirective,
		TableStyleDirective,
		TableBodyDirective,
		TableDataDirective,
		TableRowDirective,
		CheckboxComponent,
		ListComponent,
		HeaderComponent,
		CommonModule,
		InputComponent,
		ButtonComponent,
		ChipComponent,
		PaginationComponent,
		SortIconComponent,
	],
	templateUrl: './dashboard-page.component.html',
	styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent implements OnInit {
	isTableDisabled = false;
	paginationConfig: PaginationOptions = paginationConfig();
	tableData: any[] = [];
	name = '';
	paginationParams = paginationParams;
	count!: number;
	welcomeMessage = setRandomMessage();
	constructor(
		private dialogService: DialogService,
		private pipelineService: PipelineService,
		private authService: AuthService,
		private drawerService: DrawerService,
		private chatBotService: ChatBotService,
		private patientService: PatientService,
		private router: Router
	) {}

	ngOnInit(): void {
		// this.getPipelineList();
		this.getPatientsList();
		this.getUser();
	}

	getUser() {
		this.authService.getUserApi().subscribe(response => {
			this.name = response.name.split(' ')[0];
		});
	}
	search(search: string) {
		this.paginationParams.search = search;
		this.getPipelineList();
	}

	getPatientsList() {
		this.patientService.getPatients().subscribe(patients => {
			this.tableData = patients;
		})
	}

	getPipelineList() {
		this.pipelineService.getPipelineList(paginationParams).subscribe({
			next: response => {
				this.tableData = piplineTableDataRefractor(response);
				this.count = response.count;
				this.paginationConfig = paginationConfig(response.count);
			},
			error: err => {},
		});
	}
	deletePipeline(id: string | number, pipelineData: IPipelineTableData) {
		this.pipelineService.setPipelineTableRow(pipelineData);
		this.dialogService.open(
			{
				title: deletePopupTitle,
				subtitle: '',
				type: 'default',
				showCloseIcon: true,
				options: {
					cancel: '',
					submit: 'Delete',
				},
			},
			DeletePipelinePopupComponent
		);
		this.dialogService.afterSubmit().subscribe(() => {
			this.pipelineService.deletePipelines(id).subscribe({
				next: () => {
					this.getPipelineList();
				},
				error() {},
			});
		});
	}
	editPipeline(id: string | number) {
		this.router.navigateByUrl(`/pipeline-config/${id}/edit`);
	}
	handlePaginationResponseData(pagination: PaginationOutputParams) {
		this.paginationParams.page = pagination.pageNumber;
		this.paginationParams.limit = pagination.itemsPerPage;
		this.getPipelineList();
	}
	onCreatePipline() {
		this.dialogService.open(
			{
				title: createPopupTitle,
				subtitle: '',
				type: 'default',
				showCloseIcon: true,
			},
			CreatePipelinePopupComponent
		);
	}
	sort(order: number, sortBy: string) {
		this.paginationParams.sort_by = sortBy;
		this.paginationParams.order = order.toLocaleString();
		this.getPipelineList();
	}

	openPlayground(pipelineDetails: IPipelineTableData, output: string) {
		// if (output == 'Playground') {
			this.dialogService.close();
			const { componentRef, drawerRef } =
				this.drawerService.open(ChatBotComponent);
			componentRef.instance.pipelineName = pipelineDetails.pipelineName;
			const type =
				pipelineDetails.input[0] == 'Assistant' ? 'Assistant' : 'Chat';
			this.chatBotService.chatToAi(
				componentRef,
				pipelineDetails.pipelineId,
				type
			);
			componentRef.instance.backClick.subscribe(() => {
				drawerRef.close();
			});
		// }
	}
}
