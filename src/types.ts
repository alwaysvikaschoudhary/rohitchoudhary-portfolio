export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  behanceUrl: string;
  tags: string[];
  category: 'App' | 'Web' | 'Graphics';
  tools: string[];
  deliverables?: string[];
  metrics?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  type: 'experience' | 'education';
}

export interface ToolItem {
  name: string;
  category: 'design' | 'prototyping' | 'productivity';
  color: string;
  iconName: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
