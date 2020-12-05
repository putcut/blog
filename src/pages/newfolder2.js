import React from "react"
import { Helmet } from "react-helmet"

export default () => (
<Helmet>
  <script>
    {`
      fetch('https://newfolder2.putcut.net/images/', {
        mode: 'cors'
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(images) {
        for (let i = 0; i < images.length; i++) {
          const anchor = document.createElement( "a" );
          anchor.href = 'https://twitter.com/' + images[i]['profile_id'] + '/status/' + images[i]['tweet_id'];
          const image = new Image();
          image.src = images[i]['image_url'];
          anchor.appendChild(image);
          document.body.appendChild(anchor);
        }
        return true;
      });
    `}
  </script>
</Helmet>
)

