export function homePath(): string {
  return "/";
}

export function topicShowPath(topicSlug: string): string {
  return `/topics/${topicSlug}`;
}

export function postCreatePath(topicSlug: string): string {
  return `/topics/${topicSlug}/posts/new`;
}

export function postShowPath(topicSlug: string, postId: string): string {
  return `/topics/${topicSlug}/posts/${postId}`;
}
