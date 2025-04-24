import { create } from "zustand";
import { Property } from "@/types";
import { properties as mockProperties } from "@/mocks/properties";

interface PropertiesState {
  properties: Property[];
  filteredProperties: Property[];
  isLoading: boolean;
  error: string | null;
  filters: {
    minPrice: number | null;
    maxPrice: number | null;
    minRooms: number | null;
    furnished: boolean | null;
    maxDistance: number | null;
  };
  searchQuery: string;
  fetchProperties: () => Promise<void>;
  toggleFavorite: (propertyId: string) => void;
  setFilters: (filters: Partial<PropertiesState["filters"]>) => void;
  applyFilters: () => void;
  setSearchQuery: (query: string) => void;
  clearFilters: () => void;
}

export const usePropertiesStore = create<PropertiesState>((set, get) => ({
  properties: [],
  filteredProperties: [],
  isLoading: false,
  error: null,
  filters: {
    minPrice: null,
    maxPrice: null,
    minRooms: null,
    furnished: null,
    maxDistance: null,
  },
  searchQuery: "",

  fetchProperties: async () => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      set({
        properties: mockProperties,
        filteredProperties: mockProperties,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        isLoading: false,
      });
    }
  },

  toggleFavorite: (propertyId: string) => {
    set((state) => {
      const updatedProperties = state.properties.map((property) =>
        property.id === propertyId
          ? { ...property, isFavorite: !property.isFavorite }
          : property
      );

      const updatedFilteredProperties = state.filteredProperties.map((property) =>
        property.id === propertyId
          ? { ...property, isFavorite: !property.isFavorite }
          : property
      );

      return {
        properties: updatedProperties,
        filteredProperties: updatedFilteredProperties,
      };
    });
  },

  setFilters: (filters) => {
    set((state) => ({
      filters: { ...state.filters, ...filters },
    }));
  },

  applyFilters: () => {
    set((state) => {
      const { filters, searchQuery, properties } = state;

      let filtered = [...properties];

      // Apply search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(
          (property) =>
            property.title.toLowerCase().includes(query) ||
            property.description.toLowerCase().includes(query) ||
            property.address.toLowerCase().includes(query) ||
            property.city.toLowerCase().includes(query)
        );
      }

      // Apply price filters
      if (filters.minPrice !== null) {
        filtered = filtered.filter((property) => property.price >= filters.minPrice!);
      }
      if (filters.maxPrice !== null) {
        filtered = filtered.filter((property) => property.price <= filters.maxPrice!);
      }

      // Apply rooms filter
      if (filters.minRooms !== null) {
        filtered = filtered.filter((property) => property.rooms >= filters.minRooms!);
      }

      // Apply furnished filter
      if (filters.furnished !== null) {
        filtered = filtered.filter((property) => property.furnished === filters.furnished);
      }

      // Apply distance filter
      if (filters.maxDistance !== null) {
        filtered = filtered.filter(
          (property) => property.distance! <= filters.maxDistance!
        );
      }

      return { filteredProperties: filtered };
    });
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    get().applyFilters();
  },

  clearFilters: () => {
    set({
      filters: {
        minPrice: null,
        maxPrice: null,
        minRooms: null,
        furnished: null,
        maxDistance: null,
      },
      searchQuery: "",
    });
    get().applyFilters();
  },
}));