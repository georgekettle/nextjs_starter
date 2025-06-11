"use client"

import AppearanceToggle from "@/components/settings/appearance-toggle"
import SettingsLayout from "@/components/settings/settings-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import HeadingSmall from "@/components/heading-small"

export default function AppearanceSettingsPage() {
  return (
    <SettingsLayout>
      <div className="space-y-8">
        <HeadingSmall
          title="Appearance settings"
          description="Update your account's appearance settings"
        />
        <AppearanceToggle />
      </div>
    </SettingsLayout>
  )
} 