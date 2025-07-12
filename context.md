## コーヒー味評価アプリ（品種図鑑含む）：仕様・開発環境テンプレート

### 1. アプリ概要

* アプリ名：**Coffeeks（コフィークス）**

  * 「Coffee」＋「Books / Index / Stacks」の造語
  * コーヒー図鑑・記録・共有に特化した覚えやすく個性的な名称

* 本アプリは、ユーザーがコーヒーの味を評価・記録・共有するためのアプリケーションです。

* ユーザーはコーヒーの風味、酸味、甘み、後味などの観点でCEOのカッピングシートをもとに点数評価・コメント投稿が可能です。

* いいね！やコメント機能を付けてコミュニケーションできる場を提供

* また、サブ機能として「コーヒー図鑑」も実装し、品種、精製、生産国に関する情報を学びながら記録と連携可能にします。

---

### 2. 主な機能

#### 2-1 味評価機能（個人記録）

* COE（Cup of Excellence）形式のカッピングシートでスコア入力
* 一覧表示・検索・編集・削除

- 投稿の公開
- いいね・コメント
- 検索（生産国、品種、焙煎度など）（以下の「品種図鑑機能機能に飛ぶ」）

#### 2-2. 品種図鑑機能（サブ機能）

* 品種ごとの詳細ページ（名前、生産国、特徴、精製方法など）
* 検索（品種名）
* 品種一覧機能
* 品種詳細機能

---

### 3. 技術スタック

#### フロントエンド

* Nuxt 3（Vue 3） + TypeScript

#### バックエンド

* 味評価機能：Java（Spring Boot）＋ ECS Fargate
* 各種図鑑機能：Node.js（TypeScript）＋ AWS Lambda(APIgateway) 

#### インフラ／IaC

* Terraform によるリソース定義（ECS, Lambda, API Gateway, S3など）
* S3（静的データや画像保存）
* CloudWatch Logs（モニタリング）

---

### 4. 開発環境

* Lambda機能【品種図鑑機能】のローカル開発においては、AWS公式のSAM CLI（Serverless Application Model CLI）を使用する。

  * `sam local start-api` でAPI Gatewayを模したローカルエンドポイントを立て、Nuxt 3などのフロントエンドと連携可能。
  * 本番ではAPI Gateway + AWS Lambda構成にそのままデプロイ可能。

* コンテナ管理方針：以下の構成に基づき、開発環境の一部を Podman / podman-compose によりコンテナ管理する。

  * ✅ Podman管理対象：

    * `db/`：PostgreSQL永続化DB（開発用）
    * `apps/backend/coffee-tasting/`：Spring Bootアプリケーション（味評価機能）
  * ❌ Podman管理対象外：

    * `apps/backend/coffee-encyclopedia/`：AWS Lambdaで実行（Podmanでは管理しない）
    * `apps/frontend/`：ローカル開発では `npm run dev` を使用。本番はS3+CloudFrontで静的ホスティングを予定

* OS: Windows 11

* エディタ: VSCode / Cursor

* バージョン管理: GitHub

* デプロイ: AWS CDK or Terraform

* リポジトリ構成: Monorepo形式

#### 4.1 ディレクトリ構成（Monorepo例）

```
coffeeks/
├── frontend/
│   └── apps/
│       ├── coffee-encyclopedia/     # Nuxt 3（品種図鑑・精製図鑑・生産国）
│       └── coffee-tasting/          # Nuxt 3（味評価機能フロント）
├── backend/
│   └── apps/
│       ├── coffee-tasting/          # 味評価機能（Spring Boot）
│       └── coffee-encyclopedia/     # 品種図鑑機能（Lambda＋API Gateway）
├── db/                              # データベース関連（DDL/マイグレーション/サンプルデータ）
├── infra/                           # Terraform構成
└── README.md
```

---
