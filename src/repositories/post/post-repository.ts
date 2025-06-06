import { PostModel } from '@/models/posts/post-model';

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findAllPublic(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findBySlugPlublic(slug: string): Promise<PostModel>;
}
