from fastapi import FastAPI
from fastapi.responses import PlainTextResponse

from cc import api as cc

app = FastAPI()

app.mount("/cc", cc)


@app.get("/", status_code=200, response_class=PlainTextResponse)
def root():
    return "CWiCS Assessment"


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", workers=1, port=8080)
