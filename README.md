# README

## 開発環境

### 各種バージョン
* Ruby 2.7
* Rails 6.0
* node 12.10
* mysql 5.7
* React 16.13
* TypeScript 3.9

### 開発手順
* api ( rail ディレクトリ )
  * `/server` ディレクトリに移動
  * bundle install
  * bundle exec bin/rails db:migrate
  * api server ( rails server ) 起動
    * `$ rails s`
* client 
  * `/client` ディレクトリに移動
  * web server 起動
    * `$ yarn dev`
  * フロントのアセットファイルをコンパイル
    * `$ yarn build`
      * web server で使用している webpack-dev-server がアセットファイルを監視してコンパイルしているので、基本的には使用しない

