import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import type { SocialMediaProfile } from "@/interfaces"
import { Github, Linkedin } from "lucide-react"

interface Props {
  name: string
  description: string
  image: string
  socialMedia: SocialMediaProfile[]
}

export const ProfileCard = ({ name, description, image, socialMedia }: Props) => {
  return (
    <Card className="max-w-md w-full p-6 flex flex-col sm:flex-row items-center gap-4 shadow-xl rounded-xl bg-white">
      {/* <Avatar className="w-20 h-20">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar> */}
    <img src={image} alt={name} className="w-20 h-20 rounded-full object-cover" />
      <CardContent className="text-center sm:text-left p-0">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500 mb-4">{description}</p>
        <div className="flex justify-center sm:justify-start gap-2 flex-wrap">
          {socialMedia.map((media, idx) => (
            <a key={idx} href={media.url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex items-center gap-2">
                {media.name === "GitHub" && <Github className="w-4 h-4" />}
                {media.name === "LinkedIn" && <Linkedin className="w-4 h-4" />}
                {media.name}
              </Button>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
