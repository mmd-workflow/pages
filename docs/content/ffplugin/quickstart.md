---
title: Quick Start
author:
  - name: MMD WorkFlow
sidebar: true
date: 2025-04-24
---

# クイックスタート

## 1. USD を用意する

`usdMMDPlugins` は、.pmm .pmx ファイルを
OpenUSD が扱えるようにするための拡張プラグインです。

まずは OpenUSD をビルドし、ビルド済みデータを用意する必要があります。
- https://github.com/PixarAnimationStudios/OpenUSD

リポジトリをクローンし、所定の手続きにしたがって OpenUSD をビルドしてください。
 
::: info
Windows 環境 + OpenUSD v24.11 の環境をご用意ください。  
今後、プラグインを様々なプラットフォーム・ USD バージョン向けに展開予定です。
:::


## 2. `usdMMDPlugins` を入手する

使用する USD のバージョンに対応する `usdMMDPlugins` をダウンロードしてください。

- [for USD v24.11, Windows x64](https://github.com/mmd-workflow/pages/releases/download/0.1.0/usdMMDPlugins-USD2411-8107b95-1.0.0-win64.tar.zst)

## 3. USD に `usdMMDPlugins` を追加する

USD に `usdMMDPlugins` を認識してもらうために、プラグインを決まった場所に配置します。

（ダウンロード後、解凍した usdMMDPlugins フォルダ内）plugin/usd の中にある

- `usdMMD （フォルダ）`
- `usdMMD.dll`

の2つを、

- `OpenUSD ビルド済みデータフォルダ\plugin\usd\` 

フォルダにコピーしてください。


## 4. プラグインの簡単な使い方

`usdMMDPlugins` の導入に成功していれば、.pmm .pmx ファイルを
あたかもそれがネイティブ usd ファイルかのように読み込むことが可能になります。

```sh
usdview path/to/model.pmx
```
```sh
usdview path/to/Scene.pmm
```
などのコマンドラインを使って、USD モデルプレビューワ上で .pmm .pmx シーンを見ることが出来ます。

また、

```sh
usdcat path/to/Scene.pmm
```
```sh
usdcat --flatten path/to/Scene.pmm -o path/to/Scene.usd
```
などのコマンドラインを使って、読み込まれた USD シーングラフを標準出力に表示したり、 `usdMMDPlugins` によって動的に生成された USD シーンを、単一の USD ファイルとして書きだす事が可能になります。
