import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";
import { layout } from "@/constants/layout";
import { useResourcesStore } from "@/store/resources-store";

export default function ResourceDetailScreen() {
  const { id } = useLocalSearchParams();
  const { currentResource, isLoading, error, fetchResourceById } = useResourcesStore();

  useEffect(() => {
    if (id) {
      fetchResourceById(id as string);
    }
  }, [id, fetchResourceById]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (error || !currentResource) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          {error || "Resource not found"}
        </Text>
      </View>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Simple markdown-like rendering for content
  const renderContent = () => {
    const lines = currentResource.content.split("\n");
    return lines.map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <Text key={index} style={styles.heading1}>
            {line.substring(2)}
          </Text>
        );
      } else if (line.startsWith("## ")) {
        return (
          <Text key={index} style={styles.heading2}>
            {line.substring(3)}
          </Text>
        );
      } else if (line.startsWith("### ")) {
        return (
          <Text key={index} style={styles.heading3}>
            {line.substring(4)}
          </Text>
        );
      } else if (line.startsWith("- ")) {
        return (
          <Text key={index} style={styles.listItem}>
            {"\u2022 "}{line.substring(2)}
          </Text>
        );
      } else if (line.trim() === "") {
        return <View key={index} style={styles.spacer} />;
      } else {
        return (
          <Text key={index} style={styles.paragraph}>
            {line}
          </Text>
        );
      }
    });
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: currentResource.title,
        }}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {currentResource.thumbnail && (
          <Image
            source={{ uri: currentResource.thumbnail }}
            style={styles.thumbnail}
            resizeMode="cover"
          />
        )}

        <View style={styles.header}>
          <Text style={styles.category}>{currentResource.categoryName}</Text>
          <Text style={styles.title}>{currentResource.title}</Text>
          <Text style={styles.date}>
            Updated {formatDate(currentResource.updatedAt)}
          </Text>
        </View>

        <View style={styles.content}>{renderContent()}</View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
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
  },
  thumbnail: {
    width: "100%",
    height: 200,
  },
  header: {
    padding: layout.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  category: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.sm,
    color: colors.primary,
    marginBottom: layout.spacing.xs,
  },
  title: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xxl,
    color: colors.text,
    marginBottom: layout.spacing.sm,
  },
  date: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  content: {
    padding: layout.spacing.lg,
  },
  heading1: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xxl,
    color: colors.text,
    marginBottom: layout.spacing.md,
    marginTop: layout.spacing.lg,
  },
  heading2: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xl,
    color: colors.text,
    marginBottom: layout.spacing.sm,
    marginTop: layout.spacing.md,
  },
  heading3: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.lg,
    color: colors.text,
    marginBottom: layout.spacing.sm,
    marginTop: layout.spacing.md,
  },
  paragraph: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.text,
    lineHeight: 24,
    marginBottom: layout.spacing.sm,
  },
  listItem: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.text,
    lineHeight: 24,
    marginBottom: layout.spacing.xs,
    paddingLeft: layout.spacing.md,
  },
  spacer: {
    height: layout.spacing.sm,
  },
});