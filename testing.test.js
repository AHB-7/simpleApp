import { complexRemoteCall } from "./testing.js";

beforeEach(() => {
    global.fetch = jest.fn((url) =>
        Promise.resolve({
            json: () => Promise.resolve({ mockResponse: true }),
        })
    );
});

describe("complexRemoteCall", () => {
    it("should return an array of responses from three API endpoints", async () => {
        await complexRemoteCall();
        expect(global.fetch).toHaveBeenCalledTimes(3);
    });

    it("should make an API request to each of the API URLs", async () => {
        await complexRemoteCall();
        expect(global.fetch).toHaveBeenNthCalledWith(1, "https://a.api.com");
        expect(global.fetch).toHaveBeenNthCalledWith(2, "https://b.api.com");
        expect(global.fetch).toHaveBeenNthCalledWith(3, "https://c.api.com");
    });
});
