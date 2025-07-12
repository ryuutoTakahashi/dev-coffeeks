図鑑アプリAPI構築手順（MVP）- DB + Terraform版
1. 開発環境セットアップ
技術スタック: Node.js (TypeScript) + AWS Lambda + API Gateway
データベース: PostgreSQL（開発用はローカルDB、本番はRDS）
ローカル開発: SAM CLI + PostgreSQL コンテナ
インフラ: Terraform（Lambda、API Gateway、RDS、VPC等）
2. MVP機能範囲
品種一覧取得API
品種詳細取得API
品種検索API（名前での検索）
3. 構築手順
Phase 1: データベース設計・構築
PostgreSQL コンテナの立ち上げ（Podman使用）
品種テーブルのDDL作成
マイグレーションスクリプトの作成
サンプルデータの投入
Phase 2: プロジェクト初期化
backend/apps/coffee-encyclopedia/ にSAMプロジェクトを初期化
TypeScript環境の構築
PostgreSQL接続ライブラリの設定（pg, prisma等）
Phase 3: API実装
データベース接続設定
品種一覧取得API (GET /varieties)
品種詳細取得API (GET /varieties/{id})
品種検索API (GET /varieties/search?name={name})
Phase 4: ローカル開発環境
SAM CLIでのローカル実行環境構築
PostgreSQLコンテナとLambdaの連携設定
動作確認とテスト
Phase 5: インフラ構築・デプロイ
Terraformでのインフラ定義
VPC、サブネット、セキュリティグループ
RDS（PostgreSQL）
Lambda関数
API Gateway
IAMロール・ポリシー
CloudWatch Logs
SAM templateの作成（Lambdaのデプロイ用）
環境変数の設定
Terraformでのインフラ構築
Lambdaのデプロイ
データベースマイグレーション実行