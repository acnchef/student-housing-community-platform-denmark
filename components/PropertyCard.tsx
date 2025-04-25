import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Heart, MapPin, Bed, Home, Ruler } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Property } from "@/types";
import { colors, gradients } from "@/constants/colors";
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

  const isFeatured = property.featured || property.premium;

  return (
    <TouchableOpacity
      activeOpacity={0.95}
      onPress={() => onPress(property)}
      style={styles.container}
    >
      <Card 
        style={styles.card} 
        elevation={2}
        variant={isFeatured ? 'gradient' : 'default'}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: property.images[0] }}
            style={styles.image}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['rgba(0,0,0,0.4)', 'transparent']}
            style={styles.imageOverlay}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0.6 }}
          />
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => onFavoritePress(property)}
          >
            <Heart
              size={20}
              color={property.isFavorite ? colors.error : "#FFFFFF"}
              fill={property.isFavorite ? colors.error : "none"}
              strokeWidth={2.5}
            />
          </TouchableOpacity>
          <View style={styles.badgeContainer}>
            {property.availableFrom && new Date(property.availableFrom) <= new Date() && (
              <Badge text="Available Now" variant="success" size="sm" />
            )}
            {isFeatured && (
              <View style={styles.badgeSpacing}>
                <Badge text="Featured" variant="primary" size="sm" />
              </View>
            )}
          </View>
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
            <MapPin size={14} color={colors.textSecondary} strokeWidth={2.5} />
            <Text style={styles.location} numberOfLines={1}>
              {property.address}, {property.city}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.featuresRow}>
            <View style={styles.feature}>
              <Home size={14} color={colors.textSecondary} strokeWidth={2.5} />
              <Text style={styles.featureText}>
                {property.rooms} {property.rooms === 1 ? "Room" : "Rooms"}
              </Text>
            </View>
            <View style={styles.feature}>
              <Ruler size={14} color={colors.textSecondary} strokeWidth={2.5} />
              <Text style={styles.featureText}>{property.size} m²</Text>
            </View>
            <View style={styles.feature}>
              <Bed size={14} color={colors.textSecondary} strokeWidth={2.5} />
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
    backgroundColor: colors.card,
  },
  imageContainer: {
    position: "relative",
    height: 180,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
  },
  favoriteButton: {
    position: "absolute",
    top: layout.spacing.sm,
    right: layout.spacing.sm,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 9999,
    padding: layout.spacing.sm,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  badgeContainer: {
    position: "absolute",
    top: layout.spacing.sm,
    left: layout.spacing.sm,
  },
  badgeSpacing: {
    marginTop: layout.spacing.xs,
  },
  content: {
    padding: layout.spacing.md,
    backgroundColor: colors.background,
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
    fontFamily: typography.fontFamily.semibold,
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
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: layout.spacing.sm,
  },
  featuresRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: layout.spacing.xs,
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