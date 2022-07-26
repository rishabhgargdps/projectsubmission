from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import PlainTextResponse

api = FastAPI()


@api.get("/", response_class=PlainTextResponse, status_code=200)
def message():
    return "POST to this endpoint with JSON to convert to YAML"


@api.post("/")
async def jsonToYaml(info: Request):
    try:
        req_info = await info.json()
        return {
            "data" : req_info
        }
    except Exception as e:
        raise HTTPException(
            status_code=400, detail={"message": "Error parsing JSON", "detail": str(e)}
        )
