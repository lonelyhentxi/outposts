import {EnvironmentPlugin} from 'webpack';
import dotenv from 'dotenv';
import path from "path";

dotenv.config();
dotenv.config({
  path: path.resolve(__dirname, '../../.env')
});

// Export a configuration object
// See [Webpack's documentation](https://webpack.js.org/configuration/) for additional ideas of how to
// customize your build beyond what Angular provides.
module.exports = {
  plugins: [
    new EnvironmentPlugin([
      // Insert the keys to your environment variables here.
      'AUTH_ENDPOINT',
      'OUTPOSTS_WEB_AUTH_APPID'
    ])
  ]
}
