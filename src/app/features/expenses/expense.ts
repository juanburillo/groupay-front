import { Friend } from '../friends/friend';

export interface Expense {
  id?: number;
  amount?: number;
  description?: string;
  date?: Date;
  friend?: Friend;
}
