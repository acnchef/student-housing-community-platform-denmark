import { create } from "zustand";
import { Resource, ResourceCategory } from "@/types";
import { resources as mockResources, resourceCategories as mockCategories } from "@/mocks/resources";

interface ResourcesState {
  resources: Resource[];
  categories: ResourceCategory[];
  currentResource: Resource | null;
  isLoading: boolean;
  error: string | null;
  fetchResources: () => Promise<void>;
  fetchCategories: () => Promise<void>;
  fetchResourceById: (id: string) => Promise<void>;
  getResourcesByCategory: (categoryId: string) => Resource[];
  searchResources: (query: string) => Resource[];
}

export const useResourcesStore = create<ResourcesState>((set, get) => ({
  resources: [],
  categories: [],
  currentResource: null,
  isLoading: false,
  error: null,

  fetchResources: async () => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      set({
        resources: mockResources,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        isLoading: false,
      });
    }
  },

  fetchCategories: async () => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      set({
        categories: mockCategories,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        isLoading: false,
      });
    }
  },

  fetchResourceById: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      const resource = mockResources.find((r) => r.id === id) || null;

      set({
        currentResource: resource,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        isLoading: false,
      });
    }
  },

  getResourcesByCategory: (categoryId: string) => {
    return get().resources.filter((resource) => resource.categoryId === categoryId);
  },

  searchResources: (query: string) => {
    const searchTerm = query.toLowerCase();
    return get().resources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(searchTerm) ||
        resource.description.toLowerCase().includes(searchTerm) ||
        resource.content.toLowerCase().includes(searchTerm)
    );
  },
}));