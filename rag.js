/**
 * Implementation plan
 * Stage 1: Indexing
 * 1. Load the document - pdf, text
 * 2. Chunk the document
 * 3. Generate Vector Embeddings
 * 4. Store the vector embeddings - vector database
 *
 * Stage 2 Using the chatbot
 * 1. setup LLM
 * 2. Add retrieval step
 * 3. Pass input + retrieval information to LLM
 * 4. Congratulations
 */

import { indexTheDocument } from "./prepare";
indexTheDocument("./cg-internal-docs.pdf");
