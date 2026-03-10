# EV AI Diagnostic Platform 🚗⚡

**AI-powered electric vehicle diagnostic system — Personal Resume Project**

[![Python](https://img.shields.io/badge/Python-3.10+-blue)](https://python.org)
[![Platform](https://img.shields.io/badge/Platform-Google%20Colab-orange)](https://colab.research.google.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

# Overview

**EV AI Diagnostic Platform** is an end-to-end artificial intelligence system for diagnosing electric vehicle faults.

The project demonstrates skills in:

* Machine Learning
* Natural Language Processing
* Retrieval-Augmented Generation (RAG)
* Backend API development
* Data engineering pipelines
* AI dashboards

The system reads EV manufacturer manuals (PDFs), converts them into embeddings, stores them in a vector database, and allows users to ask questions such as:

> *"Why is my Tesla Model 3 battery overheating during fast charging?"*

The AI then returns answers grounded in official documentation.

---

# Features

| Part | Feature                               | Technology                             |
| ---- | ------------------------------------- | -------------------------------------- |
| 1    | CAN bus simulation                    | Python, struct, NumPy                  |
| 1    | OBD-II DTC reader                     | Python                                 |
| 1    | Battery SOC estimator (EKF)           | NumPy                                  |
| 2    | Automated PDF downloader              | requests, BeautifulSoup, Playwright    |
| 3    | PDF extraction pipeline               | pdfplumber, pypdf, Tesseract           |
| 3    | Text cleaning and semantic chunking   | regex, LangChain                       |
| 4    | Embeddings and vector search          | sentence-transformers, FAISS, ChromaDB |
| 5    | Retrieval-Augmented Generation (RAG)  | LangChain, OpenAI                      |
| 6    | AI diagnostic chatbot                 | Streamlit, ngrok                       |
| 7    | Battery failure prediction (AUC 0.94) | XGBoost                                |
| 7    | Real-time anomaly detection           | Isolation Forest                       |
| 7    | Charging pattern analysis             | PyTorch LSTM Autoencoder               |
| 8    | Fleet analytics dashboard             | Plotly, Streamlit                      |
| 9    | Microservices diagnostic API          | FastAPI, Prometheus                    |

---

# Project Structure

```
EV_AI_Diagnostic_Platform/
│
├── notebooks/
│   └── EV_AI_Diagnostic_Platform.ipynb
│
├── src/
│   ├── can_bus/
│   │   └── simulator.py
│   ├── obd/
│   │   └── dtc_reader.py
│   ├── battery/
│   │   └── ekf_soc.py
│   ├── data_collection/
│   │   └── pdf_downloader.py
│   ├── document_processing/
│   │   └── pipeline.py
│   ├── embeddings/
│   │   └── vector_store.py
│   ├── rag/
│   │   └── pipeline.py
│   ├── ml/
│   │   └── models.py
│   ├── api/
│   │   └── main.py
│   └── dashboard/
│       ├── chatbot_app.py
│       └── fleet_dashboard.py
│
├── requirements.txt
├── .env.example
├── .gitignore
└── README.md
```

---

# How to Run (Google Colab)

1️⃣ Open Google Colab

```
https://colab.research.google.com
```

2️⃣ Upload the notebook

```
notebooks/EV_AI_Diagnostic_Platform.ipynb
```

3️⃣ Run the following cells

```
Cell 0 — Mount Google Drive
Cell 1 — Install libraries
```

4️⃣ Run all remaining cells in order.

All models, embeddings, and vector databases are stored in Google Drive so they persist across sessions.

---

# Every New Session

When restarting Colab, run these two cells first:

```
Cell 0 — Mount Drive
Cell 1 — Install libraries
```

Then continue your workflow.

---

# Example EV Manuals

You can upload the following public EV manuals for testing:

| Manual                   | URL                                                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| NREL EV Battery Health   | https://www.nrel.gov/docs/fy19osti/73714.pdf                                                                       |
| US DOE EV Battery Basics | https://afdc.energy.gov/files/u/publication/ev_batteries.pdf                                                       |
| IEA Global EV Outlook    | https://iea.blob.core.windows.net/assets/dacf14d2-eabc-498a-8263-9f97fd5dc327/GlobalEVOutlook2023.pdf              |
| Tesla Model 3 Manual     | https://www.tesla.com/sites/default/files/model_3_owners_manual_north_america_en.pdf                               |
| Hyundai IONIQ Electric   | https://www.hyundaiusa.com/content/dam/hyundai/us/myhyundai/Owner%20Manual/2020/2020-Hyundai-Ioniq-Electric-OM.pdf |

---

# API Endpoints

When the FastAPI server is running:

```
GET  /health
GET  /api/v2/fleet/summary
POST /api/v2/diagnose
GET  /api/v2/dtc/{code}
GET  /docs
GET  /metrics
```

Example request:

```
curl -X POST https://your-ngrok-url.ngrok.io/api/v2/diagnose \
-H "Content-Type: application/json" \
-d '{"vehicle_id":"EV-001","dtc_codes":["P0A0F","P0C6B"],"battery_temp":53}'
```

---

# Configuration

Copy the environment template:

```
.env.example → .env
```

Then add your keys:

```
OPENAI_API_KEY=sk-...
NGROK_AUTH_TOKEN=...
```

In Google Colab you can store these using the **Secrets panel**.

---

# Tech Stack

**Language**

* Python 3.10

**AI / ML**

* LangChain
* sentence-transformers
* FAISS
* ChromaDB
* XGBoost
* Isolation Forest
* PyTorch

**Backend**

* FastAPI
* Pydantic
* Prometheus

**Frontend**

* Streamlit
* Plotly

**Deployment**

* Google Colab
* ngrok

---

# Resume Highlights

This project demonstrates the ability to:

• Build a Retrieval-Augmented Generation (RAG) AI system using LangChain and ChromaDB
• Train an XGBoost battery failure prediction model with ROC-AUC of **0.94**
• Implement anomaly detection using Isolation Forest
• Deploy an AI chatbot and analytics dashboard using Streamlit
• Design production-style REST APIs using FastAPI
• Build a full document processing pipeline for AI search systems

---

# License

MIT License — Free to use and modify.

---

# Author

Prasanna Kumar
GitHub: https://github.com/prasannakumar9i

---

Built entirely using **Google Colab free tier** — no paid cloud services required.
