export type RepoInfo = {
  name: string
  owner: string
  updatedStr: string
  description: string | null
  url: string
}
type PinnedRepoNode = {
  name: string
  description: string | null
  url: string
  pushedAt: string
  owner: {
    login: string
  }
}
export type PinnedRepoEdge = {
  node: PinnedRepoNode
}

type YoutubeSnippet = {
  channelId: string
  channelTitle: string
  /**Hashtags */
  description: string
  playlistId: string
  publishedAt: string
  title: string
  thumbnails: {
    default: {
      width: number
      height: number
      url: string
    },
    standard: {
      width: number
      height: number
      url: string
    }
    // like 3 more types...
  }
}
type YoutubeItem = {
  id: string
  snippet: YoutubeSnippet
  contentDetails: {
    videoId: string
    videoPublishedAt: string
  }
}
export type YoutubeApi = {
  etag: string
  items: YoutubeItem[]
}

export type VideoInfoItem = {
  videoId: string
  title: string
  hashtags: string
  publishedAtISO: string
  thumbnailUrl: string
}