export class Post{
  title: string;
  love: number;
  content: string;
  createdAt: Date;

  constructor(title: string, content: string, love: number, createdAt: Date) {
    this.title = title;
    this.content = content;
    this.love = love;
    this.createdAt = createdAt;

  }
}
