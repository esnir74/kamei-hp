# 有限会社 亀井工務店 Website

モダンで見やすいNext.jsベースの企業Webサイト

## プロジェクト概要

神奈川県平塚市で住宅建築、リフォーム、塗装を行う工務店の企業Webサイト。
既存サイトの情報構造を保ちながら、Next.js + TypeScript + Tailwind CSSを使用した
モダンなデザインと高いユーザビリティを実現しています。

## 技術スタック

- **フレームワーク**: Next.js 14 with App Router
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS + PostCSS
- **ホスティング**: Cloudflare Pages対応

## プロジェクト構成

```
kamei/
├── public/                 # 静的ファイル（画像など）
│   └── images/
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # ルートレイアウト
│   │   ├── page.tsx       # トップページ
│   │   ├── globals.css    # グローバルスタイル
│   │   ├── company/       # 会社概要
│   │   ├── team/          # スタッフ紹介
│   │   ├── subsidies/     # 補助金情報
│   │   ├── brand/
│   │   │   └── hokkori/   # ほっこりな家（新築ブランド）
│   │   ├── how-to-build/  # 家づくりのステップ
│   │   ├── reform/        # リフォーム
│   │   │   ├── page.tsx
│   │   │   ├── super-wall/
│   │   │   ├── exterior/
│   │   │   └── painting/
│   │   ├── works/         # 施工事例
│   │   ├── news/          # ニュース・イベント
│   │   └── contact/       # お問合せ
│   ├── components/        # React コンポーネント
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Section.tsx
│   │   ├── Card.tsx
│   │   ├── Button.tsx
│   │   └── Breadcrumb.tsx
│   ├── data/             # データファイル
│   │   ├── site.ts       # サイト設定
│   │   ├── navigation.ts # ナビゲーション構造
│   │   └── pages.ts      # ページメタデータ
│   └── lib/              # ユーティリティ
│       └── utils.ts      # ヘルパー関数
├── package.json
├── next.config.mjs
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── README.md
```

## ページ構成・URL対応表

| 既存URL | ページタイトル | 新しいルート | ファイル |
|---|---|---|---|
| `/page1` | ホーム | `/` | `src/app/page.tsx` |
| `/page7` | 会社概要 | `/company` | `src/app/company/page.tsx` |
| `/page6` | スタッフ紹介 | `/team` | `src/app/team/page.tsx` |
| `/page8` | 補助金情報 | `/subsidies` | `src/app/subsidies/page.tsx` |
| `/page2` | ほっこりな家 | `/brand/hokkori` | `src/app/brand/hokkori/page.tsx` |
| `/page3` | 家づくりのステップ | `/how-to-build` | `src/app/how-to-build/page.tsx` |
| `/20170703111520` | リフォーム | `/reform` | `src/app/reform/page.tsx` |
| `/20171204093612` | リフォーム施工事例 | `/works` | `src/app/works/page.tsx` |
| `/20240222102626` | スーパーウォール工法 | `/reform/super-wall` | `src/app/reform/super-wall/page.tsx` |
| `/20170705104601` | 外まわりリフォーム | `/reform/exterior` | `src/app/reform/exterior/page.tsx` |
| `/20180316113732` | 塗装 | `/reform/painting` | `src/app/reform/painting/page.tsx` |
| `/20180110115850` | イベント情報 | `/news` | `src/app/news/page.tsx` |
| `/form/kameikoumuten/page10` | お問合せ | `/contact` | `src/app/contact/page.tsx` |

## セットアップと実行

### 必須要件

- Node.js 18以上
- npm または yarn

### インストール

```bash
cd kamei
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
```

### 本番サーバー起動

```bash
npm start
```

## Cloudflare Pages へのデプロイ

### 前提条件

- Cloudflare アカウント
- GitHub アカウント

### デプロイ手順

1. **GitHub にリポジトリをプッシュ**
   ```bash
   git push origin main
   ```

2. **Cloudflare Pages で新規プロジェクト作成**
   - Cloudflare Dashboard にログイン
   - Pages を選択
   - "Deploy with Git" をクリック
   - GitHub リポジトリを選択

3. **ビルド設定**
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Environment variable**: 必要に応じて設定

4. **デプロイ**
   - 設定を確認して "Save and Deploy" をクリック

### GitHub Actions との連携

`git push` で自動的にデプロイするには、Cloudflare Pages の連携設定を確認してください。

## デザイン方針

- **モダン**: 古い企業サイト感を払拭した、現代的なデザイン
- **清潔**: 余白を広く取り、見やすいレイアウト
- **親しみやすい**: 工務店・地域企業に合わせた落ち着いた配色
- **信頼感**: プロフェッショナルで安心感のあるデザイン
- **レスポンシブ**: スマートフォン・タブレット・PCに対応

## コンポーネント一覧

### Button
```tsx
<Button variant="primary" size="lg">
  お問合せ
</Button>
```

### Card
```tsx
<Card variant="elevated">
  <h3>título</h3>
  <p>説明</p>
</Card>
```

### Section
```tsx
<Section title="セクションタイトル" description="説明文">
  {children}
</Section>
```

### Hero
```tsx
<Hero
  title="大見出し"
  subtitle="小見出し"
  description="説明文"
  variant="default"
/>
```

### Breadcrumb
```tsx
<Breadcrumb current="/company" />
```

## データ管理

### site.ts
サイト全体の設定情報（会社名、電話番号、SNS など）

### navigation.ts
ナビゲーション構造とパンくずリスト用のデータ

### pages.ts
各ページのメタデータと、施工事例などのコンテンツ

これらのファイルを更新することで、サイト全体の情報が管理されます。

## SEO 対策

- 各ページに `metadata` を設定
- 適切な見出し階層（h1, h2, h3）
- 画像の `alt` 属性
- メタディスクリプション
- オープングラフ（OG）タグ

## カスタマイズ

### 色の変更

`tailwind.config.ts` の `colors` セクションで色を変更できます。

```typescript
colors: {
  primary: { /* 変更 */ },
  secondary: { /* 変更 */ },
}
```

### フォント変更

`tailwind.config.ts` の `fontFamily` セクションで変更できます。

### ロゴの変更

`src/components/Header.tsx` のロゴセクションを編集してください。

## トラブルシューティング

### スクリプトエラー: "client" がページ上で見つかりません

Next.js 14 では、インタラクティブなコンポーネントに `'use client'` ディレクティブが必要です。
確認してください。

### ビルドエラー

```bash
npm run build
```

を実行して、ビルドエラーを確認してください。

## ライセンス

このプロジェクトは、有限会社 亀井工務店 の所有です。

## サポート

ご質問やサポートが必要な場合は、以下の連絡先までお問い合わせください。

- **電話**: 0463-31-6372
- **メール**: contact@kameikoumuten.co.jp

---

**作成日**: 2025年5月5日
**更新日**: 2025年5月5日
