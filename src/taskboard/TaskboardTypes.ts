//extra fields added
export interface TaskboardItem {
  id: string;
  name: string,
  title: string;
  description: string;
  updates: string;
  startDate: string;
  endDate: string;
}

export enum TaskboardItemStatus {
  TO_DO = 'To Do',
  IN_PROGRESS = 'In Progress',
  DONE = 'Done',
}
