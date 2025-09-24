export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  results: string[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  audioUrl: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  message: string;
}