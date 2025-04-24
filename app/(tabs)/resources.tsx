import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import {
  Home,
  FileCheck,
  Stethoscope,
  GraduationCap,
  Bus,
  Wallet,
  Search,
} from "lucide-react-native";
import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";
import { layout } from "@/constants/layout";
import { ResourceCard } from "@/components/ResourceCard";
import { useResourcesStore } from "@/store/resources-store";
import { Resource } from "@/types";

export default function ResourcesScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const categoryId = params.category as string;

  const {
    resources,
    categories,
    isLoading,
    error,
    fetchResources,
    fetchCategories,
    getResourcesByCategory,
  } = useResourcesStore();

  useEffect(() => {
    fetchResources();
    fetchCategories();
  }, [fetchResources, fetchCategories]);

  const handleResourcePress = (resource: Resource) => {
    router.push(`/resource/${resource.id}`);
  };

  const getIconForCategory = (iconName: string) => {
    switch (iconName) {
      case "Home":
        return <Home size={24} color="#FFFFFF" />;
      case "FileCheck":
        return <FileCheck size={24} color="#FFFFFF" />;
      case "Stethoscope":
        return <Stethoscope size={24} color="#FFFFFF" />;
      case "GraduationCap":
        return <GraduationCap size={24} color="#FFFFFF" />;
      case "Bus":
        return <Bus size={24} color="#FFFFFF" />;
      case "Wallet":
        return <Wallet size={24} color="#FFFFFF" />;
      default:
        return <Home size={24} color="#FFFFFF" />;
    }
  };

  const displayedResources = categoryId
    ? getResourcesByCategory(categoryId)
    : resources;

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
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => {
            fetchResources();
            fetchCategories();
          }}
        >
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Resources</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Search size={20} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        <TouchableOpacity
          style={[
            styles.categoryButton,
            !categoryId && styles.activeCategoryButton,
          ]}
          onPress={() => router.push("/resources")}
        >
          <Text
            style={[
              styles.categoryText,
              !categoryId && styles.activeCategoryText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              categoryId === category.id && styles.activeCategoryButton,
            ]}
            onPress={() => router.push(`/resources?category=${category.id}`)}
          >
            <View style={styles.categoryIcon}>
              {getIconForCategory(category.icon)}
            </View>
            <Text
              style={[
                styles.categoryText,
                categoryId === category.id && styles.activeCategoryText,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={displayedResources}
        renderItem={({ item }) => (
          <ResourceCard resource={item} onPress={handleResourcePress} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.resourcesContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No resources found</Text>
            <Text style={styles.emptyDescription}>
              Try selecting a different category
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: layout.spacing.lg,
    paddingBottom: layout.spacing.md,
  },
  title: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xl,
    color: colors.text,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.card,
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesContainer: {
    paddingHorizontal: layout.spacing.lg,
    paddingBottom: layout.spacing.md,
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: layout.spacing.sm,
    paddingHorizontal: layout.spacing.md,
    marginRight: layout.spacing.md,
    borderRadius: layout.borderRadius.full,
    backgroundColor: colors.card,
  },
  activeCategoryButton: {
    backgroundColor: colors.primary,
  },
  categoryIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  categoryText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.sm,
    color: colors.text,
  },
  activeCategoryText: {
    color: "#FFFFFF",
  },
  resourcesContainer: {
    padding: layout.spacing.lg,
    paddingBottom: layout.spacing.xxl,
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
  retryButton: {
    paddingVertical: layout.spacing.sm,
    paddingHorizontal: layout.spacing.lg,
    backgroundColor: colors.primary,
    borderRadius: layout.borderRadius.md,
  },
  retryText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: "#FFFFFF",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: layout.spacing.xl,
    marginTop: layout.spacing.xxl,
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
  },
});