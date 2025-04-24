import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import {
  Heart,
  ChevronLeft,
  Share2,
  MapPin,
  Bed,
  Home,
  Ruler,
  Calendar,
  CheckCircle,
  MessageSquare,
} from "lucide-react-native";
import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";
import { layout } from "@/constants/layout";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { usePropertiesStore } from "@/store/properties-store";

const { width } = Dimensions.get("window");

export default function PropertyDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { properties, toggleFavorite } = usePropertiesStore();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  const formatPrice = (price: number, currency: string) => {
    return `${price.toLocaleString()} ${currency}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) => {
              const newIndex = Math.floor(
                event.nativeEvent.contentOffset.x / width
              );
              setActiveImageIndex(newIndex);
            }}
          >
            {property.images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.image}
                resizeMode="cover"
              />
            ))}
          </ScrollView>

          <View style={styles.imageIndicators}>
            {property.images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index === activeImageIndex && styles.activeIndicator,
                ]}
              />
            ))}
          </View>

          <View style={styles.headerButtons}>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => router.back()}
            >
              <ChevronLeft size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <View style={styles.headerRightButtons}>
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => toggleFavorite(property.id)}
              >
                <Heart
                  size={24}
                  color="#FFFFFF"
                  fill={property.isFavorite ? "#FFFFFF" : "none"}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerButton}>
                <Share2 size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ScrollView
          style={styles.detailsContainer}
          contentContainerStyle={styles.detailsContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{property.title}</Text>
            <View style={styles.locationContainer}>
              <MapPin size={16} color={colors.textSecondary} />
              <Text style={styles.location}>
                {property.address}, {property.city}
              </Text>
            </View>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>
              {formatPrice(property.price, property.currency)}
              <Text style={styles.priceUnit}> / month</Text>
            </Text>
            <Text style={styles.deposit}>
              Deposit: {formatPrice(property.deposit, property.currency)}
            </Text>
          </View>

          <View style={styles.featuresContainer}>
            <View style={styles.feature}>
              <View style={styles.featureIconContainer}>
                <Home size={20} color={colors.primary} />
              </View>
              <View>
                <Text style={styles.featureValue}>{property.rooms}</Text>
                <Text style={styles.featureLabel}>
                  {property.rooms === 1 ? "Room" : "Rooms"}
                </Text>
              </View>
            </View>

            <View style={styles.feature}>
              <View style={styles.featureIconContainer}>
                <Ruler size={20} color={colors.primary} />
              </View>
              <View>
                <Text style={styles.featureValue}>{property.size} m²</Text>
                <Text style={styles.featureLabel}>Size</Text>
              </View>
            </View>

            <View style={styles.feature}>
              <View style={styles.featureIconContainer}>
                <Calendar size={20} color={colors.primary} />
              </View>
              <View>
                <Text style={styles.featureValue}>
                  {formatDate(property.availableFrom)}
                </Text>
                <Text style={styles.featureLabel}>Available From</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{property.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Amenities</Text>
            <View style={styles.amenitiesContainer}>
              {property.amenities.map((amenity, index) => (
                <View key={index} style={styles.amenity}>
                  <CheckCircle size={16} color={colors.primary} />
                  <Text style={styles.amenityText}>{amenity}</Text>
                </View>
              ))}
            </View>
          </View>

          <Card style={styles.landlordCard} elevation={1}>
            <View style={styles.landlordInfo}>
              <Avatar
                source={property.landlordAvatar}
                name={property.landlordName}
                size="lg"
                showBadge
              />
              <View style={styles.landlordDetails}>
                <Text style={styles.landlordName}>{property.landlordName}</Text>
                <Text style={styles.landlordTitle}>Property Owner</Text>
              </View>
            </View>
            <Button
              title="Contact"
              variant="outline"
              size="sm"
              icon={<MessageSquare size={16} color={colors.primary} />}
              onPress={() => {
                // Handle contact landlord
              }}
            />
          </Card>
        </ScrollView>

        <View style={styles.footer}>
          <View style={styles.footerPriceContainer}>
            <Text style={styles.footerPrice}>
              {formatPrice(property.price, property.currency)}
            </Text>
            <Text style={styles.footerPriceUnit}>/ month</Text>
          </View>
          <Button
            title="Book Viewing"
            onPress={() => {
              // Handle booking
            }}
            fullWidth
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 300,
    position: "relative",
  },
  image: {
    width,
    height: 300,
  },
  imageIndicators: {
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: "#FFFFFF",
    width: 16,
  },
  headerButtons: {
    position: "absolute",
    top: 16,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  headerRightButtons: {
    flexDirection: "row",
  },
  detailsContainer: {
    flex: 1,
  },
  detailsContent: {
    padding: layout.spacing.lg,
    paddingBottom: 100, // Extra padding for footer
  },
  titleContainer: {
    marginBottom: layout.spacing.md,
  },
  title: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xl,
    color: colors.text,
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  priceContainer: {
    marginBottom: layout.spacing.lg,
  },
  price: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xxl,
    color: colors.primary,
  },
  priceUnit: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
  },
  deposit: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    marginTop: 4,
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: layout.spacing.lg,
  },
  feature: {
    alignItems: "center",
  },
  featureIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(74, 122, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  featureValue: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.md,
    color: colors.text,
    textAlign: "center",
  },
  featureLabel: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    textAlign: "center",
  },
  section: {
    marginBottom: layout.spacing.lg,
  },
  sectionTitle: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.lg,
    color: colors.text,
    marginBottom: layout.spacing.sm,
  },
  description: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.text,
    lineHeight: 24,
  },
  amenitiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  amenity: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    marginBottom: layout.spacing.sm,
  },
  amenityText: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.text,
    marginLeft: 8,
  },
  landlordCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: layout.spacing.lg,
  },
  landlordInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  landlordDetails: {
    marginLeft: layout.spacing.md,
  },
  landlordName: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.md,
    color: colors.text,
  },
  landlordTitle: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    padding: layout.spacing.lg,
    flexDirection: "row",
    alignItems: "center",
  },
  footerPriceContainer: {
    marginRight: layout.spacing.lg,
  },
  footerPrice: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.lg,
    color: colors.text,
  },
  footerPriceUnit: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
  },
});