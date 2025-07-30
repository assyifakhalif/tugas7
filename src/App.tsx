import { Card, CardContent } from "@/components/ui/card";
import { APITester } from "./APITester";
import "@/public/styles/globals.css";

import logo from "@/public/images/logo.svg";
import reactLogo from "@/public/images/react.svg";

import { ProfileCard } from "@/components/ui/shared/ProfileCard";
import { profileData } from "@/data"

export function App() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      
      <Card className="bg-card/50 backdrop-blur-sm border-muted">
        <ProfileCard
        name={profileData.name}
        description={profileData.description}
        image={profileData.image}
        socialMedia={profileData.socialMedia}
      />
      </Card>
    </div>
  );
}

export default App;
