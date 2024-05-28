import { Friend } from '../friends/friend';

export interface Transaction {
  sender: Friend;
  recipient: Friend;
  amount: number;
}
