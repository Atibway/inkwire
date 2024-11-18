"use client";

import create from 'zustand';


// Define the Subscriber type to match the data structure
interface Subscriber {
  id: string;
  source: string;
  newsLetterOwnerId: string;
  email: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define a Zustand store
interface SubscriberStore {
  data: Subscriber[];
  loading: boolean;
  getSubscribers: (userId: string) => void;
  setLoading: (value: boolean) => void;
}

export const useSubscriberStore = create<SubscriberStore>((set) => ({
  data: [],
  loading: true,
  getSubscribers: async () => {
    set({ loading: true });
    try {
      const response = await fetch(`/api/subscribers`);
      const data = await response.json();
      set({ data });
    } catch (error) {
      console.error("Error fetching subscribers:", error);
    } finally {
      set({ loading: false });
    }
  },
  setLoading: (value: boolean) => set({ loading: value }),
}));


