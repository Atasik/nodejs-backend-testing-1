import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    // Создаем один пост перед каждым тестом
    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const resPost = postsService.create(post);
    expect(resPost.text).toEqual(post.text);
  });

  it('should find a post', () => {
    const createdPost = postsService.create(post);
    const foundPost = postsService.find(createdPost.id);
    expect(foundPost?.text).toEqual(post.text)
  });
});