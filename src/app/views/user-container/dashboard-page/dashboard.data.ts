import { PaginationOptions } from "@coditashq/ng-ada-components";
import { SourceContentType } from "../constants/pipeline-config";
import { IPagination } from "../interface/pagination";
import {
  IPipelineConfiguration,
  IPipelineListResponse,
  IPipelineTableData,
} from "../interface/pipeline-history";

export const paginationParams: IPagination = {
  page: "1",
  limit: "8",
  sort_by: "name",
  order: "1",
  search: "",
};
export const deletePopupTitle = "Delete the pipeline?";
export const createPopupTitle = "Create Pipeline";
export const paginationConfig = (
  totalCount: number = 20
): PaginationOptions => {
  return {
    paginationSize: "small",
    alignment: "right",
    paginationType: "default",
    itemPerPageOptions: [
      {
        id: 1,
        option: 5,
        isDisabled: false,
        isSelected: true,
      },
      {
        id: 2,
        option: 10,
        isDisabled: false,
        isSelected: false,
      },
      {
        id: 3,
        option: 15,
        isDisabled: false,
        isSelected: false,
      },
      {
        id: 4,
        option: 20,
        isDisabled: false,
        isSelected: false,
      },
      {
        id: 5,
        option: 25,
        isDisabled: false,
        isSelected: false,
      },
    ],
    recordsPerPage: 5,
    totalRecordsCount: totalCount,
  };
};

export const PATIENT_DATA = [
  {
    name: "John Doe",
    age: 45,
    gender: "male",
    medical_history: ["hypertension", "diabetes"],
    allergies: ["penicillin"],
  },
  {
    name: "Jane Doe",
    age: 35,
    gender: "female",
    medical_history: ["hypertension", "high cholesterol"],
    allergies: ["penicillin"],
  },
  {
    name: "Bob Smith",
    age: 50,
    gender: "male",
    medical_history: ["hypertension", "diabetes"],
    allergies: [],
  },
  {
    name: "Alice Johnson",
    age: 40,
    gender: "female",
    medical_history: [],
    allergies: ["penicillin"],
  },
  {
    name: "Charlie Brown",
    age: 30,
    gender: "male",
    medical_history: [],
    allergies: [],
  },
  {
    name: "David Davis",
    age: 55,
    gender: "male",
    medical_history: ["hypertension"],
    allergies: [],
  },
  {
    name: "Emma Evans",
    age: 40,
    gender: "female",
    medical_history: [],
    allergies: ["penicillin"],
  },
  {
    name: "Frank Franklin",
    age: 50,
    gender: "male",
    medical_history: ["hypertension"],
    allergies: [],
  },
  {
    name: "Grace Garcia",
    age: 40,
    gender: "female",
    medical_history: [],
    allergies: ["penicillin"],
  },
  {
    name: "Henry Hancock",
    age: 35,
    gender: "male",
    medical_history: [],
    allergies: [],
  },
];

export const piplineTableDataRefractor = (
  apiResponse: IPipelineListResponse
): IPipelineTableData[] => {
  const pipelineTable: IPipelineTableData[] = [];
  apiResponse.results.forEach((pipeline) => {
    const input: string[] = [];
    const output: string[] = [];
    let aiModel = "";
    pipeline.configurations.forEach((config: IPipelineConfiguration) => {
      if (config.content_type === SourceContentType.inputSource) {
        input.push(config.content_object.name);
      } else if (config.content_type === SourceContentType.outputSource) {
        output.push(config.content_object.name);
      } else if (config.content_type === SourceContentType.inferenceModel) {
        aiModel = config.content_object.name;
      }
    });

    const pipelineData: IPipelineTableData = {
      pipelineId: pipeline.id,
      pipelineName: pipeline.name,
      status: pipeline.status,
      input: input,
      output: output,
      aiModel: aiModel,
      lastExecuted: "Dec 18, 2023",
    };
    pipelineTable.push(pipelineData);
  });
  return pipelineTable;
};

export const welcomeMessages: string[] = [
  "Streamline your data pipelines with our AI-driven insights and enhance your operational efficiency.",
  "Engage with your personalized AI agents, designed for enterprise-level conversations and complex problem-solving.",
  "Your secure, private AI infrastructure is ready to scale with your cloud, ensuring compliance and performance.",
  "Integrate AI seamlessly with our full-stack SDKs, built for the real-time demands of your enterprise.",
  "Transform your chat experiences with our advanced RAG framework and deep session memory capabilities.",
  "Utilize our multi-modal knowledge base to unlock insights across texts, databases, apps, and more.",
  "Enhance team productivity with AI that understands your organizational knowledge and workflows.",
  "Create intelligent search bots that navigate through help documents and enterprise apps effortlessly.",
  "Your AI is optimized for large-scale data, ready to bring context and clarity to your most complex datasets.",
  "Build and deploy generative AI models that revolutionize how your enterprise interacts with data.",
];
export function setRandomMessage() {
  const length = welcomeMessages.length;
  return welcomeMessages[Math.floor(Math.random() * length)];
}
