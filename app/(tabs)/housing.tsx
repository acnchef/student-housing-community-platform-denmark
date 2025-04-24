import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { Search, Filter, X } from "lucide-react-native";
import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";
import { layout } from "@/constants/layout";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/Button";
import { usePropertiesStore } from "@/store/properties-store";
import { Property } from "@/types";

export default function HousingScreen() {
  const router = useRouter();
  const {
    filteredProperties,
    isLoading,
    error,
    fetchProperties,
    toggleFavorite,
    setSearchQuery,
    searchQuery,
    clearFilters,
  } = usePropertiesStore();

  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const [showFilterModal, setShowFilterModal] = useState(false);

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  const handleSearch = () => {
    setSearchQuery(localSearchQuery);
  };

  const handleClearSearch = () => {
    setLocalSearchQuery("");
    setSearchQuery("");
  };

  const handlePropertyPress = (property: Property) => {
    router.push(`/property/${property.id}`);
  };

  const handleFavoritePress = (property: Property) => {
    toggleFavorite(property.id);
  };

  const renderProperty = ({ item }: { item: Property }) => (
    <PropertyCard
      property={item}
      onPress={handlePropertyPress}
      onFavoritePress={handleFavoritePress}
    />
  );

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <Button title="Try Again" onPress={fetchProperties} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color={colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for housing..."
            placeholderTextColor={colors.textSecondary}
            value={localSearchQuery}
            onChangeText={setLocalSearchQuery}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
          {localSearchQuery ? (
            <TouchableOpacity onPress={handleClearSearch}>
              <X size={20} color={colors.textSecondary} />
            </TouchableOpacity>
          ) : null}
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setShowFilterModal(true)}
        >
          <Filter size={20} color={colors.text} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProperties}
        renderItem={renderProperty}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No properties found</Text>
            <Text style={styles.emptyDescription}>
              Try adjusting your search or filters to find more options
            </Text>
            <Button title="Clear Filters" onPress={clearFilters} variant="outline" />
          </View>
        }
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <Text style={styles.resultCount}>
              {filteredProperties.length} properties found
            </Text>
          </View>
        }
      />

      {/* Filter Modal would go here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchContainer: {
    flexDirection: "row",
    padding: layout.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: layout.borderRadius.md,
    paddingHorizontal: layout.spacing.md,
    paddingVertical: layout.spacing.sm,
    marginRight: layout.spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.text,
    marginLeft: layout.spacing.sm,
    paddingVertical: layout.spacing.xs,
  },
  filterButton: {
    width: 44,
    height: 44,
    borderRadius: layout.borderRadius.md,
    backgroundColor: colors.card,
    justifyContent: "center",
    alignItems: "center",
  },
  listContent: {
    padding: layout.spacing.md,
    paddingBottom: layout.spacing.xxl,
  },
  listHeader: {
    marginBottom: layout.spacing.md,
  },
  resultCount: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: layout.spacing.xl,
  },
  errorText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.error,
    textAlign: "center",
    marginBottom: layout.spacing.lg,
  },
  emptyContainer: {
    padding: layout.spacing.xl,
    alignItems: "center",
  },
  emptyTitle: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.lg,
    color: colors.text,
    marginBottom: layout.spacing.sm,
  },
  emptyDescription: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: layout.spacing.lg,
  },
});