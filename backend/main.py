from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import logging
import asyncio
import sys

app = FastAPI()

# allow_origins = [

# ]

app.add_middleware(
	CORSMiddleware,
	allow_origins=["*"],
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)

if __name__ == "__main__":
	try:
		logging.info("Starting server")
		uvicorn.run("main:app", reload=True)
	except Exception as exc:
		logging.error(f"Server error: {exc}")
		sys.exit()