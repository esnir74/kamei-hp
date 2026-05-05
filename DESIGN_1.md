# 亀井工務店 Website — Design Reference

> 写真と余白で信頼をつくる、静かな工務店サイト。  
> ベージュを基調に、木・紙・土・緑の温度を少し含ませる。抽象的な装飾ではなく、住まいの実感と現場の気配を前に出す。

## Theme

Light / Warm / Editorial / Local craft

このデザインは、日本のスタイリッシュな工務店サイトを参考にした、落ち着いた住宅・リフォーム向けのデザインシステム。  
過度な装飾、抽象アイコン、テンプレート風カードを避け、写真・余白・具体的な言葉で「ここに相談したら家をちゃんと見てくれそう」という印象をつくる。

参考にする方向性:

- 古谷野工務店: 施工事例を大きく見せる編集的な構成
- 福永工務店: 対話、自然素材、暮らしの背景を伝える柔らかい文章
- 坂根工務店: 歴史、地域性、家づくりへの思想を短い言葉で見せる
- 奥野工務店: 住宅性能や見学導線を整理した、情報設計の分かりやすさ

## Design Goal

亀井工務店のサイトでは、以下を最優先する。

- 地域の工務店としての安心感
- リフォーム・塗装・新築を相談しやすい雰囲気
- 施工事例と現場写真の見やすさ
- 具体的な困りごとから入れる導線
- ベージュ基調の温かさと、現代的な余白

避けたい印象:

- AI 生成っぽい抽象ヒーロー
- 汎用的なサービスカードが並ぶだけのサイト
- 青系の SaaS 的な清潔感
- 架空感のある実績数、スタッフ名、お客様の声
- グラデーション、絵文字、抽象アイコン、強い影

## Tokens — Colors

### Primary Palette

| Name | Value | Token | Role |
|---|---:|---|---|
| Washi Beige | `#f4efe5` | `--color-washi-beige` | 全体背景。生成りの紙のようなベース。 |
| Warm Sand | `#e8ddca` | `--color-warm-sand` | セクション背景、薄い面分け。 |
| Timber Brown | `#8a6a45` | `--color-timber-brown` | 木材感、ラベル、細い罫線、控えめなアクセント。 |
| Deep Forest | `#2f4a3a` | `--color-deep-forest` | CTA、重要リンク、信頼感を出すアクセント。 |
| Sumi Ink | `#1f1b17` | `--color-sumi-ink` | 見出し・本文の基本色。 |
| Soft Charcoal | `#4e4740` | `--color-soft-charcoal` | 補足文、メタ情報。 |
| Off White | `#fffaf1` | `--color-off-white` | カードやフォーム背景。 |

### Usage Rules

- ベースは `Washi Beige`。
- CTA は `Deep Forest` を基本にする。
- 茶色は広い面に使いすぎず、罫線・小見出し・タグに使う。
- 赤やオレンジは原則使わない。使う場合は注意喚起や季節のお知らせなど限定的にする。
- 白背景だけで構成せず、薄いベージュの層で温度を出す。

### Avoid

- 青・紫・シアン系のブランドカラー
- 派手なグラデーション
- 背景の装飾オーブ、抽象Blob
- 彩度の高いアクセント色の多用

## Tokens — Typography

### Font Stack

```css
--font-sans: "Noto Sans JP", "Hiragino Sans", "Yu Gothic", system-ui, sans-serif;
--font-serif: "Noto Serif JP", "Yu Mincho", "Hiragino Mincho ProN", serif;
```

### Typography Direction

本文は読みやすいゴシック。  
大きな見出しやコピーの一部にだけ明朝を使うと、工務店らしい落ち着きと余白が出る。

| Role | Size | Line Height | Weight | Use |
|---|---:|---:|---:|---|
| Caption | 12px | 1.6 | 500 | 日付、カテゴリ、補足ラベル |
| Body | 16px | 1.9 | 400 | 本文 |
| Body Large | 18px | 1.9 | 400 | リード文 |
| Section Title | 32px | 1.35 | 600 | セクション見出し |
| Hero Copy | 44-64px | 1.2 | 500 | トップコピー |
| Case Title | 22-28px | 1.5 | 600 | 施工事例タイトル |

### Heading Style

- 見出しは短く、左揃え。
- 英語ラベルは補助に留める。
- 「Works」「About」だけで終わらせず、日本語の意味を必ず添える。
- 大見出しは詩的にしすぎず、暮らしの実感がある言葉にする。

Good:

- 平塚で、手を入れながら長く住める家に。
- まず、家の状態を見ます。
- 図面の前に、暮らしを聞く。
- 雨の日だけ気になる。その違和感から見に行きます。
- 派手さより、毎日が落ち着くこと。

Avoid:

- 理想の住まいをトータルサポート
- 高品質なサービスを提供
- お客様に最適なプランをご提案
- 安心・安全・快適な暮らし

## Tokens — Spacing & Shape

### Layout

| Token | Value | Use |
|---|---:|---|
| `--page-max` | 1180px | メインコンテンツ幅 |
| `--page-wide` | 1360px | 写真中心セクション |
| `--section-y` | 88px | 通常セクション上下余白 |
| `--section-y-lg` | 120px | トップ・重要セクション |
| `--gap-sm` | 12px | 小要素間 |
| `--gap-md` | 24px | カード内・リスト間 |
| `--gap-lg` | 48px | カラム間 |
| `--gap-xl` | 72px | 大きなブロック間 |

### Radius & Shadow

| Element | Radius | Shadow |
|---|---:|---|
| 写真 | 0-8px | 原則なし |
| カード | 0-8px | 原則なし |
| ボタン | 999px または 4px | なし |
| フォーム | 4px | なし |

角丸は使ってよいが、丸すぎない。  
住宅系の柔らかさは角丸よりも、写真・余白・色で出す。

## Imagery

### Most Important Rule

このサイトは写真が主役。  
写真がない場合でも、抽象イラストや汎用アイコンで埋めない。

### Required Photo Types

- 外観写真
- 室内写真
- リフォーム前後
- 床、建具、窓、外壁、屋根などのディテール
- 職人の手元
- 道具、木材、養生、現場の空気が分かる写真
- 会社やスタッフの自然な写真

### Photo Treatment

- 自然光を活かす
- 彩度は少し抑える
- 影は自然なまま残す
- 人物はポーズ写真より作業中・会話中がよい
- 完成写真だけでなく、途中の現場写真も使う
- 画像の上に濃いグラデーションを重ねすぎない

### Placeholder Policy

写真未準備のときは、以下のように扱う。

- 「写真準備中」と明記する
- シンプルなベージュ面と罫線のみ
- アイコンや抽象イラストでごまかさない

## Components

### Header

Role: 最小限のナビゲーションと相談導線。

Style:

- 背景は `Washi Beige` または半透明の `Off White`
- ロゴは左
- ナビゲーションは右
- 電話番号または「相談する」を常時見える位置に置く
- 罫線は薄い茶系
- 高さは 72-88px

Navigation:

- ホーム
- 施工事例
- リフォーム
- ほっこりな家
- 会社情報
- お知らせ
- お問合せ

### Hero

Role: 亀井工務店らしさを一瞬で伝える。

Recommended Layout:

- 左にコピー、右または背景に大きな写真
- もしくは写真を全面に敷き、余白のある位置にコピーを置く
- コピーは短く、抽象的にしすぎない

Hero Copy Example:

```text
平塚で、
手を入れながら
長く住める家に。
```

Lead Example:

```text
小さな修繕、間取りの見直し、外壁塗装、新築まで。
家の状態を見ながら、必要な工事を一緒に整理します。
```

CTA:

- 住まいのことを相談する
- 施工事例を見る
- 電話で相談する

### Section Title

Role: ページの流れをつくる。

Style:

- 左揃え
- 小さなラベル + 日本語見出し
- 余白を広めに取る

Example:

```text
WORKS
最近の工事
```

ただし英語だけを見出しにしない。

### Work Card

Role: 施工事例の入口。

Content:

- 写真
- 事例タイトル
- 工事カテゴリ
- 相談内容
- 工夫した点
- タグ

Style:

- 写真を大きく
- 文字情報は詰め込みすぎない
- カード背景は透明または `Off White`
- 影は使わない
- 罫線または余白で区切る

Title Examples:

- つまずきやすかった和室の段差をなくす
- 掃除しやすく、明るいトイレへ
- 雨の日に気になっていた外壁まわりを点検・塗装
- 使っていない和室を、収納のある洋室に

### Service Entry

Role: 「何を頼めるか」ではなく「何に困っているか」から入る。

Categories:

- 段差・床・建具
- 水まわり
- 収納・間取り
- 外壁・屋根・塗装
- 断熱・寒さ・結露
- 新築・建て替え

Each entry should include:

- 困りごとの一言
- 対応できる工事
- 施工事例へのリンク

### CTA Block

Role: 相談の心理的ハードルを下げる。

Copy:

```text
まだ工事するか決まっていなくても大丈夫です。
気になる箇所を一緒に見ながら、先に直すところ、後でもよいところを整理します。
```

Buttons:

- フォームで相談する
- 電話する
- 写真を送って相談する

## Page Structure

### Home

1. Hero
   - 写真 + 短いコピー
   - 相談導線

2. Philosophy
   - 亀井工務店の姿勢
   - 「現場を見る」「暮らしを聞く」「必要な工事を整理する」

3. Works
   - 施工事例を大きめに表示
   - 1件目は大きく、残りはグリッド

4. Trouble-based Entries
   - 段差、寒さ、雨漏り、外壁、収納など

5. Hokkori House
   - 新築ブランド
   - 派手さより毎日を落ち着いて過ごせること

6. Company / People
   - 代表の言葉、現場写真、地域性

7. News
   - 運用できるお知らせだけ

8. Contact
   - 電話、フォーム、写真相談

### Works Page

- 写真一覧を中心にする
- カテゴリフィルタを置く
- 各事例は「相談内容」「工事内容」「工夫した点」を必須にする
- Before / After を見やすくする

### Reform Page

- 工事メニューではなく困りごと別に整理
- 「住みながらの工事」「日程」「音・ほこり」など生活への配慮を書く
- 補助金導線を自然に置く

### Company Page

- 会社概要だけで終わらせない
- どんな姿勢で現場を見るかを書く
- 代表・職人・事務所・道具などの写真を入れる

### Contact Page

- 入力項目は少なく
- 電話番号を見やすく
- 「うまく説明できなくても大丈夫」と書く
- 写真添付項目があるとよい

## Content Voice

### Tone

- 丁寧
- 少し会話に近い
- 具体的
- 押し売りしない
- 地域の工務店らしい距離感

### Use

- 「まずは状態を見ます」
- 「先に直すところ、後でもよいところを整理します」
- 「住みながらの工事も相談できます」
- 「写真だけでは分からないところもあります」
- 「小さな修繕からご相談ください」

### Avoid

- 「全力でサポート」
- 「最高品質」
- 「ワンストップで対応」
- 「お客様満足度」
- 「理想の住まい」
- 「幅広いサービス」

## Do's

- 写真を大きく使う
- ベージュ背景に黒・茶・深緑で落ち着きを出す
- 施工事例を編集記事のように見せる
- 相談の具体例を書く
- 余白と罫線で整える
- 地名、暮らし、現場の言葉を入れる
- 架空情報は入れない

## Don'ts

- 抽象的な SVG 装飾で埋める
- グラデーション背景を多用する
- 青系のコーポレートサイト風にする
- カードを均一に並べるだけにする
- 絵文字を使う
- 架空の実績数・スタッフ名・お客様の声を入れる
- 英語ラベルだけで雰囲気を出そうとする

## Implementation Notes

### CSS Direction

- `body` background: `#f4efe5`
- `main` sections: `#f4efe5`, `#e8ddca`, `#fffaf1`
- text: `#1f1b17`
- accent: `#2f4a3a`
- border: `rgba(31, 27, 23, 0.18)`
- box-shadow: 原則なし
- border-radius: 0-8px

### Layout Direction

- `.container-xl`: max-width 1180-1240px
- Hero only can use wider layout 1360px
- Section vertical padding: desktop 96-120px, mobile 56-72px
- Grid gap: 32-48px
- Work cards: image aspect ratio 4:3 or 3:2

### Component Direction

- Button primary: deep green background, off-white text
- Button secondary: border only
- Card: transparent or off-white, no shadow
- Tag: small text, thin border, muted color
- Header: simple, readable, sticky if needed

## Final Impression

「おしゃれな住宅会社」ではなく、「現場を分かっている工務店が、きれいに情報を整えたサイト」。

写真を見ると手仕事の気配があり、文章を読むと相談しやすい。  
ベージュの温かさはあるが、甘くなりすぎず、深緑と墨色で締める。  
リフォームも新築も、家の状態と暮らしの話から始められることが伝わるデザインにする。
