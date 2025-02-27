import BodyFormData, {
  BodyFormDataRestClient
} from "./generated/bodyFormDataRest/src";
import { assert } from "chai";

describe("Integration tests for BodyFormData", () => {
  let client: BodyFormDataRestClient;

  it("should correctly accept file via form", async function() {
    client = BodyFormData({ allowInsecureConnection: true });

    const fileName: string = `sample.png`;
    const content = new Uint8Array([
      72,
      101,
      108,
      108,
      111,
      32,
      87,
      111,
      114,
      108,
      100
    ]);

    const result = await client.path("/formdata/stream/uploadfile").post({
      contentType: "multipart/form-data",
      body: { fileContent: content, fileName },
      binaryResponse: true
    });

    assert.equal(result.status, "200");

    if (result.status !== "200") {
      const error = `Unexpected error ${result.status}`;
      assert.fail(error);
      throw error;
    }

    assert.deepInclude(result.body, content);
  });

  it("should correctly accept file via body", async () => {
    client = BodyFormData({ allowInsecureConnection: true });
    const content = Buffer.from(
      new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100])
    );
    const response = await client.path("/formdata/stream/uploadfile").put({
      body: content,
      binaryResponse: true,
      contentType: "application/octet-stream"
    });

    if (response.status !== "200") {
      const error = `Unexpected error ${response.status}`;
      assert.fail(error);
      throw error;
    }

    assert.equal(response.status, "200");
    assert.deepInclude(response.body, content);
  });
});
