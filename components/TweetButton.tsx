type TweetButtonProps = {
  text: string
  url: string
}

const TweetButton = (props: TweetButtonProps) => {
  const { text, url } = props
  const _url = new URL("https://twitter.com/intent/tweet")
  _url.searchParams.set("text", text)
  _url.searchParams.set("url", url)
  return (
    <a
      className="px-2 bg-twitter text-white font-semibold rounded hover:text-white"
      href={_url.toString()}
    >
      Tweet
    </a>
  )
}

export default TweetButton