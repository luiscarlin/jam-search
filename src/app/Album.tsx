"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AlbumProps = {
  url: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  name: string;
  artist: string;
  release_date: string;
};

export default function Album({
  url,
  image,
  name,
  artist,
  release_date,
}: AlbumProps) {
  return (
    <Card className="rounded-xl">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          {artist} - ${release_date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <a href={url}>
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={`${name} by ${artist} on Spotify`}
          />
        </a>
      </CardContent>
    </Card>
  );
}
