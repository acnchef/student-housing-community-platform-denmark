import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Resource } from "@/types";
import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";
import { layout } from "@/constants/layout";
import { Card } from "./ui/Card";

interface ResourceCardProps {
  resource: Resource;
  onPress: (resource: Resource) => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  resource,
  onPress,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString([], {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPress(resource)}
      style={styles.container}
    >
      <Card style={styles.card} elevation={1}>
        <View style={styles.content}>
          {resource.thumbnail && (
            <Image
              source={{ uri: resource.thumbnail }}
              style={styles.thumbnail}
              resizeMode="cover"
            />
          )}
          <View style={styles.textContent}>
            <Text style={styles.category}>{resource.categoryName}</Text>
            <Text style={styles.title} numberOfLines={2}>
              {resource.title}
            </Text>
            <Text style={styles.description} numberOfLines={2}>
              {resource.description}
            </Text>
            <Text style={styles.date}>
              Updated {formatDate(resource.updatedAt)}
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: layout.spacing.md,
  },
  card: {
    padding: 0,
    overflow: "hidden",
  },
  content: {
    flexDirection: "row",
  },
  thumbnail: {
    width: 100,
    height: "100%",
  },
  textContent: {
    flex: 1,
    padding: layout.spacing.md,
  },
  category: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.xs,
    color: colors.primary,
    marginBottom: 4,
  },
  title: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.md,
    color: colors.text,
    marginBottom: 4,
  },
  description: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  date: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
  },
});