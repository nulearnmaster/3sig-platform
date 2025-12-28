-- 3SIG News Intelligence Pipeline Schema
-- Created: 2025.12.28

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- raw_news
CREATE TABLE raw_news (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  source VARCHAR(50) NOT NULL,
  source_id VARCHAR(255),
  source_url TEXT,
  title TEXT NOT NULL,
  content TEXT,
  author VARCHAR(255),
  published_at TIMESTAMPTZ,
  category VARCHAR(50),
  subcategory VARCHAR(50),
  tags TEXT[],
  language VARCHAR(10) DEFAULT 'en',
  score INT,
  comments_count INT,
  analyzed BOOLEAN DEFAULT FALSE,
  CONSTRAINT unique_source UNIQUE(source, source_id)
);

CREATE INDEX idx_raw_news_source ON raw_news(source);
CREATE INDEX idx_raw_news_created ON raw_news(created_at DESC);

-- analyzed_news
CREATE TABLE analyzed_news (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  raw_news_id UUID REFERENCES raw_news(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  priority VARCHAR(20),
  sentiment VARCHAR(20),
  trend_signal FLOAT,
  relevance_score INT,
  summary TEXT,
  key_insights TEXT[],
  entities JSONB,
  blog_potential BOOLEAN DEFAULT FALSE,
  threads_potential BOOLEAN DEFAULT FALSE,
  product_potential BOOLEAN DEFAULT FALSE,
  analyzed_by VARCHAR(100)
);

-- blog_posts
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  title TEXT NOT NULL,
  slug VARCHAR(255) UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  category VARCHAR(50),
  tags TEXT[],
  quality_score INT,
  status VARCHAR(20) DEFAULT 'draft',
  published_at TIMESTAMPTZ
);

CREATE INDEX idx_blog_status ON blog_posts(status);
CREATE INDEX idx_blog_slug ON blog_posts(slug);

-- threads_posts
CREATE TABLE threads_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  analyzed_news_id UUID REFERENCES analyzed_news(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  hook TEXT NOT NULL,
  content TEXT NOT NULL,
  hashtags TEXT[],
  status VARCHAR(20) DEFAULT 'draft',
  posted_at TIMESTAMPTZ,
  post_url TEXT
);

-- product_ideas
CREATE TABLE product_ideas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  source_news_ids UUID[],
  title TEXT NOT NULL,
  one_liner TEXT,
  problem TEXT,
  solution TEXT,
  target_market TEXT,
  market_size VARCHAR(20),
  competition_level VARCHAR(20),
  traffic_score INT,
  product_score INT,
  ai_score INT,
  status VARCHAR(20) DEFAULT 'idea',
  priority VARCHAR(20)
);