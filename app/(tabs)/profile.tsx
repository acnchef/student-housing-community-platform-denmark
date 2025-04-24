import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { useRouter } from "expo-router";
import {
  User,
  Settings,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  CheckCircle,
} from "lucide-react-native";
import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";
import { layout } from "@/constants/layout";
import { Avatar } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useAuthStore } from "@/store/auth-store";

export default function ProfileScreen() {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  const handleLogout = () => {
    logout();
    router.replace("/auth/login");
  };

  if (!user) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading profile...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Avatar
            source={user.avatar}
            name={user.name}
            size="xl"
            showBadge={user.isVerified}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <View style={styles.verificationContainer}>
              {user.isVerified ? (
                <>
                  <CheckCircle size={16} color={colors.verified} />
                  <Text style={[styles.verificationText, styles.verifiedText]}>
                    Verified
                  </Text>
                </>
              ) : (
                <>
                  <Shield size={16} color={colors.unverified} />
                  <Text style={[styles.verificationText, styles.unverifiedText]}>
                    Unverified
                  </Text>
                </>
              )}
            </View>
          </View>
        </View>
        <Button
          title="Edit Profile"
          variant="outline"
          onPress={() => {
            // Handle edit profile
          }}
          size="sm"
        />
      </View>

      {!user.isVerified && (
        <Card style={styles.verificationCard} elevation={1}>
          <View style={styles.verificationCardContent}>
            <View>
              <Text style={styles.verificationCardTitle}>
                Verify Your Identity
              </Text>
              <Text style={styles.verificationCardDescription}>
                Complete identity verification to access all features and secure your
                transactions
              </Text>
            </View>
            <Button
              title="Verify Now"
              onPress={() => {
                // Handle verification
              }}
              size="sm"
            />
          </View>
        </Card>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <Card style={styles.menuCard} elevation={1}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuItemIcon, { backgroundColor: "#E6F7FF" }]}>
                <User size={20} color={colors.primary} />
              </View>
              <Text style={styles.menuItemText}>Personal Information</Text>
            </View>
            <ChevronRight size={20} color={colors.textSecondary} />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuItemIcon, { backgroundColor: "#FFF7E6" }]}>
                <Settings size={20} color="#FBBF24" />
              </View>
              <Text style={styles.menuItemText}>Account Settings</Text>
            </View>
            <ChevronRight size={20} color={colors.textSecondary} />
          </TouchableOpacity>

          <View style={styles.divider} />

          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuItemIcon, { backgroundColor: "#E6FFFA" }]}>
                <Bell size={20} color="#0D9488" />
              </View>
              <Text style={styles.menuItemText}>Notifications</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor="#FFFFFF"
            />
          </View>
        </Card>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <Card style={styles.menuCard} elevation={1}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuItemIcon, { backgroundColor: "#EDE9FE" }]}>
                <HelpCircle size={20} color="#8B5CF6" />
              </View>
              <Text style={styles.menuItemText}>Help & Support</Text>
            </View>
            <ChevronRight size={20} color={colors.textSecondary} />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuItemIcon, { backgroundColor: "#FEE2E2" }]}>
                <Shield size={20} color="#EF4444" />
              </View>
              <Text style={styles.menuItemText}>Privacy & Security</Text>
            </View>
            <ChevronRight size={20} color={colors.textSecondary} />
          </TouchableOpacity>
        </Card>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <LogOut size={20} color={colors.error} />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      <Text style={styles.versionText}>Version 1.0.0</Text>
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: layout.spacing.lg,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameContainer: {
    marginLeft: layout.spacing.md,
  },
  name: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.lg,
    color: colors.text,
    marginBottom: 4,
  },
  verificationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  verificationText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.sm,
    marginLeft: 4,
  },
  verifiedText: {
    color: colors.verified,
  },
  unverifiedText: {
    color: colors.unverified,
  },
  verificationCard: {
    marginBottom: layout.spacing.lg,
  },
  verificationCardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  verificationCardTitle: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.md,
    color: colors.text,
    marginBottom: 4,
  },
  verificationCardDescription: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    maxWidth: "80%",
  },
  section: {
    marginBottom: layout.spacing.lg,
  },
  sectionTitle: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.md,
    color: colors.text,
    marginBottom: layout.spacing.sm,
  },
  menuCard: {
    padding: 0,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: layout.spacing.md,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: layout.spacing.md,
  },
  menuItemText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.text,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginHorizontal: layout.spacing.md,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: layout.spacing.md,
    marginTop: layout.spacing.lg,
    marginBottom: layout.spacing.md,
  },
  logoutText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.error,
    marginLeft: layout.spacing.sm,
  },
  versionText: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
    textAlign: "center",
  },
});