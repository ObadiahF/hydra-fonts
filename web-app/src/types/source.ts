export default interface Source {
  name: string;
  lastUpdated: string;
  numOfGames: number;
  description: string;
  link: string;
  likes: number;
  dislike: number;
  comments: number;
  games: string[];
  tags: string[];
  id: number;
}
