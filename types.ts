export enum UserRole {
  GUEST = 'GUEST',
  CUSTOMER = 'CUSTOMER',
  WRITER = 'WRITER',
  AGENT = 'AGENT'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  // Specific fields based on role could be expanded here
  balance?: number; // For agents
  preferences?: string[]; // For writers
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  priceRange: string; // Hidden for guests
  icon: string;
  category: 'counselling' | 'ghostwriting' | 'package';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., "Full-time Nurse Student"
  content: string;
  rating: number;
}

export type OrderStatus = 'in_progress' | 'drafting' | 'review' | 'completed';

export interface OrderMilestone {
  step: number;
  label: string;
  description: string;
  isComplete: boolean;
  isCurrent: boolean;
  date?: string;
}

export interface OrderItem {
  id: string;
  orderNumber: string;
  subjectCode: string;
  title: string;
  status: OrderStatus;
  words: number;
  progressPercent: number;
  assignedWriter: string;
  writerCredentials: string;
  dueDate: string;
  lastUpdated: string;
  turnitinScore?: string;
  notes?: string;
  milestones: OrderMilestone[];
}
