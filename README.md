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

* 最初のみ実行
  * node package をインストールしてフロント環境を構築
    * `$ yarn install`
      * 以降は package を追加するたびに実行
* 毎回実行
  * rails server 起動
    * `$rails s`
  * web server 起動
    * `$ yarn dev`
  * フロントのアセットファイルをコンパイル
    * `$ yarn build`
    * web server で使用している webpack-dev-server がアセットファイルを監視してコンパイルしているので、基本的には使用しない

