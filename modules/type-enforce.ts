import { HttpProblems, ZuploContext, ZuploRequest } from "@zuplo/runtime";

type MyPolicyOptionsType = {
  type: string
};


export default async function (
  request: ZuploRequest,
  context: ZuploContext,
  options: MyPolicyOptionsType,
  policyName: string
) {
  // your policy code goes here, and can use the options to perform any
  // configuration
  // See the docs: https://www.zuplo.com/docs/policies/custom-code-inbound
  if (request.user.data.type == options.type) {
    return request;
  }

  return HttpProblems.forbidden(request, context, { detail: "This key not valid on this endpoitn " });
}
