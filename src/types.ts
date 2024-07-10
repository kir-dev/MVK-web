export type SlideshowVideoData = {
  title: string;
  id: string;
};
export type teamData = {
  nev: string;
  thumbnail: string;
  leiras: string;
};
export interface SharedPageProps {
  draftMode: boolean;
  token: string;
  messages: Record<string, string>;
}
