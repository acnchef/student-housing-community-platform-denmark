import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { Home, MapPin, Bell, Search, ArrowRight } from "lucide-react-native";
import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";
import { layout } from "@/constants/layout";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { PropertyCard } from "@/components/PropertyCard";
import { useAuthStore } from "@/store/auth-store";
import { usePropertiesStore } from "@/store/properties-store";
import { useNotificationsStore } from "@/store/notifications-store";
import { Property } from "@/types";

export default function HomeScreen() {
  const router = useRouter();
  const { user } = useAuthStore();
  const { properties, fetchProperties, toggleFavorite } = usePropertiesStore();
  const { notifications, fetchNotifications } = useNotificationsStore();

  useEffect(() => {
    fetchProperties();
    fetchNotifications();
  }, [fetchProperties, fetchNotifications]);

  const featuredProperties = properties.slice(0, 3);
  const unreadNotifications = notifications.filter((n) => !n.read);

  const handlePropertyPress = (property: Property) => {
    router.push(`/property/${property.id}`);
  };

  const handleFavoritePress = (property: Property) => {
    toggleFavorite(property.id);
  };

  const renderFeaturedProperty = ({ item }: { item: Property }) => (
    <PropertyCard
      property={item}
      onPress={handlePropertyPress}
      onFavoritePress={handleFavoritePress}
    />
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, {user?.name.split(" ")[0]}</Text>
          <View style={styles.locationRow}>
            <MapPin size={16} color={colors.primary} />
            <Text style={styles.location}>Copenhagen, Denmark</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.notificationButton}
          onPress={() => router.push("/notifications")}
        >
          <Bell size={24} color={colors.text} />
          {unreadNotifications.length > 0 && (
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationCount}>
                {unreadNotifications.length}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => router.push("/housing")}
        activeOpacity={0.8}
      >
        <Search size={20} color={colors.textSecondary} />
        <Text style={styles.searchText}>Search for housing...</Text>
      </TouchableOpacity>

      {/* Welcome Card */}
      <Card style={styles.welcomeCard} elevation={2}>
        <View style={styles.welcomeCardContent}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeTitle}>Find Your Safe Home</Text>
            <Text style={styles.welcomeDescription}>
              Verified listings with secure deposit payments for international students
            </Text>
            <Button
              title="Explore Housing"
              onPress={() => router.push("/housing")}
              size="sm"
              icon={<ArrowRight size={16} color="#FFFFFF" />}
              iconPosition="right"
            />
          </View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
            }}
            style={styles.welcomeImage}
            resizeMode="cover"
          />
        </View>
      </Card>

      {/* Featured Properties */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Properties</Text>
        <TouchableOpacity onPress={() => router.push("/housing")}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={featuredProperties}
        renderItem={renderFeaturedProperty}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />

      {/* Community Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Community</Text>
        <TouchableOpacity onPress={() => router.push("/community")}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <Card style={styles.communityCard} elevation={1}>
        <Text style={styles.communityCardTitle}>
          Connect with other students
        </Text>
        <Text style={styles.communityCardDescription}>
          Join group chats to find roommates, get advice, and make friends
        </Text>
        <View style={styles.avatarRow}>
          <Avatar
            source="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            size="md"
            style={styles.communityAvatar}
          />
          <Avatar
            source="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            size="md"
            style={styles.communityAvatar}
          />
          <Avatar
            source="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            size="md"
            style={styles.communityAvatar}
          />
          <Avatar
            source="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            size="md"
            style={styles.communityAvatar}
          />
          <View style={styles.moreAvatarsContainer}>
            <Text style={styles.moreAvatarsText}>+24</Text>
          </View>
        </View>
        <Button
          title="Join Conversations"
          variant="outline"
          onPress={() => router.push("/community")}
          style={styles.communityButton}
          fullWidth
        />
      </Card>

      {/* Resources Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Resources</Text>
        <TouchableOpacity onPress={() => router.push("/resources")}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resourcesContainer}>
        <TouchableOpacity
          style={styles.resourceCard}
          onPress={() => router.push("/resources?category=1")}
        >
          <Home size={24} color={colors.primary} />
          <Text style={styles.resourceTitle}>Housing Guide</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.resourceCard}
          onPress={() => router.push("/resources?category=2")}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1586769852836-bc069f19e1be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
            }}
            style={styles.resourceImage}
            resizeMode="cover"
          />
          <Text style={styles.resourceTitle}>Visa & Residence</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    padding: layout.spacing.lg,
    paddingBottom: layout.spacing.xxl,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: layout.spacing.lg,
  },
  greeting: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xl,
    color: colors.text,
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  notificationButton: {
    position: "relative",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.card,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationCount: {
    fontFamily: typography.fontFamily.bold,
    fontSize: 10,
    color: "#FFFFFF",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: layout.borderRadius.md,
    paddingHorizontal: layout.spacing.md,
    paddingVertical: layout.spacing.md,
    marginBottom: layout.spacing.lg,
  },
  searchText: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    marginLeft: layout.spacing.sm,
  },
  welcomeCard: {
    marginBottom: layout.spacing.lg,
    overflow: "hidden",
    padding: 0,
  },
  welcomeCardContent: {
    flexDirection: "row",
    height: 160,
  },
  welcomeTextContainer: {
    flex: 1,
    padding: layout.spacing.md,
    justifyContent: "center",
  },
  welcomeTitle: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.lg,
    color: colors.text,
    marginBottom: 8,
  },
  welcomeDescription: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  welcomeImage: {
    width: "40%",
    height: "100%",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: layout.spacing.md,
    marginTop: layout.spacing.lg,
  },
  sectionTitle: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.lg,
    color: colors.text,
  },
  seeAllText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.sm,
    color: colors.primary,
  },
  communityCard: {
    marginBottom: layout.spacing.lg,
  },
  communityCardTitle: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.md,
    color: colors.text,
    marginBottom: 8,
  },
  communityCardDescription: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  avatarRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  communityAvatar: {
    marginRight: -8,
    borderWidth: 2,
    borderColor: colors.background,
  },
  moreAvatarsContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.card,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.background,
  },
  moreAvatarsText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  communityButton: {
    marginTop: 8,
  },
  resourcesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  resourceCard: {
    width: "48%",
    backgroundColor: colors.card,
    borderRadius: layout.borderRadius.md,
    padding: layout.spacing.md,
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    position: "relative",
    overflow: "hidden",
  },
  resourceImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.7,
  },
  resourceTitle: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.text,
    marginTop: 8,
    textAlign: "center",
  },
});