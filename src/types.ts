export interface Media {
  id: number;
  type: "album" | "playlist" | "artist" | "chart";
  title: string;
  subtitle: string;
  artwork: string;
}

export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  artwork: string;
}

export interface LibraryPlaylist {
  id: number;
  title: string;
  description: string;
  artwork: string;
}
