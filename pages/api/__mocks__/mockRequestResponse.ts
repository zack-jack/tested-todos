import type { NextApiRequest, NextApiResponse } from "next";
import {
  Body,
  createRequest,
  createResponse,
  Query,
  RequestMethod,
} from "node-mocks-http";

export interface MockNextApiResponse extends NextApiResponse {
  _getJSONData: () => Promise<any>;
}

export const mockRequestResponse = ({
  method = "GET",
  body,
  query,
}: {
  method: RequestMethod;
  body?: Body | undefined;
  query?: Query | undefined;
}) => {
  const req: NextApiRequest = createRequest({
    method,
    body,
    query,
  });
  const res: MockNextApiResponse = createResponse();

  return { req, res };
};
