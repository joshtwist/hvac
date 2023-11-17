import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (
  request: ZuploRequest,
  context: ZuploContext,
  options: never,
  policyName: string
) {
  const headers = new Headers(request.headers);

  headers.set('account-number', request.user.data.accountNumber);

  const newRequest = new ZuploRequest(request, {
    headers
  });

  return newRequest;
}
