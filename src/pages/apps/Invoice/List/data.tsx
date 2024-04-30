// images
import avatarImg2 from "../../../../assets/images/users/avatar-9.jpg";
import avatarImg3 from "../../../../assets/images/users/avatar-3.jpg";
import avatarImg4 from "../../../../assets/images/users/avatar-4.jpg";
import avatarImg5 from "../../../../assets/images/users/avatar-5.jpg";
import avatarImg6 from "../../../../assets/images/users/avatar-6.jpg";

import project1 from "../../../../assets/images/projects/project-1.jpg";
import project2 from "../../../../assets/images/projects/project-2.jpg";

interface ChecklistsItems {
  id: number;
  title: string;
  completed: boolean;
}

interface AttachmentsItems {
  id: number;
  filename: string;
  size: string;
  image: string;
}

interface CommentsItems {
  id: number;
  author: string;
  text: string;
  posted_on: string;
  author_avatar: string;
}

export interface TaskItemTypes {
  id: number;
  title: string;
  assigned_to: string;
  assignee_avatar: string;
  due_date: string;
  completed: boolean;
  priority: string;
  stage: string;
  checklists: Array<ChecklistsItems>;
  description: string;
  attachments: Array<AttachmentsItems>;
  comments: Array<CommentsItems>;
}

const todayTasks: TaskItemTypes[] = [
  {
    id: 1,
    title: "Draft the new contract document for sales team",
    assigned_to: "Arya Stark",
    assignee_avatar: avatarImg2,
    due_date: "Today 10am",
    completed: false,
    priority: "High",
    stage: "Todo",
    checklists: [
      { id: 1, title: "Find out the old contract documents", completed: true },
      {
        id: 2,
        title: "Organize meeting sales associates to understand need in detail",
        completed: false,
      },
      {
        id: 3,
        title: "Make sure to cover every small details",
        completed: false,
      },
    ],
    description:
      // tslint:disable-next-line: max-line-length
      "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
    attachments: [
      { id: 1, filename: "sales-assets.zip", size: "2.3 MB", image: project1 },
      {
        id: 2,
        filename: "new-contarcts.docx",
        size: "1.3 MB",
        image: project2,
      },
    ],
    comments: [
      {
        id: 1,
        author: "Arya Stark",
        text: "Should I review the last 3 years legal documents as well?",
        posted_on: "4:30am",
        author_avatar: avatarImg2,
      },
      {
        id: 2,
        author: "Gary Somya",
        text: "@Arya FYI..I have created some general guidelines last year.",
        posted_on: "3:30am",
        author_avatar: avatarImg3,
      },
    ],
  },
  {
    id: 2,
    title: "iOS App home page",
    assigned_to: "James B",
    assignee_avatar: avatarImg3,
    due_date: "Today 4pm",
    completed: false,
    stage: "In-progress",
    priority: "High",
    checklists: [
      { id: 1, title: "Find out the old contract documents", completed: false },
      {
        id: 2,
        title: "Organize meeting sales associates to understand need in detail",
        completed: true,
      },
      {
        id: 3,
        title: "Make sure to cover every small details",
        completed: true,
      },
    ],
    description:
      // tslint:disable-next-line: max-line-length
      "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
    attachments: [
      { id: 1, filename: "sales-assets.zip", size: "2.3 MB", image: project1 },
      {
        id: 2,
        filename: "new-contarcts.docx",
        size: "1.3 MB",
        image: project2,
      },
    ],
    comments: [
      {
        id: 1,
        author: "Arya Stark",
        text: "Should I review the last 3 years legal documents as well?",
        posted_on: "4:30am",
        author_avatar: avatarImg2,
      },
      {
        id: 2,
        author: "Gary Somya",
        text: "@Arya FYI..I have created some general guidelines last year.",
        posted_on: "3:30am",
        author_avatar: avatarImg3,
      },
    ],
  },
  {
    id: 3,
    title: "Write a release note",
    assigned_to: "Kevin C",
    assignee_avatar: avatarImg4,
    due_date: "Today 4pm",
    completed: false,
    stage: "In-progress",
    priority: "Medium",
    checklists: [
      { id: 1, title: "Find out the old contract documents", completed: false },
      {
        id: 2,
        title: "Organize meeting sales associates to understand need in detail",
        completed: false,
      },
      {
        id: 3,
        title: "Make sure to cover every small details",
        completed: false,
      },
    ],
    description:
      // tslint:disable-next-line: max-line-length
      "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
    attachments: [
      { id: 1, filename: "sales-assets.zip", size: "2.3 MB", image: project1 },
      {
        id: 2,
        filename: "new-contarcts.docx",
        size: "1.3 MB",
        image: project2,
      },
    ],
    comments: [
      {
        id: 1,
        author: "Arya Stark",
        text: "Should I review the last 3 years legal documents as well?",
        posted_on: "4:30am",
        author_avatar: avatarImg2,
      },
      {
        id: 2,
        author: "Gary Somya",
        text: "@Arya FYI..I have created some general guidelines last year.",
        posted_on: "3:30am",
        author_avatar: avatarImg3,
      },
    ],
  },
];

const upcomingTasks: TaskItemTypes[] = [
  {
    id: 1,
    title: "Invite user to a project",
    assigned_to: "Arya Stark",
    assignee_avatar: avatarImg2,
    due_date: "Tomorrow 10am",
    stage: "Todo",
    completed: false,
    priority: "Low",
    checklists: [
      { id: 1, title: "Find out the old contract documents", completed: false },
      {
        id: 2,
        title: "Organize meeting sales associates to understand need in detail",
        completed: true,
      },
      {
        id: 3,
        title: "Make sure to cover every small details",
        completed: true,
      },
    ],
    description:
      // tslint:disable-next-line: max-line-length
      "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
    attachments: [
      { id: 1, filename: "sales-assets.zip", size: "2.3 MB", image: project1 },
      {
        id: 2,
        filename: "new-contarcts.docx",
        size: "1.3 MB",
        image: project2,
      },
    ],
    comments: [
      {
        id: 1,
        author: "Arya Stark",
        text: "Should I review the last 3 years legal documents as well?",
        posted_on: "4:30am",
        author_avatar: avatarImg2,
      },
      {
        id: 2,
        author: "Gary Somya",
        text: "@Arya FYI..I have created some general guidelines last year.",
        posted_on: "3:30am",
        author_avatar: avatarImg3,
      },
    ],
  },
  {
    id: 2,
    title: "Enable analytics tracking",
    assigned_to: "James B",
    assignee_avatar: avatarImg5,
    due_date: "27 Aug 10am",
    completed: false,
    stage: "Review",
    priority: "Low",
    checklists: [
      { id: 1, title: "Find out the old contract documents", completed: false },
      {
        id: 2,
        title: "Organize meeting sales associates to understand need in detail",
        completed: true,
      },
      {
        id: 3,
        title: "Make sure to cover every small details",
        completed: false,
      },
    ],
    description:
      // tslint:disable-next-line: max-line-length
      "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
    attachments: [
      { id: 1, filename: "sales-assets.zip", size: "2.3 MB", image: project1 },
      {
        id: 2,
        filename: "new-contarcts.docx",
        size: "1.3 MB",
        image: project2,
      },
    ],
    comments: [
      {
        id: 1,
        author: "Arya Stark",
        text: "Should I review the last 3 years legal documents as well?",
        posted_on: "4:30am",
        author_avatar: avatarImg2,
      },
      {
        id: 2,
        author: "Gary Somya",
        text: "@Arya FYI..I have created some general guidelines last year.",
        posted_on: "3:30am",
        author_avatar: avatarImg3,
      },
    ],
  },
  {
    id: 3,
    title: "Code HTML email template",
    assigned_to: "Kevin C",
    assignee_avatar: avatarImg6,
    due_date: "No Due Date",
    completed: false,
    stage: "Review",
    priority: "Medium",
    checklists: [
      { id: 1, title: "Find out the old contract documents", completed: true },
      {
        id: 2,
        title: "Organize meeting sales associates to understand need in detail",
        completed: true,
      },
      {
        id: 3,
        title: "Make sure to cover every small details",
        completed: false,
      },
    ],
    description:
      // tslint:disable-next-line: max-line-length
      "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
    attachments: [
      { id: 1, filename: "sales-assets.zip", size: "2.3 MB", image: project1 },
      {
        id: 2,
        filename: "new-contarcts.docx",
        size: "1.3 MB",
        image: project2,
      },
    ],
    comments: [
      {
        id: 1,
        author: "Arya Stark",
        text: "Should I review the last 3 years legal documents as well?",
        posted_on: "4:30am",
        author_avatar: avatarImg2,
      },
      {
        id: 2,
        author: "Gary Somya",
        text: "@Arya FYI..I have created some general guidelines last year.",
        posted_on: "3:30am",
        author_avatar: avatarImg3,
      },
    ],
  },
];

const otherTasks: TaskItemTypes[] = [
  {
    id: 1,
    title: "Coordinate with business development",
    assigned_to: "Arya Stark",
    assignee_avatar: avatarImg2,
    due_date: "No Due Date",
    stage: "Todo",
    completed: false,
    priority: "High",
    checklists: [
      { id: 1, title: "Find out the old contract documents", completed: false },
      {
        id: 2,
        title: "Organize meeting sales associates to understand need in detail",
        completed: true,
      },
      {
        id: 3,
        title: "Make sure to cover every small details",
        completed: false,
      },
    ],
    description:
      // tslint:disable-next-line: max-line-length
      "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
    attachments: [
      { id: 1, filename: "sales-assets.zip", size: "2.3 MB", image: project1 },
      {
        id: 2,
        filename: "new-contarcts.docx",
        size: "1.3 MB",
        image: project2,
      },
    ],
    comments: [
      {
        id: 1,
        author: "Arya Stark",
        text: "Should I review the last 3 years legal documents as well?",
        posted_on: "4:30am",
        author_avatar: avatarImg2,
      },
      {
        id: 2,
        author: "Gary Somya",
        text: "@Arya FYI..I have created some general guidelines last year.",
        posted_on: "3:30am",
        author_avatar: avatarImg3,
      },
    ],
  },
  {
    id: 2,
    title: "Kanban board design",
    assigned_to: "James B",
    assignee_avatar: avatarImg5,
    stage: "Review",
    due_date: "30 Aug 10am",
    completed: false,
    priority: "Low",
    checklists: [
      { id: 1, title: "Find out the old contract documents", completed: false },
      {
        id: 2,
        title: "Organize meeting sales associates to understand need in detail",
        completed: false,
      },
      {
        id: 3,
        title: "Make sure to cover every small details",
        completed: false,
      },
    ],
    description:
      // tslint:disable-next-line: max-line-length
      "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
    attachments: [
      { id: 1, filename: "sales-assets.zip", size: "2.3 MB", image: project1 },
      {
        id: 2,
        filename: "new-contarcts.docx",
        size: "1.3 MB",
        image: project2,
      },
    ],
    comments: [
      {
        id: 1,
        author: "Arya Stark",
        text: "Should I review the last 3 years legal documents as well?",
        posted_on: "4:30am",
        author_avatar: avatarImg2,
      },
      {
        id: 2,
        author: "Gary Somya",
        text: "@Arya FYI..I have created some general guidelines last year.",
        posted_on: "3:30am",
        author_avatar: avatarImg3,
      },
    ],
  },
  {
    id: 3,
    title: "Draft the new contract document for sales team",
    assigned_to: "Kevin C",
    assignee_avatar: avatarImg6,
    due_date: "No Due Date",
    stage: "Done",
    completed: false,
    priority: "Medium",
    checklists: [
      { id: 1, title: "Find out the old contract documents", completed: false },
      {
        id: 2,
        title: "Organize meeting sales associates to understand need in detail",
        completed: false,
      },
      {
        id: 3,
        title: "Make sure to cover every small details",
        completed: false,
      },
    ],
    description:
      // tslint:disable-next-line: max-line-length
      "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
    attachments: [
      { id: 1, filename: "sales-assets.zip", size: "2.3 MB", image: project1 },
      {
        id: 2,
        filename: "new-contarcts.docx",
        size: "1.3 MB",
        image: project2,
      },
    ],
    comments: [
      {
        id: 1,
        author: "Arya Stark",
        text: "Should I review the last 3 years legal documents as well?",
        posted_on: "4:30am",
        author_avatar: avatarImg2,
      },
      {
        id: 2,
        author: "Gary Somya",
        text: "@Arya FYI..I have created some general guidelines last year.",
        posted_on: "3:30am",
        author_avatar: avatarImg3,
      },
    ],
  },
  {
    id: 4,
    title: "Draft the new contract document for vendor Abc",
    assigned_to: "Kevin C",
    assignee_avatar: avatarImg6,
    due_date: "2 Sep 10am",
    completed: false,
    stage: "Done",
    priority: "Medium",
    checklists: [
      { id: 1, title: "Find out the old contract documents", completed: false },
      {
        id: 2,
        title: "Organize meeting sales associates to understand need in detail",
        completed: false,
      },
      {
        id: 3,
        title: "Make sure to cover every small details",
        completed: true,
      },
    ],
    description:
      // tslint:disable-next-line: max-line-length
      "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
    attachments: [
      { id: 1, filename: "sales-assets.zip", size: "2.3 MB", image: project1 },
      {
        id: 2,
        filename: "new-contarcts.docx",
        size: "1.3 MB",
        image: project2,
      },
    ],
    comments: [
      {
        id: 1,
        author: "Arya Stark",
        text: "Should I review the last 3 years legal documents as well?",
        posted_on: "4:30am",
        author_avatar: avatarImg2,
      },
      {
        id: 2,
        author: "Gary Somya",
        text: "@Arya FYI..I have created some general guidelines last year.",
        posted_on: "3:30am",
        author_avatar: avatarImg3,
      },
    ],
  },
];

interface Record {
  barcode: string;
  clientCode: string;
  clientName: string;
  doctorName: string;
  subtotal: number;
  reference: string;
  discount: number;
  total: number;
  paid: number;
  due: number;
  date: string;
  status: string;
}

const records: Record[] = [
  {
    barcode: "123456789012",
    clientCode: "C001",
    clientName: "John Doe",
    doctorName: "Dr. Smith",
    subtotal: 150.0,
    reference: "Ref001",
    discount: 15.0,
    total: 135.0,
    paid: 100.0,
    due: 35.0,
    date: "2024-04-29",
    status: "Pending",
  },
  {
    barcode: "987654321098",
    clientCode: "C002",
    clientName: "Jane Roe",
    doctorName: "Dr. Jones",
    subtotal: 200.0,
    reference: "Ref002",
    discount: 20.0,
    total: 180.0,
    paid: 180.0,
    due: 0.0,
    date: "2024-04-30",
    status: "Completed",
  },
  {
    barcode: "234567890123",
    clientCode: "C003",
    clientName: "Alice Johnson",
    doctorName: "Dr. Reynolds",
    subtotal: 300.0,
    reference: "Ref003",
    discount: 45.0,
    total: 255.0,
    paid: 255.0,
    due: 0.0,
    date: "2024-05-01",
    status: "Completed",
  },
  {
    barcode: "345678901234",
    clientCode: "C004",
    clientName: "Michael Bay",
    doctorName: "Dr. Hansen",
    subtotal: 250.0,
    reference: "Ref004",
    discount: 25.0,
    total: 225.0,
    paid: 100.0,
    due: 125.0,
    date: "2024-05-02",
    status: "Pending",
  },
  {
    barcode: "456789012345",
    clientCode: "C005",
    clientName: "Lisa Ray",
    doctorName: "Dr. Watson",
    subtotal: 180.0,
    reference: "Ref005",
    discount: 18.0,
    total: 162.0,
    paid: 162.0,
    due: 0.0,
    date: "2024-05-03",
    status: "Completed",
  },
  {
    barcode: "567890123456",
    clientCode: "C006",
    clientName: "Oscar Wild",
    doctorName: "Dr. Lee",
    subtotal: 220.0,
    reference: "Ref006",
    discount: 22.0,
    total: 198.0,
    paid: 150.0,
    due: 48.0,
    date: "2024-05-04",
    status: "Pending",
  },
  {
    barcode: "678901234567",
    clientCode: "C007",
    clientName: "Gary Oldman",
    doctorName: "Dr. Chang",
    subtotal: 190.0,
    reference: "Ref007",
    discount: 19.0,
    total: 171.0,
    paid: 171.0,
    due: 0.0,
    date: "2024-05-05",
    status: "Completed",
  },
  {
    barcode: "789012345678",
    clientCode: "C008",
    clientName: "Megan Fox",
    doctorName: "Dr. Zimmerman",
    subtotal: 210.0,
    reference: "Ref008",
    discount: 10.5,
    total: 199.5,
    paid: 199.5,
    due: 0.0,
    date: "2024-05-06",
    status: "Completed",
  },
  {
    barcode: "890123456789",
    clientCode: "C009",
    clientName: "Sophia Loren",
    doctorName: "Dr. Martinez",
    subtotal: 230.0,
    reference: "Ref009",
    discount: 23.0,
    total: 207.0,
    paid: 100.0,
    due: 107.0,
    date: "2024-05-07",
    status: "Pending",
  },
  {
    barcode: "901234567890",
    clientCode: "C010",
    clientName: "Bruce Wayne",
    doctorName: "Dr. Kent",
    subtotal: 500.0,
    reference: "Ref010",
    discount: 50.0,
    total: 450.0,
    paid: 300.0,
    due: 150.0,
    date: "2024-05-08",
    status: "Pending",
  },
];

export default records;

const allTasks = [...todayTasks, ...upcomingTasks, ...otherTasks];

export { todayTasks, upcomingTasks, otherTasks, allTasks };
