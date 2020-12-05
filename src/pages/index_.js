import React from "react"
import { Link } from "gatsby"

export default () => (
<div style={{ margin: "8px" }}>
  <h1>putcut.net</h1>
  <p>
    これは私の個人ウェッブサイトです。ポートフォリオとも言うかもしれません。でもそんなちゃんとしたものでもない。
  </p>
  <h2>自分のこと</h2>
  <p>年齢: 26歳</p>
  <p>
    ゲーム、アニメ、マンガとかが好き。技術もまあ好き。でもどれも毎日やるほど好きじゃない。
  </p>
  <h2>ゲームのこと</h2>
  <p>競技プレイ歴: CoD/AVA/LoL/ポケモン/PUBG/Valorant</p>
  <p>
    PUBGは仕事やめて専念したりしてた。なんの成果もでなかったけど。今は適当にいろんなゲームしてます。
  </p>
  <h2>アニメのこと</h2>
  <p>
    SAO、SHIROBAKO、氷菓とかが好き。好きなアニメは何回も見てる。
  </p>
  <h2>マンガのこと</h2>
  <p>
    ハイキュー、よつばと、3月のライオンとか。気になったのを週1冊ペースで買ってる。ほぼKindle。
  </p>
  <h2>技術のこと</h2>
  <p>Java: 仕事でずっと触ってる。全然わからんけど。</p>
  <p>Python: 趣味で触ってる。なんも知らんけど。</p>
  <h2>作ったものとか</h2>
  <h3><a href="https://lookingforgg.jp/">Looking for GG</a></h3>
  <p>ゲーミングリクルートサイト。詳細は<a href="http://putcut.hatenablog.com/entry/2020/02/16/234526">Blog記事</a>を参照。ほぼ使われていない。</p>
  <h3><a href="https://gamingworth.net">GamingWorth</a></h3>
  <p>友人とやってるPodcast。好きなこと喋ってる。</p>
  <h3><a href="https://putcut.net/newfolder2">新しいフォルダー (2)</a></h3>
  <p>未成年は閲覧しないでください。</p>
  <h2>リンク</h2>
  <ul>
    <li><a href="https://twitter.com/putcutt">Twitter</a></li>
    <li><a href="https://www.twitch.tv/putcut">Twitch</a></li>
    <li><Link to="/blog/">Blog</Link></li>
    <li><a href="https://github.com/putcut">GitHub</a></li>
  </ul>
  <footer>© 2019 - putcut.net</footer>
</div>
)
