# Agentic AI Assistant 🧠

Production-ready AI assistant with persistent memory, multimodal support, chat history, and agentic reasoning.

## 🎯 Architecture Diagram

```mermaid
graph TB
    User[User Frontend React] -->|API Calls| Backend[Node.js Fastify API]
    Backend -->|Auth/DB/Storage| Supabase[(Supabase<br/>Postgres + pgvector<br/>Auth + Storage)]
    Backend -->|LLM/Embed/Vision/DALLE| OpenAI[OpenAI API]
    
    subgraph Backend
        Chat[/chat] --> Agent[LangChain Agent]
        Agent --> Tool1[Memory Retrieve]
        Agent --> Tool2[File Read]
        Agent --> Tool3[Image Gen]
        Memory[(Embeddings<br/>RAG Retrieval)]
        Files[(File Storage<br/>Parsed Text)]
    end
    
    subgraph Frontend
        ChatUI[Chat Interface<br/>File Upload]
        History[History Sidebar]
        Resume[Resume Modal]
    end
    
    Supabase -->|Vectors| Memory
    Supabase -->|Blobs| Files
```

## 🚀 Quick Start

1. **Supabase Setup** (Required):
   - Create free project at [supabase.com](https://supabase.com)
   - Enable `pgvector` extension: Dashboard > Database > Extensions
   - Run schema: SQL Editor > paste `supabase/migrations/0001_initial_schema.sql`
   - Get `SUPABASE_URL` and `SUPABASE_ANON_KEY`

2. **Environment**:
   ```
   cp .env.example .env
   # Edit .env with your keys
   ```

3. **Ollama Setup**:
   - Install Ollama from https://ollama.com/
   - Pull the local model: `npm run ollama:pull` (from `backend`)
   - Start Ollama locally: `npm run dev:ollama` (from repo root)
   - If Ollama is already running on `http://localhost:11434`, the startup command will continue.

4. **Install & Run**:
   ```bash
   npm install
   npm run dev
   ```

   This starts:
   - Ollama local server at `http://localhost:11434`
   - Backend API at `http://localhost:3001`
   - Frontend at `http://localhost:3000`

4. **Test Flow**:
   - Authenticate
   - See resume modal if prev chat
   - Chat, upload file, generate image
   - Check history sidebar

## Tech Stack
- **Backend**: Node.js, TypeScript, Fastify, Supabase-js, LangChain.js, OpenAI
- **Frontend**: React, Vite, Tailwind, Supabase-auth-ui
- **DB**: Supabase Postgres + pgvector
- **AI**: GPT-4o (agent/vision), text-embedding-3-small, DALL-E-3

## Features Implemented
- ✅ Persistent memory (episodic + semantic)
- ✅ Chat history (list/load/delete)
- ✅ Resume conversation prompt
- ✅ Multimodal file upload (PDF/DOCX/PPTX/TXT/IMG)
- ✅ Image generation
- ✅ Agentic reasoning w/ tools
- ✅ RAG retrieval from past context

## API Endpoints
- `POST /chat` - Send message (auto memory + agent)
- `GET /history` - List chats
- `GET /history/:id` - Load chat
- `DELETE /history/:id` - Delete
- `POST /upload` - File upload + parse
- `POST /generate-image` - DALL-E

## TODO Progress
See `TODO.md`

