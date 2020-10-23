import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.res = {
        body: 'ME50GVTGFHBTP6BB31BV7L59D5'
    };
};

export default httpTrigger;
