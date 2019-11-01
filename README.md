# レガシーフロントエンド安全改善ガイド サンプルコード

書籍「レガシーフロントエンド安全改善ガイド」内の「実践編」で利用するサンプルコードリポジトリです。

## ブランチの意味

本リポジトリのブランチは次のように対応しています。

- [`master`](https://github.com/mugi-uno/anzen-kaizen-guide) : 改善前のレガシーコード
- [`after`](https://github.com/mugi-uno/anzen-kaizen-guide/tree/after) : 改善後のコード

`after` ブランチのコミットログが章毎の実践編の対応後コードと対応しています。  
https://github.com/mugi-uno/anzen-kaizen-guide/commits/after

## ライブラリのバージョン差異に関して

書籍内ではライブラリのインストール時にバージョン指定がないため、基本的に最新版がインストールされます。
ただし、一部のライブラリに関しては、執筆時から更新されており期待通り動作しない恐れがあります。
例として、`puppeteer` のメジャーバージョン差異でビジュアルテストが失敗するケースを確認しております。

問題が発生した際には、次の手順を参考にバージョンを指定した再インストールをお試しください。
なお以下に掲載しているものは `puppeteer` を再インストールする例です。適宜ライブラリ名を置き換えてください。

### 1. 指定ライブラリをアンインストール

```
npm uninstall puppeteer
```

### 2. サンプルコードでの該当ライブラリのバージョンを確認

サンプルコード上のpackage.jsonの内容を確認  
https://github.com/mugi-uno/anzen-kaizen-guide/blob/after/package.json

```
...
puppeteer": "^1.16.0",
...
```

→ バージョンは `^1.16.0`

### 3. バージョンを指定してインストール

```
npm install -D puppeteer@^1.16.0
```

## 正誤表

（誤りがあった場合はここに記載されます。）
