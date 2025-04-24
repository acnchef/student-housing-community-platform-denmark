import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Heart, MapPin, Bed, Home, Ruler } from "lucide-react-native";
import { Property } from "@/types";
import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";
import { layout } from "@/constants/layout";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";

interface PropertyCardProps {
  property: Property;
  onPress: (property: Property) => void;
  onFavoritePress: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onPress,
  onFavoritePress,
}) => {
  const formatPrice = (price: number, currency: string) => {
    return `${price.toLocaleString()} ${currency}`;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPress(property)}
      style={styles.container}
    >
      <Card style={styles.card} elevation={2}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: property.images[0] }}
            style={styles.image}
            resizeMode="cover"
          />
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => onFavoritePress(property)}
          >
            <Heart
              size={20}
              color={property.isFavorite ? colors.error : "#FFFFFF"}
              fill={property.isFavorite ? colors.error : "none"}
            />
          </TouchableOpacity>
          {property.availableFrom && new Date(property.availableFrom) <= new Date() && (
            <View style={styles.badgeContainer}>
              <Badge text="Available Now" variant="success" size="sm" />
            </View>
          )}
        </View>

        <View style={styles.content}>
          <View style={styles.priceRow}>
            <Text style={styles.price}>
              {formatPrice(property.price, property.currency)}
            </Text>
            <Text style={styles.period}>/month</Text>
          </View>

          <Text style={styles.title} numberOfLines={1}>
            {property.title}
          </Text>

          <View style={styles.locationRow}>
            <MapPin size={14} color={colors.textSecondary} />
            <Text style={styles.location} numberOfLines={1}>
              {property.address}, {property.city}
            </Text>
          </View>

          <View style={styles.featuresRow}>
            <View style={styles.feature}>
              <Home size={14} color={colors.textSecondary} />
              <Text style={styles.featureText}>
                {property.rooms} {property.rooms === 1 ? "Room" : "Rooms"}
              </Text>
            </View>
            <View style={styles.feature}>
              <Ruler size={14} color={colors.textSecondary} />
              <Text style={styles.featureText}>{property.size} m²</Text>
            </View>
            <View style={styles.feature}>
              <Bed size={14} color={colors.textSecondary} />
              <Text style={styles.featureText}>
                {property.furnished ? "Furnished" : "Unfurnished"}
              </Text>
            </View>
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
  imageContainer: {
    position: "relative",
    height: 160,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  favoriteButton: {
    position: "absolute",
    top: layout.spacing.sm,
    right: layout.spacing.sm,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 9999,
    padding: layout.spacing.sm,
  },
  badgeContainer: {
    position: "absolute",
    top: layout.spacing.sm,
    left: layout.spacing.sm,
  },
  content: {
    padding: layout.spacing.md,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: layout.spacing.xs,
  },
  price: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.lg,
    color: colors.primary,
  },
  period: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  title: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.text,
    marginBottom: layout.spacing.xs,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: layout.spacing.sm,
  },
  location: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginLeft: 4,
    flex: 1,
  },
  featuresRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
  },
  featureText: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
    marginLeft: 4,
  },
});