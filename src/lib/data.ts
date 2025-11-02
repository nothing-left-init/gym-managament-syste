export type Member = {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  membershipPlan: 'Basic' | 'Premium' | 'VIP';
  status: 'Active' | 'Inactive' | 'Expired';
  avatar: string;
};

export const members: Member[] = [
  { id: '1', name: 'John Doe', email: 'john.doe@example.com', joinDate: '2023-01-15', membershipPlan: 'Premium', status: 'Active', avatar: 'avatar-1' },
  { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', joinDate: '2023-03-22', membershipPlan: 'Basic', status: 'Active', avatar: 'avatar-2' },
  { id: '3', name: 'Mike Johnson', email: 'mike.j@example.com', joinDate: '2022-11-01', membershipPlan: 'VIP', status: 'Expired', avatar: 'avatar-3' },
  { id: '4', name: 'Emily Davis', email: 'emily.d@example.com', joinDate: '2023-05-10', membershipPlan: 'Premium', status: 'Active', avatar: 'avatar-4' },
  { id: '5', name: 'Chris Lee', email: 'chris.l@example.com', joinDate: '2023-08-19', membershipPlan: 'Basic', status: 'Inactive', avatar: 'avatar-1' },
  { id: '6', name: 'Sarah Wilson', email: 'sarah.w@example.com', joinDate: '2023-09-05', membershipPlan: 'VIP', status: 'Active', avatar: 'avatar-2' },
];

export type Package = {
  id: string;
  name: string;
  price: number;
  duration: 'Monthly' | 'Quarterly' | 'Yearly';
};

export const packages: Package[] = [
    { id: 'pkg1', name: 'Basic Monthly', price: 30, duration: 'Monthly' },
    { id: 'pkg2', name: 'Premium Monthly', price: 50, duration: 'Monthly' },
    { id: 'pkg3', name: 'VIP Monthly', price: 80, duration: 'Monthly' },
    { id: 'pkg4', name: 'Basic Quarterly', price: 80, duration: 'Quarterly' },
    { id: 'pkg5', name: 'Premium Quarterly', price: 135, duration: 'Quarterly' },
    { id: 'pkg6', name: 'VIP Yearly', price: 800, duration: 'Yearly' },
];


export type Bill = {
  id: string;
  memberId: string;
  memberName: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Due' | 'Overdue';
  packageName: string;
};

export const bills: Bill[] = [
  { id: 'bill1', memberId: '1', memberName: 'John Doe', date: '2023-09-01', amount: 50, status: 'Paid', packageName: 'Premium Monthly' },
  { id: 'bill2', memberId: '2', memberName: 'Jane Smith', date: '2023-09-01', amount: 30, status: 'Paid', packageName: 'Basic Monthly' },
  { id: 'bill3', memberId: '4', memberName: 'Emily Davis', date: '2023-09-10', amount: 50, status: 'Due', packageName: 'Premium Monthly' },
  { id: 'bill4', memberId: '6', memberName: 'Sarah Wilson', date: '2023-08-05', amount: 80, status: 'Overdue', packageName: 'VIP Monthly' },
  { id: 'bill5', memberId: '1', memberName: 'John Doe', date: '2023-08-01', amount: 50, status: 'Paid', packageName: 'Premium Monthly' },
];

export type Notification = {
    id: string;
    title: string;
    message: string;
    date: string;
};
  
export const notifications: Notification[] = [
    { id: '1', title: 'Fee Reminder', message: 'This is a friendly reminder that your monthly fee is due on the 15th.', date: '2023-09-05' },
    { id: '2', title: 'Gym Holiday', message: 'The gym will be closed on Monday for a public holiday. Enjoy your day off!', date: '2023-08-28' },
    { id: '3', title: 'New Equipment!', message: 'Come check out our new set of dumbbells and squat racks!', date: '2023-08-15' },
];

export const revenueData = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 5000 },
    { month: 'Apr', revenue: 4500 },
    { month: 'May', revenue: 6000 },
    { month: 'Jun', revenue: 5500 },
  ];
  
export const membershipData = [
    { month: 'Jan', count: 120 },
    { month: 'Feb', count: 125 },
    { month: 'Mar', count: 140 },
    { month: 'Apr', count: 150 },
    { month: 'May', count: 165 },
    { month: 'Jun', count: 170 },
  ];
